'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './about.css';

import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

import carData from '@/data/carData';
import Button from '../Button';

export default function AboutComponent() {
    const [active, setActive] = useState(false);

    const handleToggleVideo = () => {
        setActive(!active);
    };

    return (
        <div className='mt-20'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                navigation={true}
                loop={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 35,
                    stretch: 200,
                    depth: 250,
                    modifier: 1,
                    slideShadows: true,
                }}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false
                // }}
                modules={[EffectCoverflow, Navigation, Autoplay]}
                className='carSwiper'
            >
                {carData.map(car => (
                    <SwiperSlide key={car.id}>
                        <div className="carSlider">
                            <img src={car.img} alt='car Image' />
                            <div className={`video ${active ? 'active' : undefined}`}>
                                <iframe
                                    width="1280"
                                    height="720"
                                    src={car.trailer}
                                    title={car.title}
                                    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
                                    allowFullScreen
                                />
                            </div>
                            <div className="content">
                                <h2>{car.title}</h2>
                                <p>{car.description}</p>
                                <div className="buttons">
                                    <Button btnClass="btn-primary text-white mt-2" title="Order Now" />
                                    <a
                                        href="#"
                                        className={`playBtn ${active ? 'active' : undefined}`}
                                        onClick={handleToggleVideo}
                                    >
                                        <span className='pause'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
                                                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5" />
                                            </svg>
                                        </span>
                                        <span className="play">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}