import React, {useEffect, useState} from 'react';
import SideBar from './components/SideBar';
import Overview from './components/Overview';
import QAA from './components/QAA';
import Seminars from './components/Seminars';
import Certification from './components/Certification';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCourseById, getCourseVideo} from "../../store/courseSlice";

const PassingCourse = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [showVideo, setShowVideo] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const { id } = useParams();
    const dispatch = useDispatch();
    const { course, videoUrl, loading, error } = useSelector((state) => state.courses);

    useEffect(() => {
        if (id) {
            dispatch(getCourseById(id));
        }
        return () => {
            setShowVideo(false);
        }
    }, [dispatch, id]);

    const show = () => {
        setShowVideo(true)
        dispatch(getCourseVideo(1));
    }

    if (loading) return <p>loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='pb-[100px]'>
            <div className='lg:flex sm:flex'>
                <div className='w-[100%] sm:w-[70%]'>
                    {
                        !showVideo ? (
                            <img onClick={show} className='w-full object-cover max-w-[900px] max-h-[500px] pb-5 sm:w-2/3'
                                 src={course?.introductory_video} alt=""/>
                        ) : (
                                loading ? 'loading...' :   <video width="100%" height="auto"
                                                                  className='w-full object-cover max-w-[900px] max-h-[500px] pb-5 sm:w-2/3' controls>
                                    <source
                                        src={videoUrl}
                                        type="video/mp4"/>
                                    Ваш браузер не поддерживает видео.
                                </video>


                        )
                    }


                </div>
                <div className="hidden sm:block">
                    <SideBar/>
                </div>
            </div>

            <div className=' w-[100%] sm:w-[65%]'>
                <div className='lg:flex sm:flex items-center justify-between py-2 h-[85px] sm:h-[60px]'>
                    <div
                        className='flex justify-around sm:gap-5 items-center mb-3 text-sm sm:text-base shadow-lg sm:shadow-none px-0 sm:px-8 pb-0 sm:pb-0'>
                        <button
                            className={`none pb-2 sm:hidden ${activeTab === 'Inaugural' ? 'border-b-2 border-black' : ''}`}
                            onClick={() => handleTabClick('Inaugural')}
                        >
                            Inaugural lecture
                        </button>
                        <button
                            className={`pb-2  ${activeTab === 'Overview' ? 'border-b-2 border-black' : 'opacity-80'}`}
                            onClick={() => handleTabClick('Overview')}
                        >
                            Overview
                        </button>
                        <button
                            className={`pb-2  ${activeTab === 'QAA' ? 'border-b-2 border-black' : 'opacity-80'}`}
                            onClick={() => handleTabClick('QAA')}
                        >
                            Questions and Answers
                        </button>
                    </div>
                    <div className='flex gap-5 justify-end sm:justify-start px-8'>
                        <button
                            className={`px-5 py-1 bg-[#C6A982] text-[#FFF] rounded-xl ${activeTab === 'Seminars' ? 'bg-[#402D1D]' : 'bg-[#C6A982]'}`}
                            onClick={() => handleTabClick('Seminars')}
                        >
                            Seminars
                        </button>
                        <button
                            className={`px-5 py-1 bg-[#C6A982] text-[#FFF] rounded-xl ${activeTab === 'Certification' ? 'bg-[#402D1D]' : 'bg-[#C6A982]'}`}
                            onClick={() => handleTabClick('Certification')}
                        >
                            Certification
                        </button>
                    </div>
                </div>

                <div className='px-8'>
                    {activeTab === 'Overview' && <Overview course={course} />}
                    {activeTab === 'QAA' && <QAA />}
                    {activeTab === 'Seminars' && <Seminars />}
                    {activeTab === 'Certification' && <Certification />}
                    {activeTab === 'Inaugural' && <div className="block sm:hidden">
                        <SideBar />
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default PassingCourse;
