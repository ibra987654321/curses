import { useState } from 'react';
import SidebarButton from "./SidebarButton";
import { Logout, Account, SmallLetter, Delete, BigLetter } from '../../../ui/icons';
import Modal from './Modal'; // Подключаем модалку

const ProfileSidebar = ({ activeTab, setActiveTab }) => {
    const [showModal, setShowModal] = useState(false); // Состояние для показа модалки
    const [modalMessage, setModalMessage] = useState(''); // Сообщение для модалки

    // Функция для открытия модалки с сообщением
    const openModal = (message) => {
        setModalMessage(message);
        setShowModal(true);
    };

    // Функция для закрытия модалки
    const closeModal = () => {
        setShowModal(false);
        setModalMessage('');
    };

    // Функция для подтверждения действия (удаление аккаунта или выход)
    const handleConfirm = () => {
        // Логика для удаления аккаунта или выхода
        console.log(modalMessage); // Здесь можно выполнить удаление или выход
        closeModal();
    };

    return (
        <div className='flex flex-col bg-[#FFFFFF] px-5 py-6 md:w-1/4 text-center items-center rounded-xl'>
            <p className='pb-5 text-xl'>Personal details</p>
            <img src="./images/Profile/beg.png" className='w-1/3' alt="Profile" />
            <h2 className='font-semibold text-xl'>Asanalieva Begayim</h2>
            <p className='flex text-[13px] gap-1 items-center'><SmallLetter /> asanalievabegaiym@gmail.com</p>
            <div className='flex flex-col w-full gap-2 pt-4'>
                <SidebarButton active={activeTab === 'personalData'} onClick={() => setActiveTab('personalData')} icon={<Account />} text='Personal data' />
                <SidebarButton active={activeTab === 'accountSecurity'} onClick={() => setActiveTab('accountSecurity')} icon={<BigLetter />} text='Account Security' />
                <SidebarButton onClick={() => openModal('Are you sure you want to log out?')} icon={<Logout />} text='Log out' />
                <SidebarButton onClick={() => openModal('Are you sure you want to delete your account?')} icon={<Delete />} text='Delete account' textColor='#D40000' borderColor='#D40000' />
            </div>

            {/* Модальное окно */}
            <Modal
                message={modalMessage}
                onClose={closeModal}
                onConfirm={handleConfirm}
                show={showModal}
            />
        </div>
    );
};

export default ProfileSidebar;
