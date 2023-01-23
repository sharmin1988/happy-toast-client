import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const AboutMe = () => {
    return (
        <section data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            className='w-4/5 mx-auto border p-3 border-orange-500 bg-orange-50'>
            <h2 className=" text-center font-bold sm:text-4xl my-2">Meet!! Our Chef..</h2>
            <h2 className="text-sm text-center font-bold ">hi!! i'm sharmin..</h2>
            <div className="md:px-8 max-w-2xl relative items-center w-full py-4 mx-auto">
                <div className="lg:mx-auto flex flex-col w-full max-w-lg mb-8 text-center">
                    <Player src='https://assets7.lottiefiles.com/packages/lf20_nfzjxjbh.json'
                        className="player" loop autoplay
                    />
                    <p className="mx-auto text-base leading-relaxed text-gray-500">A gold medalist in food and nutrition, Sharmin, a household name in bangladesh, is popular for her numerous cook books on food, diet, nutrition and weight loss.Recently she just started a new food service <br /> "Happy Toast"..
                        <br /> please order to take the yammy taste of her foods!!!</p>
                    <h2 className="mt-4 text-xs font-semibold tracking-widest text-blue-700 uppercase">
                        Hurry Up!!!
                        <span href="#" className="lg:mb-0 font-semibold text-gray-400">Order now </span>
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;