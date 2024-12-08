import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer1: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] h-[505px] flex flex-row items-start justify-start pt-12 px-[100px] pb-[38px] box-border relative text-left text-5xl text-black font-poppins ${className}`}
    >
      <div className="h-[calc(100%_+_0.5px)] w-full absolute !m-[0] top-[0px] right-[0px] bottom-[-0.5px] left-[0px] bg-white border-gray-200 border-t-[1px] border-solid box-border z-[0]" />
      <div className="h-[419px] w-[1240px] flex flex-col items-start justify-start gap-12 z-[1]">
        <div className="w-[1133px] h-[312px] flex flex-row items-start justify-start gap-[136px]">
          <div className="h-[158px] w-[287px] flex flex-col items-start justify-start gap-[50px]">
            <h3 className="m-0 w-[86px] h-9 relative text-inherit font-bold font-[inherit] inline-block shrink-0 z-[2]">
              Funiro.
            </h3>
            <div className="w-[287px] h-[72px] flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border z-[1] text-base text-darkgray">
              <div className="w-[285px] relative inline-block shrink-0">
                <p className="m-0">
                  400 University Drive Suite 200 Coral Gables,
                </p>
                <p className="m-0">FL 33134 USA</p>
              </div>
            </div>
          </div>
          <div className="h-[312px] w-[710px] flex flex-row items-start justify-start gap-[72px] text-base text-darkgray">
            <div className="h-[312px] w-[352px] flex flex-row items-start justify-start gap-36">
              <div className="h-[312px] w-[68px] flex flex-col items-start justify-start gap-[55px]">
                <div className="w-[41px] h-6 relative font-medium inline-block shrink-0 z-[2]">
                  Links
                </div>
                <div className="w-[68px] h-[233px] flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border z-[1] text-black">
                  <div className="h-[233px] w-[66px] flex flex-col items-start justify-start gap-[45.7px]">
                    <div className="w-[49px] h-6 relative font-medium inline-block shrink-0">
                      Home
                    </div>
                    <div className="w-[43px] h-6 relative font-medium inline-block shrink-0">
                      Shop
                    </div>
                    <a className="[text-decoration:none] w-[50px] h-6 relative font-medium text-[inherit] inline-block shrink-0">
                      About
                    </a>
                    <div className="w-[67px] h-6 relative font-medium inline-block shrink-0">
                      Contact
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[242px] w-[140px] flex flex-col items-start justify-start gap-[55px]">
                <div className="w-[38px] h-6 relative font-medium inline-block shrink-0">
                  Help
                </div>
                <div className="w-[140px] h-[163px] flex flex-col items-start justify-start gap-[45.5px] text-black">
                  <div className="w-[141px] h-6 relative font-medium inline-block shrink-0">
                    Payment Options
                  </div>
                  <div className="w-[63px] h-6 relative font-medium inline-block shrink-0">
                    Returns
                  </div>
                  <div className="w-[125px] h-6 relative font-medium inline-block shrink-0">
                    Privacy Policies
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[103px] w-[286px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="w-[286px] h-[101px] flex flex-col items-start justify-start gap-[53px]">
                <div className="w-[87px] h-6 relative font-medium inline-block shrink-0">
                  Newsletter
                </div>
                <div className="w-[286px] h-6 flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border gap-[3px] text-sm">
                  <div className="w-[286px] h-[21px] flex flex-row items-start justify-start gap-[38px] shrink-0">
                    <div className="h-[21px] w-[174px] relative inline-block shrink-0">
                      Enter Your Email Address
                    </div>
                    <div className="h-[21px] w-[76px] relative font-medium text-black inline-block shrink-0">
                      SUBSCRIBE
                    </div>
                  </div>
                  <div className="w-[286px] h-0.5 flex flex-row items-start justify-start pt-0 px-0 pb-0.5 box-border gap-[11px] shrink-0">
                    <div className="w-[202px] relative border-black border-t-[1px] border-solid box-border h-0.5" />
                    <div className="w-[77px] relative border-black border-t-[1px] border-solid box-border h-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1240px] h-[59px] flex flex-col items-start justify-start gap-[35px] text-base">
          <div className="w-[1241px] h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border" />
          <div className="w-[241px] h-6 flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border">
            <div className="h-6 w-60 relative inline-block shrink-0">
              2023 furino. All rights reverved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
