import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";

export default function AcademicCareer() {
    return (
        <section id="career">
            <div className="container px-5 py-10 mx-auto text-center">
                <AcademicCapIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Academic Career
                </h1>
                <div className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    <p className="mb-4">
                        I achieved a <strong>Bachelor of Science</strong> degree with a major in <strong>Computer Science</strong> and a minor in
                        <strong>Statistics</strong>.
                    </p>
                    <p className="mb-4">
                        I was sought out by one of my statistics professors to be a teacher's assistant/marker for a senior-level
                        statistics course, STAT 350: Sampling Theory and Applications, during my final year of schooling.
                    </p>
                    <p>
                        My academic strengths are primarily in databases, machine learning, and statistics; however, I am always
                        trying to learn new technologies to stay updated and ahead in everything programming.
                    </p>
                </div>
            </div>
        </section>
    );
}