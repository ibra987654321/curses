import React from 'react';
import { Certification, Download, Info, Phone, Vector } from '../../../ui/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";

const SidebarContainer = styled.div`
    width: 30%;
    @media(max-width: 1032px) {
        width: 100%;
    }
`;

const SidebarWrapper = styled.div`
    background: #C6A982;
    padding: 24px;
    border-radius: 12px;
`;

const BuyButton = styled.button`
    background: #402D1D;
    color: #FFF;
    border-radius: 12px;
    padding: 8px 0;
    width: 100%;
    margin-top: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s;
    
    &:hover {
        background: #5A3A26;
    }
`;

const TextWrapper = styled.p`
    gap: 5px;
    display: flex;
    align-items: start;
`;

const TextIcon = styled.span`
    font-size: 15px;
    font-weight: 400;
    color: #1E1E1E;
    opacity: 0.8;
`;

const courseIncludes = [
    { icon: <Download />, text: "6 lessons" },
    { icon: <Vector />, text: "Next lesson: 17.12.2024, 19:00" },
    { icon: <Phone />, text: "Access via mobile devices" },
    { icon: <Certification />, text: "Certificate of completion of the course" }
];

const SideBar = ({oldPrice, newPrice, courseId}) => {
    const {token} = useSelector((state) => state.auth);
    return (
        <SidebarContainer>
            <SidebarWrapper>
                <p className='font-normal text-sm text-[#1E1E1E]'>Full course</p>
                <h2 className='font-semibold text-3xl flex items-center gap-3'>${newPrice}
                    <span className='line-through text-[#1E1E1E] opacity-80 text-sm'>${oldPrice}</span>
                </h2>
                <Link to={token ? `/passingcourse/${courseId}` : '/signin'}>
                    <BuyButton>Buy</BuyButton>
                </Link>
                <p className='opacity-80 text-[#1E1E1E] pt-2'>Money back within 30 days</p>

                <div>
                    <h3 className='pt-4 font-semibold pb-1'>Course includes:</h3>
                    {courseIncludes.map((item, index) => (
                        <TextWrapper key={index}>
                            {item.icon}
                            <TextIcon>{item.text}</TextIcon>
                        </TextWrapper>
                    ))}
                </div>

                <h3 className='py-3 font-semibold'>Eligibility</h3>
                <TextWrapper>
                    <Info />
                    <TextIcon>The course is taught in English. It is the participant’s own responsibility to ensure that their command of the English language is sufficient to attend and successfully complete the course.</TextIcon>
                </TextWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default SideBar;
