import React from 'react';

const Blog = () => {
    return (
        <section className=' bg-orange-50 py-8  '>
            <div className='w-4/5 mx-auto border p-3 border-orange-300 bg-white hover:border-orange-700 '>
                <h2 className=" text-center font-bold sm:text-3xl mb-3">Difference between SQL and NoSQL?</h2>
                <div class="lg:mx-auto  w-full max-w-3xl mb-12 ">
                    <p class="mx-auto text-base leading-relaxed text-gray-600">SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. </p>
                    <p class="mx-auto text-base leading-relaxed text-gray-600">SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful.
                        <br />
                        A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store.</p>

                </div>
            </div>
            <div className='w-4/5 my-6 mx-auto border p-3 border-orange-300 bg-white hover:border-orange-700 '>
                <h2 className=" text-center font-bold sm:text-3xl mb-3">What is JWT, and how does it work?</h2>
                <div class="lg:mx-auto  w-full max-w-3xl mb-12 ">
                    <p class="mx-auto text-base leading-relaxed text-gray-600">JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued</p>
                    <br />
                    <p class="mx-auto text-base leading-relaxed text-gray-600">JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server.
                        By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.</p>

                </div>
            </div>
            <div className='w-4/5 my-6 mx-auto border p-3 border-orange-300 bg-white hover:border-orange-700 '>
                <h2 className=" text-center font-bold sm:text-3xl mb-3">What is the difference between javascript and NodeJS?</h2>
                <div class="lg:mx-auto  w-full max-w-3xl mb-12 ">
                    <p class="mx-auto text-base leading-relaxed text-gray-600">NodeJS :
                        NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                    <br />
                    <p class="mx-auto text-base leading-relaxed text-gray-600">Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>

                </div>
            </div>
            <div className='w-4/5 my-6 mx-auto border p-3 border-orange-300 bg-white hover:border-orange-700 '>
                <h2 className=" text-center font-bold sm:text-3xl mb-3">How does NodeJS handle multiple requests at the same time?</h2>
                <div class="lg:mx-auto  w-full max-w-3xl mb-12 ">
                    <p class="mx-auto text-base leading-relaxed text-gray-600">NodeJS receives these requests and places them into the EventQueue .NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
                        <br /><br />
                        So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
                        The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.</p>
                    
                </div>
            </div>
        </section>
    );
};

export default Blog;