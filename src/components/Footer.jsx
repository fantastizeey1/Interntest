import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-[95%] w-full px-4 md:px-[80px] mx-auto mt-10 lg:mt-[180px] gap-10 flex flex-col justify-between  relative">
      <a href="/" className="flex justify-start items-center mg:mb-[75px]">
        <img src="/Logo.png" alt="logo" className="w-[80px] h-[80px]" />
        <p className="font-montserrat lg:text-[22px] 2xl:text-[28px] xl:leading-[36px] font-bold">
          Founde&apos;s <br /> Friday
        </p>
      </a>
      <div className="border-b  border-[#B86DFF]">
        <div className="flex justify-center items-center flex-col gap-6 mx-auto md:w-2/3">
          <h2 className="font-bold text-[18px] text-center md:text-[35px] lg:text-[45px] text-black leading-[36px] md:leading-[46px] lg:leading-[56px] mb-[20px]">
            Want To Be A Part Of Abuja&apos;s Biggest Tech Community?
          </h2>
          <button className="flex  w-full lg:w-[490px]  items-center border-2 border-[#9524FF] rounded-[40px] px-[20px] py-[20px] text-[#9524FF] md:text-[28px] leading-[33px] gap-[10px] mb-[70px] md:mb-[128px] text-center">
            Register For Our Next Event
            <img
              src="/Right arrow.png"
              alt="Right arrow icon"
              className="md:w-[40px] md:h-[40px]"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
