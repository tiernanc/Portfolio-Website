import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-600 body-font">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, my name is Tiernan.
            <br className="hidden lg:inline-block" /> I love to build refreshing
            webpages.
          </h1>
          <p className="mb-8 leading-relaxed">
            Here you can view my past work, 
            what skills I have, and other peers that
            recommend working with me.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 hover:text-white rounded text-lg">
              Past Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="inline-flex my-2.5 md:ml-2.5 w-full justify-center"
            alt="hero"
            src="./coding.png"
          />
        </div>
      </div>
    </section>
  );
}
