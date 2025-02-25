import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "../../../ui/icons";
import styled from "styled-components";

const Second = () => {
    const [activeTab, setActiveTab] = useState("info1");

    const handleTabClick = (tab) => {
        setActiveTab(activeTab === tab ? "" : tab);
    };

    const Hidden = styled.div`
        @media(max-width: 1032px) {
            display:none !important; 
        }
    `

    const Img = styled.img`
        @media(max-width: 1032px) {
            width: 60% !important;
        }
    `

    return (
        <section className="bg-[#ae9174] min-h-screen flex flex-col md:flex-row pb-10">
            <div className="w-full md:w-1/4 bg-[#ae9174] flex md:flex-col ">
                <button
                    className={`w-full font-normal flex justify-between items-center p-4 transition-all duration-300 uppercase ${activeTab === "info1" ? "bg-[#402d1d] text-white" : "bg-white text-black"
                        }`}
                    onClick={() => handleTabClick("info1")}
                >
                    About OAA
                    {activeTab === "info1" ? <Hidden><ChevronRight className="w-5 h-5" /></Hidden> : <Hidden><ChevronDown className="w-5 h-5" /></Hidden>}
                </button>

                <button
                    className={`w-full uppercase font-normal flex justify-between items-center p-4  transition-all duration-300 ${activeTab === "info2" ? "bg-[#402d1d] text-white" : "bg-white text-black"
                        }`}
                    onClick={() => handleTabClick("info2")}
                >
                    Organisational Structure
                    {activeTab === "info2" ? <Hidden><ChevronRight className="w-5 h-5" /></Hidden> : <Hidden><ChevronDown className="w-5 h-5" /></Hidden>}
                </button>
            </div>

            <div className="w-full md:w-3/4 p-3 flex text-white text-lg font-semibold">
                {activeTab === "info1" &&
                    <div className="w-full">
                        <h2 className="text-2xl font-normal pb-2">About OAA</h2>
                        <hr className="bg-white" />
                        <p className="text-lg font-normal p-3">
                            Our instructors are well-known experts and industry professionals with a vast, first-hand experience in handling hundreds of complex multi-jurisdictional arbitrations. <br />
                            <br />
                            The OAA allows you to access the courses wherever in the world you are, making it convenient for you to learn at your own pace and schedule.  The students will not only gain theoretical knowledge but will also receive practical insights and guidance from seasoned professionals, who have dealt with diverse legal and cultural environments.</p>
                    </div>
                }
                {activeTab === "info2" &&
                    <div className="w-full pl-5">
                        <h2 className="text-2xl font-normal pb-2">Organization Structure</h2>
                        <hr className="bg-white" />
                        <div className="w-full mt-10 font-normal">
                            <p className="uppercase">President</p>
                            <div className="pl-0 sm:pl-5">
                                <Img className="pt-2 sm:pt-7" src="./images/AboutCourse/course.png"  alt="" style={{ width: '25%' }} />
                                <p className="font-semibold mt-2">Prof. Gary Born</p>
                                <p className="text-white opacity-80 text-sm">(London, United Kingdom)</p>
                            </div>
                        </div>
                        <div className="w-full mt-10 font-normal">
                            <p className="uppercase">President</p>
                            <div className="pl-0 sm:pl-5">
                                <Img className="pt-2 sm:pt-7" src="./images/AboutCourse/course.png"  alt="" style={{ width: '25%' }} />
                                <p className="font-semibold mt-2">Prof. Gary Born</p>
                                <p className="text-white opacity-80 text-sm">(London, United Kingdom)</p>
                            </div>
                        </div>
                    </div>}
                {activeTab === "" && <p>Select an option</p>}
            </div>
        </section>
    );
};

export default Second;
