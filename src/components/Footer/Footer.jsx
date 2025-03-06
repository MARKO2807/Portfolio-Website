import "./Footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <div className="footer-1">
          <img src="./logo.png" alt="" className="footer-logo" />
          <p className="footer-title"> &lt;MarkoBare/&gt;</p>
        </div>
        <div className="footer-2">
          <nav>
            <a href="#home">Home</a>
            <a href="#about-me">About Me</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact-form">Contact</a>
          </nav>
        </div>

        <nav className="footer-3">
          <a
            href="https://www.linkedin.com/in/marko-bare-332255308/"
            target="_blank"
            rel="noopener noreferrer">
            <img src="./linkedin.png" alt="linked in link" />
          </a>
          <a
            href="https://github.com/MARKO2807"
            target="_blank"
            rel="noopener noreferrer">
            <img src="./github.png" alt="github link" />
          </a>
          <a
            href="https://www.instagram.com/marko_bare/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="instagram"
              src="./instagram.png"
              alt="instragram link"
            />
          </a>
        </nav>
      </div>
      <hr />
      <div className="made-by">
        <small>
          Developed by <strong> Marko Bare</strong>
        </small>
        <img src="./programmer.gif" alt="programmer gif" className="gif" />
      </div>
    </footer>
  );
};
