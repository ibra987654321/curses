import React from 'react';

import { Link } from 'react-router-dom';
import { PlayMusic } from '../../../ui/icons';

const First = () => {

    const styles = {
        img: {
            height: "100vh",
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url('./images/Main/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        },
        wrapper: {
            height: '100%',
            flexDirection: 'column',
        },
        mainText: {
            letterSpacing: '1.2px',
            lineHeight: '110%',
            fontWeight: 600,
        }
    };

    return (
        <section style={styles.img} className='px-6'>
            <div style={styles.wrapper} className='flex items-center justify-between'>
                <div>
                </div>
                <Link to='https://youTube.com' className='cursor-pointer' target='_blank'>
                    <PlayMusic />
                </Link>
                <div className="w-full">
                    <h1 className="text-white text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-10">
                        Your Global Path to Arbitration
                        <span className="hidden md:hidden"> Mastery</span>
                        <span className="inline md:inline block"> <br /> Mastery</span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default First;