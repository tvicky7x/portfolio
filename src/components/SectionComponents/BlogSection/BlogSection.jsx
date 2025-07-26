import SectionAnimationWrapper from "@/components/Layouts/SectionAnimationWrapper";
import LinkListContainer from "@/components/UtilityComponents/LinkListContainer";
import MainHeading from "@/components/UtilityComponents/MainHeading";
import { getComponentTexts } from "@/utilities/commonFunctions";
import React from "react";
import blogsHomeJson from "@/data/blogs-home.json";

function BlogSection() {
  const content = getComponentTexts("blogSection");
  return (
    <SectionAnimationWrapper id={"blog-section"}>
      <div className="flex flex-col gap-y-[20px]">
        <MainHeading heading={content?.heading} />
        <ul>
          {blogsHomeJson?.blogs?.map((item, index) => {
            return (
              <li key={index} title={item?.title}>
                <LinkListContainer link={item?.link}>
                  <div className="flex flex-col gap-y-[20px]">
                    <div className="flex max-w-none flex-col gap-y-[13px] md:max-w-[480px]">
                      <p className="text-tertiary-text text-[18px] leading-[120%] font-semibold md:text-[20px] lg:text-[26px]">
                        {item?.title}
                      </p>
                      <p className="max-w-none text-base leading-[140%] md:max-w-[392px]">
                        {item?.description}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-base leading-[110%]">
                        {item?.publishedDate}
                      </p>
                      <p className="text-base leading-[110%]">
                        {item?.readTime} min read
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

export default BlogSection;
