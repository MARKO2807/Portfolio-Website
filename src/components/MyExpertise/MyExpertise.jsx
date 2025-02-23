import "./MyExpertise.css";

export const MyExpertise = () => {
  return (
    <section className="expertise">
      <h2 className="expertise-title">My Expertise</h2>
      <div className="skills">
        <div className="skills-div">
          <div className="icon-heading">
            <img src="/html.png" alt="HTML logo" />
            <h3>HTML</h3>
          </div>
          <p>
            Building the structure of web pages with clean, semantic markup.
          </p>
        </div>
        <div className="skills-div">
          <div className="icon-heading">
            <img className="css-img" src="/css.png" alt="CSS logo" />
            <h3>CSS</h3>
          </div>
          <p>
            Styling websites with creativity, precision, and responsiveness.
          </p>
        </div>
        <div className="skills-div">
          <div className="icon-heading">
            <img src="/js.png" alt="JavaScript logo" className="js-logo" />
            <h3>JavaScript</h3>
          </div>
          <p>Bringing interactivity to life with dynamic scripting.</p>
        </div>
        <div className="skills-div">
          <div className="icon-heading">
            <img src="/react.png" alt="React logo" />
            <h3>React</h3>
          </div>
          <p>
            Developing modern user interfaces with React’s simple and efficient
            tools.
          </p>
        </div>
      </div>
    </section>
  );
};
