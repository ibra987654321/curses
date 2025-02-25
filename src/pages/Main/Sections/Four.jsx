import React from "react";
import styled from "styled-components";

const Four = () => {
    const styles = {
        section: {
            minHeight: "80vh",
            background: "rgba(174, 145, 116)",
            backgroundImage: "url('./images/Main/FourBackground.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
        },
        imageContainer: {
            flex: "1 1 45%",
            maxWidth: "45%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        image: {
            width: "100%",
            height: "auto",
            maxHeight: "400px",
            borderRadius: "8px",
            objectFit: "cover",
        },
        content: {
            flex: "1 1 50%",
        },
        statsContainer: {
            display:'flex',
            flexWrap: 'wrap',
            gap: "1rem",
            width: "100%",
            marginTop: "2rem",
            paddingTop: "1.5rem",
            borderTop: "2px solid rgba(0, 0, 0, 0.3)",
        },
        statItem: {
            display: "flex",
            width: '180px',
            fontWeight: "bold",
            fontSize: "1.25rem",
            textAlign: "center",
            flexDirection: "column",
        },
        divider: {
            width: "2px",
            height: "100px",
            backgroundColor: "rgba(217, 217, 217, 1)",
        },
    };

    const Static = styled.div`
        @media(max-width: 1032px) {
            width: 45% !important;
        }
    `

    const stats = [
        { title: "TOPICS", value: "10+" },
        { title: "LECTURES", value: "25+" },
        { title: "TTL DURATION", value: "50h" },
        { title: "CERTIFICATES", value: "2" },
        { title: "INSTRUCTORS", value: "8+" },
    ];

    return (
        <section style={styles.section} className="text-black flex flex-wrap" >

            <div className=" bg-[#ae9174] bg-opacity-80 text-black flex flex-wrap py-14 px-5" style={{ width: '100%', height: '100%' }} >

                <div className="flex flex-wrap-reverse items-center">
                    <div className=" md:flex">
                        <img src="./images/Main/ForFour.png " alt="Course" className="w-full h-auto max-h-96 object-cover rounded-lg" />
                    </div>


                    <div style={styles.content} className="w-full md:w-3/4 px-6 :px-0">
                        <h3 className="text-lg sm:text-xl font-light uppercase text-left">About the Platform</h3>
                        <h2 className="lg:text-4xl sm:text-xs md:text-sm font-bold text-left mt-2 uppercase">We create a space for effective online learning, bringing together teachers and students.</h2>


                        <p className="text-lg sm:text-base leading-relaxed text-left mt-4">
                            International arbitration is paramount for international economic cooperation. Without unswerving means of resolving cross-border differences, many important wealth-creating transactions will either never materialize or come at considerably greater a price. Hence, international arbitration provides significant value in terms of national prosperity and benefits to international business community.
                        </p>
                        <p className="text-lg sm:text-base leading-relaxed text-left mt-4 mb-4  ">
                            A further growth of international arbitration is inevitable.  Yet, arbitration practitioners - who are not necessarily lawyers by education or training - often encounter the necessity to deal with differing legal environments as well as various social and cultural dissimilarities, peculiar to various jurisdictions.  In the meantime, arbitration hearings, with very few exceptions, are confidential, making it rather difficult for those who have not been directly involved in the process to acquire the relevant skill.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center w-full">
                    <div style={styles.statsContainer} className="flex-wrap justify-start  sm:justify-around">   
                        {stats.map((item, index) => (
                            <React.Fragment key={index}>
                                {index !== 0 && <div style={styles.divider} className="hidden sm:block"></div>}
                                <Static style={styles.statItem} className="justify-around items-center">
                                    <span className="text-4xl sm:text-6xl">{item.value}</span>
                                    <span className="text-sm opacity-80 text-[#161616]">{item.title}</span>
                                </Static>
                            </React.Fragment>
                        ))}
                    </div>


                    <button className="mt-10 sm:w-1/3  bg-[#402d1d] text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg">
                        Learn More
                    </button>
                </div>

            </div>


        </section>
    );
};

export default Four;
