import React from 'react';

const Faq = () => {
    return (
        <section className="">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl text-center font-bold sm:text-4xl mb-6">Frequently Asked Questions</h2>
                
                <div className="w-3/4 mx-auto ">
                    <details className=" border rounded-lg mb-6 bg-orange-100 hover:bg-orange-400">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Sources of your ingredients?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">I use all the natural ingredients for making my foods</p>
                    </details>
                    <details className=" border rounded-lg bg-orange-100 hover:bg-orange-400">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How You deliver your foods?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">I have my own delivery service .So all the foods are delivered with love and care. </p>
                    </details>
                    
                </div>
            </div>
        </section>
    );
};

export default Faq;