import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { personal_projects } from "../data";

export default function PersonalProjects() {
    return (
        <section id="personal-projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Personal Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Projects I have completed in my free time.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {personal_projects.map((personal_project) => (
                        <a
                            href={personal_project.link}
                            key={personal_project.image}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={personal_project.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {personal_project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {personal_project.title}
                                    </h1>
                                    <p className="leading-relaxed">{personal_project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <a
                    href="./Joel-Lawrence-Resume-2023.pdf"
                    target="_blank"
                    className="mt-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg text-center">
                    My Resume
                </a>
            </div>
        </section>
    );
}