import React from 'react'
import { Carousel } from 'flowbite-react'
import { IoMdEye } from "react-icons/io";
import { TbTargetArrow } from "react-icons/tb";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import mudir from '../images/mudir.jpg'
import Layout from './Layout'
import { halaman1, halaman2, kelas1, kelas2, kelas3, masjid1, masjid2, kantin1, kantin2, lapangan1, lapangan2, lapangan3, lapangan4, tahfizhQuran, clubBahasa, leadership, computer, manah, kunjunganEdukatif } from '../images'
import Header from '../components/Header'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Halaman = [halaman1, halaman2]
const Kelas = [kelas1, kelas2, kelas3]
const Masjid = [masjid1, masjid2]
const Kantin = [kantin1, kantin2]
const Lapangan = [lapangan1, lapangan2, lapangan3, lapangan4]

const teachers = [
    {
        image: mudir,
        name: 'DR. KH. Amin Rahman, Lc., M.H., Al-Hafizh',
        subject: 'Guru Aqidah Akhlak',
        facebook: 'https://www.facebook.com',
        instagram: 'https://www.instagram.com'
    },
    {
        image: mudir,
        name: 'DR. KH. Amin Rahman, Lc., M.H., Al-Hafizh',
        subject: 'Guru Fiqih',
        facebook: 'https://www.facebook.com',
        instagram: 'https://www.instagram.com'
    },
    {
        image: mudir,
        name: 'Ahmad Rosyadi, S.Pd.I., M.H.',
        subject: 'Guru Sirah Nabawi',
        facebook: 'https://www.facebook.com',
        instagram: 'https://www.instagram.com'
    },
    {
        image: mudir,
        name: 'Ahmad Rosyadi, S.Pd.I., M.H.',
        subject: 'Guru Hadist',
        facebook: 'https://www.facebook.com',
        instagram: 'https://www.instagram.com'
    },
    {
        image: mudir,
        name: 'Ahmad Rosyadi, S.Pd.I., M.H.',
        subject: 'Guru Tahfizh',
        facebook: 'https://www.facebook.com',
        instagram: 'https://www.instagram.com'
    },
    {
        image: mudir,
        name: 'Aufar',
        subject: 'Guru Tahsin',
        facebook: 'https://www.facebook.com',
        instagram: 'https://www.instagram.com'
    },
    {
        image: mudir,
        name: 'Aufar',
        subject: 'Guru Bahasa Arab',
        facebook: 'https://www.facebook.com',
        instagram: 'https://www.instagram.com'
    },
    {
        image: mudir,
        name: 'Isnaeni',
        subject: 'Guru Matematika',
        facebook: 'https://www.facebook.com',
        instagram: 'https://www.instagram.com'
    },
    {
        image: mudir,
        name: 'Lafeli',
        subject: 'Guru Bahasa Inggris',
        facebook: 'https://www.facebook.com',
        instagram: 'https://www.instagram.com'
    },
    {
        image: mudir,
        name: 'Andre',
        subject: 'Guru TIK',
        facebook: 'https://www.facebook.com',
        instagram: 'https://www.instagram.com'
    },
    {
        image: mudir,
        name: 'Andre',
        subject: 'Guru PJOK',
        facebook: 'https://www.facebook.com',
        instagram: 'https://www.instagram.com'
    },
]

const FacilityCard = ({ name, images }) => {
    return (
        <figure className="relative h-64 w-80 transition-all duration-300 cursor-pointer filter">
            <Carousel slide={false} indicators={false}>
                {images.map(image => (
                    <img className='rounded-md h-64 max-w-xs lg:max-w-sm object-cover' src={image} alt={name} />
                ))}
            </Carousel>
            <figcaption className="absolute rounded-b-lg w-full bg-secondary bg-opacity-70 backdrop-blur-sm px-4 text-lg text-white bottom-0 py-4">
                <p className='text-dark font-[450]'>
                    {name}
                </p>
            </figcaption>
        </figure>
    )
}

