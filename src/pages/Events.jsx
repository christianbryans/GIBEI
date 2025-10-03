import { useState } from 'react';
import bg1 from '../assets/bg.png';
import f101 from '../assets/F101.png';
import f102 from '../assets/F102.png';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.png';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Break Into Finance',
      description: 'Break the Limits, Step Into Finance bersama para pakar industri keuangan. Dapatkan 6 poin TAK, E-Certificate, dan free snacks!',
      date: 'Friday, June 13, 2025',
      location: 'Telkom University',
      image: f102,
      category: ['past', 'seminar'],
      status: 'past',
    },
    {
      id: 2,
      title: 'Finance 101: Equity Research & Valuation Series',
      description: 'Join a 2-day intensive session with Muhammad Rizqy Al Farisi, FMVA – Investment Banking at Danareksa. Learn the fundamentals of equity research, financial modeling, and valuation.',
      date: 'Saturday, May 3, 2025',
      location: 'FEB Building',
      image: f101,
      category: ['past', 'workshop'],
      status: 'past',
    },
    {
      id: 3,
      title: 'Investment Portfolio Management Workshop',
      description: 'A comprehensive workshop on building and managing investment portfolios, featuring industry experts and hands-on activities.',
      date: 'March 15, 2024',
      location: 'GIBEI Gallery',
      image: bg2,
      category: ['past', 'workshop'],
      status: 'past',
    },
    {
      id: 4,
      title: 'Capital Market Analysis & Trends',
      description: 'An insightful seminar discussing current market trends, analysis techniques, and future outlook for Indonesian capital markets.',
      date: 'February 20, 2024',
      location: 'Main Auditorium',
      image: bg3,
      category: ['past', 'seminar'],
      status: 'past',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'seminar', label: 'Seminars' },
    { id: 'past', label: 'Past Events' },
  ];

  const filteredEvents = events.filter((event) => {
    if (activeFilter === 'all') return true;
    return event.category.includes(activeFilter);
  });

  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="font-gilroy text-4xl md:text-5xl lg:text-6xl mb-6">Our Events</h1>
          <p className="text-lg md:text-xl opacity-90">
            Discover workshops, seminars, and networking opportunities designed to enhance your
            financial knowledge and career prospects in the capital market industry.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white border-2 border-primary'
                    : 'bg-white text-gray-600 border-2 border-gray-300 hover:border-primary hover:text-primary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    event.status === 'upcoming'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-500 text-white'
                  }`}>
                    {event.status === 'upcoming' ? 'Upcoming' : 'Past Event'}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                    </svg>
                    {event.date}
                  </div>

                  <h3 className="font-gilroy text-xl mb-3 leading-tight">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {event.location}
                    </div>
                    <button
                      disabled={event.status === 'past'}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 ${
                        event.status === 'past'
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-primary text-white hover:bg-primary-dark'
                      }`}
                    >
                      {event.status === 'past' ? 'Ended' : 'Register'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No events found for this filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
