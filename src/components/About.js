import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Joel.
                        <br className="hidden lg:inline-block" /> Let's work together.
                    </h1>
                    <p className="mb-4 leading-relaxed">
                        As a recent 2023 Computer Science graduate at MacEwan University, I bring a strong technical foundation and a passion for innovation to the table.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg text-center">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg text-center">
                            See My Past Work
                        </a>
                        <a
                            href="https://www.linkedin.com/in/joel-micah-lawrence/"
                            target="blank_"
                            className="ml-5 inline-flex"
                            title="LinkedIn">
                            <img
                                alt="linkedin"
                                src="./linkedin.svg"
                                width="25"
                                height="25"
                            />
                        </a>
                        <a
                            href="https://github.com/joellawrence"
                            target="blank_"
                            className="ml-4 inline-flex"
                            title="GitHub">
                            <img
                                alt="github"
                                src="./github.svg"
                                width="26"
                                height="26"
                            />
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding.svg"
                    />
                </div>
            </div>
        </section>
    );
}