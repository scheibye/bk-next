"use client";

import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { cn } from "@/src/lib/cn";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
  { id: 1, label: "Henvendelse" },
  { id: 2, label: "Vurdering" },
  { id: 3, label: "Tilbud" },
  { id: 4, label: "Løbende udbetaling og opfølgning" },
  {
    id: 5,
    label: "Dit byggeprojekt realiseres",
    isLast: true,
  },
];

export function AnimatedStepper() {
  const [activeStep, setActiveStep] = useState(1);

  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { amount: 0.8, once: true });

  useEffect(() => {
    if (!isInView || activeStep >= steps.length) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 750);

    return () => clearInterval(timer);
  }, [activeStep, isInView]);

  return (
    <div
      ref={containerRef}
      className="flex items-start gap-4"
    >
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(215, 215, 215, 0.44) 0%, rgba(222, 222, 222, 0.44) 41.91%, rgba(255, 255, 255, 0.44) 100%)",
        }}
        className="p-3 w-fit flex flex-col gap-8 rounded-full"
      >
        {steps.map((step) => {
          const isActive = step.id === activeStep;
          const isCompleted = step.id < activeStep;

          return (
            <motion.div
              key={step.id}
              className="size-9 shrink-0 rounded-full flex justify-center items-center bg-secondary-background"
              animate={{
                backgroundColor:
                  isActive || isCompleted
                    ? "var(--secondary-green)"
                    : "var(--secondary-background)",
                scale: isActive && !isCompleted ? 1.05 : 1,
              }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {step.isLast ? (
                <motion.div
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    rotate: isActive ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {isActive ? (
                    <Check
                      className="size-5 text-foreground"
                      strokeWidth={2.5}
                    />
                  ) : (
                    <Image
                      src="/finish-icon.svg"
                      width={18}
                      height={18}
                      alt="finish icon"
                    />
                  )}
                </motion.div>
              ) : (
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <BodyText
                    variant="20Medium"
                    className={cn(
                      isActive || isCompleted ? "text-foreground!" : "text-secondary-green!"
                    )}
                  >
                    {step.id}
                  </BodyText>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="py-3 flex flex-col gap-8">
        {steps.map((step) => {
          const isActive = step.id === activeStep;
          const isCompleted = step.id < activeStep;

          return (
            <motion.div
              key={step.id}
              className="h-9 flex items-center"
              animate={{
                opacity: isActive ? 1 : isCompleted ? 1 : 0.7,
                x: isActive ? 4 : 0,
              }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <BodyText
                variant="18"
                className={cn(
                  "transition-colors duration-400",
                  isActive ? "text-brand-primary! font-medium" : "text-brand-primary!"
                )}
              >
                {step.label}
              </BodyText>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
