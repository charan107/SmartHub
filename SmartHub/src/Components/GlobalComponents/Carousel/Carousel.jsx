import React, { useRef, useEffect, useState } from "react";
import "./Carousel.css";

function Carousel({ images, QuickAction }) {
  const carouselRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Button Click Handlers
  const handleLeftClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
    }
  };

  const handleRightClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    }
  };

  // Auto Scroll Effect
  useEffect(() => {
    if (isHovered) return; // Stop scrolling if hovered

    const interval = setInterval(() => {
      if (carouselRef.current) {
        if (
          carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollLeft = 0; // Reset to start
        } else {
          carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
        }
      }
    }, 3000); // Adjust the timing (3 sec)

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      className="carousel-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left and Right Buttons */}
      <button className="carousel-btn left-btn" onClick={handleLeftClick}>
        &#10094;
      </button>
      <button className="carousel-btn right-btn" onClick={handleRightClick}>
        &#10095;
      </button>

      {/* Carousel */}
      <div className="carousel" ref={carouselRef}>
        {images.map((image, index) => (
          <div 
            className="carousel-item" 
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={image.src} alt={image.alt} className="carousel-image" />
            
            {/* Quick Action Buttons */}
            {QuickAction && hoveredIndex === index && (
              <div className="quick-actions">
                <button className="wishlist-btn">⭐ Add to Wishlist</button>
                <button className="preview-btn">📖 Quick Preview</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
