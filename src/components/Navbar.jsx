import React, { useEffect, useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { NavLink } from 'react-router-dom'
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { itqaan } from '../images';

const quickLinks1 = [
    {
        path: "/",
        name: "Beranda",
    },
    {
        path: "/profil",
        name: "Profil",
    },
    {
        path: "/galeri",
        name: "Galeri",
    },
    {
        path: "/pendaftaran",
        name: "Pendaftaran",
    },
    {
        path: "/kontak",
        name: "Kontak",
    },
];

const Navbar = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const [isTopOfPage, setIsTopOfPage] = useState(true)
    const isAboveSmallsScreens = useMediaQuery("(min-width: 768px)")

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) setIsTopOfPage(true)
            if (window.scrollY !== 0) setIsTopOfPage(false)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navbarBackground = isTopOfPage ? '' : 'bg-secondary shadow-sm bg-opacity-95 transition-all duration-500'

    return (
        <nav className={`${navbarBackground} bg-secondary z-40 w-full fixed top-0 py-6`}>
            <div className='flex items-center justify-between mx-auto max-w-[90rem] px-5'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img src={itqaan} loading='lazy' alt="logo" className='w-9 opacity-90' />
                    </div>
                    <div>
                        <h1 className='bg-gradient-to-br bg-clip-text text-transparent from-primary to-teal-500 text-lg font-bold'>
                            SMPIT Al-Qur'an Al-Itqaan
                        </h1>
                        <h2 className='font-medium text-text-color opacity-95'>
                            Palembang Daarussalam
                        </h2>
                    </div>
                </div>


                {isAboveSmallsScreens ? (
                    <div className='flex justify-between gap-14 text-text-color md:text-sm font-semibold'>
                        {quickLinks1.map((link) => (
                            <NavLink
                                to={link.path}
                            >
                                {({ isActive }) => (
                                    <div className={isActive && 'text-dark'}>
                                        <p className='hover:text-dark'>
                                            {link.name}
                                        </p>
                                        <div className={isActive && 'w-5 h-[2px] mx-auto rounded-full bg-primary transition-all duration-700'} />
                                    </div>
                                )}
                            </NavLink>
                        ))}
                    </div>
                ) : (<button className='rounded-full bg-primary p-2 hover:shadow-md' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <IoMenuOutline className='text-white text-lg' />
                </button>
                )}

                {!isAboveSmallsScreens && isMenuToggled && (
                    <div className='fixed right-0 bottom-0 h-full bg-white w-[300px]'>
                        <div className='flex justify-end p-12'>
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)} className=''>
                                <IoCloseOutline className='text-primary text-2xl' />
                            </button>
                        </div>

                        <div className='flex flex-col gap-10 ml-[33%] text-2xl text-slate-800'>
                            {quickLinks1.map((link) => (
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        isActive ? "text-primary" : "hover:text-primary"
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar