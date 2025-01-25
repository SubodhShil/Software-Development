import React from "react";
import VideoPlayer from "./VideoPlayer";

function HOD() {
    return (
        <div className="mt-10 mb-10">
            <section className="flex gap-5">
                <div className="">
                    <VideoPlayer />
                </div>

                <div>
                    <h1 className="font-bold text-2xl">
                        Message from Head of the Department
                    </h1>
                    <h2 className="text-zinc-500">
                        {" "}
                        Professor Dr. G. R. Ahmed Jamal
                    </h2>
                    <p>
                        The Department of Electrical and Electronic Engineering
                        (EEE) offers undergraduate and Master’s programs in EEE
                        with a vision for creating quality electrical engineers.
                        At present we enroll 250 students per year in two
                        semesters. So far more than 1600 students graduated from
                        this department since the inception of the department in
                        2004. The Department of Electrical and Electronic
                        Engineering (EEE) offers undergraduate and Master’s
                        programs in EEE with a vision for creating quality
                        electrical engineers. At present we enroll 250 students
                        per year in two semesters. So far more than 1600
                        students graduated from this department since the
                        inception of the department in 2004. The Department of
                        Electrical and Electronic Engineering (EEE) offers
                        undergraduate and Master’s programs in EEE with a vision
                        for creating quality electrical engineers. At present we
                        enroll 250 students per year in two semesters. So far
                        more than 1600 students graduated from this department
                        since the inception of the department in 2004. <br />
                        <button
                            type="button"
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Read More..
                        </button>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default HOD;
