"use client";

import { FundedProjectsSwiper } from "@/src/components/landing/FundedProjectsSwiper";
import { AnimatedContainer } from "@/src/components/shared/AnimatedContainer";
import { Container } from "@/src/components/shared/Container";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

export function FundedProjectsSection() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const handleSwiper = (swiperInstance: SwiperType) => {
    setSwiper(swiperInstance);
    setTotalSlides(swiperInstance.slides.length);
  };

  const handleSlideChange = (swiperInstance: SwiperType) => {
    setActiveIndex(swiperInstance.realIndex);
  };

  return (
    <Container
      as="section"
      className="py-12.5"
    >
      <Container variant="inner">
        <AnimatedContainer
          preset="fadeUp"
          duration={0.8}
          className="mb-7.5 md:mb-12.5 flex items-center justify-between gap-4"
        >
          <Headline
            as="h2"
            variant="h2"
            className="w-full text-center md:text-left text-secondary-foreground!"
          >
            Projekter vi har finansieret
          </Headline>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => swiper?.slidePrev()}
              className="group size-14 bg-secondary-background hover:bg-secondary-orange active:bg-secondary-orange rounded-full border border-gray-500 flex justify-center items-center transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft className="size-6 text-secondary-orange-100 group-hover:text-foreground" />
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className="group size-14 bg-secondary-background hover:bg-secondary-orange active:bg-secondary-orange rounded-full border border-gray-500 flex justify-center items-center transition-all duration-300 cursor-pointer"
            >
              <ArrowRight className="size-6 text-secondary-orange-100 group-hover:text-foreground" />
            </button>
          </div>
        </AnimatedContainer>

        <FundedProjectsSwiper
          onSwiper={handleSwiper}
          onSlideChange={handleSlideChange}
        />

        <AnimatedContainer
          preset="fadeUp"
          delay={0.3}
          className="mt-7.5 md:hidden flex items-center justify-center gap-4"
        >
          <button
            onClick={() => swiper?.slidePrev()}
            className="group size-14 bg-secondary-background hover:bg-secondary-orange active:bg-secondary-orange rounded-full border border-gray-500 flex justify-center items-center transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="size-6 text-secondary-orange-100 group-hover:text-foreground" />
          </button>

          <BodyText className="text-gray-900!">
            {activeIndex + 1}/{totalSlides}
          </BodyText>

          <button
            onClick={() => swiper?.slideNext()}
            className="group size-14 bg-secondary-background hover:bg-secondary-orange active:bg-secondary-orange rounded-full border border-gray-500 flex justify-center items-center transition-all duration-300 cursor-pointer"
          >
            <ArrowRight className="size-6 text-secondary-orange-100 group-hover:text-foreground" />
          </button>
        </AnimatedContainer>
      </Container>
    </Container>
  );
}
