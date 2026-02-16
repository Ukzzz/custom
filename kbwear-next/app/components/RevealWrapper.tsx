"use client";

import { useEffect, useRef } from "react";

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function RevealWrapper({ children, className = "", delay = 0 }: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("in-view");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  // Combine component-specific classes with 'reveal' class required for animation
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
