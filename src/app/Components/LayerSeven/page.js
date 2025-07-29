"use client";
import Image from "next/image";

// Sample data
const alumni = [
    {
        name: "Abhiram Kaleru",
        img: "/your-path/abhiram.png",
        company: "/your-path/company1.png",
    },
    {
        name: "Pidugu Ramya",
        img: "/your-path/ramya.png",
        company: "/your-path/company2.png",
    },
    {
        name: "Naveen Reddy",
        img: "/your-path/naveen.png",
        company: "/your-path/company3.png",
    },
    {
        name: "A. Akhila",
        img: "/your-path/akhila.png",
        company: "/your-path/company4.png",
    },
    {
        name: "Praveen Kothagolla",
        img: "/your-path/praveen.png",
        company: "/your-path/company5.png",
    },
    {
        name: "Pravallika Narla",
        img: "/your-path/pravallika.png",
        company: "/your-path/company6.png",
    },
];

const Alumni = () => {
    const rows = 5;
    const totalCards = rows * alumni.length;

    return (
        <div className="relative w-full bg-gradient-to-r from-white via-[#fff3f3] to-white py-10 px-4 md:px-10">
            <Image
                src="/layerTwo/sevengb.svg"
                alt="Background"
                fill
                className="absolute inset-0 object-cover"
                priority
            />

            <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-8 relative z-10">
                10000coders alumni work at 1000+ companies
            </h2>

            <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-3 gap-y-8">
                {Array.from({ length: totalCards }).map((_, index) => {
                    const person = alumni[index % alumni.length];
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-6">
                                <Image
                                    src={person.img}
                                    alt={person.name}
                                    width={112}
                                    height={112}
                                    className="object-cover w-full h-full border-4 border-white rounded-full shadow-md"
                                />
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[20px] sm:text-sm font-semibold text-white bg-[#f44f5a] rounded-full px-2 sm:px-4 py-1 shadow w-full whitespace-nowrap overflow-hidden text-ellipsis text-center">
                                    {person.name}
                                </div>
                            </div>

                            <div className="h-6 w-auto">
                                <Image
                                    src={person.company}
                                    alt="Company Logo"
                                    width={80}
                                    height={24}
                                    className="object-contain mx-auto"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-center mt-10 relative z-10">
                <button className="border border-[#f44f5a] text-[#f44f5a] text-sm px-6 py-2 rounded-full hover:bg-[#f44f5a] hover:text-white transition duration-300">
                    View All
                </button>
            </div>
        </div>
    );
};

export default Alumni;
