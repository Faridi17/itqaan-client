import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

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

const quickLinks2 = [
    {
        path: "mailto:smpit.alitqaan@gmail.com",
        name: "smpit.alitqaan@gmail.com",
        icon: <MdOutlineEmail className='group-hover:text-slate-100 text-lg' />
    },
    {
        path: "https://wa.me/6283802890120",
        name: "0838-0289-0120",
        icon: <FaWhatsapp className='group-hover:text-slate-100 text-lg' />
    },
];

const sosmedLinks = [
    {
        path: 'https://www.youtube.com',
        icon: <FaYoutube />
    },
    {
        path: 'https://www.instagram.com/alitqaan.pd',
        icon: <FaInstagram />
    },
    {
        path: 'https://www.facebook.com/profile.php?id=61559440239285',
        icon: <FaFacebookF />
    },
]

const Footer = () => {
    return (
        <footer className="pt-10 pb-8 bg-[#006A60]">
            <div className="max-w-[90rem] px-5 mx-auto">
                <div className="flex max-w-[80rem] flex-col flex-wrap justify-between md:flex-row  gap-[30px]  mb-8">
                    <div>
                        <div className="flex ">
                            <h3 className="font-semibold sm:mx-w-lg sm:text-[32px] text-[28px] max-w-sm bg-gradient-to-br bg-clip-text text-transparent from-white to-slate-50">
                                Al-Itqoaan Palembang Darussalam
                            </h3>
                        </div>
                        <p className="text-[16px] leading-7 font-normal text-slate-300">
                            Qur'ani, mandiri, serta terdepan dalam prestasi
                        </p>
                    </div>

                    <div className="">
                        <h2 className="text-[20px] leading-[30px] font-bold mb-6 text-slate-200">
                            Link Cepat
                        </h2>
                        <ul className="flex flex-col gap-4">
                            {quickLinks1.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.path}
                                        className="text-[16px] leading-7 font-light text-slate-300 hover:text-slate-100"
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="text-[20px] leading-[30px] font-bold mb-6 text-slate-200">
                            Hubungi Kami
                        </h2>
                        <ul className="flex flex-col gap-4">
                            {quickLinks2.map((link, index) => (
                                <li key={index} className='flex items-center gap-1 text-slate-300 group'>
                                    {link.icon}
                                    <NavLink
                                        to={link.path}
                                        className="text-[15px] leading-7 font-light group-hover:text-slate-100 "
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-11/12 mx-auto pt-10 border-t border-slate-400">
                    <div className="flex items-center justify-center mb-5">
                        {sosmedLinks.map((link, index) => (
                            <a  
                                href={link.path}
                                target="_blank"
                                key={index}
                                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-400 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 text-secondary text-xl"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                    <p className="font-medium text-[0.825rem] text-slate-300 text-center">
                        Copyright © 2024 At-Itqon.sch.id - All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer