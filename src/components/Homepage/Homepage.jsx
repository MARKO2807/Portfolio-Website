import "./Homepage.css";

export const Homepage = () => {
  return (
    <section className="homepage">
      <div id="home" className="intro">
        <h1>
          I develop <strong>modern websites</strong> <br />
          and bring <em>creative ideas to life online</em>.
        </h1>

        <p className="description">
          The essence of web development is creating responsive, accessible, and
          visually captivating web applications. I focus on writing clean,
          efficient code and utilizing modern technologies to deliver flawless
          user experiences.
        </p>
        <a href="#contact-form" className="button-link btn-homepage">
          Get in touch
        </a>
      </div>

      <img
        className="image1"
        src="/markobare.png"
        alt="Personal photograph"
        loading="lazy"
      />
    </section>
  );
};
