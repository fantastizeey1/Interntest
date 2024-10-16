import React, { useState } from "react";

const Faq = () => {
  // FAQs with Lorem Ipsum content
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adi elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adi elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adi elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adi elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adi elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adi elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  // State to handle which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle FAQ visibility
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[95%] w-full px-4 md:px-[80px] mx-auto mt-10 lg:mt-[180px] gap-10 flex flex-col justify-between items-start relative">
      <h2 className="font-bold text-[28px] text-start md:text-[35px] lg:text-[45px] text-black leading-[36px] md:leading-[46px] lg:leading-[56px] lg:mb-[80px]">
        FAQs
      </h2>

      {/* Grid Layout for FAQ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[8] md:gap-x-[100px] md:gap-y-[45px] max-full mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" pb-4 transition-all duration-300 hover:bg-gray-50 cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-[#000041] md:text-[24px] leading-[28.8px] pr-4">
                {faq.question}
              </p>
              <img
                src={openIndex === index ? "/up.png" : "down.png"}
                alt={openIndex === index ? "Collapse" : "Expand"}
                className="w-[17.34px] h-[8.6px]"
              />
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "max-h-[200px] opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700 text-[18px] font-medium ">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
