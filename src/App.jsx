import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Whoweare from "./components/Whoweare";
const App = () => {
  return (
    <div className="font-montserrat">
      <Header />
      <main>
        <Hero />
        <Whoweare />
      </main>
      <Footer />
    </div>
  );
};

export default App;
