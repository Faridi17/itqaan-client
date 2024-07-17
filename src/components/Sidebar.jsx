import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { PiStudentBold } from "react-icons/pi";
import { BiPhotoAlbum } from 'react-icons/bi';
import useMediaQuery from '../hooks/useMediaQuery';
import { itqaan } from '../images';

const links = [
    {
        title: 'Dashboard',
        links: [
            {
                name: 'registrant',
                icon: <PiStudentBold />
            },
            {
                name: 'blog',
                icon: <FiEdit />,
            },
            {
                name: 'gallery',
                icon: <BiPhotoAlbum />,
            },
        ],
    },
];

const Sidebar = ({ activeMenu, setActiveMenu }) => {
    const isAboveSmallsScreens = useMediaQuery("(min-width: 768px)")

    const handleCloseSideBar = () => {
        if (isAboveSmallsScreens) {
            setActiveMenu(!activeMenu);
        }
    };

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 opacity-95 hover:bg-slate-100 transition-all duration-300 m-2';

    return (
        <div className="ml-3 h-screen shadow-md md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center">
                        <Link onClick={() => setActiveMenu(false)} className="items-center gap-3 ml-3 mt-4 flex font-extrabold tracking-tight text-slate-900 opacity-90">
                            <div>
                                <img src={itqaan} loading='lazy' alt="logo" className='w-8 opacity-90' />
                            </div>
                            <div>
                                <h1 className='bg-gradient-to-br bg-clip-text text-transparent from-primary to-teal-500 font-bold'>
                                    SMPIT Al-Qur'an Al-Itqaan
                                </h1>
                                <h2 className='font-medium text-text-color opacity-95 text-sm'>
                                    Palembang Daarussalam
                                </h2>
                            </div>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setActiveMenu(!activeMenu)}
                            style={{ color: '#0d9488' }}
                            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                        >
                            <MdOutlineCancel />
                        </button>
                    </div>
                    <div className="mt-10 ">
                        {links.map((item) => (
                            <div key={item.title}>
                                <p className="text-gray-800 opacity-95 font-[490] m-3 mt-4 uppercase">
                                    {item.title}
                                </p>
                                {item.links.map((link) => (
                                    <NavLink
                                        to={`/dashboard/${link.name}`}
                                        key={link.name}
                                        onClick={handleCloseSideBar}
                                        style={({ isActive }) => ({
                                            backgroundColor: isActive && '#0d9488',
                                        })}
                                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                    >
                                        {link.icon}
                                        <span className="capitalize ">{link.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Sidebar