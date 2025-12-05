"use client";

import { HTMLMotionProps, motion, TargetAndTransition, Variants } from "framer-motion";
import { forwardRef } from "react";

type AnimationPreset = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "fadeIn" | "scale";

const presets: Record<
  AnimationPreset,
  { initial: TargetAndTransition; animate: TargetAndTransition }
> = {
  fadeUp: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
  fadeDown: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 } },
  fadeLeft: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
  fadeRight: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
  fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  scale: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
};

const staggerPresets: Record<AnimationPreset, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  },
  fadeRight: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  },
};

const motionComponents = {
  div: motion.div,
  span: motion.span,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  header: motion.header,
  footer: motion.footer,
  main: motion.main,
  nav: motion.nav,
  ul: motion.ul,
  li: motion.li,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
} as const;

type SupportedElement = keyof typeof motionComponents;

interface Props extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "variants"> {
  as?: SupportedElement;
  preset?: AnimationPreset;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  staggerItem?: boolean;
}

export const AnimatedContainer = forwardRef<HTMLElement, Props>(
  (
    {
      as = "div",
      preset = "fadeUp",
      delay = 0,
      duration = 0.6,
      once = true,
      amount = 0.2,
      staggerItem = false,
      children,
      ...props
    },
    ref
  ) => {
    const MotionComponent = motionComponents[as] as typeof motion.div;

    if (staggerItem) {
      return (
        <MotionComponent
          ref={ref as React.Ref<HTMLDivElement>}
          variants={staggerPresets[preset]}
          {...props}
        >
          {children}
        </MotionComponent>
      );
    }

    const { initial, animate } = presets[preset];

    return (
      <MotionComponent
        ref={ref as React.Ref<HTMLDivElement>}
        initial={initial}
        whileInView={animate}
        viewport={{ once, amount }}
        transition={{ delay, duration, ease: "easeOut" }}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }
);

AnimatedContainer.displayName = "AnimatedContainer";
