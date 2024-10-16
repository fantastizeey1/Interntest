import React from "react";

const Kaduna = () => {
  return (
    <section className="bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat w-full h-[500px] md:h-[808px] flex items-center justify-center mt-16">
      <div className="max-w-[95%] w-full px-4 md:px-[80px] relative mt-10 md:mt-[50px] gap-6 flex flex-col lg:flex-row justify-between items-center">
        {/* Text Section */}
        <div className="w-full lg:w-3/5 flex flex-col items-center md:items-start text-center lg:text-left">
          <h3 className="text-[#EBE9ED] text-[22px] sm:text-[28px] md:text-[35px] 2xl:text-[50px] leading-[28px] sm:leading-[34px] md:leading-[62.5px] font-bold mb-2 md:mb-4">
            Founders Friday is coming to
          </h3>
          <h2 className="text-[80px] sm:text-[40px] lg:text-[128px] text-[#A649FF] leading-[100px] sm:leading-[48px] md:leading-[160px] font-bold">
            Kaduna
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[20px] 2xl:text-[24px] leading-[20px] sm:leading-[22px] md:leading-[29px] font-normal text-[#EBE9ED] mb-4 md:mb-[25px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
            dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
            suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
            turpis. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas.
          </p>
          <button className="md:w-1/2 2xl:w-1/2 w-3/4 border-2 border-[#A649FF] text-[#A649FF] px-4 sm:px-[50px] py-3 md:py-[20px] rounded-[30px] md:rounded-[40px] flex items-center justify-center justify-self-center gap-5 text-[16px] sm:text-[18px] md:text-[24px] font-bold">
            Register
            <img src="/ArrowRightpurple.png" alt="Arrow" />
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full hidden  lg:w-1/2 lg:flex justify-end mt-6 lg:mt-0">
          <img
            src="/Logo.png"
            alt="Founders Friday Logo"
            className=" lg:w-[500px] 2xl:max-w-[595px] 2xl:h-[554px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Kaduna;
