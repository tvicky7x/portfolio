import MainLayout from "@/components/Layouts/MainLayout";
import BlogSection from "@/components/SectionComponents/BlogSection/BlogSection";
import ConnectSection from "@/components/SectionComponents/ConnectSection/ConnectSection";
import ExperienceSection from "@/components/SectionComponents/ExperienceSection/ExperienceSection";
import HeroSection from "@/components/SectionComponents/HeroSection/HeroSection";
import ProfileCard from "@/components/SectionComponents/ProfileCard/ProfileCard";
import RecentProjectsSection from "@/components/SectionComponents/RecentProjectsSection/RecentProjectsSection";
import ToolsSection from "@/components/SectionComponents/ToolsSection/ToolsSection";
import React from "react";
import recentProjectsHomeJson from "@/data/recent-projects-home.json";
import experienceHomeJson from "@/data/experience-home.json";
import toolsHomeJson from "@/data/tools-home.json";
import blogsHomeJson from "@/data/blogs-home.json";

function page() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-[40px] lg:flex-row lg:gap-[50px] 2xl:gap-[100px]">
        <div className="w-full max-w-none shrink-0 lg:max-w-[344px]">
          <div className="sticky top-[40px]">
            <ProfileCard />
          </div>
        </div>
        <div className="flex grow flex-col gap-y-[80px] md:gap-y-[90px] lg:gap-y-[120px]">
          <HeroSection />
          <RecentProjectsSection
            projectsList={recentProjectsHomeJson?.recentProjects}
          />
          <ExperienceSection experienceList={experienceHomeJson?.experiences} />
          <ToolsSection toolsList={toolsHomeJson?.tools} />
          <BlogSection blogsList={blogsHomeJson?.blogs} />
          <ConnectSection />
        </div>
      </div>
    </MainLayout>
  );
}

export default page;
