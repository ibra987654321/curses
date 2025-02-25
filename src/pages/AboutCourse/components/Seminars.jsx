import React from 'react';
import { Link } from "react-router-dom";
import { BottomAcc, LockAcc, TopAcc, Zoom } from "../../../ui/icons";

const Seminars = () => {
    return (
        <div className="flex flex-col gap-4  p-[10px]" style={{ border: '0.5px solid grey' }}>
            <div className="sm:flex lg:flex justify-between ">
                <div className="flex items-center gap-2 ">
                    <LockAcc />
                    <p className="font-semibold ">Forum Shopping in International Arbitration</p>
                </div>
                <div className="flex gap-5 items-center sm:pt-0 pt-4 sm:pl-0 pl-7">
                    <p>23.07.2025</p>
                    <div className="rounded-[50%] w-1 h-1 bg-[#1E1E1E4D]">

                    </div>
                    <ul>
                        <li>
                            <p>16:00</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between items-center pl-8">
                <p className="text-xs sm:text-sm">Theacher: Prof. Franco Ferrari and Mr. Norair Babadjanian</p>
                <Link to='' className="flex items-center gap-2 py-2 px-4 bg-[#F0F0F0] text-[#1E1E1E] opacity-80 text-lg font-semibold rounded-xl"><LockAcc /> <Zoom /> Link</Link>
            </div>
        </div>
    );
};

export default Seminars;