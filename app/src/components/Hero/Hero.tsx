import img from '../../assets/heroImg.png'
const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex items-center justify-start px-4 py-10">
      <div className="w-full text-left max-w-3xl ml-35">
      <h1 className="text-3xl md:text-6xl font-extrabold drop-shadow mb-4">
        Welcome
      </h1>
      <h1 className="text-3xl md:text-6xl font-extrabold drop-shadow mb-4">
        to My Portfolio
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 mb-6 italic">
        Discover my projects, skills, and experience.
      </p>
      </div>
<div>
  <img src={img} alt="Hero" className="max-w-xs w-full h-auto rounded shadow-lg" />
</div>
    </section>
  );
};

export default Hero;
