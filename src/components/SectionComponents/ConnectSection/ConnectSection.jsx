"use client";
import SectionAnimationWrapper from "@/components/Layouts/SectionAnimationWrapper";
import SubHeading from "@/components/UtilityComponents/SubHeading";
import { getComponentTexts } from "@/utilities/commonFunctions";
import React, { use, useState } from "react";

function ConnectSection() {
  const content = getComponentTexts("connectSection");
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailInvalid, setEmailInvalid] = useState(false);

  //   handle input changes
  function handleInputChanges(e, key) {
    let value = e.target.value;
    if (key === "name") {
      value = value.replace(/[^a-zA-Z ]/g, "").slice(0, 30);
    } else if (key === "email") {
      value = value.replace(/[ ]/g, "");
      setEmailInvalid(false);
    } else if (key === "phone") {
      value = value.replace(/[^0-9]/g, "");

      // Logic for phone auto-fill normalization
      if (value.startsWith("+91")) {
        value = value.slice(3);
      } else if (value.startsWith("91") && value?.length > 10) {
        value = value.slice(2);
      } else if (value.startsWith("0")) {
        value = value.slice(1);
      }

      // Ensure it's at most 10 digits
      value = value.slice(0, 10);
    }
    setInputValues((previous) => {
      return { ...previous, [key]: value };
    });
  }

  // Check email validation function
  function checkEmailValidation(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  // form submit
  async function handleSubmit(e) {
    e.preventDefault();
    let emailInvalid = checkEmailValidation(inputValues?.email);
    if (!emailInvalid) {
      setEmailInvalid(true);
      return;
    }
    try {
      e.target.reset();
      setInputValues({ name: "", email: "", message: "" });
      setEmailInvalid(false);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <SectionAnimationWrapper id={"connect-section"}>
      <div className="flex flex-col gap-y-[20px] md:gap-y-[50px]">
        <SubHeading heading={content?.heading} />
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-[19px]">
          <div className="grid grid-flow-col grid-cols-2 gap-x-[20px]">
            <div className="flex flex-col gap-y-[10px]">
              <label
                htmlFor="name"
                className="text-label text-[12px] font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={inputValues?.name}
                onChange={(e) => handleInputChanges(e, "name")}
                placeholder="Your Name"
                className="placeholder:text-placeholder text-input-text bg-input focus:ring-primary-accent rounded-[8px] px-[12px] py-[9.5px] text-[14px] focus:ring-1 focus:outline-none"
              />
            </div>
            <div className="relative flex flex-col gap-y-[10px]">
              <label
                htmlFor="email"
                className="text-label text-[12px] font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={inputValues?.email}
                onChange={(e) => handleInputChanges(e, "email")}
                placeholder="Your@email.com"
                className={`placeholder:text-placeholder text-input-text bg-input focus:ring-primary-accent rounded-[8px] px-[12px] py-[9.5px] text-[14px] focus:ring-1 focus:outline-none ${emailInvalid ? "ring-1 ring-red-500" : ""}`}
              />
              {emailInvalid && (
                <span className="absolute top-full left-0 translate-y-0.5 text-[12px] text-red-500">
                  Please enter a valid email address.
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <label
              htmlFor="message"
              className="text-label text-[12px] font-medium"
            >
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              value={inputValues?.message}
              onChange={(e) => handleInputChanges(e, "message")}
              placeholder="Message"
              className="placeholder:text-placeholder text-input-text bg-input focus:ring-primary-accent min-h-[100px] rounded-[8px] px-[12px] py-[9.5px] text-[14px] focus:ring-1 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-accent text-tertiary-text hover:bg-primary-accent-hover cursor-pointer rounded-[8px] pt-[10.5px] pb-[11.6px] text-center text-[14px] leading-[16.8px] font-semibold transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </SectionAnimationWrapper>
  );
}

export default ConnectSection;
