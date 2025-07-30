"use client";

import Image from "next/image";
import ButtonCompoent from "../Button/page";

const techStack = [
    { name: "HTML", icon: "/layerTwo/html.svg" },
    { name: "CSS", icon: "/layerTwo/css.svg" },
    { name: "JavaScript", icon: "/layerTwo/js.svg" },
    { name: "React", icon: "/layerTwo/react.svg" },
    { name: "Angular.js", icon: "/layerTwo/angler.svg" },
    { name: "NextJS", icon: "/layerTwo/nest.svg" },
];

const TechnologiesWeCover = () => {
    return (
        <section className="bg-gray-100 py-10 px-4 md:px-10">
            <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                    <span className="gradient-text">Technologies We Cover</span>
                </h2>
                <p className="text-gray-600 mt-2 font-medium text-lg">
                    Our developers are skilled in the latest and most in-demand technologies
                </p>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm font-medium">
                    {[
                        "Frontend",
                        "Backend",
                        "Mobile",
                        "Databases",
                        "Frameworks",
                        "Cloud",
                        "DevOps",
                        "Ecommerce",
                        "CMS",
                        "Platforms",
                    ].map((tab) => (
                        <button
                            key={tab}
                            className={`px-2 py-1 ${tab === "Frontend"
                                ? "text-orange-500 border-b-2 border-orange-500"
                                : "text-gray-500 hover:text-orange-500"
                                } text-xl`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-6 mt-10">
                    {techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className="w-[120px] sm:w-[130px] lg:w-[160px] flex flex-col items-center bg-white rounded-xl py-4 shadow-md hover:shadow-lg transition"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <div className="relative w-14 h-14 sm:w-16 sm:h-25 mb-3">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm font-medium text-gray-800 text-center">{tech.name}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-10">
                    <ButtonCompoent style={"px-6 py-2 text-lg font-semibold shadow hover:opacity-90 transition gradient-backeground-color"} text={"Start Hiring"} />
                </div>
            </div>
        </section>
    );
}


export default TechnologiesWeCover;