"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

export function TestimonialCard({ imgSrc, name, position, text }: any) {
  return (
    <div>
      <BackgroundGradient>
      <div className="relative w-[360px] h-auto rounded-xl p-6 shadow-lg overflow-hidden bg-white">
      <div className="flex items-center mb-4">
        <img src={imgSrc} alt={name} className="w-14 h-14 rounded-full mr-4" />
        <div>
          <div className="text-lg font-semibold text-black">{name}</div>
          <div className="text-sm text-gray-500">{position}</div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-[-10px] left-[-10px] text-5xl text-gray-200">“</div>
        <div className="text-gray-700 ml-6">{text}</div>
      </div>
    </div>
      {/* <Image
          src=""
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button> */}
      </BackgroundGradient>
    </div>
  );
}
