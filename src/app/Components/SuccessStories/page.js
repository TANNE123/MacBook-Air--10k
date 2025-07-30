import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import ButtonCompoent from "../Button/page";

const StudentCard = () => {
  return (
    <div className="bg-white w-[260px] rounded-xl shadow-md border border-[#797979]-200 px-4 py-4 text-center flex flex-col gap-2">

      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow">
          <Image
            src="/layerTwo/CHETTI GANESH.svg"
            alt="Profile"
            width={56}
            height={56}
            className="object-cover"
          />
        </div>
        <div className="text-left">
          <h2 className="text-sm font-bold leading-tight">CHETTI GANESH</h2>
          <div className="flex items-center text-xs text-gray-700">
            <FaGraduationCap className="mr-1" />
            React Developer
          </div>
          <div className="flex items-center text-xs text-gray-700">
            <HiOutlineLocationMarker className="mr-1" />
            Hyderabad
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-xs font-semibold mt-4 text-gray-700">
        <span>Pre Course</span>
        <span className="mx-2">→</span>
        <span>Post Course</span>
      </div>

      <div className="flex justify-between items-center mt-2 px-1">
        <p className="text-xs font-bold text-gray-700">UNEMPLOYED</p>
        <Image
          src="/layerTwo/image 111.svg"
          alt="Company"
          width={30}
          height={30}
        />
      </div>

      <ButtonCompoent text=" Connect to Know Details" style="w-full mt-4 py-[6px] text-sm font-semibold gradient-backeground-color" />
      <ButtonCompoent text="View Profile" style="w-full mt-2 py-[6px] text-sm font-semibold gradient-border" />
    </div>
  );
};

export default StudentCard;
