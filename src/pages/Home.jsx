import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bg1 from '../assets/bg.png';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.png';
import mncLogo from '../assets/mnc.png';
import idxLogo from '../assets/idx.png';
import gLogo from '../assets/glogo.png';
import aboutUs from '../assets/aboutus.png';

const Home = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [typedText, setTypedText] = useState('');
  const backgrounds = [bg1, bg2, bg3];
  const fullText = 'Galeri Investasi Bursa Efek Indonesia Telkom University';

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(bgInterval);
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        setTimeout(() => {
          setTypedText('');
          index = 0;
        }, 2000);
      }
    }, 30);
    return () => clearInterval(typingInterval);
  }, []);

  const scrollToIntro = () => {
    document.getElementById('intro').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentBg === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="font-gilroy text-4xl md:text-5xl lg:text-6xl mb-6 min-h-[100px] flex items-center justify-center">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-12">
            Empowering Youngvestor Strengthening Our Future!
          </p>

          <div className="mb-12">
            <p className="text-base md:text-lg mb-6 opacity-90">Official Partner</p>
            <div className="flex justify-center items-center gap-10">
              <img src={mncLogo} alt="MNC Sekuritas" className="h-16 md:h-20" />
              <img src={idxLogo} alt="IDX" className="h-16 md:h-20" />
            </div>
          </div>

          <button
            onClick={scrollToIntro}
            className="px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-all duration-300 animate-bounce"
          >
            Explore Our Community
          </button>
        </div>
      </section>

      <section id="intro" className="py-16 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-gilroy text-4xl md:text-5xl text-primary mb-6">
            GIBEI Telkom University
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Welcome to the Telkom University Investment Gallery! We analyze the Indonesian Capital Market,
            offering insights, research, and events. Join us to become skilled investors and traders.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="font-gilroy text-3xl md:text-4xl mb-6">Vision</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To build a high-value organization to provide education and cultivating community
                who can create significant impact within the industry
              </p>

              <h2 className="font-gilroy text-3xl md:text-4xl mb-6">Mission</h2>
              <ul className="space-y-4">
                {[
                  'Provide an experience to upgrade a hard and soft skill set to thrive in the industry',
                  'Provide quality networks and opportunities with professional within the industry',
                  'Provide an experience to upgrade a hard skill set to enter the industry'
                ].map((mission, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <span className="text-gray-600 text-base">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <img src={gLogo} alt="GIBEI Logo" className="w-64 h-auto opacity-90" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <img src={aboutUs} alt="About GIBEI" className="rounded-xl shadow-md" />
            </div>
            <div className="flex-1">
              <h2 className="font-gilroy text-3xl md:text-4xl mb-6">
                Galeri Investasi Bursa Efek Indonesia Telkom University
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Serves as a platform to introduce the Capital Market and explore career aspirations
                in the Financial Industry at an early stage to the Telkom University academic community.
              </p>
              <Link
                to="/about"
                className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors duration-300"
              >
                GIBEI TEL-U
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
