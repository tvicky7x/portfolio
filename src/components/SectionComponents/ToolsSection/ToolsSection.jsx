import SectionAnimationWrapper from "@/components/Layouts/SectionAnimationWrapper";
import { getComponentTexts } from "@/utilities/commonFunctions";
import React from "react";
import Link from "next/link";
import SubHeading from "@/components/UtilityComponents/SubHeading";

function ToolsSection({ toolsList }) {
  const content = getComponentTexts("toolsSection");
  return (
    <SectionAnimationWrapper id={"tools-section"}>
      <div className="flex flex-col gap-y-[20px]">
        <SubHeading heading={content?.heading} />
        <ul className="grid grid-flow-row grid-cols-1 gap-[10px] md:grid-cols-3 lg:grid-cols-2">
          {toolsList?.map((item, index) => {
            return (
              <li key={index} title={item?.name}>
                <Link
                  href={item?.link}
                  target="_blank"
                  className="flex items-center gap-x-[16px] rounded-[8px] p-[16px] transition-all duration-300 ease-in-out hover:bg-white/[0.03]"
                >
                  <div
                    style={{
                      background: `url(${item?.imageUrl})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    className="aspect-square w-[60px] shrink-0 rounded-[8px]"
                  ></div>
                  <div className="flex flex-col gap-y-[3px]">
                    <p className="text-tertiary-text text-[24px] leading-[120%] font-semibold">
                      {item?.name}
                    </p>
                    <p className="text-base leading-[140%]">
                      {item?.description}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </SectionAnimationWrapper>
  );
}

export default ToolsSection;
