import React from 'react';

const Certification = ({ content }) => {
    return (
        <div className="w-full flex flex-col md:flex-row items-center ">
            <img
                src={content["Certification"].image}
                alt="Certification"
                className="w-full md:w-2/3 rounded-lg shadow-md mt-5 cursor-pointer"
            />
        </div>
    );
};

export default Certification;