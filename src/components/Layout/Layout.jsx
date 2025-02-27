import React, { useState } from 'react';
import {Link, Outlet, useNavigate} from 'react-router-dom';
import { Burger } from '../../ui/icons';
import { FaWhatsapp, FaTelegram, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/authSlice";

const Layout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useSelector(state => state.auth);
    const [active, setActive] = useState("/");
    const [menuOpen, setMenuOpen] = useState(false)
    const links = ["Main", "About course", "Certification", "About OAA", "Community"];

    const handleLogout = () => {
        dispatch(logout()); // Удаляем токен из Redux и LocalStorage
        navigate("/signin"); // Перенаправляем на страницу входа
    };

    return (
        <>
            <header className="">
                <nav className="flex justify-between items-center px-6 py-1 relative  bg-white">
                    <div className='flex items-center'>
                        <div className="flex items-center ">
                            <img width="100px" src="https://s3-alpha-sig.figma.com/img/79ef/e15e/f088c8ee0a01ca894df181e6c4dc1ab0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Sw4BT40rNkkhP79NFr1VWv3aVCefZ2OV3BesLkBQJFNQ2B1hxG0bfzdCfW7x7jhAiwgiwBknc0OnSsZC6WMOwUwrBm~~43dnRds73qh7IOFD567s7Y12rJzHDNFwxjLuq6BMEwt61fxMqQY3LY4RRKVRzdQrLr0Coa3-cB35l8wFgJpNQljq6u7mLLMKyAEx6Xfyq5vSg1Z-LDWt73~w47XClK7fM9RzpbmYWFBUDYPNmrFmRfWiLVdA5AxeqQWD1hwBxROwIJSC~LRLwLYnKVASMRUt~A0l0u-SoBirKTSm69bHqXpPnIlwo8FTLGmaGcC9HCDmBv23LM95Rd31Ow__" alt="Logo" className='absolute left-0 ml-3 z-50' style={{ top: "-6px" }} />
                        </div>

                        <ul className={`absolute top-16 left-0 w-full ml-28 bg-white z-50 p-6 shadow-md transform ${menuOpen ? "block" : "hidden"} md:flex md:static md:p-0 md:shadow-none md:space-x-6 md:w-auto md:bg-transparent ml-30`}>
                            {links.map((link) => {
                                const formattedLink = link === "Main" ? "/" : `/${link.trim().toLowerCase().replace(/\s+/g, '')}`;
                                return (
                                    <li key={link} className="md:inline-block block py-2">
                                        <Link
                                            to={formattedLink}
                                            className={`text-black text-lg relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:left-0 after:bottom-[-2px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${active === link ? "after:scale-x-100" : ""}`}
                                            onClick={() => {
                                                setActive(link.trim());
                                                setMenuOpen(false);
                                            }}
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                    </div>
                    {
                        token ? (
                            <div>
                                <button onClick={handleLogout} className="text-black hover:underline">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <Link to="/signin" className="text-black text-lg hover:underline">Login</Link>
                                <span className="mx-3">|</span>
                                <Link to="/signup" className="text-black text-lg hover:underline">Sign in</Link>
                                <button className="ml-4 text-black text-xl md:hidden"
                                        onClick={() => setMenuOpen(!menuOpen)}>
                                    <Burger/>
                                </button>
                            </div>
                        )
                    }


                </nav>
            </header>

            <Outlet/>

            <footer className="bg-[#402d1d] text-white py-12 px-6 sm:px-12">
                <div className="max-w-5xl  grid grid-cols-1 sm:grid-cols-3 gap-8">

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Pages</h3>
                        <ul className="space-y-2">
                            {["Home", "About", "Courses", "Blog", "Contact"].map((page, index) => (
                                <li key={index} className="hover:text-[#c6a982] transition">
                                    <Link href="/">{page}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contacts</h3>
                        <div className="text-[#c6c0bb] text-sm">
                            <p className="mb-1">Phone number</p>
                            <p className="text-white text-lg font-medium">+ (2) 578-345-789</p>
                        </div>
                        <div className="text-[#c6c0bb] text-sm mt-4">
                            <p className="mb-1">E-mail</p>
                            <p className="text-white text-lg font-medium">info@academy.com</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Social Media</h3>
                        <div className="space-y-2 flex flex-wrap items-end gap-5">
                            {[
                                { icon: <FaWhatsapp />, name: "WhatsApp" },
                                { icon: <FaTelegram />, name: "Telegram" },
                                { icon: <FaInstagram />, name: "Instagram" },
                                { icon: <FaFacebook />, name: "Facebook" },
                                { icon: <FaYoutube />, name: "YouTube" }
                            ].map((social, index) => (
                                <div key={index} className="flex items-start justify-center gap-2 text-sm  hover:text-[#c6a982] transition cursor-pointer">
                                    <span className="text-2xl">{social.icon}</span>
                                    <span>{social.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Layout;