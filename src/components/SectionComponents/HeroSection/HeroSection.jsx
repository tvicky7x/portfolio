import SectionAnimationWrapper from "@/components/Layouts/SectionAnimationWrapper";
import MainHeading from "@/components/UtilityComponents/MainHeading";
import Para from "@/components/UtilityComponents/Para";
import { getComponentTexts } from "@/utilities/commonFunctions";
import React from "react";
import IndividualMatrix from "./IndividualMatrix";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";

function HeroSection() {
  const content = getComponentTexts("heroSection");

  return (
    <SectionAnimationWrapper id={"hero-section"}>
      <div className="flex flex-col gap-y-[60px]">
        <div className="flex flex-col gap-y-[10px]">
          <MainHeading heading={content?.heading} />
          <Para para={content?.para} className={"w-[480px]"} />
        </div>
        <div className="flex flex-wrap justify-start gap-x-[40px]">
          {content?.matrixList?.map((matrix, index) => {
            return <IndividualMatrix key={index} matrix={matrix} />;
          })}
        </div>
        <div className="grid grid-flow-col grid-cols-2 gap-x-[30px]">
          <CardOne cardDetail={content?.cardList[0]} />
          <CardTwo cardDetail={content?.cardList[1]} />
        </div>
      </div>
    </SectionAnimationWrapper>
  );
}

export default HeroSection;
