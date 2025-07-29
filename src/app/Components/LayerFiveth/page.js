"use client";

import { FaRegClipboard, FaUserCheck, FaUsers, FaRocket } from "react-icons/fa";

const steps = [
  {
    number: 1,
    title: "Share Requirements",
    description: "Tell us about your project needs, tech stack, and team culture",
    icon: <FaRegClipboard className="text-orange-500 text-xl" />,
  },
  {
    number: 2,
    title: "Receive Curated Profiles",
    description: "Get hand-picked candidate profiles within 24–48 hours",
    icon: <FaUsers className="text-orange-500 text-xl" />,
  },
  {
    number: 3,
    title: "Interview & Pick",
    description: "Conduct interviews and select your ideal candidate",
    icon: <FaUserCheck className="text-orange-500 text-xl" />,
  },
  {
    number: 4,
    title: "Onboard in <5 Days",
    description: "Complete the hiring process and onboard your new team member",
    icon: <FaRocket className="text-orange-500 text-xl" />,
  },
];

const  HiringProcess=()=> {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start bg-gray-50 min-h-screen px-4 md:px-10 py-10">
      {/* Left Section - Steps */}
      <div className="w-full md:w-1/2 relative px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Our Simple Hiring Process</h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base">Get your perfect tech hire in just 4 easy steps</p>

        {/* Vertical Line */}
        <div className="absolute left-6 top-20 bottom-4 w-1 bg-orange-200 hidden md:block z-0"></div>

        <div className="space-y-6 relative z-10">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-4 bg-white p-4 rounded-md shadow-md relative">
              {/* Step Number Circle */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-bold z-10">
                {step.number}
              </div>

              {/* Text and Icon */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  {step.icon}
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full md:w-1/2 bg-white p-6 mt-10 md:mt-0 rounded-md shadow-md">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
          Fill out the form, and our team will reach out to you to kickstart the hiring process.
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Work Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>Roles you are hiring for</option>
          </select>
          <textarea
            placeholder="Share your requirements"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-28"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white p-3 rounded-md hover:opacity-90 transition duration-200"
          >
            Start Hiring
          </button>
        </form>
      </div>
    </div>
  );
}


export default HiringProcess;