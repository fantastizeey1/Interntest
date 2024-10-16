import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Whoweare from "./components/Whoweare";
import Whatweoffer from "./components/Whatweoffer";
import FounddersFriday from "./components/FounddersFriday";
import Sponsour from "./components/Sponsour";
import Kaduna from "./components/Kaduna";
import Register from "./components/Register";
import Vid from "./components/Vid";
import Attendees from "./components/Attendees";
import Faq from "./components/Faq";
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
        <Kaduna />
        <Register />
        <Vid />
        <Attendees />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;
