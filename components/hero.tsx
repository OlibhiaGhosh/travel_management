"use client";
import React, { useEffect, useRef } from "react";
import TourPackages from "@/components/tour-packages";
import Typed from "typed.js";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import ExploreModal from "@/components/exploremodal";


const Background = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Choose the perfect travel package for you",
        "Get yourself going with Travelia",
        "Get 100+ customized tour packages",
        "50+ trusted travel agencies",
        "Travel anywhere with family",
      ],
      typeSpeed: 30,
      loop: true,
      backSpeed: 30,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-full">
      <section className="mx-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32 ">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl mb-8 h-6">
            <span ref={el} />
          </p>
        </div>
      </section>
    </div>
  );
};

export default function Hero(){
  const isAuthorized = false;

  return (
    <>
      <Background />

      {isAuthorized ? (
        <TourPackages />
      ) : (
        <>
          <div className="flex gap-32 xl:gap-44 justify-center items-center mt-[-90px]">
            <HoverBorderGradient
              containerClassName="rounded-3xl"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-2xl font-semibold px-8"
            >
              <span>
                <ExploreModal />
              </span>
            </HoverBorderGradient>

            <Link href="/start-journey">
              <HoverBorderGradient
                containerClassName="rounded-3xl"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-2xl font-semibold px-8"
              >
                <span>Start Journey</span>
              </HoverBorderGradient>
            </Link>
            <Link href="/info">
              <HoverBorderGradient
                containerClassName="rounded-3xl"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-2xl font-semibold px-8"
              >
                <span>About Us</span>
              </HoverBorderGradient>
            </Link>
          </div>
        </>
      )}
    </>
  );
};
