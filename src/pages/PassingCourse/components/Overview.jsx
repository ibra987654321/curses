import React from 'react';
import { People, Warning } from '../../../ui/icons';
import { Swiper, SwiperSlide } from 'swiper/react';

const Overview = () => {
    return (
        <>
            <div className='pt-7 flex flex-col gap-5'>
                <h2 className='text-2xl sn:text-3x;'>
                    About course
                </h2>
                <div className='flex gap-8 items-center'>
                    <div className='flex flex-col'>
                        <p className='flex items-center gap-2 text-lg'>32 231 <People /> </p>
                        <span className='text-[#757575]'>Students</span>
                    </div>
                    <div className='flex flex-col'>
                        <p className='flex items-center text-lg'>16 ч. </p>
                        <span className='text-[#757575]'>Total</span>
                    </div>
                </div>
                <p className='flex items-center text-[#757575] font-normal gap-2'><Warning /> Last update: <span className='text-[#757575] font-medium'>12.12.2024, 19:00</span></p>
            </div>
            <div className='w-full h-[1px] bg-[#e9e9e9] mb-5 mt-10'></div>
            <div className='lg:flex sm:flex justify-between'>
                <h2 className='uppercase font-normal text-[#1E1E1E] text-lg sm:text-base'>description</h2>
                <div className='w-[100%] sm:w-[65%] text-[#5c5c5c]'>
                    <p>
                        The courses are clearly structured.  The lectures are electronically recorded by instructors
                        (arbitration practitioners) and delivered online, with educational materials distributed to
                        the participants at several days beforehand for thorough review before the lectures.
                        The lectures are followed by live workshops to consolidate the studied material, and the
                        participants may also query the instructors regarding the subject.
                    </p>
                </div>
            </div>
            <div className='pt-6'>
                <h2 className='uppercase font-normal text-[#1E1E1E]'>Preliminary Reading</h2>
                <p className='text-[#5C5C5C] pt-4 pb-2'>Participants are strongly encouraged to read the following books (latest editions) prior to the commencement of the course: </p>
                <div className='flex'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={5}
                        breakpoints={{
                            0: { slidesPerView: 2.1 },
                            768: { slidesPerView: 4 }
                        }}
                    >
                        {[...Array(6)].map((_, index) => (
                            <SwiperSlide key={index}>
                                <div className="pr-1 sm:pr-4">
                                    <img src="./images/AboutCourse/Card.png" alt="" className="w-full" />
                                    <h4 className="font-semibold text-sm sm:text-base mt-2">International Arbitration: Law and Practice:</h4>
                                    <p className="text-[#1E1E1E] opacity-80 pt-1 text-sm">Gary Born, (Wolters Kluwer);</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Overview;