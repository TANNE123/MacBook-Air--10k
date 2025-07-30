import Image from "next/image";
import React from "react";

const LeadingTech = () => {
    const videoStudents = [
        {
            name: "Anil Kumar Ghorakavi",
            role: "Co-Founder @TeamWIre",
            pashBtn: "/pash_img.svg",
            imgPath: "/video_img.png",
        },
        {
            name: "Anil Kumar Ghorakavi",
            role: "Co-Founder @TeamWIre",
            pashBtn: "/pash_img.svg",
            imgPath: "/video_img.png",
        },
        {
            name: "Anil Kumar Ghorakavi",
            role: "Co-Founder @TeamWIre",
            pashBtn: "/pash_img.svg",
            imgPath: "/video_img.png",
        },
        {
            name: "Anil Kumar Ghorakavi",
            role: "Co-Founder @TeamWIre",
            pashBtn: "/pash_img.svg",
            imgPath: "/video_img.png",
        },
        {
            name: "Anil Kumar Ghorakavi",
            role: "Co-Founder @TeamWIre",
            pashBtn: "/pash_img.svg",
            imgPath: "/video_img.png",
        },
        {
            name: "Anil Kumar Ghorakavi",
            role: "Co-Founder @TeamWIre",
            pashBtn: "/pash_img.svg",
            imgPath: "/video_img.png",
        },
    ];

    return (
        <div className="w-full pt-8 sm:pt-12 md:pt-16 lg:pt-20 bg-white">
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4 sm:px-6 md:px-8 lg:px-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF8541] mb-2 sm:mb-3 md:mb-4">
                    Leading tech companies have hired from us
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-[90%] sm:max-w-[80%] md:max-w-[700px] mx-auto">
                    <span className="text-[#FF8541]">“What They Say About Us”</span> Here’s what hiring partners have to say about our talent.
                </p>
            </div>

            <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-hide px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="flex flex-nowrap gap-4 sm:gap-6 md:gap-8 lg:gap-5 p-4 md:px-0 min-w-max">
                    {videoStudents.map((eachVideo, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[90vw] sm:w-[90vw] md:w-[90vw] lg:w-[22vw] bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            <div className="relative">
                                <Image
                                    src={eachVideo?.imgPath}
                                    alt={eachVideo?.name}
                                    height={200}
                                    width={400}
                                    className="w-full h-[150px] sm:h-[150px] md:h-[200px] lg:h-[200px] xl:h-[180px] object-cover"
                                />
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <Image
                                        src={eachVideo?.pashBtn}
                                        alt="play button"
                                        height={40}
                                        width={40}
                                        className="w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 opacity-80 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            </div>
                            <div className="p-4 sm:p-5 md:p-6">
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 text-center">
                                    {eachVideo.name}
                                </p>
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#FF8541] text-center">
                                    {eachVideo?.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[300px]">
                <Image
                    src="/rectangle_bg_img.svg"
                    alt="rectangle background"
                    height={300}
                    width={1200}
                    className="w-full h-full absolute inset-0 object-cover"
                />
                <Image
                    src="/rectangle_layer_seven.svg"
                    alt="rectangle overlay"
                    height={300}
                    width={1200}
                    className="w-full h-full absolute inset-0 object-cover opacity-50"
                />
                <p className="absolute inset-0 flex justify-center items-center text-center z-1 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[90%] sm:max-w-[80%] md:max-w-[700px] mx-auto">
                    We build top-tier tech talent - and the industry knows it, hires it, and trusts it.
                </p>
            </div>
        </div>
    );
};

export default LeadingTech;
