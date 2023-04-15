import {useRef, useState, useEffect} from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface NavCarouselProps {
  slides: string[];
  className?: string;
}

export function NavCarousel({className, slides}: NavCarouselProps) {
  const [nav1, setNav1] = useState<Slider | null>();
  const [nav2, setNav2] = useState<Slider | null>();
  const slider1 = useRef<Slider>(null);
  const slider2 = useRef<Slider>(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <div className={className}>
      <Slider ref={slider1} arrows={false} asNavFor={nav2!} className="mb-1">
        {slides.map(slide => (
          <div key={slide} className="relative  h-[50vw] w-full">
            <Image src={slide} alt="preview" fill style={{objectFit: 'cover'}} />
          </div>
        ))}
      </Slider>
      <Slider
        ref={slider2}
        asNavFor={nav1!}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        arrows={false}
        className=" w-[99vw]"
      >
        {slides.map(slide => (
          <div key={slide} className="relative flex h-[18vw] overflow-hidden">
            <Image
              className="relative ml-1"
              src={slide}
              alt="preview"
              fill
              style={{objectFit: 'cover'}}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
