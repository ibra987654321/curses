import { useState } from "react";
import InputField from "./InputField";
import { Back } from "../../../ui/icons";

const AccountSecurity = ({ setActiveTab, activeTab, isMobile }) => {
    const [formData, setFormData] = useState({
        email: "asanalievabegaiym@gmail.com",
        newPassword: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Form submitted:", formData);
    };

    return (
        <>
            <div className="flex items-center gap-5 pb-2 pt-2 pl-5 shadow-md sm:shadow-none ">
                {activeTab && isMobile && (
                    <button
                        className="cursor-pointer"
                        onClick={() => setActiveTab(null)}
                    >
                        <Back />
                    </button>
                )}
                <p className='font-normal text-lg  '>Account information</p>
            </div>
            <form className="px-6" onSubmit={handleSubmit}>
                <p className="pb-5 pt-5">Here you can change your account settings and password.</p>

                <InputField
                    label='Email address:'
                    type='email'
                    placeholder='Your email address'
                    width="100%"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <h2 className="pt-5 pb-2 font-semibold text-lg">Change password</h2>
                <div className='flex flex-col gap-4'>
                    <InputField
                        label='New Password'
                        type='password'
                        placeholder='Password'
                        width="100%"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                    />
                    <InputField
                        label='Confirm New Password'
                        type='password'
                        placeholder='Password'
                        width="100%"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    <button type="submit" className='text-[#FFF] mt-4 py-2 bg-[#402D1D] rounded-2xl font-semibold w-[70%] sm:w-[30%]'>
                        Update Password
                    </button>
                </div>
            </form>
            <button
                className='py-2 block sm:hidden rounded-xl sm:rounded-2xl font-semibold text-base w-[90%] sm:w-[30%] bg-[#402D1D] text-[#FFF]'
                style={{ position: 'absolute', bottom: '30px', left: "50%", transform: "translateX(-50%)" }}
            >
                Save information
            </button>
        </>

    );
};

export default AccountSecurity;
