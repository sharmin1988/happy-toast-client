import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Bannar from '../Bannar/Bannar';
import Faq from '../Faq/Faq';
import ServicesInHomePage from '../ServicesInHomePage/ServicesInHomePage';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <ServicesInHomePage></ServicesInHomePage>
            <AboutMe></AboutMe>
            <Faq></Faq>
        </div>
    );
};

export default Home;