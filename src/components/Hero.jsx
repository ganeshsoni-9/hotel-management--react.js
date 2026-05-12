import video from "../assets/videos/hotelvideo.mp4";

const Hero = () => {
  return (
    <section className="hero">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="hero-content">
        <h1>
          INDIA'S PRIDE,
          WORLD'S STRONGEST
        </h1>

        <p>
          Taj has yet again been recognised
          as World’s Strongest Hotel Brand.
        </p>
      </div>

    </section>
  );
};

export default Hero;