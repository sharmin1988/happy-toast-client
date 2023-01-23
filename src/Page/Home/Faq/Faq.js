import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Faq = () => {
    return (
        <section className="">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">

                <div className='lg:flex items-center justify-center'>
                    <div className=' lg:w-1/4 lg:flex items-center justify-around'>
                        <h2 className=" text-center font-bold text-4xl ml-4 mb-4">Frequently Asked Questions</h2>
                        <Player src='https://assets8.lottiefiles.com/packages/lf20_zptgbuvm.json'
                            className="player hidden lg:block"
                            loop
                            autoplay
                            style={{ height: '200px', width: '200px', marginRight: "-120px", marginLeft: '-50px' }}

                        />
                    </div>

                    <div className="lg:w-3/5 mx-auto ">
                        <details data-aos="flip-up"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out" className=" border rounded-lg mb-6 bg-orange-100 hover:bg-orange-400">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Sources of your ingredients?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">I use all the natural ingredients for making my foods</p>
                        </details>
                        <details data-aos="flip-up"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out" className=" border rounded-lg bg-orange-100 hover:bg-orange-400">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How You deliver your foods?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">I have my own delivery service .So all the foods are delivered with love and care. </p>
                        </details>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;