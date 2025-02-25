import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Third = () => {

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
    ];

    return (
        <section className="bg-white py-16 px-6 sm:px-12 md:px-16 lg:px-24 text-black text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold uppercase ">Meet Our International Arbitration Icons</h2>
            <p className="text-lg sm:text-sm mt-4 text-gray-600">
                Online Arbitration Academy – Shaping Global Experts, One Case at a Time.
            </p>

            <div className="mt-10 relative">
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
                        1280: { slidesPerView: 6 }, 
                    }}
                >
                    {items.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex flex-col justify-center items-center h-64 rounded-lg p-4"
                        >
                            <img src={item.img} alt={item.name} className="w-24 h-24 rounded-full object-cover m-auto mb-3" />
                            <p className="text-lg font-semibold">{item.name}</p>
                            <p className="text-xs text-gray-500">{item.location}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="mt-8 flex justify-center items-center gap-6">
                    <button className="swiper-prev text-3xl text-gray-700 hover:text-black transition">←</button>
                    <span className="w-px h-6 bg-gray-500"></span>
                    <button className="swiper-next text-3xl text-gray-700 hover:text-black transition">→</button>
                </div>
            </div>

        </section>
    );
};

export default Third;