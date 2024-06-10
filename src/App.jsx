import React, { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Contact from "./pages/Contact";
import CorporateEvents from "./pages/CorporateEvents";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MallActivities from "./pages/BTLActivities";
import Weddings from "./pages/Weddings";
import AOS from "aos";
import "aos/dist/aos.css";
import Clients from "./pages/Clients";
import Concerts from "./pages/Concerts";
import Mice from "./pages/Mice";
import BTLActivities from "./pages/BTLActivities";
import Exhibitions from "./pages/Exhibitions";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
    });
  }, []);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page when route changes
    }, [pathname]);

    return null;
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/corporateevents" element={<CorporateEvents />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/btlactivities" element={<BTLActivities />} />
          <Route path="/mice" element={<Mice />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
