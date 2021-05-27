import React, { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner: FC = () => (
  <div className="relative">
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={5000}>
      {banners.map(banner => (
        <div key={banner}>
          <img src={banner} alt={banner} />
        </div>
      ))}
    </Carousel>
    <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0" />
  </div>
);

export default Banner;

const banners = ['banner-1.jpg', 'banner-2.jpg', 'banner-3.jpg', 'banner-4.jpg', 'banner-5.jpg'];
