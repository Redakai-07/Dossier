import img from '../../assets/heroImg.png'
import DecryptedText from '../Decrypted Text/Decrypt';
import SplitText from "../Split Text/SplitText";

const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] text-white flex flex-col md:flex-row items-center justify-center px-4 py-10">
      {/* Message Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left max-w-3xl md:ml-12 mb-8 md:mb-0">
        <SplitText
          text="Welcome"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow mb-4"
          delay={50}
          duration={0.3}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <SplitText
          text="to My Portfolio"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow mb-4"
          delay={300}
          duration={0.3}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <div className="text-base sm:text-lg md:text-2xl text-gray-300 mb-6 italic">
          <DecryptedText
            text="Discover my projects, skills, and experience."
            animateOn="view"
            revealDirection="center"
          />
        </div>
      </div>
      {/* Image Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={img}
          alt="Hero"
          className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto rounded shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;