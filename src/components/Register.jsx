import React from "react";

const Register = () => {
  return (
    <section className="max-w-[95%]md:w-full relative mt-20 lg:mt-[180px] gap-10 flex flex-col lg:flex-row justify-between">
      <div className="flex w-full mx-auto flex-col items-center justify-center">
        <h3 className="text-[32px] md:text-[35px] lg:text-[45px] leading-[40px] md:leading-[56px] lg:leading-[57px] text-center font-bold mb-[20px] md:mb-[45px]">
          Register And Be Part of Our Community
        </h3>
        <p className="text-[16px] md:text-[20px] lg:text-[24px] leading-[22px] md:leading-[26px] lg:leading-[29px] font-normal text-[#8E8E93] text-center mb-[20px] lg:px-[220px] md:mb-[378px]">
          Join our community of over 1000+ founders, developers, and tech
          junkies in general. Be inspired by people who live to inspire!
        </p>
        <button className="lg:w-1/4 w-3/4 border-2 border-[#A649FF] text-[#A649FF] px-4 sm:px-[50px] py-3 md:py-[20px] rounded-[30px] md:rounded-[40px] flex items-center justify-center gap-5 text-[16px] sm:text-[18px] md:text-[24px] font-bold">
          Register
          <img src="/ArrowRightpurple.png" alt="Arrow" />
        </button>
      </div>
      <img
        src="/Frame 610.png"
        alt="frame"
        className="absolute hidden w-[90%] lg:block md:-top-[380px] lg:top-[200px] right-20 -z-10"
      />
      <img
        src="/Vector 2.png"
        alt="frame"
        className="absolute hidden w-[120%] lg:block md:top-[380px] lg:top-[240px] right-0 -z-20"
      />
    </section>
  );
};

export default Register;
