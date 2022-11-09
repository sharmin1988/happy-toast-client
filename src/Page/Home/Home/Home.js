import React from 'react';
import UseTitle from '../../../hooks/UseTitle';
import AboutMe from '../AboutMe/AboutMe';
import Bannar from '../Bannar/Bannar';
import Faq from '../Faq/Faq';
import ServicesInHomePage from '../ServicesInHomePage/ServicesInHomePage';

const Home = () => {
    UseTitle('Home')
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