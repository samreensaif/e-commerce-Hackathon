"use client"

import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Cart Sidebar" to the project
  }, []);

  return (
    <header
      className={`w-[1440px] h-[100px] flex flex-row items-start justify-start pt-[29px] px-[54px] pb-[30px] box-border relative text-left text-15xl text-black font-montserrat ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-white z-[0]" />
      <div className="h-[41px] w-[1286px] flex flex-row items-end justify-start z-[1]">
        <div
          className="h-[41px] w-[1286px] flex flex-row items-end justify-start gap-[854px] cursor-pointer z-[2]"
          onClick={onGroupContainerClick}
        >
          <div className="h-[41px] w-[185px] flex flex-row items-start justify-start gap-[5px] z-[2]">
            <div className="h-[36.5px] w-[50px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border">
              <Image
                className="w-[50px] h-8 relative object-cover"
                loading="lazy"
                width={50}
                height={32}
                alt=""
                src="/meubel-house-logos05@2x.png"
              />
            </div>
            <a className="[text-decoration:none] h-[41px] w-[131px] relative font-bold text-[inherit] inline-block shrink-0">
              Furniro
            </a>
          </div>
          <div className="h-[34px] w-[247px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border z-[1]">
            <div className="w-[247px] h-7 flex flex-row items-start justify-start gap-[45px]">
              <Image
                className="h-7 w-7 relative overflow-hidden shrink-0"
                loading="lazy"
                width={28}
                height={28}
                alt=""
                src="/mdiaccountalertoutline.svg"
              />
              <Image
                className="h-7 w-7 relative overflow-hidden shrink-0"
                loading="lazy"
                width={28}
                height={28}
                alt=""
                src="/akariconssearch.svg"
              />
              <Image
                className="h-7 w-7 relative overflow-hidden shrink-0"
                loading="lazy"
                width={28}
                height={28}
                alt=""
                src="/akariconsheart.svg"
              />
              <Image
                className="h-7 w-7 relative overflow-hidden shrink-0"
                loading="lazy"
                width={28}
                height={28}
                alt=""
                src="/antdesignshoppingcartoutlined.svg"
              />
            </div>
          </div>
        </div>
        <nav className="m-0 h-8 w-[430px] flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border z-[1] ml-[-835px]">
          <nav className="m-0 w-[430px] h-6 flex flex-row items-start justify-start gap-[75px] text-left text-base text-black font-poppins">
            <a className="[text-decoration:none] h-6 w-[49px] relative font-medium text-[inherit] inline-block shrink-0">
              Home
            </a>
            <a className="[text-decoration:none] h-6 w-[43px] relative font-medium text-[inherit] inline-block shrink-0">
              Shop
            </a>
            <a className="[text-decoration:none] h-6 w-[50px] relative font-medium text-[inherit] inline-block shrink-0">
              About
            </a>
            <a className="[text-decoration:none] h-6 w-[67px] relative font-medium text-[inherit] inline-block shrink-0">
              Contact
            </a>
          </nav>
        </nav>
      </div>
    </header>
  );
};

export default Header;
