import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-gilroy text-xl mb-4">GIBEI TEL-U</h3>
            <p className="text-gray-400 mb-2">Lt 1 FEB, Gedung Miossu FEB</p>
            <p className="text-gray-400 mb-2">11.00-15.00 WIB</p>
            <p className="text-gray-400">CP Line: @559eietg</p>
          </div>

          <div>
            <h3 className="text-white font-gilroy text-xl mb-4">Media</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/gibeitelkomuniversity/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A104842946&keywords=galeri%20investasi%20bei%20telkom%20university&origin=RICH_QUERY_SUGGESTION&position=0&searchId=fea1908a-0408-4d5b-9c0a-3425eb683da9&sid=HR.&spellCorrectionEnabled=false"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-gilroy text-xl mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">&copy; 2025 GIBEI TELKOM UNIVERSITY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
