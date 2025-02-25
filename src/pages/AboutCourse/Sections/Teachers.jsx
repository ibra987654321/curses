import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Teachers = () => {


    const items = [
        {
            name: "Prof. Gary Born",
            location: "(London, United Kingdom)",
            img: "./images/Main/people.png"
        },
        {
            name: "Prof. Gary Born",
            location: "(London, United Kingdom)",
            img: "./images/Main/people.png"
        },
        {
            name: "Prof. Gary Born",
            location: "(London, United Kingdom)",
            img: "./images/Main/people.png"
        },
        {
            name: "Prof. Gary Born",
            location: "(London, United Kingdom)",
            img: "./images/Main/people.png"
        },
        {
            name: "Prof. Gary Born",
            location: "(London, United Kingdom)",
            img: "./images/Main/people.png"
        },
        {
            name: "Prof. Gary Born",
            location: "(London, United Kingdom)",
            img: "./images/Main/people.png"
        },
        {
            name: "Prof. Gary Born",
            location: "(London, United Kingdom)",
            img: "./images/Main/people.png"
        },
        {
            name: "Prof. Gary Born",
            location: "(London, United Kingdom)",
            img: "./images/Main/people.png"
        },
        {
            name: "Prof. Gary Born",
            location: "(London, United Kingdom)",
            img: "./images/Main/people.png"
        },
        {
            name: "Prof. Gary Born",
            location: "(London, United Kingdom)",
            img: "./images/Main/people.png"
        },
    ];

    return (
        <div className="mt-10 relative" style={{ width: '100%' }}>
            <h2 className='font-semibold text-xl'>Teacher</h2>
            <Swiper
                spaceBetween={20}
                navigation={{
                    nextEl: ".swiper-next",
                    prevEl: ".swiper-prev",
                }}
                modules={[Navigation]}
                className="swiper-container"
                breakpoints={{
                    320: { slidesPerView: 2 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                    1280: { slidesPerView: 6.4 },
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="flex flex-col justify-center items-center text-center h-64 rounded-lg p-1 sm:p-4"
                    >
                        <img src={item.img} alt={item.name} className="w-30 h-30 rounded-full object-cover m-auto mb-3" />
                        <p className="text-sm sm:text-lg font-semibold">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.location}</p>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default Teachers;