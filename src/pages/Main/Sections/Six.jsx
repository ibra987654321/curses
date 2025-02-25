import { useState } from 'react';
import { ArrowBottom, ArrowLongRight, ArrowTop } from '../../../ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WrapperArrow = styled.div`
@media(max-width: 1023px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap-reverse;
}
`

const Show = styled.div`
@media(max-width: 1023px) {
    display: block !important;
   
}
`

const Hidden = styled.div`
@media(max-width:1023px) {
display: none;
}
`

const FormChange = styled.form`
@media(max-width: 1023px) {
    width: 90% !important;
    margin: 0 auto !important;
}
`

const Six = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    };

    const styles = {
        img: {
            minHeight: "100vh",
            background: "rgba(174, 145, 116)",
            backgroundImage: "url('./images/Main/ForSix.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
        },
        hidden: {
            display: 'none'
        }
    }



    return (
        <section className="flex flex-col lg:flex-row min-h-[80vh] bg-cover bg-center relative" style={styles.img}>
            <div className="flex-1 py-5 p-8 lg:p-12 bg-[#ae9174] bg-opacity-80 text-black flex flex-col justify-center gap-5">
                <h2 className="text-2xl lg:text-4xl font-bold uppercase">If you have questions, please ask. We are here <br /> to assist you.</h2>

                <Show style={styles.hidden}>
                    <ArrowBottom />
                </Show>

                <div className="mt-8 flex flex-col gap-4 ">
                    <Show style={styles.hidden}>
                        <p style={{ fontSize: '16px' }} className="mb-5 text-[#191A1B]">We value your input—share your thoughts and suggestions to help us improve and create a better experience for everyone.</p>
                        <p style={{ fontSize: '16px' }} className="mb-5 text-[#191A1B]">Reach out to us via email, phone, or our social media channels.</p>
                    </Show>

                    <Hidden>
                        <p style={{ fontSize: '16px' }} className="mb-5 text-[#191A1B]">Get in Touch with Us: Find Our Complete <br /> Contact Information Here</p>
                    </Hidden>
                    <p className="text-sm flex flex-col font-bold"><span className='font-light'>Phone number</span> + (2) 578-345-789</p>
                    <p className="text-sm flex flex-col font-bold"> <span className='font-light'>E-Mail</span> example@gmail.com</p>
                    <p className="text-sm flex flex-col font-bold"> <span className='font-light'>Office</span> 230 Norman Street New York, <br /> QS (USA) H8R 1A1</p>
                    <Link className="underline text-sm flex gap-3 text-lg font-bold">View on Google Maps < ArrowTop /></Link>
                </div>
            </div>

            <Hidden>
                <div className="w-px bg-black h-full hidden lg:block"></div>
            </Hidden>

            <div className="flex-1  bg-opacity-80 bg-[#ae9174] text-black flex flex-col justify-center gap-5">
                <WrapperArrow className="flex items-center gap-3">
                    <Hidden>
                        <ArrowLongRight />
                    </Hidden>
                    <Hidden>
                        <p className="w-80 font-light" style={{ fontSize: "14px" }}>
                            Enhance your skills and qualifications by learning on the largest educational platform. Take a course to boost your expertise and advance your career.
                        </p>
                    </Hidden>
                </WrapperArrow>
                <FormChange onSubmit={handleSubmit} className='flex flex-col lg:p-12 py-5'>
                    <label htmlFor="">YOUR NAME</label>
                    <input
                        className=" border-b-2 border-[#1E1E1E] bg-transparent text-black p-2 mb-5 text-sm outline-none placeholder:text-[#1E1E1E]"
                        type="text"
                        placeholder="YOUR NAME"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <label htmlFor="">YOUR EMAIL</label>
                    <input
                        className=" border-b-2 border-[#1E1E1E] bg-transparent text-black p-2 mb-5 text-sm  outline-none placeholder:text-[#1E1E1E]"
                        type="email"
                        placeholder="YOUR EMAIL"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <label htmlFor="">YOUR MESSAGE</label>
                    <input
                        className=" border-b-2 border-[#1E1E1E] bg-transparent text-black p-2 mb-5 text-sm  outline-none placeholder:text-[#1E1E1E]"
                        type="text-area"
                        placeholder="MESSAGE"
                        value={message}
                        onChange={handleMessageChange}
                    />

                    <button
                        type="submit"
                        className="bg-[#402D1D] text-white py-2 px-5 cursor-pointer text-sm b-1 rounded-xl"
                    >
                        Submit a Request to Teach
                    </button>
                </FormChange>
            </div>
        </section>
    );
};

export default Six;
