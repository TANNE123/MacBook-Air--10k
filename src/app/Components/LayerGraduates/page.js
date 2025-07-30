import Image from "next/image";
import { FaLaptopCode, FaServer, FaCogs, FaCloud, FaMobileAlt, FaDatabase } from "react-icons/fa";
import ButtonCompoent from "../Button/page";

const roles = [
    {
        title: "Frontend Developer",
        description: "Expert in React, modern CSS, responsive design, and user experience optimization",
        icon: <FaLaptopCode className="text-white text-3xl" />,
        imgBg: "/coding pattern 1.svg",
        color: "#A31A1A",
    },
    {
        title: "Backend Developer",
        description: "Skilled in Node.js, databases, API development, and server-side architecture",
        icon: <FaServer className="text-white text-3xl" />,
        imgBg: "/coding pattern 1 (1).svg",
        color: "#DC7D00",
    },
    {
        title: "Full-Stack Developer",
        description: "End-to-end development capabilities across the entire technology stack",
        icon: <FaCogs className="text-white text-3xl" />,
        imgBg: "/coding pattern 1 (2).svg",
        color: '#5F9A00',
    },
    {
        title: "Data Engineer",
        description: "Python expertise, data pipeline development, and analytics implementation",
        icon: <FaDatabase className="text-white text-3xl" />,
        imgBg: "/coding pattern 1 (3).svg",
        color: "#565656"
    },
    {
        title: "DevOps & Cloud",
        description: "AWS, Docker, Kubernetes, CI/CD pipelines, and infrastructure management",
        icon: <FaCloud className="text-white text-3xl" />,
        imgBg: "/coding pattern 2.svg",
        color: "#9B00E8"
    },
    {
        title: "Mobile Development",
        description: "React Native, Flutter, native iOS & Android development",
        icon: <FaMobileAlt className="text-white text-3xl" />,
        imgBg: "/coding pattern 2 (1).svg",
        color: "#0125A8"
    },
];

function RolesSection() {
    return (
        <div className="w-full bg-white py-12 px-6 md:px-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Roles Our Graduates Excel In
            </h2>
            <p className="text-gray-600 mb-10">
                From frontend to backend, our talent covers all your development needs
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {roles.map((role, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl overflow-hidden border shadow-md hover:shadow-lg transition"
                        style={{ borderColor: role.color }}
                        data-aos="fade-up"
                        data-aos-duration="3000"
                    >
                        <div className="relative h-28 sm:h-32 md:h-36 w-full">
                            <Image
                                src={role.imgBg}
                                alt={`${role.title} background`}
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                {role.icon}
                            </div>
                        </div>
                        <div className="bg-white py-4 px-5 h-36 flex flex-col justify-center">
                            <h3 className="text-lg font-semibold mb-2" style={{ color: role.color }}>
                                {role.title}
                            </h3>
                            <p className="text-sm text-gray-600">{role.description}</p>
                        </div>
                    </div>

                ))}
            </div>
            <ButtonCompoent
                text="Start Hiring"
                style="gradient-backeground-color py-3 px-6 rounded-full text-base font-medium shadow-md transition-all duration-300"
            />
        </div>
    );
}

export default RolesSection;
