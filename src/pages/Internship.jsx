import bg1 from '../assets/bg.png';

const Internship = () => {
  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="font-gilroy text-4xl md:text-5xl lg:text-6xl mb-6">Internship Program</h1>
          <p className="text-lg md:text-xl opacity-90">
            Gain practical experience and kickstart your career in the financial industry with GIBEI.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-gilroy text-3xl md:text-4xl text-primary mb-6">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our internship program page is under development. Check back soon for information about
              opportunities, requirements, and application procedures.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship;
