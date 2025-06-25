import img from '../../assets/heroImg.png';
import DecryptedText from '../Decrypted Text/Decrypt';
import SplitText from '../Split Text/SplitText';

const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-gray-950 text-white flex flex-col-reverse md:flex-row items-center justify-around px-10 py-16 md:py-24">
      {/* Left Message Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start max-w-2xl mx-auto md:mx-0 text-left">
        <SplitText
          text="Welcome"
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 tracking-tight"
          delay={50}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
        <SplitText
          text="to My Portfolio"
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-orange-400"
          delay={300}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />

        <div className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed">
          <DecryptedText
            text="Discover my projects, skills, and experience."
            animateOn="view"
            revealDirection="center"
          />
        </div>

        <a
          href="/resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-medium rounded-lg shadow transition duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Right Image Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-12 md:mb-0">
        <img
          src={img}
          alt="Hero"
          className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto rounded-2xl shadow-lg border border-gray-800"
        />
      </div>
    </section>
  );
};

export default Hero;
