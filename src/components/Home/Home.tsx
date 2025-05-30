import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <img
        className="lodestone-logo"
        src="/images/lodestone-fractal.jpg"
        alt="Lodestone Fractal"
      />
      
      <header className="hero">
        <h1>Lodestone</h1>
        <p className="tagline">The Lodestone project is an ongoing exploration of dimensional perception.</p>
      </header>

      <section className="social-links">
        <a
          rel="noreferrer"
          target="_blank"
          title="Follow me on Facebook"
          href="https://www.facebook.com/djLodestone"
        >
          <img alt="Facebook" src="/fb-icon.png" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          title="Follow me on SoundCloud"
          href="https://soundcloud.com/djlodestone"
        >
          <img alt="SoundCloud" src="/soundcloud-icon.png" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          title="Follow me on Flickr"
          href="https://www.flickr.com/photos/jzf_k"
        >
          <img alt="Flickr" src="/flickr-icon.png" />
        </a>
        <a
          rel="noreferrer"
          title="Email me"
          href="mailto:lodestonetx@yahoo.com"
        >
          <img alt="Email" src="/email-icon.png" />
        </a>
      </section>
    </div>
  );
};

export default Home;