const TeacherCard = ({ image, name, subject, instagram, facebook }) => {
    return (
        <div className='sm:w-60 w-[10.1rem] bg-secondary border rounded-md flex flex-col items-center justify-center p-4'>
            <img className='w-32 h-32 rounded-full mb-4' loading='lazy' src={image} alt="guru" />
            <div className='text-center'>
                <h3 className='text-dark font-semibold sm:text-sm text-xs'>
                    {name}
                </h3>
                <p className='text-text-color sm:text-sm text-xs'>
                    {subject}
                </p>
                <div className='flex justify-center mt-2 gap-2 text-text-color'>
                    <a href={instagram} target='_blank'>
                        <FaInstagram className='hover:text-dark transition-all sm:text-base text-sm' />
                    </a>
                    <a href={facebook} target='_blank'>
                        <FaFacebookF className='hover:text-dark transition-all sm:text-base text-sm' />
                    </a>
                </div>
            </div>
        </div>
    )
}

const ProgramCard = ({ title, image, children }) => {
    return (
        <div className="max-w-[20rem] bg-white border border-gray-200 rounded-lg">
            <img className="rounded-t-lg" loading='lazy' src={image} alt="program" />
            <div className="p-5">
                <h5 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-dark">
                    {title}
                </h5>
                <p className="mb-3 md:text-base md:text-[15px] sm:text-[14px] text-[12px] font-normal text-text-color">
                    {children}
                </p>
            </div>
        </div>
    )
}

