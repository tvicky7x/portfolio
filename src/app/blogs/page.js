import MainLayout from "@/components/Layouts/MainLayout";
import BlogSection from "@/components/SectionComponents/BlogSection/BlogSection";
import ConnectSection from "@/components/SectionComponents/ConnectSection/ConnectSection";
import ProfileCard from "@/components/SectionComponents/ProfileCard/ProfileCard";
import React from "react";
import blogsJson from "@/data/blogs.json";
import { notFound } from "next/navigation";

function page() {
  return notFound();
  return (
    <MainLayout>
      <div className="flex flex-col gap-[40px] lg:flex-row lg:gap-[50px] 2xl:gap-[100px]">
        <div className="order-2 w-full max-w-none shrink-0 lg:order-1 lg:max-w-[344px]">
          <div className="sticky top-[40px]">
            <ProfileCard />
          </div>
        </div>
        <div className="order-1 flex grow flex-col gap-y-[80px] md:gap-y-[90px] lg:order-2 lg:gap-y-[120px]">
          <BlogSection blogsList={blogsJson?.blogs} />
          <ConnectSection />
        </div>
      </div>
    </MainLayout>
  );
}

export default page;
