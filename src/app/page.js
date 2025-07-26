import MainLayout from "@/components/Layouts/MainLayout";
import ProfileCard from "@/components/SectionComponents/ProfileCard/ProfileCard";
import React from "react";

function page() {
  return (
    <MainLayout>
      <div className="flex lg:flex-row flex-col gap-x-0 lg:gap-x-[100px]">
        <div className="w-full max-w-none lg:max-w-[344px]">
          <div className="sticky top-[40px]">
            <ProfileCard />
          </div>
        </div>
        <div className="grow linkColor"></div>
      </div>
    </MainLayout>
  );
}

export default page;
