import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full bg-white  h-[125px] flex justify-between items-center md:px-[50px] 2xl:px-[80px] px-[20px] border-b border-[#75687E]/30">
      <div className="flex items-center gap-[10px] lg:w-2/5 xl:w-1/2 2xl:w-4/5">
        <img src="/Logo.png" alt="logo" className="w-[80px] h-[80px]" />
        <p className="font-montserrat lg:text-[22px] 2xl:text-[28px] xl:leading-[36px] font-bold">
          Founde&apos;s Friday
        </p>
      </div>

      {/* Hamburger and Close Button for small screens */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <img
            src={menuOpen ? "/close.svg" : "/menu.svg"} // Toggle between hamburger and close icon
            alt={menuOpen ? "close menu" : "open menu"}
            className="w-[40px] h-[40px] z-20"
          />
        </button>
      </div>

      {/* Main Navigation for larger screens */}
      <div className="hidden md:hidden lg:flex w-full ml-[100px] justify-between items-center">
        <ul className="flex justify-between items-center">
          <li className="text-[24px] leading-[24px] text-[#9524FF] font-normal mr-[30px]">
            <a href="/">Home</a>
          </li>
          <li className="text-[24px] leading-[24px] font-normal mr-[30px]">
            <a href="/">About Us</a>
          </li>
          <li className="text-[24px] leading-[24px] font-normal mr-[30px]">
            <a href="/">Gallery</a>
          </li>
          <li className="text-[24px] leading-[24px] font-normal mr-[30px]">
            <a href="/">Contact Us</a>
          </li>
        </ul>
        <button className="flex items-center border border-[#9524FF] text-[#9524FF] font-montserrat text-[20px] font-medium rounded-[20px] px-[20px] py-[10px] gap-[5px]">
          Register
          <img
            src="/arrow-right.png"
            alt="arrow"
            className="w-[20px] h-[20px]"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[105px] left-0 right-0 z-10 bg-white border-t border-[#75687E]/30 p-[20px]">
          <ul className="flex flex-col items-center gap-[20px]">
            <li className="text-[20px] text-[#9524FF] font-normal">
              <a href="/">Home</a>
            </li>
            <li className="text-[20px] font-normal">
              <a href="/">About Us</a>
            </li>
            <li className="text-[20px] font-normal">
              <a href="/">Gallery</a>
            </li>
            <li className="text-[20px] font-normal">
              <a href="/">Contact Us</a>
            </li>
          </ul>
          <button className="flex items-center border border-[#9524FF] text-[#9524FF] font-montserrat text-[18px] font-medium rounded-[15px] px-[20px] py-[10px] mt-[20px] w-full justify-center gap-[5px]">
            Register
            <img
              src="/arrow-right.png"
              alt="arrow"
              className="w-[20px] h-[20px]"
            />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
