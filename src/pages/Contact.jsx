import React from 'react'
import { Link } from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl";
import { FiMail } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { FaWhatsapp } from 'react-icons/fa';
import Header from '../components/Header';
import Layout from './Layout'


const Contact = () => {
    return (
        <Layout>
            <section className='py-14 lg:py-18 lg:pb-24 max-w-6xl mx-auto p-5 md:mt-36 mt-28'>
                <div className='flex flex-col md:flex-row gap-7 items-center'>
                    <div className='p-2 bg-secondary rounded-lg md:w-3/5 w-full'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6386125541035!2d104.73615521078263!3d-2.919851039581843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b9d00758def5d%3A0xbe34c07c711834ac!2sSMPIT%20AL-ITQAAN%20PALEMBANG%20DAARUSSALAM!5e0!3m2!1sid!2sid!4v1718945298800!5m2!1sid!2sid"
                            width="100%"
                            height="450"
                        >
                        </iframe>
                    </div>
                    <div className='w-full md:w-2/5 mt-4 md:mt-0'>
                        <h1 className='md:text-4xl text-3xl font-semibold text-dark mb-3'>
                            Hubungi Kami
                        </h1>
                        <div className='flex flex-col gap-2 text-text-color'>
                            <div className='flex gap-5  items-center'>
                                <div className='w-8 text-center'>
                                    <RiMapPinLine className='text-xl text-primary' />
                                </div>
                                <h2 className='md:text-base text-sm'>
                                    Lrg. Sejahtera, Sukarami, Kec. Sukarami, Kota Palembang, Sumatera Selatan 30961
                                </h2>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='w-8 text-center'>
                                    <FiMail className='text-xl text-primary' />
                                </div>
                                <h2 className='md:text-base text-sm'>
                                    smpit.alitqaan@gmail.com
                                </h2>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='w-8 text-center'>
                                    <FaWhatsapp className='text-xl text-primary' />
                                </div>
                                <h2 className='md:text-base text-sm flex flex-col'>
                                    +6283802890120
                                    <span>
                                        (Admin Al-Itqaan)
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="bg-white py-14 lg:py-18 lg:pb-24 relative">
                <div className="p-5 max-w-6xl mx-auto">
                    <div className="flex flex-col text-center ">
                        <Header header='Hubungi Kami'>
                            Kami siap membantu Anda. Silakan hubungi kami untuk pertanyaan,
                            saran, atau informasi lebih lanjut.
                        </Header>

                        <div className="relative  mx-auto mt-10 flex flex-wrap justify-center gap-y-6 gap-x-14">
                            <Link to='https://maps.app.goo.gl/LZXdqdn72ATuDUHa8' className="flex sm:max-w-md w-full  items-center justify-center gap-5 px-12 border-2 py-9 rounded-xl">
                                <SlLocationPin className="text-3xl lg:text-4xl text-primary" />
                                <div className="">
                                    <p className="text-sm lg:text-lg  text-[#4f4f4f] max-w-lg font-medium mx-auto">
                                        Jln. Sukabangun, Punti Kayu, Palembang
                                    </p>
                                </div>
                            </Link>
                            <Link to='https://wa.me/6283802890120' className="flex sm:max-w-md w-full items-center justify-center gap-5 px-12 border-2 py-9 rounded-xl">
                                <FaWhatsapp className="text-2xl sm:text-3xl lg:text-4xl text-primary w-10" />
                                <div className="flex flex-col ">
                                    <p className="text-sm lg:text-lg  text-[#4f4f4f] max-w-lg font-medium mx-auto">
                                        +6283802890120
                                    </p>
                                    <p className="text-sm lg:text-lg  text-[#4f4f4f] max-w-lg font-medium  mx-auto">
                                        (Muhammad Azka Faridi)
                                    </p>
                                </div>
                            </Link>
                            <Link to='mailto:itqoanndarussalam@gmail.com' className="sm:max-w-md flex items-center justify-center w-full gap-5 px-12 border-2 py-9 rounded-xl">
                                <FiMail className="text-2xl sm:text-3xl lg:text-4xl text-primary w-10" />
                                <div>
                                    <p className="text-sm lg:text-lg  text-[#4f4f4f] max-w-lg font-medium mx-auto">
                                        itqoaandarussalam@gmail.com
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="pt-24 pb-32 bg-white  transition-all duration-300">
                <div className="max-w-5xl mx-auto">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-12">
                            <Header header='Ada Pertanyaan?'>
                                Kami siap menjawab setiap pertanyaan yang diajukan
                            </Header>
                        </div>
                    </div>

                    <form target='_blank' action="https://formsubmit.co/smpit.alitqaan@gmail.com" method='POST' onSubmit=''>
                        <div className="w-full lg:w-2/3 md:w-4/5 md:mx-auto">
                            <div className="px-4 mb-8">
                                <label for="name" className="text-base font-bold text-primary">
                                    Nama
                                </label>
                                <input type="text" id="name"
                                    className="w-full bg-slate-200 border-secondary text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                            </div>
                            <div className="w-full px-4 mb-8">
                                <label for="email" className="text-base font-bold text-primary">
                                    Email
                                </label>
                                <input type="email" id="email"
                                    className="w-full bg-slate-200 border-secondary text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                            </div>
                            <div className="w-full px-4 mb-8">
                                <label for="message" className="text-base font-bold text-primary">
                                    Pesan
                                </label>
                                <textarea type="email" id="email"
                                    className="h-32 w-full bg-slate-200 border-secondary text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"></textarea>
                            </div>
                            <div className="w-full px-4">
                                <button
                                    type='submit'
                                    className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-lg w-full hover:opacity-90 transition-all duration-300"
                                >
                                    Kirim
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default Contact