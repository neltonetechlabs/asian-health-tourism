"use client";
import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { cardVariants } from "@/utils/cardanimate";
interface MotionDivProps {
  children: ReactNode;
  className?: string;
  animateScript?: Variants;
}


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
