"use client";
import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
interface MotionDivProps {
  children: ReactNode;
  className?: string;
  animateScript: Variants;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.8,
      duration: 0.6,
    },
  },
};

const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  className,
  animateScript = cardVariants,
}) => {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={animateScript} className={className}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default MotionDiv;
