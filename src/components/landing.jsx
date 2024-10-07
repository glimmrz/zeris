"use client";

import { useEffect, useState } from "react";
import { Heading } from "./heading";
import { Section } from "./section";

export function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const words = ["people", "businesses", "things"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <div className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center">
      <video
        src={require("../assets/bg.mp4")}
        autoPlay
        loop
        className="absolute top-0 left-0 w-full h-[70vh] md:h-[80vh] object-cover z-[-1]"
      />
      <Section>
        <Heading className="text-center leading-snug md:leading-relaxed text-4xl text-background">
          <span className="sr-only">
            We bring people and technology together to change{" "}
            {words[currentIndex]} for the better.
          </span>
          <span aria-hidden="true">
            We bring people and <br /> technology together to <br />{" "}
            <span className="transition-transform duration-300">change</span>{" "}
            <span className="inline-flex items-center justify-center">
              <span
                className={`text-foreground inline-block transition-all duration-1000 ease-in-out ${
                  isAnimating ? "opacity-0 scale-75" : "opacity-100 scale-100"
                }`}
                style={{ transformOrigin: "center" }}
              >
                {words[currentIndex]}
              </span>
            </span>
            <br />
            for the better.
          </span>
        </Heading>
      </Section>
    </div>
  );
}