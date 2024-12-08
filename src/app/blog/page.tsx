"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import Header from "@/components/header/Header";
import GroupComponent1 from "@/components/group-component1/GroupComponent1";
import GroupComponent from "@/components/group-component/GroupComponent";

import Shopbottombar from "@/components/shopBottomBar/Shopbottombar";

const Blog: NextPage = () => {
  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
          nextOuterSibling?.querySelector("[data-acc-item]") ||
          nextOuterSibling
        : accItem?.previousElementSibling ||
          prevOuterSibling?.querySelector("[data-acc-item]") ||
          prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "flex";
      const siblingDisplay = "flex";

      const openClasses = ["grid-rows-[1fr]"];
      const closeClasses = ["pt-0", "pb-0", "mb-0", "mt-0", "grid-rows-[0fr]"];

      if (isOpen) {
        accContent?.classList.remove(...openClasses);
        accContent?.classList.add(...closeClasses);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          siblingAccContent?.classList.remove(...closeClasses);
          siblingAccContent?.classList.add(...openClasses);
        }, 1);
      }
    },
    []
  );

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      
      <main className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[58px] box-border max-w-full mq800:pb-5 mq800:box-border mq1325:pb-[25px] mq1325:box-border">
        <GroupComponent1 />
        <section className="self-stretch bg-white flex flex-row items-start justify-start pt-[84px] px-[97px] pb-0 box-border gap-[30px] max-w-full text-left text-xl text-black font-poppins mq800:gap-[15px] mq800:pl-12 mq800:pt-[23px] mq800:pr-12 mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1325:flex-wrap mq1325:pt-9 mq1325:box-border">
          <div className="h-[2710px] w-[1440px] relative bg-white hidden max-w-full" />
          <div className="flex-1 flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border max-w-full mq800:min-w-full">
            <div className="self-stretch flex flex-col items-end justify-start gap-[54px] max-w-full mq450:gap-[27px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[54px] max-w-full z-[1] mq450:gap-[27px]">
                <GroupComponent
                  thumbnailImages="/bloglaptop.png"
                  dashiconsadminUsers="/dashiconsadminusers.svg"
                  uiscalender="/uiscalender.svg"
                  citag="/citag.svg"
                  wood="Wood"
                  goingAllInWithMillennialDesign="Going all-in with millennial design"
                />
                <GroupComponent
                  thumbnailImages="/blogPen.png"
                  dashiconsadminUsers="/dashiconsadminusers-1.svg"
                  uiscalender="/uiscalender-1.svg"
                  citag="/citag-1.svg"
                  wood="Handmade"
                  goingAllInWithMillennialDesign="Exploring new ways of decorating"
                  adminTextDecoration="none"
                  postDatesFlex="1"
                  postDatesMinWidth="79px"
                  postTagsFlex="1"
                  postTagsMinWidth="79px"
                />
                <GroupComponent
                  thumbnailImages="/blogPen1.png"
                  dashiconsadminUsers="/dashiconsadminusers-2.svg"
                  uiscalender="/uiscalender-2.svg"
                  citag="/citag-2.svg"
                  wood="Wood"
                  goingAllInWithMillennialDesign="Handmade pieces that took time to make"
                  adminTextDecoration="unset"
                  postDatesFlex="unset"
                  postDatesMinWidth="unset"
                  postTagsFlex="unset"
                  postTagsMinWidth="unset"
                />
              </div>
              <div className="w-[394px] flex flex-row items-start justify-end py-0 px-px box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap mq450:justify-center">
                  <div className="rounded-3xs bg-primary flex flex-row items-start justify-start py-[15px] pl-[27px] pr-[26px] z-[1] text-white">
                    <div className="h-[60px] w-[60px] relative rounded-3xs bg-primary hidden" />
                    <div className="relative inline-block min-w-[8px] z-[1] mq450:text-base">
                      1
                    </div>
                  </div>
                  <div className="rounded-3xs bg-linen-200 flex flex-row items-start justify-start py-[15px] px-6 z-[1]">
                    <div className="h-[60px] w-[60px] relative rounded-3xs bg-linen-200 hidden" />
                    <div className="relative z-[1] mq450:text-base">2</div>
                  </div>
                  <div className="rounded-3xs bg-linen-200 flex flex-row items-start justify-start py-[15px] px-6 z-[1]">
                    <div className="h-[60px] w-[60px] relative rounded-3xs bg-linen-200 hidden" />
                    <div className="relative z-[1] mq450:text-base">3</div>
                  </div>
                  <button className="cursor-pointer [border:none] py-[15px] pl-7 pr-[27px] bg-linen-200 rounded-3xs flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-100">
                    <div className="h-[60px] w-[98px] relative rounded-3xs bg-linen-200 hidden" />
                    <div className="relative text-xl font-light font-poppins text-black text-left inline-block min-w-[44px] z-[1] mq450:text-base">
                      Next
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[393px] flex flex-col items-start justify-start gap-[41px] max-w-full text-5xl mq800:min-w-full mq450:gap-5 mq1325:flex-1">
            <div className="self-stretch bg-white flex flex-col items-end justify-start pt-[22px] px-[41px] pb-[61px] box-border gap-[43px] max-w-full z-[1] mq800:pt-5 mq800:pb-10 mq800:box-border mq450:gap-[21px]">
              <div className="w-[393px] h-[537px] relative bg-white hidden max-w-full" />
              <div className="self-stretch h-[58px] rounded-3xs bg-white border-darkgray border-[1px] border-solid box-border flex flex-row items-start justify-end py-[15px] px-2.5 z-[1]">
                <div className="h-[58px] w-[311px] relative rounded-3xs bg-white border-darkgray border-[1px] border-solid box-border hidden" />
                <Image
                  className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                  width={24}
                  height={24}
                  alt=""
                  src="/search.png"
                />
              </div>
              <div className="flex-1 flex flex-row items-start justify-end py-0 px-6">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[33px] mq450:gap-4">
                  <h3 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq450:text-lgi">
                    Categories
                  </h3>
                  <div
                    className="self-stretch flex-1 flex flex-col items-start justify-start gap-[41px] text-base text-darkgray"
                    data-acc-group
                  >
                    <div className="w-[251px] h-[154px] flex flex-row items-start justify-start gap-[149px]">
                      <div className="h-[154px] w-[91px] flex flex-col items-start justify-start gap-[41px]">
                        <a className="[text-decoration:none] w-[50px] h-6 relative text-[inherit] inline-block shrink-0 z-[1]">
                          Crafts
                        </a>
                        <div className="w-14 h-6 relative inline-block shrink-0 z-[1]">
                          Design
                        </div>
                        <a className="[text-decoration:none] w-[92px] h-6 relative text-[inherit] inline-block shrink-0 z-[1]">
                          Handmade
                        </a>
                      </div>
                      <div className="h-[154px] w-[11px] flex flex-col items-start justify-start gap-[41px]">
                        <div className="w-[11px] h-6 relative inline-block shrink-0 z-[1]">
                          2
                        </div>
                        <div className="w-3 h-6 relative inline-block shrink-0 z-[1]">
                          8
                        </div>
                        <div className="w-2.5 h-6 relative inline-block shrink-0 z-[1]">
                          7
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-[251px] h-[89px] flex flex-row items-start justify-start gap-[183px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
                      data-acc-item
                      data-acc-open
                      data-acc-header
                      data-acc-original
                      data-acc-default-open
                      onClick={onAccordionHeaderClick}
                    >
                      <div className="h-[89px] w-[57px] flex flex-col items-start justify-start gap-[41px]">
                        <a className="[text-decoration:none] w-[58px] h-6 relative text-[inherit] inline-block shrink-0 z-[1]">
                          Interior
                        </a>
                        <div
                          className="w-12 shrink-0 grid grid-rows-[1fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                          data-acc-content
                        >
                          <div className="w-12 shrink-0 [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                            <div className="w-12 h-6 relative inline-block shrink-0 z-[1]">
                              Wood
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[89px] w-[11px] flex flex-col items-start justify-start gap-[41px]">
                        <div className="w-[7px] h-6 relative inline-block shrink-0 z-[1]">
                          1
                        </div>
                        <div className="w-3 h-6 relative inline-block shrink-0 z-[1]">
                          6
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-[251px] h-[89px] hidden flex-row items-start justify-start gap-[183px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
                      data-acc-item
                      data-acc-header
                      onClick={onAccordionHeaderClick}
                    >
                      <div className="h-[89px] w-[57px] flex flex-col items-start justify-start gap-[41px]">
                        <a className="[text-decoration:none] w-[58px] h-6 relative text-[inherit] inline-block shrink-0 z-[1]">
                          Interior
                        </a>
                        <div
                          className="w-12 shrink-0 grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                          data-acc-content
                        >
                          <div className="w-12 shrink-0 [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                            <div className="w-12 h-6 relative hidden shrink-0 z-[1]">
                              Wood
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[89px] w-[11px] flex flex-col items-start justify-start gap-[41px]">
                        <div className="w-[7px] h-6 relative inline-block shrink-0 z-[1]">
                          1
                        </div>
                        <div className="w-3 h-6 relative inline-block shrink-0 z-[1]">
                          6
                        </div>
                      </div>
                      <div className="relative text-[transparent] hidden" />
                      <div className="absolute w-0 h-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-white flex flex-col items-start justify-start py-4 pl-[76px] pr-[65px] box-border gap-[39px] max-w-full z-[1] text-sm mq450:gap-[19px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="w-[393px] h-[650px] relative bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[26px] text-5xl">
                <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
                  <h3 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq450:text-lgi">
                    Recent Posts
                  </h3>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[39px] text-sm mq450:gap-[19px]">
                  <div className="w-[211px] flex flex-row items-end justify-start gap-3">
                    <Image
                      className="h-20 w-20 relative rounded-3xs object-cover z-[1]"
                      loading="lazy"
                      width={80}
                      height={80}
                      alt=""
                      src="/blog1.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[7px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="relative z-[1]">
                          Going all-in with millennial design
                        </div>
                        <div className="self-stretch relative text-xs text-darkgray z-[1]">
                          03 Aug 2022
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[241px] flex flex-row items-end justify-start gap-3">
                    <Image
                      className="h-20 w-20 relative rounded-3xs object-cover z-[1]"
                      width={80}
                      height={80}
                      alt=""
                      src="/blog2.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[7px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="relative z-[1]">
                          Exploring new ways of decorating
                        </div>
                        <div className="w-[120px] relative text-xs text-darkgray inline-block z-[1]">
                          03 Aug 2022
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-end justify-start gap-3">
                    <Image
                      className="h-20 w-20 relative rounded-3xs object-cover z-[1]"
                      width={80}
                      height={80}
                      alt=""
                      src="/blog3.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[7px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                        <div className="relative z-[1]">
                          Handmade pieces that took time to make
                        </div>
                        <div className="w-[120px] relative text-xs text-darkgray inline-block z-[1]">
                          03 Aug 2022
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[211px] flex flex-row items-end justify-start gap-3">
                <Image
                  className="h-20 w-20 relative rounded-3xs object-cover z-[1]"
                  width={80}
                  height={80}
                  alt=""
                  src="/blog4.png"
                />
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[7px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="relative z-[1]">Modern home in Milan</div>
                    <div className="self-stretch relative text-xs text-darkgray z-[1]">
                      03 Aug 2022
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[211px] flex flex-row items-end justify-start gap-3">
                <Image
                  className="h-20 w-20 relative rounded-3xs object-cover z-[1]"
                  width={80}
                  height={80}
                  alt=""
                  src="/blog5.png"
                />
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[7px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="relative z-[1]">
                      Colorful office redesign
                    </div>
                    <div className="self-stretch relative text-xs text-darkgray z-[1]">
                      03 Aug 2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Shopbottombar />
      {/* <Features /> */}
    </div>
  );
};

export default Blog;
