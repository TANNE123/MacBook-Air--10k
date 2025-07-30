"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const LayerFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is 10000coders?", answer: "10000coders is a career transformation platform..." },
    { question: "Who is 10000coders for ?", answer: "It is for aspiring developers, especially freshers..." },
    { question: "What types of courses do you offer ?", answer: "We offer live, project-based full-stack web development training..." },
    { question: "Are your courses self-paced or live ?", answer: "Our courses are live and interactive, not self-paced recordings..." },
    { question: "What is the duration of your courses ?", answer: "Typically 6 months including project work and mentorship..." },
    { question: "Do you provide certificates upon courses ?", answer: "Yes, we provide completion certificates and placement support..." },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <h2 className="text-center text-3xl font-semibold mb-8 gradient-text">FAQ</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 py-3 text-left flex justify-between items-center"
              >
                <span className="text-base">{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-700 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayerFaq;
