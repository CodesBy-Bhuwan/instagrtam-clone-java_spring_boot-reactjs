import React, { useEffect, useState } from "react";
import "./Progressbar.css";

// When clicked on stories the content must be displayed
const Progressbar = ({ index, activeIndex, duration }) => {
  const [ progress, setProgress ] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        clearInterval(interval);
        return prevProgress;
      });
    }, duration / 100);

    return () => {
      clearInterval(interval);
    };
  }, [duration, activeIndex]);

  useEffect(() => {
    setProgress(0);
  }, [activeIndex]);

  const isActive = index === activeIndex;
  return (
    <div className={`progress-bar-container ${isActive?"active":""}`}>

      <div
        className={`${isActive ? "progressive-bar" : ""}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default Progressbar;
