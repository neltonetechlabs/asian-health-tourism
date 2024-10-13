"use client";
import React from "react";
import { useEffect, useState } from "react";

interface CounterProps {
  endValue: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ endValue, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = (duration * 1000) / endValue;
    let counter = 0;
    const increment = setInterval(() => {
      counter += 1;
      setCount(counter);
      if (counter >= endValue) {
        clearInterval(increment);
      }
    }, interval);

    return () => clearInterval(increment);
  }, [endValue, duration]);

  return (
    <span
    >
      {count}
    </span>
  );
};

export default Counter;
