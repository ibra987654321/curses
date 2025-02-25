import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowRightIn, Exit, Successfully } from "../../ui/icons";
import { Link } from "react-router-dom";

const Modal = ({ submit }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
    const [resendTimer, setResendTimer] = useState(119);
    const [canResend, setCanResend] = useState(false);
    const [send, setSend] = useState(false); // Состояние, определяющее, отправлены ли данные
    const inputRefs = useRef([]);

    useEffect(() => {
        if (isModalOpen && resendTimer > 0) {
            const timer = setInterval(() => {
                setResendTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
        if (resendTimer === 0) {
            setCanResend(true);
        }
    }, [isModalOpen, resendTimer]);

    useEffect(() => {
        if (submit) {
            setIsModalOpen(true);
        }
    }, [submit]);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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

    const handleResendCode = () => {
        if (canResend) {
            setResendTimer(119);
            setCanResend(false);
            setVerificationCode(["", "", "", ""]);
            inputRefs.current[0].focus();
        }
    };

    const handleSubmit = () => {
        // Пример того, как можно менять состояние send
        setSend(true); // Отправка данных
    };

    return (
        <section
            className="px-6 absolute w-full h-full py-10 flex flex-col items-center justify-center text-[#FFF] text-center"
            style={{ background: "rgba(0,0,0,0.5)", display: `${isModalOpen ? "flex" : "none"}` }}
        >
            {isModalOpen && (
                <div className="modal bg-white p-6 rounded-xl text-black w-full sm:w-1/3">
                    <div className="flex w-full justify-end pb-5 pt-2 cursor-pointer" onClick={handleCloseModal}>
                        <Exit />
                    </div>

                    {send ? (
                        <div className="success-message flex flex-col items-center gap-3">
                            <Successfully />
                            <p className="text-3xl text-[#1E1E1E]">You have successfully <br /> registered!</p>
                            <Link
                                onClick={handleCloseModal}
                                to='/'
                                className="mt-5 py-2 bg-[#402D1D] text-[#FFF] rounded-xl w-full flex justify-center items-center font-medium text-lg"
                            >
                                <span className="text-base">Go to the main page</span> <span className="relative left-5"> <ArrowRightIn /></span>
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <div className="flex gap-2 flex-col justify-center mt-4">
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
                            </div>
                            <div className="flex flex-col">
                                <p className="mt-4">
                                    <span className="opacity-50">Request again in</span>{" "}
                                    {Math.floor(resendTimer / 60)}:{(resendTimer % 60).toString().padStart(2, "0")}
                                </p>
                                <button disabled={!canResend} onClick={handleResendCode} className="py-2 opacity-50">
                                    Request again
                                </button>

                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="py-4 bg-[#402D1D] text-[#FFF] rounded-xl mt-5"
                                >
                                    Sign up
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};

export default Modal;
