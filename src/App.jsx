import React from "react";
import { Header, Footer } from "./components";
import { Homepage } from "./components/Homepage/Homepage";
import { MyExpertise } from "./components/MyExpertise/MyExpertise";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { MyPortfolio } from "./components/MyPortfolio/MyPortfolio";
import { ContactMe } from "./components/ContactMe/ContactMe";
import FadeInSection from "./components/FadeIn/FadeInSection";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <FadeInSection>
          <Homepage />
        </FadeInSection>
        <FadeInSection>
          <MyExpertise />
        </FadeInSection>
        <FadeInSection>
          <AboutMe />
        </FadeInSection>
        <FadeInSection>
          <MyPortfolio />
        </FadeInSection>
        <FadeInSection>
          <ContactMe />
        </FadeInSection>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
