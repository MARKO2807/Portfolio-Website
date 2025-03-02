import React, { useEffect, useState } from "react";
import "./Header.css";

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setIsSticky(true);
      } else if (currentScrollY >= lastScrollY || currentScrollY <= 0) {
        setIsSticky(false);
      }
      setLastScrollY(currentScrollY);
      // console.log(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`header ${isSticky ? "sticky-nav sticky-nav-active" : ""}`}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}>
          <div className="main-logo">
            <img src="/logo.png" alt="Computer icon" className="logo" />
            <p className="title"> &lt;MarkoBare/&gt;</p>
          </div>
        </a>

        <button
          className="hamburger"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </button>

        <div
          className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
          aria-hidden={!isMenuOpen}>
          <nav aria-label="Mobile navigation">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#about-me" onClick={() => setIsMenuOpen(false)}>
              About Me
            </a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </a>
            <a
              href="#contact-form"
              className="button-link contact-button"
              onClick={() => setIsMenuOpen(false)}>
              Contact Me
            </a>
          </nav>
        </div>

        <div className="desktop-navigation">
          <nav aria-label="Desktop navigation">
            <a href="#home">Home</a>
            <a href="#about-me">About Me</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact-form" tabIndex="-1">
              <button className="button-link contact-button">Contact Me</button>
            </a>
          </nav>
        </div>
      </header>

      {isSticky && <div className="sticky-nav-spacer"></div>}
    </>
  );
};
