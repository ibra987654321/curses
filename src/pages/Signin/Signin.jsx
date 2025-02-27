import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Apple, Google } from '../../ui/icons';
import styled from 'styled-components';
import ModalFlow from '../../components/ModalForgot/ModalFlow';
import {useDispatch, useSelector} from "react-redux";
import {authUser, setAuthData} from "../../store/authSlice";
import {setFormData} from "../../store/formSlice";

const Input = styled.input`
padding: 12px 16px; 
border-radius: 12px;
font-size: 14px;
color: #1C1B1F;
`

const TextLink = styled.span`
font-size: 15px;
font-weight: 600;
text-align: 'right';
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

const Signin = () => {


    const [isForgotOpen, setIsForgotOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { email, password, loading, error, success, token } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setAuthData({ field: name, value }));
    };

    const onFinish = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please fill in all fields!");
            return;
        }
        dispatch(authUser({ email, password }))
    };

    const styles = {
        img: {
            height: "100vh",
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url('./images/Main/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        },
    }

    useEffect(() => {
        if (success && token) {
            navigate("/");
        }
    }, [success, token, navigate]);

    return (
        <section style={styles.img} className='px-6 py-[140px] flex flex-col items-center justify-center text-[#FFF] text-center'>
            <p className='uppercase font-light'>START FOR FREE</p>
            <h2 className='font-medium text-3xl py-4'>Welcome!</h2>
            <p className='text-base'>Don't have an account? <Link to='/signup' className='text-[#FFF]'> <TextLink>Sign up</TextLink> </Link></p>
            <form onSubmit={onFinish} className="flex flex-col gap-5 pt-6 w-full sm:w-2/5">
                <Input
                    type="email"
                    name="email"
                    placeholder="Enter your E-mail"
                    value={email}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handleChange}
                />
                <p className='text-right text-[#C6A982]'>
                    <Link onClick={() => setIsForgotOpen(true)}><TextLink>Forgot your password?</TextLink></Link>
                </p>
                <button
                    type="submit"
                    className={`py-3 rounded-xl ${
                        loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#C6A982]"
                    }`}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Sign in"}
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>

            <ModalFlow isOpen={isForgotOpen} onClose={() => setIsForgotOpen(false)}/>

        </section>
    );
};

export default Signin;