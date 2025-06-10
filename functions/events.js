const { createClient } = require('@netlify/functions');

// Initialize Netlify client
const netlify = createClient({
  token: process.env.NETLIFY_TOKEN
});

exports.handler = async function(event, context) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Get the KV store
    const kv = await netlify.kv.get('events') || [];

    switch (event.httpMethod) {
      case 'GET':
        // Get all events
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(kv)
        };

      case 'POST':
        // Add new event
        const newEvent = JSON.parse(event.body);
        newEvent.id = kv.length + 1;
        kv.push(newEvent);
        await netlify.kv.set('events', kv);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(newEvent)
        };

      case 'PUT':
        // Update event
        const updatedEvent = JSON.parse(event.body);
        const index = kv.findIndex(e => e.id === updatedEvent.id);
        if (index !== -1) {
          kv[index] = updatedEvent;
          await netlify.kv.set('events', kv);
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify(updatedEvent)
          };
        }
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Event not found' })
        };

      case 'DELETE':
        // Delete event
        const eventId = parseInt(event.queryStringParameters.id);
        const filteredEvents = kv.filter(e => e.id !== eventId);
        await netlify.kv.set('events', filteredEvents);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ message: 'Event deleted successfully' })
        };

      default:
        return {
          statusCode: 405,
          headers,
          body: JSON.stringify({ error: 'Method not allowed' })
        };
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
}; 