// ui/dots.tsx
import React from "react";

interface DotsProps {
  count: number;
  activeIndex: number;
}

export const Dots: React.FC<DotsProps> = ({ count, activeIndex }) => {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`h-3 w-3 rounded-full transition-all ${
            activeIndex === i ? "bg-white scale-125" : "bg-gray-500"
          }`}
        ></div>
      ))}
    </div>
  );
};
