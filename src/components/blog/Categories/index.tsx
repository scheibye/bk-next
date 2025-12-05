"use client";

import { CategoryBadge } from "@/src/components/blog/CategoryBadge";
import { useEffect, useRef, useState } from "react";

export function CategoriesSwiper() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const atStart = el.scrollLeft === 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

      setShowLeftShadow(!atStart);
      setShowRightShadow(!atEnd);
    };

    handleScroll();
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="px-5 relative mx-auto max-w-7xl">
      {showLeftShadow && (
        <div className="pointer-events-none absolute -left-0.5 top-0 w-10 h-full bg-linear-to-r from-background to-transparent z-10" />
      )}
      {showRightShadow && (
        <div className="pointer-events-none absolute -right-0.5 top-0 w-10 h-full bg-linear-to-l from-background to-transparent z-10" />
      )}

      <div
        ref={scrollRef}
        className="overflow-x-auto flex flex-nowrap gap-2 scrollbar-none"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <CategoryBadge
            key={index}
            isSelected={index === 0}
          >
            Category {index + 1}
          </CategoryBadge>
        ))}
      </div>
    </div>
  );
}
