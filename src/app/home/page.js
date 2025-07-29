"use client"

import Navbar from "../Components/Navbar/page";
import Image from "next/image";
import { FaCoins, FaStar, FaRocket, FaBriefcase } from "react-icons/fa";
import ButtonCompoent from "../Components/Button/page";
import LayerTwoPage from "../Components/LayerTwo/page";
import LayerThreedPage from "../Components/LayerThreed/page";
import LayerFourthPage from "../Components/LayerFourth/page";
import HiringProcess from "../Components/LayerFiveth/page";
import TechnologiesWeCover from "../Components/Layersixth/page";
import Alumni from "../Components/LayerSeven/page";

const HomeComponent = () => {
  return (
    <div>
      <Navbar />
      <section className="relative w-full py-8 px-4 md:px-10 lg:px-20">
        <Image
          src="/heroBannerBg.svg"
          alt="Background"
          layout="fill"
          className="absolute inset-0 object-cover opacity-20"
          priority
        />
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-4xl font-bold gradient-text leading-tight">
              Hire Industry-Ready  <br />
              <span>Developers.Zero </span><br />
              <span>Hiring Fee. 100%</span><br />
              <span> Skill-Tested</span>
            </h1>
            <p className="text-gray-700 text-base sm:text-lg">
              Tech talent trained with real-world projects, communication,
              and problem-solving.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <ButtonCompoent style="font-semibold py-2 px-4 rounded-full gradient-backeground-color" text="Get Curated Profiles" />
              <ButtonCompoent style="font-semibold py-2 px-4 gradient-border" text="Book a Hiring Consultation" />
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 text-sm justify-center lg:justify-start">
              <div className="flex items-center justify-center gap-2 bg-gray-100 rounded-full py-2 px-3">
                <FaCoins className="text-yellow-500" />
                Zero Hiring Fee
              </div>
              <div className="flex items-center justify-center gap-2 bg-gray-100 rounded-full py-2 px-3">
                <FaStar className="text-yellow-500" />
                Top 1% Trained
              </div>
              <div className="flex items-center justify-center gap-2 bg-gray-100 rounded-full py-2 px-3">
                <FaRocket className="text-pink-500" />
                3-5 Days to Hire
              </div>
              <div className="flex items-center justify-center gap-2 py-2 px-3 gradient-backeground-color">
                <FaBriefcase />
                Hire From Us
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative rounded-md overflow-hidden shadow-lg">
            <Image
              src="/Herobanner.svg"
              alt="Tech Team Hiring"
              width={600}
              height={300}
              className="w-full h-auto"
              priority
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.6)] px-4 py-6 rounded-lg text-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[80%]">
              <h2 className="text-sm sm:text-xl md:text-2xl font-bold text-pink-400">
                Build Your Dream Tech Team Fast, Free & Fearless
              </h2>
              <p className="mt-2 text-sm sm:text-base font-medium text-white">
                Zero hiring fees. <br />
                Top 1% talent. <br />
                Ready to work from Day 1.
              </p>
            </div>
          </div>
        </div>
      </section>
      <LayerTwoPage/>
      <LayerThreedPage/>
      <LayerFourthPage/>
      <HiringProcess/>
      <TechnologiesWeCover/>
      <Alumni/>
    </div>
  )
}

export default HomeComponent;
