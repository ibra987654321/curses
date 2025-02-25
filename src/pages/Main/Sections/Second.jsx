import React from 'react';
import styled from 'styled-components';

const Second = () => {
    const styles = {
        img: {
            minHeight: "85vh",
            background: "rgba(174, 145, 116)",
            backgroundImage: "url('./images/Main/SecondBackground.png')",
            backgroundSize: "40%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
        },
    };

    const TextRound = styled.p`
        @media (max-width: 440) {
            font-size: 1px;
            color: red;
        }
    `


    return (
        <section className="relative px-6 sm:px-8 md:px-12 lg:px-16 py-12 text-white" style={styles.img}>
            <div className="mx-auto">
                <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-light uppercase text-left">ABOUT COURSE</h3>
                    <h2 className="text-3xl sm:text-2xl font-medium text-left mt-2">About course</h2>
                </div>

                <p className="text-lg sm:text-base leading-relaxed text-left">
                    The courses are clearly structured. The lectures are electronically recorded by instructors
                    (arbitration practitioners) and delivered online, with educational materials distributed
                    to the participants several days beforehand for thorough review before the lectures.
                    The lectures are followed by live workshops to consolidate the studied material, and the
                    participants may also query the instructors regarding the subject.
                </p>
                <p className="text-lg sm:text-base leading-relaxed text-left mt-4">
                    The course is delivered within a trimester - Michaelmas (from October to December),
                    Hilary (from January to March) and Trinity (from April to June).
                </p>
                <p className="text-lg sm:text-base leading-relaxed text-left mt-4">
                    At the end of the course all participants will receive a Certificate of Attendance.
                    In addition, each participant will be invited to sit an assessment test to include,
                    inter alia, writing an essay of no longer than 500 words. Successful participants will
                    be awarded a Certificate of Proficiency in International Arbitration.
                </p>
                <p className="text-lg sm:text-base leading-relaxed text-left mt-4">
                    Below you will find a tentative course syllabus. It should be kept in mind however that
                    the course contents, as well as the list of instructors, may be subject to modifications.
                </p>

                <div className="mt-8 flex justify-center items-start gap-12 flex-wrap">
                    {[{ title: "TOPICS", value: "10+" }, { title: "LECTURES", value: "25+" }, { title: "TTL DURATION", value: "50h" }].map((item, index) => (
                        <div key={index} className="flex flex-col items-center w-1/5">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#c6a982] shadow-lg flex items-center justify-center rounded-full text-2xl font-bold">
                                {item.value}
                            </div>
                            <TextRound className="mt-3 text-lg  font-semibold text-center">{item.title}</TextRound>
                        </div>
                    ))}
                </div>
            </div>

            <button className="absolute left-1/2 -translate-x-1/2 -bottom-7 bg-[#402d1d] text-white 
                   text-sm font-semibold 2xl w-72 sm- py-4 rounded-lg shadow-lg">
                Learn More
            </button>


        </section>
    );
};

export default Second;
