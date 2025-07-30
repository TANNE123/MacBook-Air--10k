"use client";

import { FaRegClipboard, FaUserCheck, FaUsers, FaRocket } from "react-icons/fa";
import { FiUser, FiPhone, FiMail, FiBriefcase, FiEdit3 } from "react-icons/fi";
import ButtonCompoent from "../Button/page";
import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Share Requirements",
    description: "Tell us about your project needs, tech stack, and team culture",
    icon: <FaRegClipboard className="text-2xl text-blue-600" />,
    imgPath: "/Frame.svg"
  },
  {
    number: 2,
    title: "Receive Curated Profiles",
    description: "Get hand-picked candidate profiles within 24–48 hours",
    icon: <FaUsers className="text-2xl text-blue-600" />,
    imgPath: "/Group.svg"
  },
  {
    number: 3,
    title: "Interview & Pick",
    description: "Conduct interviews and select your ideal candidate",
    icon: <FaUserCheck className="text-2xl text-blue-600" />,
    imgPath: "/Group (1).svg"
  },
  {
    number: 4,
    title: "Onboard in <5 Days",
    description: "Complete the hiring process and onboard your new team member",
    icon: <FaRocket className="text-2xl text-blue-600" />,
    imgPath: "/Group (2).svg"
  },
];

const HiringProcess = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-start min-h-screen bg-[#f9f9f9] px-4 md:px-12 py-12">

      <div className="w-full md:w-1/2 lg:w-1/3 relative">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Simple Hiring Process</h2>
        <p className="text-gray-600 mb-10">Get your perfect tech hire in just 4 easy steps</p>

        <div className="relative pl-6 space-y-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-4 relative z-10 ${idx !== steps.length - 1
                ? "after:content-[''] after:absolute after:top-[40px] after:left-[18px] after:w-[3px] after:h-full after:bg-orange-500"
                : ""
                }`}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full gradient-backeground-color text-white font-bold shrink-0 z-10">
                {step.number}
              </div>

              <div className="bg-[#ecdfee] p-4 rounded-lg border border-orange-600 shadow-sm w-full">
                <div className="flex justify-between">
                  <h3 className="flex items-center gap-2 font-semibold text-gray-800 text-lg">
                    {step.title}
                  </h3>
                  {/* <p>{step.icon}</p> */}
                  <Image
                    src={step.imgPath}
                    alt={step.title}
                    width={50}
                    height={50}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 mt-10 md:mt-0 md:pl-10">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4 text-center">
            Fill out the form, and our team will reach out to you to kickstart the hiring process.
          </h3>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <p className="text-xs text-red-500 mt-1">Name cannot include special characters</p>
            </div>

            <input
              type="text"
              placeholder="Company Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="email"
              placeholder="Work Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <p className="text-xs text-red-500 mt-1">Enter a Valid Mobile Number</p>
            </div>

            <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-500">
              <option>Roles you are hiring for</option>
            </select>

            <textarea
              placeholder="Share your requirements"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 h-28"
            ></textarea>
            <ButtonCompoent text="Start Hiring" style="w-full py-3 font-semibold gradient-backeground-color" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HiringProcess;
