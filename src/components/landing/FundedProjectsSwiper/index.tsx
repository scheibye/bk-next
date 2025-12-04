"use client";

import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { FundedProjectCard } from "@/src/components/landing/FundedProjectCard";
import { FUNDED_PROJECTS } from "@/src/data/fundedProjects";

interface Props {
  onSwiper?: (swiper: SwiperType) => void;
  onSlideChange?: (swiper: SwiperType) => void;
}

export function FundedProjectsSwiper({ onSwiper, onSlideChange }: Props) {
  return (
    <Swiper
      onSwiper={onSwiper}
      onSlideChange={onSlideChange}
      speed={1000}
      grabCursor
      resistance
      resistanceRatio={0.9}
      className="[&_.swiper-slide]:h-auto!"
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {FUNDED_PROJECTS.map((item, index) => (
        <SwiperSlide
          key={index}
          className="h-auto!"
        >
          <FundedProjectCard
            item={item}
            className="h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
