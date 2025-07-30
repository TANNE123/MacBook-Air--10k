import Image from "next/image";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
  FaInfinity,
} from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-0 md:flex-row md:space-x-6 lg:space-x-12">
        <div className="flex-shrink-0 text-center md:text-left">
          <div className="mb-4">
            <div className="flex justify-center md:justify-start items-center">
              <Image
                src="/Footer-logo.svg"
                alt="10000 Coders Logo"
                width={100}
                height={100}
                className="w-30 h-20 mr-2"  
                />
            </div>
            <p className="text-sm">Right path for a Bright Career.</p>
          </div>
          <p className="text-sm font-semibold mb-2">REACH US</p>
          <div className="flex justify-center md:justify-start items-center mb-2">
            <FaPhone className="w-5 h-5 mr-2" />
            <p className="text-sm">+91-96435467890</p>
          </div>
          <div className="flex justify-center md:justify-start items-center">
            <FaEnvelope className="w-5 h-5 mr-2" />
            <p className="text-sm">support@10000coders.co</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-evenly gap-6 w-full">
          <div className="flex-shrink-0 text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-3">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm flex flex-col items-center sm:items-start">
              <li>
                <a href="#" className="hover:text-orange-500">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Terms and Condition
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Review
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-shrink-0 text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-3">SOCIAL MEDIA</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="hover:text-orange-500">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <FaInfinity className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <FaMeta className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-start">
              <FaMapMarkerAlt className="w-5 h-5 mr-2 mt-1" />
              <div className="w-fit">
                <p className="text-sm w-fit">Metro Station, MIG 214,</p>
                <p className="text-sm w-fit">Road 1, Behind KPHB,</p>
                <p className="text-sm w-fit">Housing Board Colony,</p>
                <p className="text-sm w-fit">Kukatpally, Hyderabad,</p>
                <p className="text-sm w-fit">Telangana</p>
                <p className="text-sm w-fit">500072</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
