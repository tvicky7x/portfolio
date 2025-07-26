import SectionAnimationWrapper from "@/components/Layouts/SectionAnimationWrapper";
import SubHeading from "@/components/UtilityComponents/SubHeading";
import { getComponentTexts } from "@/utilities/commonFunctions";
import React from "react";

function ExperienceSection({ experienceList }) {
  const content = getComponentTexts("experienceSection");
  return (
    <SectionAnimationWrapper id={"experience-section"}>
      <div className="flex flex-col gap-y-[20px]">
        <SubHeading heading={content?.heading} />
        <ul>
          {experienceList?.map((item, index) => {
            return (
              <li
                key={index}
                className="flex flex-col gap-y-[20px] rounded-[16px] px-[8px] py-[16px] md:px-[16px] md:py-[24px]"
              >
                <div className="flex max-w-none flex-col gap-y-[13px] md:max-w-[420px]">
                  <p className="text-tertiary-text text-[18px] leading-[120%] font-semibold md:text-[20px] lg:text-[26px]">
                    {item?.company}
                  </p>
                  <p className="text-base leading-[140%]">
                    {item?.description}
                  </p>
                </div>
                <p className="text-base leading-[110%]">{item?.duration}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </SectionAnimationWrapper>
  );
}

export default ExperienceSection;
