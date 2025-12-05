"use client";

import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { FundedProjectCard } from "@/src/components/landing/FundedProjectCard";
import { AnimatedContainer } from "@/src/components/shared/AnimatedContainer";
import { FUNDED_PROJECTS } from "@/src/data/fundedProjects";
import { useState } from "react";

interface Props {
  onSwiper?: (swiper: SwiperType) => void;
  onSlideChange?: (swiper: SwiperType) => void;
}

export function FundedProjectsSwiper({ onSwiper, onSlideChange }: Props) {
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setHasInteracted(true);
    onSlideChange?.(swiper);
  };

  return (
    <Swiper
      onSwiper={onSwiper}
      onSlideChange={handleSlideChange}
      speed={1000}
      grabCursor
      resistance
      resistanceRatio={0.9}
      className="[&_.swiper-slide]:h-auto!"
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 16 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      }}
    >
      {FUNDED_PROJECTS.map((item, index) => (
        <SwiperSlide
          key={index}
          className="h-auto!"
        >
          {hasInteracted ? (
            <FundedProjectCard
              item={item}
              className="h-full"
            />
          ) : (
            <AnimatedContainer
              preset="fadeUp"
              delay={index * 0.15}
              duration={0.6}
              className="h-full"
            >
              <FundedProjectCard
                item={item}
                className="h-full"
              />
            </AnimatedContainer>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
