// Sample events data
const events = [
    {
        title: "Workshop Web Development",
        date: "2024-03-15",
        location: "Lab Komputer Telkom University",
        description: "Workshop pengembangan web menggunakan HTML, CSS, dan JavaScript."
    },
    {
        title: "Seminar AI & Machine Learning",
        date: "2024-03-20",
        location: "Auditorium Telkom University",
        description: "Seminar tentang perkembangan terkini dalam bidang AI dan Machine Learning."
    },
    {
        title: "Hackathon 2024",
        date: "2024-04-01",
        location: "Digital Lounge Telkom University",
        description: "Kompetisi coding 24 jam untuk mahasiswa Telkom University."
    }
];

// Function to create event card
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">${event.title}</h5>
                <p class="card-text">
                    <i class="fas fa-calendar"></i> ${event.date}<br>
                    <i class="fas fa-map-marker-alt"></i> ${event.location}
                </p>
                <p class="card-text">${event.description}</p>
            </div>
        </div>
    `;
    return card;
}

// Load and display events when page loads
document.addEventListener('DOMContentLoaded', () => {
    const eventsContainer = document.getElementById('eventsContainer');
    
    if (events.length === 0) {
        eventsContainer.innerHTML = '<p class="text-center">No events available at the moment.</p>';
        return;
    }
    
    events.forEach(event => {
        const card = createEventCard(event);
        eventsContainer.appendChild(card);
    });
}); 