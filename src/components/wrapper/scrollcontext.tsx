"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode } from "react";


const ScrollContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return <ReactLenis root>{children}</ReactLenis>;
};

export default ScrollContext;
