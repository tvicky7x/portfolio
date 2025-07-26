"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionAnimationWrapper({ children, id }) {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#${id}`,
          start: "top center",
          end: "bottom center",
        },
      })
      .fromTo(
        `#${id}`,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
  }, [id]);

  return <section id={id}>{children}</section>;
}

export default SectionAnimationWrapper;
