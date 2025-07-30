"use client";

import Image from "next/image";
import { FaClock, FaStar, FaBuilding, FaPercentage, FaBriefcase, FaRupeeSign, FaChalkboardTeacher } from "react-icons/fa";

const stats = [
  { icon: <FaClock className="text-[#ff8541]" />, label: "3–5", sub: "Days to Hire" },
  { icon: <FaStar className="text-[#e84975]" />, label: "Top 1%", sub: "Trained by IIT/IIM grads" },
  { icon: <FaBuilding className="text-[#ff8541]" />, label: "2500+", sub: "Companies Served" },
  { icon: <FaPercentage className="text-[#e84975]" />, label: "93%", sub: "Placement Rate" },
  { icon: <FaBriefcase className="text-[#ff8541]" />, label: "10+ Years", sub: "Industry Experience" },
  { icon: <FaRupeeSign className="text-[#e84975]" />, label: "₹4.2L", sub: "Average Starting Package" },
  { icon: <FaChalkboardTeacher className="text-[#ff8541]" />, label: "100%", sub: "Job-Ready Training" },
];

const  LayerTwoPage=()=> {
  return (
    <section className="relative w-full py-16 px-4 md:px-10 lg:px-20 overflow-hidden">
      <Image
        src="/layerTwo/layerTwoBg.svg" 
        alt="Background"
        fill
        className="object-cover object-center"
      />

      <div className="relative z-1 max-w-screen-xl mx-auto text-center text-white">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Why Top Companies Choose Our Talent
        </h2>
        <p className="text-sm md:text-base mt-2 text-white/90">
          Industry-leading metrics that demonstrate our commitment to excellence
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {stats.slice(0, 4).map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md flex flex-col items-center justify-center gap-2 p-6"
              data-aos="zoom-in-right"
            >
              <div className="text-xl font-bold gradient-text">{stat.label}</div>
              <div className="text-sm text-center text-gray-600 border-b-2 pb-1 border-dotted border-[#ff8541]">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 max-w-5xl mx-auto">
          {stats.slice(4).map((stat, idx) => (
            <div
              key={idx}
              className="bg-white text-black rounded-xl shadow-md flex flex-col items-center justify-center gap-2 p-6"
              data-aos="zoom-in-left"
            >
              <div className="text-xl font-bold gradient-text">{stat.label}</div>
              <div className="text-sm text-center text-gray-600">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LayerTwoPage;