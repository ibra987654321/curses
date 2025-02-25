import { useState } from 'react';
import { Exit } from '../../../ui/icons';

const Modal = ({ message, onClose, onConfirm, show }) => {
    if (!show) return null; 

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 w-[340px]">
                <div className="flex justify-end items-center">
                    <button onClick={onClose} className="text-xl"><Exit /></button>
                </div>
                <img src="./images/Profile/delete.png" className='w-full' alt="" />
                <p className="text-center font-semibold py-4">{message}</p>
                <div className="flex justify-between gap-2">
                    <button onClick={onClose} className="bg-[#402D1D] text-[#FFF] px-4 py-1 rounded-xl w-full">No</button>
                    <button onClick={onConfirm} className="bg-[#C6A982] text-[#FFF] px-4 py-1 w-full rounded-xl">Yes, I do</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
