import React, {useEffect, useState} from 'react';
import { BottomAcc, LockAcc, TopAcc } from "../../../ui/icons";
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {getTopics} from "../../../store/topicSlice";


const ButtonAcc = styled.button`
    @media(max-width: 1032px) {
        display: block;
        flex-direction: column;
    }
`;

const SideBar = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.topics);
    const [activeTab, setActiveTab] = useState("Course");
    const [openAccordion, setOpenAccordion] = useState(null);
    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const content = {
        "Course": {
            title: "Inaugural Lecture",
            details: "8 Topics | 66 Lectures | Total duration: 56 hours 18 minutes",
            items: [
                "Topic 1: Introductory Lecture",
                "Topic 2: Introductory Lecture",
                "Topic 3: Introductory Lecture"
            ]
        },
    }

    useEffect(() => {
        dispatch(getTopics())
    }, [dispatch]);

    if (loading) return <p>loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='w-[100%]'>
            {
                items.map((item, index) => (
                    <div key={index}>
                        <ButtonAcc
                            onClick={() => toggleAccordion(index)}
                            className={` flex text-sm py-4 px-4 text-left bg-gray-100 focus:outline-none items-center justify-between w-full 
                                            ${index === 0 ? "rounded-t-lg" : ""} `}
                        >
                            <div className="flex gap-4 items-center">
                                {openAccordion === index ? <TopAcc /> : <BottomAcc />}
                                <p className="font-medium">{item.name}</p>
                            </div>
                            <div className="flex items-center gap-5 justify-end sm:justify-end">
                                <p className="font-normal">1 lecture</p>
                                <p className="font-medium"><span className="text-[#1E1E1E] opacity-80">Teacher:</span> {item.teacher_name}</p>
                                <LockAcc />
                            </div>
                        </ButtonAcc>
                        {openAccordion === index && (
                            <div>
                                <div className="text-gray-700 py-3 pl-5 text-sm">
                                    <p>{item.title}</p>
                                </div>
                                <hr className="h-[2px] w-[95%] bg-gray-400 opacity-80 mx-auto" />
                                <div className="text-gray-700 py-3 pl-5 text-sm">
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))
            }

        </div>
    );
};

export default SideBar;