import SectionAnimationWrapper from "@/components/Layouts/SectionAnimationWrapper";
import LinkListContainer from "@/components/UtilityComponents/LinkListContainer";
import { getComponentTexts } from "@/utilities/commonFunctions";
import React from "react";
import staticRoutes from "@/utilities/staticRoutes";
import SubHeading from "@/components/UtilityComponents/SubHeading";

async function RecentProjectsSection({ projectsList }) {
  const content = getComponentTexts("recentProjectsSection");
  return (
    <SectionAnimationWrapper id={"recent-projects-section"}>
      <div className="flex flex-col gap-y-[20px]">
        <SubHeading heading={content?.heading} />
        <ul>
          {projectsList?.map((item, index) => {
            return (
              <li key={index} title={item?.title}>
                <LinkListContainer
                  // link={`${staticRoutes?.projects}${item?.link}`}
                  link={`${item?.projectLink}`}
                  target="_blank"
                >
                  <div className="flex gap-x-[20px]">
                    <div
                      style={{
                        background: `url(${item?.imageUrl})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                      className="aspect-[130_/_134] w-[90px] shrink-0 rounded-[8px] md:w-[130px]"
                    ></div>
                    <div className="flex flex-col gap-y-[3px] self-center">
                      <p className="text-tertiary-text text-[18px] leading-[120%] font-semibold md:text-[20px] lg:text-[26px]">
                        {item?.title}
                      </p>
                      <p className="text-base leading-[140%]">
                        {item?.smallDescription}
                      </p>
                    </div>
                  </div>
                </LinkListContainer>
              </li>
            );
          })}
        </ul>
      </div>
    </SectionAnimationWrapper>
  );
}

export default RecentProjectsSection;
