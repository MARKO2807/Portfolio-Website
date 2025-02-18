import React, { useRef, useEffect, useState } from "react";
import "./FadeInSection.css";

const FadeInSection = ({ children, className = "" }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${
        isVisible ? "is-visible" : ""
      } ${className}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
