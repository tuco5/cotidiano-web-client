/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';

interface CarouselProps {
  slidesToShow?: number;
  interval?: number;
  className?: string;
  children: React.ReactNode[] | React.ReactNode;
}

export function Carousel({interval = 3000, children, className}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (Array.isArray(children)) {
      const intervalId = setInterval(
        () => setCurrentSlide(prevState => (prevState + 1) % children.length),
        interval
      );
      return () => clearInterval(intervalId);
    }
  }, []);

  if (!Array.isArray(children)) return <div className={className}>{children}</div>;

  return (
    <div className={className}>
      <div className="relative h-full w-full overflow-hidden">
        {children.map((slide, i) => {
          return (
            <div
              key={i}
              className={`h-full w-full transition-all duration-1000 ${
                i === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {slide}
            </div>
          );
        })}
      </div>
    </div>
  );
}
