// HomePage.js
import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Categories from "./Categories";
import Bestsellers from "./Bestsellers";
import Footer from "./Footer";

const HomePage = () => {
    return (
        <div className="homepage">
            <HeroSection />
            <Categories />
            <Bestsellers />
            <Footer />
        </div>
    );
};

export default HomePage;







