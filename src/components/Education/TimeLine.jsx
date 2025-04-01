import React, { useRef, useState, useEffect } from "react";
import Circle from "./Circle";

const Timeline = ({ items }) => {
  const [lineHeights, setLineHeights] = useState([]);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
      setLineHeights([]); 
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
 
  useEffect(() => {
    if (isLargeScreen) {
      const heights = items.map((_, index) => {
        const item = document.getElementById(`timeline-item-${index}`);
        return item ? item.clientHeight : 0;
      });

      const adjustedHeights = [...heights];
      for (let i = 0; i < heights.length - 1; i += 2) {
        const maxHeight = Math.max(heights[i], heights[i + 1]);
        adjustedHeights[i] = maxHeight;
        adjustedHeights[i + 1] = maxHeight;
      }
      setLineHeights(adjustedHeights);
    } else {
      setLineHeights([]);
    }
  }, [items, isLargeScreen]);

  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            lineHeight={isLargeScreen ? lineHeights[index] || 0 : null}
            isLargeScreen={isLargeScreen}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ item, index, lineHeight, isLargeScreen }) => {
  const descriptionRef = useRef(null);
  const titleRef = useRef(null);
  const [baseLineHeight, setBaseLineHeight] = useState(0);

  useEffect(() => {
    const descriptionElement = descriptionRef.current; 
    
    const calculateLineHeight = () => {
      if (descriptionElement && titleRef.current) {
        const descriptionHeight = descriptionElement.clientHeight;
        const titleHeight = titleRef.current.clientHeight;
        const lineHeightValue = parseInt(window.getComputedStyle(descriptionElement).lineHeight);
        const numberOfLines = Math.ceil(descriptionHeight / lineHeightValue);
        setBaseLineHeight(numberOfLines * lineHeightValue + titleHeight + 8);
      }
    };
  
    const resizeObserver = new ResizeObserver(() => {
      calculateLineHeight();
    });
  
    if (descriptionElement) {
      resizeObserver.observe(descriptionElement);
    }
  
    calculateLineHeight();
  
    return () => {
      if (descriptionElement) {
        resizeObserver.disconnect();
      }
    };
  }, [item.description]);
  

  return (
    <div id={`timeline-item-${index}`} className="relative flex items-start w-full max-w-4xl">
      {isLargeScreen && (
        <div className="relative flex flex-col items-center">
          <Circle />
          {lineHeight !== null && (
            <div
              className="w-0.5 border-l-2 border-dashed border-gray-600 absolute top-1/2 transform -translate-y-5"
              style={{ height: `${lineHeight || baseLineHeight}px` }}
            ></div>
          )}
        </div>
      )}
      <div className="flex-1">
        <h3 ref={titleRef} className="text-lg font-semibold text-gray-800 dark:text-sky-600 ">
          {item.title}
        </h3>
        <p ref={descriptionRef} className="text-sm text-gray-400 mt-1">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default Timeline;



