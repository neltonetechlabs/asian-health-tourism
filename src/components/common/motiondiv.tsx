"use client";
import React, { ReactNode } from "react";
import ScrollAnimation from 'react-animate-on-scroll';

interface MotionDivProps {
  children: ReactNode;
  className?: string;
}

const MotionDiv: React.FC<MotionDivProps> = ({ children, className }) => {
  return <ScrollAnimation animateIn="fadeIn" animateOnce className={className}>{children}</ScrollAnimation>;
};

export default MotionDiv;
