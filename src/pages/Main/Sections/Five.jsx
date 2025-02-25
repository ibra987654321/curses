import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from '../../../ui/icons';
import styled from 'styled-components';

const Five = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { img: './images/Main/udemyLogo.png', alt: 'Udemy' },
        { img: './images/Main/udemyLogo.png', alt: 'Coursera' },
        { img: './images/Main/udemyLogo.png', alt: 'Khan Academy' },
        { img: './images/Main/udemyLogo.png', alt: 'Udacity' },
    ];

    const nextSlide = () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(slides.length - 1);
        }
    };

    const ArrowWrap = styled.div`
        @media (max-width: 440px) {
            width: 100%;
        }
    `

    return (
        <section className="bg-[#f0f0f0] py-10 px-6 sm:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between flex-wrap">

                    <h2 className="sm:text-xl font-medium text-black flex-grow text-left" style={{ fontSize: '32px', lineHeight: '43px' }}>
                        Trusted by over <span className="font-semibold">16,000 companies</span> and <br />
                        millions of learners worldwide.
                    </h2>

                    <ArrowWrap className='flex items-center mt-7 justify-end'>
                        <button
                            className="text-gray-500 hover:text-black cursor-pointer"
                            onClick={prevSlide}
                        >
                            <ArrowLeft />
                        </button>

                        <span className="w-px mx-5 h-6 bg-gray-500"></span>

                        <button
                            className="text-gray-500 hover:text-black cursor-pointer"
                            onClick={nextSlide}
                        >
                            <ArrowRight size={20} />
                        </button>
                    </ArrowWrap>
                </div>


                <div className="mt-10 w-full h-1 bg-gray-200 relative">
                    <div
                        className="absolute top-0 left-0 h-full bg-black"
                        style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
                    ></div>
                </div>


                <div className="flex items-center justify-center mt-6">
                    <div className="flex-1 mx-6 overflow-hidden relative">
                        <div
                            className="flex gap-5 items-center justify-center transition-transform duration-500"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {slides.map((slide, index) => (
                                <div key={index} className="flex-shrink-0 w-1/6">
                                    <img
                                        src={`${slide.img}`}
                                        alt={slide.alt}
                                        className="h-6 sm:h-8 "
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Five;
