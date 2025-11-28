"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { FundedProjectCard } from "@/src/components/landing/FundedProjectCard";
import { FUNDED_PROJECTS } from "@/src/data/fundedProjects";

export function FundedProjectsSwiper() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
    >
      {FUNDED_PROJECTS.map((item, index) => (
        <SwiperSlide key={index}>
          <FundedProjectCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
