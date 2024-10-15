import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Whoweare from "./components/Whoweare";
import Whatweoffer from "./components/Whatweoffer";
import FounddersFriday from "./components/FounddersFriday";
import Sponsour from "./components/Sponsour";
const App = () => {
  return (
    <div className="font-montserrat">
      <Header />
      <main>
        <Hero />
        <Whoweare />
        <Whatweoffer />
        <FounddersFriday />
        <Sponsour />
      </main>
      <Footer />
    </div>
  );
};

export default App;