const About = () => {
    return (
        <Layout>
            <section className="py-14 lg:py-18 max-w-6xl p-5 mx-auto">
                <Header header='Kata Sambutan Pembina Sekolah'>

                </Header>
                <div className="flex md:flex-row flex-col justify-center items-center md:gap-x-8 gap-y-10">
                    <div className='md:w-2/5 lg:w-2/6 md:flex justify-end xl:justify-center'>
                        <img className='rounded-sm' loading='lazy' src={mudir} alt="Pimpinan Sekolah Al-Itqoaan" />
                    </div>
                    <div className='md:w-3/5 lg:w-4/6'>
                        <h3 className='text-dark font-bold text-xl md:text-2xl mb-4'>
                            السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
                        </h3>
                        <p className='text-text-color md:text-base text-sm'>
                            Alhamdulillah, kita panjatkan puji syukur kepada Allah Ta’ala, bahwasanya berkat Rahmat-Nya website ini dapat dikerjakan. Walaupun masih jauh dari kesempurnaan.

                            Tak lupa pula Shalawat dan Salam semoga selalu tetap tercurahkan kepada Nabi Besar Muhammad Shallallahu ‘alaihi wasallam, yang telah menuntun kita dari jaman kegelapan ke jalan yang terang dan berilmu pengetahuan.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-white py-14 lg:py-18 relative">
                <div className="max-w-6xl mx-auto p-5">
                    <div className="flex flex-col justify-center">
                        <Header header='Visi & Misi'>

                        </Header>
                        <div className='flex flex-wrap justify-center gap-6'>
                            <div className='p-6 bg-white border rounded-lg shadow-sm md:max-w-lg'>
                                <div className='w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary mb-2 flex items-center justify-center'>
                                    <IoMdEye className='text-white text-2xl md:text-3xl' />
                                </div>
                                <p className='font-semibold text-xl md:text-2xl text-slate-800 mb-2'>
                                    Visi
                                </p>
                                <p className='text-sm md:text-base text-slate-700 font-[490] opacity-90'>
                                    Mencetak generasi Qur’ani  yang mengamalkan ilmunya dan sesuai zamannya, bersungguh-sungguh pada bidangnya, santun dalam berakhlak, mandiri serta terdepan dalam prestasi, cakap dalam teknologi dan mampu berkomunikasi (Bahasa Arab dan Inggris) dengan baik.
                                </p>
                            </div>
                            <div className='p-6 bg-white border rounded-lg shadow-sm md:max-w-lg'>
                                <div className='w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary mb-2 flex items-center justify-center'>
                                    <TbTargetArrow className='text-white text-2xl md:text-3xl' />
                                </div>
                                <p className='font-semibold text-xl md:text-2xl text-slate-800 mb-2'>
                                    Misi
                                </p>
                                <ul className='ml-6 md:text-base text-[15px] text-text-color font-[490] opacity-90 space-y-2 md:mt-3 mt-2 list-decimal'>
                                    <li>
                                        Mengayomi siswa secara intensif dalam menghafal dan memahami Al-Qur’an dengan metode talaqqi.
                                    </li>
                                    <li>
                                        Melaksanakan pembelajaran yang efektif, kreatif , inovatif dan menyenangkan.
                                    </li>
                                    <li>
                                        Menyediakan sarana dan prasarana akademik dan non akademik dalam menunjang pembelajaran yang efektif.
                                    </li>
                                    <li>
                                        Mengadakan program pembinaan bahasa arab dan inggris secara intensif dan aplikatif.
                                    </li>
                                    <li>
                                        Menumbuhkan kesadaran siswa untuk disiplin, kerja keras dan mandiri serta mampu bersosialisasi terhadap lingkungannya.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-14 lg:py-18 max-w-6xl mx-auto">
                <Header header='Pengasuh dan Pendidik'>

                </Header>
                <div className='bg-secondary rounded-lg p-5 lg:p-10 md:p-7 relative'>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                        }}
                        navigation={{
                            prevEl: '.swiper-button-prev-teach',
                            nextEl: '.swiper-button-next-teach',
                        }}
                        modules={[Pagination, Navigation]}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                        className="mySwiper custom-swiper"
                    >
                        {teachers.map((teacher, index) => (
                            <SwiperSlide key={index}>
                                <TeacherCard
                                    image={teacher.image}
                                    name={teacher.name}
                                    subject={teacher.subject}
                                    instagram={teacher.instagram}
                                    facebook={teacher.facebook}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button className="swiper-button-prev-teach absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 bg-primary rounded-full flex backdrop-blur-2xl items-center justify-center z-10 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-secondary">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button className="swiper-button-next-teach absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 bg-primary rounded-full flex backdrop-blur-2xl items-center justify-center z-10 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-secondary">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </section>
            <section className="py-14 lg:py-18 max-w-6xl p-5 mx-auto">
                <Header header='Program Unggulan'>

                </Header>
                <div className="grid grid-cols-2 grid-flow-row auto-rows-max md:flex flex-wrap justify-center gap-5 md:gap-7">
                    <ProgramCard image={tahfizhQuran} title="Tahfizul Qur'an">
                        Merupakan program intensif menghafal Al-Qur'an dan menggunakan metode halaqah dalam proses menghafalnya
                    </ProgramCard>
                    <ProgramCard image={clubBahasa} title='Klub Bahasa Arab dan Inggris'>
                        Sebagai wadah bagi para Siswa untuk belajar dan meningkatkan kemampuan berbahasa inggris dan arab
                    </ProgramCard>
                    <ProgramCard image={leadership} title='Leadership'>
                        Sebuah program yang dirancang untuk membantu individu dalam mengembangkan keterampilan dan kemampuan kepemimpinan yang dibutuhkan untuk memimpin tim secara efektif.
                    </ProgramCard>
                    <ProgramCard image={computer} title='IT Computer'>
                        Program ini bertujuan untuk mengembangkan kemampuan siswa dalam bidang teknologi informasi dan komunikasi, khususnya dalam penggunaan komputer
                    </ProgramCard>
                    <ProgramCard image={manah} title='Beladiri, Memanah, dan Berenang'>
                        Merupakan salah satu eskul unggulan dari SMPIT Al-Itqaan yang bertujuan untuk melatih keterampilan dan ketangkasan para siswa
                    </ProgramCard>
                    <ProgramCard image={kunjunganEdukatif} title='Kunjungan Edukatif'>
                        salah satu program sekolah yang bertujuan untuk memberikan mengajar kepada para siswa dengan cara terjun langsung kelapangan.
                    </ProgramCard>
                </div>
            </section>
            <section className="bg-secondary py-14 lg:pb-24">
                <div className="container relative max-w-6xl mx-auto p-5">
                    <Header header='Fasilitas Sekolah'>

                    </Header>
                    <div className="flex flex-col text-center ">
                        <div className='mt-12 flex flex-wrap justify-center gap-6 lg:gap-8'>
                            <FacilityCard name='Masjid yang Bersih' images={Masjid} />
                            <FacilityCard name='Lingkungan yang Luas' images={Halaman} />
                            <FacilityCard name='Ruang Kelas' images={Kelas} />
                            <FacilityCard name='Wifi Gratis' images={Kelas} />
                            <FacilityCard name='Kantin yang Sehat dan Bersih' images={Kantin} />
                            <FacilityCard name='Berbagai Macam Jenis Lapangan Olahraga' images={Lapangan} />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default About