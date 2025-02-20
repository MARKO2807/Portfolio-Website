import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <img
        className=" image2"
        src="/imageone.png"
        alt="Profile picture or descriptive image"
      />
      <aside className="about-me-aside">
        <h2 className="about-me-title">About Me</h2>
        <p>
          Hi there! I’m Marko Bare, a kinesiologist who discovered passion for
          web development. I love combining creativity with problem-solving to
          design solutions that not only look great but are also easy to use.
          For me, building user-friendly interfaces is all about making
          technology feel welcoming and accessible.
        </p>

        <p>
          Outside of coding, I’m passionate about games like chess and love
          exploring new technologies to keep my skills sharp. These hobbies
          inspire me to tackle challenges with fresh perspectives and a playful
          mindset. I’m eager to bring my enthusiasm and determination to a team
          focused on creating meaningful digital experiences.
        </p>
      </aside>
    </section>
  );
};
