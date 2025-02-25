import React, { useState, useEffect } from 'react';
import ProfileSidebar from './components/ProfileSideBar';
import PersonalData from './components/PersonalData';
import AccountSecurity from './components/AccountSecurity';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('personalData');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section
            className='px-8'
            style={{
                height: '100vh',
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.61), rgba(255, 255, 255, 0.61)), url('./images/Profile/background.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            }}
        >
            <div className='flex flex-col md:flex-row pt-20 gap-6'>
                {(!isMobile || activeTab === null) && <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />}

                {activeTab && (
                    <div
                        className='flex flex-col bg-[#FFFFFF] px-0 sm:px-5 py-2 sm:py-6 md:w-2/3 w-full rounded-xl'
                        style={{
                            position: isMobile ? 'absolute' : 'static',
                            top: -35,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 1000
                        }}
                    >
                        {activeTab === 'personalData' && <PersonalData setActiveTab={setActiveTab} activeTab={activeTab} isMobile={isMobile} />}
                        {activeTab === 'accountSecurity' && <AccountSecurity setActiveTab={setActiveTab} activeTab={activeTab} isMobile={isMobile} />}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Profile;
