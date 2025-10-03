import bg1 from '../assets/bg.png';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.png';

import depTreasurer from '../assets/icon/Deputy Treasurer.svg';
import depAdmin from '../assets/icon/Deputy Administration.svg';
import depHCSP from '../assets/icon/Deputy HCSP.svg';
import pubRel from '../assets/icon/Public Relation.svg';
import eventAffairs from '../assets/icon/Event Affairs.svg';
import digitalMedia from '../assets/icon/Digital Media Creative.svg';
import equityAnalyst from '../assets/icon/Equity Analyst.svg';
import researchEd from '../assets/icon/Research & Analyst.svg';

const About = () => {
  const divisions = [
    {
      icon: depTreasurer,
      title: 'Deputy Treasurer',
      description: 'Handles financial planning and budgeting to ensure smooth operations.',
    },
    {
      icon: depAdmin,
      title: 'Deputy Administration',
      description: 'Oversees internal organizational processes and documentation.',
    },
    {
      icon: depHCSP,
      title: 'Deputy HCSP',
      description: 'Focuses on human resource development and strategic planning.',
    },
    {
      icon: pubRel,
      title: 'Public Relation',
      description: 'Builds communication strategies and partnerships with external stakeholders.',
    },
    {
      icon: eventAffairs,
      title: 'Event Affairs',
      description: 'Organizes seminars, workshops, and other educational capital market events.',
    },
    {
      icon: digitalMedia,
      title: 'Digital Media Creative',
      description: 'Manages visual design and creates digital content to increase awareness.',
    },
    {
      icon: equityAnalyst,
      title: 'Equity Analyst',
      description: 'Conducts analysis on market trends, stocks, and economic data.',
    },
    {
      icon: researchEd,
      title: 'Research & Education',
      description: 'Supports internal research and develops insights to guide our initiatives.',
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="font-gilroy text-4xl md:text-5xl lg:text-6xl mb-6">About GIBEI</h1>
          <p className="text-lg md:text-xl opacity-90">
            Learn about our journey, mission, and vision in shaping the future of investment
            education at Telkom University.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="flex-1 grid grid-cols-3 gap-6">
              <img src={bg1} alt="About 1" className="rounded-xl shadow-lg" />
              <img src={bg2} alt="About 2" className="rounded-xl shadow-lg scale-110 z-10" />
              <img src={bg3} alt="About 3" className="rounded-xl shadow-lg" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <p className="text-gray-500 mb-2">Our Journey So Far</p>
            <h2 className="font-gilroy text-3xl md:text-4xl text-primary mb-8">
              Galeri Investasi Bursa Efek Indonesia<br />Telkom University
            </h2>

            <h3 className="font-gilroy text-2xl mb-4">Founded and Evolving</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Established in 2014, the Indonesia Stock Exchange Investment Gallery (GIBEI) at Telkom
              University began as an initiative by the Faculty of Economics and Business to provide
              practical access for the academic community, including students, alumni, faculty, and
              staff, to engage directly with the capital market. Over the years, GIBEI Tel-U has
              matured into a thriving investment hub, facilitating real transactions with a
              cumulative volume reaching billions of rupiah.
            </p>

            <h3 className="font-gilroy text-2xl mb-4">Relaunch and Strategic Partnership</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              In November 2017, GIBEI Tel-U was revitalized through a strategic relaunch in
              partnership with MNC Sekuritas. This collaboration marked a pivotal step in
              accelerating the development of capital market education on campus, enhancing both the
              quality of learning and hands-on investment opportunities for students.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-500 mb-2">Let's Know</p>
            <h2 className="font-gilroy text-3xl md:text-4xl text-primary">Our Divisions</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {divisions.map((division, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <img
                    src={division.icon}
                    alt={division.title}
                    className="w-full h-full object-contain transition-all duration-300 group-hover:brightness-0 group-hover:saturate-100 group-hover:invert-[11%] group-hover:sepia-100"
                    style={{
                      filter: 'none'
                    }}
                  />
                </div>
                <h3 className="font-gilroy text-lg mb-3">{division.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{division.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
