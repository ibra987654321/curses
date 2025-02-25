import React from 'react';
import { Exit } from '../../ui/icons';

const ModalForgot = ({ isOpen, onClose, children }) => {

    if (!isOpen) return null;

    return (
        <section
            className="px-3 sm:px-6 absolute w-full h-full py-10 flex flex-col items-center justify-center text-[#FFF] text-center"
            style={{ background: "rgba(0,0,0,0.5)" }}
        >
            <div className="modal bg-white p-6 rounded-xwl text-black w-full sm:w-1/3">
                <div className="flex w-full justify-end pb-5 pt-2 cursor-pointer" onClick={onClose}>
                    <Exit />
                </div>
                {children}
            </div>
        </section>
    );
};

export default ModalForgot;