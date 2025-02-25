import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Apple, Google } from '../../ui/icons';
import styled from 'styled-components';
import Modal from '../../components/Modal/Modal';

const Input = styled.input`
padding: 12px 16px; 
border-radius: 12px;
font-size: 14px;
color: #1C1B1F;
`

const TextLink = styled.span`
font-size: 15px;
font-weight: 600;
border-bottom: 1px solid #FFF;
`

const Button = styled.button`
width: 48%;
padding: 16px 0;
background: #F0F0F0;
justify-content: center;
border-radius: 12px;
display: flex;
@media(max-width: 1032px) {
    width: 80%;
}
`

const Wrapper = styled.div`
@media(max-width: 1032px) {
    flex-direction: column;
    gap: 10px;
} 
`

const Forget = () => {

    const [submit, setSubmit] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const onFinish = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password || !formData.confirmPassword) {
            alert("Please fill in all fields!");
            return;
        }
        setSubmit(true)
    };

    const styles = {
        img: {
            height: "100vh",
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url('./images/Main/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        },
    }



    return (
        <section style={styles.img} className='px-6 py-10 flex flex-col items-center justify-center text-[#FFF] text-center'>
            <p className='uppercase font-light'>START FOR FREE</p>
            <h2 className='font-medium text-3xl py-4'>Welcome!</h2>
            <p className='text-base'>Don't have an account? <Link to='/signup' className='text-[#FFF]'> <TextLink>Sign up</TextLink> </Link></p>
            <form onSubmit={onFinish} className="flex flex-col gap-5 pt-6 w-full sm:w-2/5">
                <Input
                    type="email"
                    name="email"
                    placeholder="Enter your E-mail"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <p className='text-right'>
                    <Link to='/forgot' className='text-[#C6A982]'>Forgot your password?</Link>
                </p>
                <button type='submit' className='py-3 bg-[#C6A982] rounded-xl'>
                    Sign in
                </button>
                <div className='flex items-center gap-3 justify-between opacity-50'>
                    <hr className='text-[#FFFFFF] w-1/4 sm:w-2/6' />
                    <p className='sm:text-base text-sm'>Or sign in with</p>
                    <hr className='text-[#FFFFFF] w-1/4 sm:w-2/6' />
                </div>
                <Wrapper className='flex justify-between items-center '>
                    <Button className=''>
                        <Google />
                    </Button>
                    <Button className=''>
                        <Apple />
                    </Button>
                </Wrapper>
            </form>

            <Modal submit={submit} />

        </section>
    );
};

export default Forget;