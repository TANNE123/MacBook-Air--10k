import { FaGraduationCap, FaBolt, FaBriefcase, FaUser, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';
import ButtonCompoent from '../Button/page';

const LayerFourthPage = () => {
    const cardData = [
        {
            icon: <FaGraduationCap className="text-4xl" />,
            title: "Skill-Matched Talent",
            description: "Every developer is vetted with live project experience and technical assessments matching your exact requirements."
        },
        {
            icon: <FaBolt className="text-4xl" />,
            title: "Fast Turnaround",
            description: "Receive curated profiles within 24-48 hours of sharing your job requirements. No lengthy hiring processes."
        },
        {
            icon: <FaBriefcase className="text-4xl" />,
            title: "Soft Skills Ready",
            description: "Our developers are trained in communication, resume writing, and client handling for professional workplace integration."
        },
        {
            icon: <FaUser className="text-4xl" />,
            title: "Custom Hiring",
            description: "Roles are precisely matched to your job description and company culture requirements."
        },
        {
            icon: <FaLaptopCode className="text-4xl" />,
            title: "Trained on Your Stack",
            description: "React, Node.js, MongoDB, Python, and all major technologies with hands-on project experience."
        },
        {
            icon: <FaCheckCircle className="text-4xl" />,
            title: "Quality Guarantee",
            description: "If it doesn’t work out, we provide replacement candidates at no additional cost."
        }
    ];

    return (
        <section className="relative py-16 px-4 md:px-10 lg:px-20 overflow-hidden">
            <img
                src="/layerTwo/layerFourthgb.svg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
            />
            <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Hire From Us?</h2>
                <p className="text-lg md:text-xl text-gray-200 mb-8">Experience the difference of working with thoroughly trained, industry-ready professionals</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-lg shadow-lg border-1 border-white`}
                            data-aos="flip-left"
                        >
                            <div className="flex justify-center mb-4 text-[#e84975]">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                            <p className="text-gray-300 text-sm">{card.description}</p>
                        </div>
                    ))}
                </div>


                <ButtonCompoent style={"mt-8 px-8 py-3  font-semibold transition duration-300 gradient-backeground-color text-lg"} text={" Start Hiring"} />
            </div>
        </section>
    );
};

export default LayerFourthPage;