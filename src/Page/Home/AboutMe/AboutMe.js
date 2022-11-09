import React from 'react';

const AboutMe = () => {
    return (
        <section className='w-4/5 mx-auto border p-3 border-orange-300 hover:border-orange-500 hover:bg-orange-50'>
            <h2 className=" text-center font-bold sm:text-4xl mb-3">Hello!! friends..</h2>
            <h2 className="text-sm text-center font-bold ">Welcome!!</h2>
            <div className="md:px-12 lg:px-16 max-w-2xl relative items-center w-full px-5 py-4 mx-auto">
                <div className="lg:mx-auto flex flex-col w-full max-w-lg mb-12 text-center">
                    
                    <img alt="testimonial" className="inline-block object-cover object-center w-20 h-20 mx-auto mb-8 rounded-full" src="https://img.freepik.com/free-photo/cute-chef-girl-uniform-hello-greeting-paying-welcome-restaurant-3d-illustration-cartoon_56104-1620.jpg?size=626&ext=jpg&ga=GA1.2.1239272833.1664376337&semt=sph" />

                    <p className="mx-auto text-base leading-relaxed text-gray-500">I'm Sharmin -Here on Happy Toast, I share authentic  recipes . You Can enjoy the taste blast along with family ,favorites from around the globe. You will also get a pure taste of organic, freash food!</p>
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