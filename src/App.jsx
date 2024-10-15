import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Whoweare from "./components/Whoweare";
import Whatweoffer from "./components/Whatweoffer";
const App = () => {
  return (
    <div className="font-montserrat">
      <Header />
      <main>
        <Hero />
        <Whoweare />
        <Whatweoffer />
      </main>
      <Footer />
    </div>
  );
};

export default App;
