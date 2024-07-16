import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import swiper css
import "swiper/css";

import React, { useState, useEffect } from "react";

import Banner from "./Pages/Banner";
import Header from "./Pages/Header";
import Main from "./Pages/Main";
import Footer from "./Pages/Footer";
import BackToTopBtn from "./Components/BackToTopBtn";

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  });
  return (
    <div className="App">
      <Header scroll={scroll} />
      <Banner />
      <Main />
      <Footer />
      <BackToTopBtn scroll={scroll} />
    </div>
  );
}

export default App;
