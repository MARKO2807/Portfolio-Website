import "./MyPortfolio.css";

export const MyPortfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-title">
        <h2 className="portfolio-heading">My Portfolio</h2>

        <a
          href="https://github.com/MARKO2807"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-git button-link">
          <img className="github" src="./github.png" alt="GitHub logo" />
          Visit my GitHub
        </a>
      </div>
      <div className="portfolio-slider">
        <article className="slide">
          <a
            href="https://markobare-weatherapp.netlify.app/"
            target="_blank"
            className="portfolio-item">
            <img
              className="project-img"
              src="./weather.png"
              alt="Weather app logo"
            />
            <h3>Weather app</h3>
          </a>
          <p>Check the weather instantly with just a few clicks.</p>
        </article>
        <article className="slide bmi-slide">
          <a
            href="https://markobare-bmicalculator.netlify.app/"
            target="_blank"
            className="portfolio-item">
            <img
              className="project-img bmi-image"
              src="./BMI-Icon.png"
              alt="BMI app logo"
            />
            <h3>Body Mass Index calculator</h3>
          </a>
          <p>Instant BMI results for better health.</p>
        </article>
        <article className="slide">
          <a
            href="https://markobare-tictactoe.netlify.app/"
            target="_blank"
            className="portfolio-item">
            <img
              className="project-img todo-img"
              src="./tictactoe.png"
              alt="TicTacToe app logo"
            />
            <h3>Tic-Tac-Toe Game</h3>
          </a>
          <p>
            A simple yet engaging Tic-Tac-Toe game to test your strategy skills.
          </p>
        </article>
      </div>
    </section>
  );
};
