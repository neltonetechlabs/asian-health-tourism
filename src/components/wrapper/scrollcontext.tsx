"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";


const ScrollContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return <ReactLenis root>{children}</ReactLenis>;
};

export default ScrollContext;
