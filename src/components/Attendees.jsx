import React from "react";

const Attendees = () => {
  return (
    <section className="max-w-[95%] w-full px-4 md:px-[80px] mx-auto mt-10 lg:mt-[180px] gap-10 flex flex-col justify-between items-center relative">
      <div className="flex flex-col justify-center items-center mb-[100px]">
        <h2 className="font-bold text-[28px] text-center md:text-[35px] lg:text-[45px] text-black leading-[36px] md:leading-[46px] lg:leading-[56px] mb-[20px]">
          What Do Our Attendees Have To Say?
        </h2>
        <p className="text-[#8E8E93] text-[16px] md:text-[20px] lg:text-[24px] font-normal leading-[24px] md:leading-[26px] lg:leading-[29px]">
          Well, See For Yourself!
        </p>
        <img
          src="/Frame 640.png"
          alt="button"
          className="absolute top-[10%] md:top-0 lg:right-0 cursor-pointer mt-4"
        />
      </div>

      {/* Reviews Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-6 gap-12 md:gap-[100px]">
        <img src="/Frame 634.png" alt="reviews" className="w-full md:w-auto" />
        <img src="/Frame 634.png" alt="reviews" className="w-full md:w-auto" />
        <img src="/Frame 634.png" alt="reviews" className="w-full md:w-auto" />
      </div>
    </section>
  );
};

export default Attendees;
