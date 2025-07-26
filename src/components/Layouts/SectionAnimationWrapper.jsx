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
          start: "top bottom-=200",
        },
      })
      .fromTo(
        `#${id}`,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1 },
      );
  }, [id]);

  return (
    <section id={id} style={{ opacity: "0" }}>
      {children}
    </section>
  );
}

export default SectionAnimationWrapper;
