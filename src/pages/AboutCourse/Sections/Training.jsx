import React from "react";

const trainingOptions = [
    {
        id: 1,
        title: "Course",
        description:
            "Participants of the online broadcast in Zoom can directly ask questions to the teacher and communicate with each other in the chat. The duration of one lesson is 3 hours. Classes are held in Russian.",
    },
    {
        id: 2,
        title: "events",
        description:
            "Four days after the online broadcast, all participants receive a video recording and an electronic summary with the lesson’s abstract. A video recording of any lesson and a folder with materials are available in your personal account.",
    },
    {
        id: 3,
        title: "Certificate",
        description:
            "Four days after the online broadcast, all participants receive a video recording and an electronic summary with the lesson’s abstract. A video recording of any lesson and a folder with materials are available in your personal account.",
    },
];

const Training = () => {
    return (
        <div className="">
            <h2 className="font-semibold text-xl">Training options</h2>
            <div className="flex flex-wrap justify-between gap-5 pt-5">
                {trainingOptions.map((option, index) => (
                    <div
                        key={option.id}
                        className="w-full sm:w-full lg:w-[32%] px-4 sm:border-b-0 pb-3 border-b lg:border-r border-gray-300 last:border-r-0 last:border-b-0"
                    >
                        <h1 className="text-7xl md:text-6xl font-bold">{option.id}</h1>
                        <h2 className="uppercase font-semibold pt-4 text-lg">
                            {option.title}
                        </h2>
                        <p className="text-base font-medium text-[#1E1E1E] opacity-80 pt-3">
                            {option.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Training;
