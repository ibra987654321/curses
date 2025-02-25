import React from 'react';
import SideBar from '../components/SideBar';
import styled from 'styled-components';
import { Share } from '../../../ui/icons';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import CourseInfo from './CourseInfo';
import Teachers from './Teachers';
import Training from './Training';

const WtSide = styled.div`
   display: flex;
    gap: clamp(10px, 2vw, 20px);
    flex-wrap: wrap;
`

const Card = styled.div`
    display: flex;
    flex-direction:column;
    gap:16px;
    width: 24%;
`

const Images = styled.div`
    @media(max-width: 1032px) {
        flex-direction:column;
    }
`

const First = () => {
    return (
        <section className='px-4 sm:px-6 py-16'>
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl uppercase font-medium'>About course</h2>
                <Share />
            </div>
            <WtSide className='pt-5'>
                <Images className='flex justify-between'>
                    <img className='w-full pb-5 sm:w-2/3' src="./images/AboutCourse/courseimg.png" alt="Course Overview" />
                    <SideBar />
                </Images>
                <div className='flex flex-col gap-2 w-full sm:w-2/3'  >
                    <div className='flex flex-col mt-8'>
                        <h3 className='text-xl font-semibold'>The description of course</h3>
                        <p className='mt-5 font-normal text-[#5C5C5C]'>
                            The courses are clearly structured.  The lectures are electronically recorded by instructors (arbitration practitioners) and delivered online, with educational materials distributed to the participants at several days beforehand for thorough review before the lectures.  The lectures are followed by live workshops to consolidate the studied material, and the participants may also query the instructors regarding the subject.

                            The course is delivered within a trimester - Michaelmas (from October to December), Hilary (from January to March) and Trinity (from April to June). <br /> <br />

                            At the end of the course all participants will receive a Certificate of Attendance.  In addition, each participant will be invited to sit an assessment test to include, inter alia, writing an essay of no longer than 500 words.  Successful participants will be awarded a Certificate of Proficiency in International Arbitration.

                            Below you will find a tentative course syllabus.  It should be kept in mind however that the course contents, as well as the list of instructors, may be subject to modifications.</p>
                    </div>

                    <div className='flex flex-col'>
                        <h3 className='text-xl font-semibold mt-5'>Preliminary Reading</h3>
                        <p className='text-[#5C5C5C] pb-2 pt-4'>Participants are strongly encouraged to read the following books (latest editions) prior to the commencement of the course: </p>
                        <div className='flex'>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={5}
                                modules={[Pagination]}
                                breakpoints={{
                                    0: { slidesPerView: 2 },
                                    768: { slidesPerView: 4 }
                                }}
                            >
                                {[...Array(6)].map((_, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="pr-4">
                                            <img src="./images/AboutCourse/Card.png" alt="" className="w-full" />
                                            <h4 className="font-semibold mt-2">International Arbitration: Law and Practice:</h4>
                                            <p className="text-[#1E1E1E] opacity-80 pt-1 text-sm">Gary Born, (Wolters Kluwer);</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    <CourseInfo />
                </div>
                <Teachers />
                <Training />

            </WtSide>
        </section>
    );
};

export default First;