import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Apple, Google } from '../../ui/icons';
import styled from 'styled-components';
import Modal from '../../components/Modal/Modal';
import {useDispatch, useSelector} from "react-redux";
import {registerUser, setFormData} from "../../store/formSlice";

const Input = styled.input`
padding: 12px 16px; 
border-radius: 12px;
font-size: 14px;
color: #1C1B1F;
`

const TextLink = styled.span`
font-size: 15px;
font-weight: 600;
border-bottom: 1px solid #C6A982;
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

const Signup = () => {

    const [submit, setSubmit] = useState(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { email, password1, password2, loading, error, success, token } = useSelector(state => state.form);
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setFormData({ field: name, value }));
    };

    const onFinish = (e) => {
        e.preventDefault();
        if (!email || !password1 || !password2) {
            alert("Please fill in all fields!");
            return;
        }
        if (password1 !== password2) {
            alert("Passwords do not match!");
            return;
        }
        // setSubmit(true)
        dispatch(registerUser({ email, password1, password2}));
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
            navigate("/"); // Перенаправляем на главную страницу
        }
    }, [success, token, navigate]);


    return (
        <section style={styles.img} className='px-6 py-[140px] flex flex-col items-center justify-center text-[#FFF] text-center'>
            <p className='uppercase font-light'>START FOR FREE</p>
            <h2 className='font-medium text-3xl py-4'>Create a new account</h2>
            <p className='text-base'>Already have an account? <Link to='/signin' className='text-[#C6A982]'> <TextLink>Log in</TextLink> </Link></p>
            <form onSubmit={onFinish} className="flex flex-col gap-5 pt-6 w-full sm:w-2/5">
                <Input
                    type="email"
                    name="email"
                    placeholder="Enter your E-mail"
                    value={email}
                    onChange={handleChange}
                />
                <Input
                    type="password1"
                    name="password1"
                    placeholder="Enter your password"
                    value={password1}
                    onChange={handleChange}
                />
                <Input
                    type="password2"
                    name="password2"
                    placeholder="Enter your password one more time"
                    value={password2}
                    onChange={handleChange}
                />
                <p>
                    By signing in, you agree to our <br />
                    <Link to='/asd'><TextLink className='text-[#C6A982]'>Terms of Use</TextLink></Link> and <Link to=''><TextLink className='text-[#C6A982]'>Privacy Policy</TextLink>.</Link>
                </p>

                <button
                    type="submit"
                    className={`py-3 rounded-xl ${
                        loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#C6A982]"
                    }`}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Sign up"}
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {/*<div className='flex items-center gap-3 justify-between opacity-50'>*/}
                {/*    <hr className='text-[#FFFFFF] w-1/4 sm:w-2/6' />*/}
                {/*    <p className='sm:text-base text-sm'>Or sign up with</p>*/}
                {/*    <hr className='text-[#FFFFFF] w-1/4 sm:w-2/6' />*/}
                {/*</div>*/}
                {/*<Wrapper className='flex justify-between items-center '>*/}
                {/*    <Button className=''>*/}
                {/*        <Google />*/}
                {/*    </Button>*/}
                {/*    <Button className=''>*/}
                {/*        <Apple />*/}
                {/*    </Button>*/}
                {/*</Wrapper>*/}
            </form>

            <Modal submit={submit} />

        </section>
    );
};

export default Signup;