import React, { useState, useRef, useEffect } from "react";
import ModalForgot from "./ModalForgot";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 14px;
  font-size: 16px;
  border: 1px solid #999;
  border-radius: 10px;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #999;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 2px;
    font-size: 12px;
    color: #999;
    background: white;
    padding: 0 5px;
    left: 10px;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #999;
  pointer-events: none;
  transition: 0.3s;
  background: white;
`;

const ModalFlow = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNextStep = () => setStep(step + 1);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
    const [canResend, setCanResend] = useState(false);
    const inputRefs = useRef([]);

    const [timeLeft, setTimeLeft] = useState(119); // 2 минуты

    useEffect(() => {
        if (step === 2) {
            if (timeLeft <= 0) {
                setCanResend(true)
                return
            }

            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(timer);
        }

    }, [timeLeft, step]);

    const handleCodeChange = (index, value) => {
        if (/^[0-9]?$/.test(value)) {
            const newCode = [...verificationCode];
            newCode[index] = value;
            setVerificationCode(newCode);

            if (value && index < 3) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = () => {
        handleNextStep()
    };

    const handleResendCode = () => {
        if (canResend) {
            setTimeLeft(119);
            setCanResend(false);
            setVerificationCode(["", "", "", ""]);
            inputRefs.current[0].focus();
        }
    };

    const navigate = useNavigate()

    const onFinish = () => {
        onClose()
        navigate('/') 
    }

    const isFormValid = verificationCode.every((digit) => digit !== "");

    return (
        <ModalForgot isOpen={isOpen} onClose={onClose}>

            {step === 1 && (
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold">Password recovery</h2>
                    <p className="text-xs sm:text-sm text-[#1E1E1E] opacity-80"
                    >To recover your password, enter your phone number, <br /> to which a link will be sent to complete the recovery <br /> of access</p>
                    <InputWrapper>
                        <StyledInput
                            type="email"
                            placeholder=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Label>E-mail</Label>
                    </InputWrapper>


                    <button className="bg-[#402D1D] rounded-xl text-lg text-white py-3 mt-4 w-full" onClick={handleNextStep}>
                        Receive the code
                    </button>

                    <p className="text-[#402D1D] text-xs sm:text-base  flex items-center justify-center gap-2">Do you already have an account?
                        <div className="underline text-[14px] cursor-pointer" onClick={onClose}>Login in</div>
                    </p>
                    <p className="text-[#402D1D] text-xs sm:text-base flex items-center justify-center gap-2">Don't have an account?
                        <Link to='/signup' style={{ borderBottom: '1px solid ' }}>Sign up</Link>
                    </p>
                </div>
            )}

            {step === 2 && (
                <>
                    <div className="flex flex-col">
                        <h2 className="text-3xl">Identity verification</h2>
                        <p className="text-sm pt-4 pb-6 text-[#1E1E1E] opacity-80">
                            A code has been sent to your email. It is needed to <br />
                            confirm your identity.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        {verificationCode.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                className="w-1/4  h-20 sm:h-24 text-4xl text-center rounded-lg"
                                value={digit}
                                onChange={(e) => handleCodeChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                ref={(el) => (inputRefs.current[index] = el)}
                                style={{
                                    boxShadow: "inset 0 0 8px rgba(0, 0, 0, 0.2)",
                                }}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <p className="mt-4">
                            <span className="opacity-50">Request again in</span>{" "}
                            {/*{Math.floor(resendTimer / 60)}:{(resendTimer % 60).toString().padStart(2, "0")}*/}
                            {Math.floor(timeLeft / 60) + ':' +(timeLeft % 60).toString().padStart(2, "0")}
                        </p>
                        <button disabled={!canResend} onClick={handleResendCode} className={`py-2 ${!canResend ? 'opacity-50' : 'cursor-pointer opacity-100'}`}>
                            Request again
                        </button>

                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={!isFormValid}
                            className={`py-4 bg-[#402D1D] text-[#FFF] rounded-xl mt-5 ${!isFormValid && 'opacity-70'}`}
                        >
                            Recover password
                        </button>
                    </div>
                </>
            )}

            {step === 3 && (
                <>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-semibold">Change password</h2>
                        <p className="text-sm text-[#1E1E1E] opacity-80"
                        >The password must contain at least 6 characters including  numbers, letters and special characters(!%$@).</p>
                        <InputWrapper>
                            <StyledInput
                                type="password"
                                placeholder=""
                            />
                            <Label>Enter password</Label>
                        </InputWrapper>

                        <InputWrapper>
                            <StyledInput
                                type="password"
                                placeholder=""
                            />
                            <Label>Confirm password</Label>
                        </InputWrapper>


                        <button className="bg-[#402D1D] rounded-xl text-lg text-white py-3 mt-4 w-full font-semibold" onClick={onFinish}>
                            Log in
                        </button>

                    </div>
                </>
            )}
        </ModalForgot>
    );
};

export default ModalFlow;
