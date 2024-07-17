import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdAppRegistration, MdSchool } from "react-icons/md";
import { FaQuestion } from "react-icons/fa6";
import { RiGalleryLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { TbZoomQuestionFilled } from "react-icons/tb";
import img from '../images/mosque.png'
import Header from '../components/Header'
import { masjid1, join1, join2, join3, join4 } from '../images'
import mudir from '../images/mudir.jpg'
import useMediaQuery from '../hooks/useMediaQuery'
import { format } from 'date-fns';

const quickLinks1 = [
    {
        path: "/",
        name: "Beranda",
        icon: <AiFillHome className='md:text-3xl text-2xl text-white' />,
    },
    {
        path: "/profil",
        name: "Profil",
        icon: <MdSchool className='md:text-3xl text-2xl text-white' />,
    },
    {
        path: "/galeri",
        name: "Galeri",
        icon: <RiGalleryLine className='md:text-3xl text-2xl text-white' />,
    },
    {
        path: "/pendaftaran",
        name: "Daftar",
        icon: <MdAppRegistration className='md:text-3xl text-2xl text-white' />,
    },
    {
        path: "/kontak",
        name: "Kontak",
        icon: <FaQuestion className='md:text-3xl text-2xl text-white' />
    },
];

const TeacherCard = ({ name, image, children }) => {
    return (
        <div className="w-36 sm:w-44 bg-secondary rounded-lg">
            <img className="rounded-t-lg opacity-95" loading='lazy' src={image} alt="guru" />
            <div className="text-center my-2.5 px-2">
                <h5 className="text-xs mb-1 font-semibold text-text-color">
                    {name}
                </h5>
                <p className="text-xs font-[450] text-text-color">
                    {children}
                </p>
            </div>
        </div>
    )
}

const ArticleCard = ({ isFirst, createdAt, title, summary, cover }) => {
    return (
        <>
            {isFirst ? (
                <div className='lg:w-1/2 mb-8 lg:m-0'>
                    <div className='sm:px-8 lg:px-0'>
                        <img className='rounded-md' loading='lazy' src={`http://localhost:3001/asset/${cover}`} alt="cover blog" />
                    </div>
                    <div className='mt-3'>
                        <p className='text-primary font-thin text-sm'>
                            {format(new Date(createdAt), 'HH:mm, d MMM yyyy')}
                        </p>
                        <p className='text-dark text-lg md:text-xl font-semibold'>
                            {title}
                        </p>
                        <p className='text-text-color md:text-lg mb-2'>
                            {summary}
                        </p>
                        <Link to={`/blog/${title}`} className='hover:text-primary underline'>
                            Baca Selengkapnya
                        </Link>
                    </div>
                </div>
            ) : (
                <div className='flex items-center gap-5 mb-8'>
                    <div className='w-2/5 flex justify-end'>
                        <img className='lg:aspect-[1] sm:aspect-[5/3] aspect-[1] object-cover rounded-md' loading='lazy' src={`http://localhost:3001/asset/${cover}`} alt="cover blog" />
                    </div>
                    <div className='w-3/5'>
                        <p className='text-primary font-thin sm:text-sm text-xs'>
                            {format(new Date(createdAt), 'HH:mm, d MMM yyyy')}
                        </p>
                        <p className='text-dark sm:text-lg md:text-xl font-semibold'>
                            {title}
                        </p>
                        <p className='text-text-color text-sm sm:text-base md:text-lg mb-2'>
                            {summary}
                        </p>
                        <Link to={`/blog/${title}`} className='hover:text-primary underline text-sm sm:text-base'>
                            Baca Selengkapnya
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

const Accordion = ({ question, answer }) => {
    const [accordionOpen, setAccordionOpen] = useState(false)


    return (
        <div className=''>
            <button onClick={() => setAccordionOpen(!accordionOpen)} className='flex justify-between w-full bg-primary items-center text-white py-3 px-4 lg:py-4 lg:px-7 rounded-lg'>
                <span className='text-md lg:text-lg'>
                    {question}
                </span>
                {accordionOpen ? <IoIosArrowForward className='rotate-90 transition-all duration-300' /> : <IoIosArrowForward className='transition-all duration-300' />}

            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-text-color text-sm md:text-base py-3 px-4 ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}>
                <div className='overflow-hidden'>
                    {answer}
                </div>
            </div>
        </div>
    )
}

const Home = () => {
    const [posts, setPosts] = useState([])
    const [blogsFirst, setBlogsFirts] = useState([])
    const [blogsOther, setBlogsOther] = useState([])
    const isAboveLargeScreens = useMediaQuery("(min-width: 1024px)")

    const getPosts = async () => {
        const response = await fetch('http://localhost:3001/posts?limit=12')
        const data = await response.json()
        setPosts(data)
    }

    const getBlogs = async () => {
        const response = await fetch('http://localhost:3001/blogs?limit=3')
        const data = await response.json()
        setBlogsFirts(data.blogs.slice(0, 1))
        setBlogsOther(data.blogs.slice(1))
    }

    useEffect(() => {
        getPosts()
        getBlogs()
    }, [])

    return (
        <Layout>
            <section className=" bg-white">
                <div className="max-w-6xl mx-auto p-5">
                    <div className="flex flex-col items-center lg:gap-x-32 md:flex-row">
                        <div className="flex flex-col md:w-3/5 lg:mt-24 mb-12">
                            <Link to='/kontak' className='text-sm md:text-base mb-1 mt-6 lg:mt-0 text-primary bg-[#E4F4F3] w-fit flex gap-1 items-center px-2.5 py-1 rounded-md'>
                                <FaMapMarkerAlt className='text-sm' />
                                Lrg. Sejahtera, Sukarami, Kota Palembang
                            </Link>
                            <h1 className="text-[35px] sm:text-[40px] lg:text-[43px] xl:text-[53px] mt-2 leading-none text-dark font-bold">
                                SMPIT Al-Qur'an Al-Itqaan Palembang Daarussalam
                            </h1>
                            <p className="mt-4 text-sm md:text-md lg:text-lg  text-text-color">
                                Mencetak generasi qur'ani yang berwawasan luas, berakhlak mulia, santun, komunikatif, dalam Bahasa Arab dan Inggris serta terdepan dalam prestasi
                            </p>
                            <Link
                                to='/pendaftaran'
                                className="mt-5 lg:mt-8 w-fit lg:w-fit"
                            >
                                <button className="lg:text-lg font-medium rounded-lg bg-primary text-white px-6 py-2 lg:py-3 opacity-90 hover:opacity-100">
                                    Daftar Sekarang
                                </button>
                            </Link>
                        </div>

                        <div className="relative md:w-2/5">
                            <figure>
                                <img
                                    src={img}
                                    loading='lazy'
                                    alt="Jumbotron Image"
                                    width={530}
                                    height={610}
                                    priority={true}
                                    quality={100}
                                    className=""
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section className='max-w-6xl mx-auto p-5 mb-8 py-24 md:py-28 lg:py-32'>
                <Header header='Link Cepat'>
                    Daftar URL yang terdapat di website
                </Header>
                <div className='flex flex-wrap justify-center gap-6'>
                    {quickLinks1.map((link, index) => (
                        <Link key={index} to={link.path} className="flex flex-col items-center">
                            <div className='md:w-20 md:h-20 h-16 w-16 bg-primary flex items-center justify-center rounded-full hover:opacity-90 hover:scale-95 transition-all duration-300'>
                                {link.icon}
                            </div>
                            <div className="mt-3 font-medium opacity-95 text-text-color">{link.name}</div>
                        </Link>
                    ))}
                </div>
            </section>
            <section className='max-w-6xl bg-[#006A60] lg:rounded-lg mx-auto md:py-24 py-16 px-10 md:px-20'>
                <div className='flex flex-wrap lg:justify-between justify-center mb-8 lg:mb-12 items-center gap-y-2 gap-x-4'>
                    <div className='md:mb-0 mb-3 text-center lg:text-left'>
                        <h3 className='text-secondary font-semibold text-3xl lg:text-4xl'>
                            Tenaga Pengajar dan Pendidik
                        </h3>
                        <p className='text-slate-100 md:text-lg mt-1'>
                            Para individu yang berperan dalam proses pembelajaran dan pengajaran
                        </p>
                    </div>
                    {isAboveLargeScreens && (
                        <Link className='bg-secondary w-fit h-fit hover:opacity-90 hover:scale-95 text-text-color p-2 rounded-lg font-semibold transition-all duration-300'>
                            Lebih Banyak
                        </Link>
                    )}
                </div>
                <div className='flex flex-wrap gap-5 justify-evenly'>
                    <TeacherCard image={mudir} name='DR. KH. Amin Rahman, Lc., M.H., Al-Hafizh'>
                        Guru Aqidah Akhlak
                    </TeacherCard>
                    <TeacherCard image={mudir} name='DR. KH. Amin Rahman, Lc., M.H., Al-Hafizh'>
                        Guru Fiqih
                    </TeacherCard>
                    <TeacherCard image={mudir} name='Ahmad Rosyadi, S.Pd.I., M.H.'>
                        Sirah Nabawi
                    </TeacherCard>
                    <TeacherCard image={mudir} name='Ahmad Rosyadi, S.Pd.I., M.H.'>
                        Hadist
                    </TeacherCard>
                </div>
                {!isAboveLargeScreens && (
                    <div className='text-center mt-14'>
                        <Link className='bg-secondary w-fit h-fit hover:opacity-90 hover:scale-95 text-text-color p-2 rounded-lg font-semibold transition-all duration-300'>
                            Lihat Lebih Banyak
                        </Link>
                    </div>
                )}
            </section>
            <section className='max-w-6xl mx-auto p-5 py-14 md:py-18 lg:py-24'>
                <div className='flex flex-wrap lg:justify-between justify-center mb-8 lg:mb-12 items-center gap-y-2 gap-x-4'>
                    <div className='md:mb-0 mb-3 text-center lg:text-left'>
                        <h3 className='text-dark font-semibold text-3xl lg:text-4xl'>
                            Artikel Terbaru dan Terupdate
                        </h3>
                        <p className='text-text-color md:text-lg mt-1'>
                            Artikel terkini dan terupdate seputar kegiatan di SMPIT Al-Itqaan
                        </p>
                    </div>
                    {isAboveLargeScreens && (
                        <Link to='/galeri/#artikel-sekolah' className='bg-[#E4F4F3] w-fit h-fit hover:opacity-90 hover:scale-95 text-primary p-2 rounded-lg font-semibold transition-all duration-300'>
                            Lebih Banyak
                        </Link>
                    )}
                </div>
                <div className='lg:flex gap-5'>
                    {blogsFirst.map((blog, index) => (
                        <ArticleCard key={index} isFirst={true} {...blog} />
                    ))}
                    <div className='lg:w-1/2'>
                        {blogsOther.map((blog, index) => (
                            <ArticleCard key={index} isFirst={false} {...blog} />
                        ))}
                    </div>
                </div>
                {!isAboveLargeScreens && (
                    <div className='text-center mt-10'>
                        <Link to='/galeri#artikel-sekolah' className='bg-[#E4F4F3] w-fit h-fit hover:opacity-90 hover:scale-95 text-primary p-2 rounded-lg font-semibold transition-all duration-300'>
                            Baca Lebih Banyak
                        </Link>
                    </div>
                )}
            </section>
            <section className="flex justify-center items-center px-16 py-14 md:py-18 w-full bg-white max-md:px-5 max-md:max-w-full">
                <div className="mt-20 mb-7 w-full max-w-[1085px] max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col max-md:mt-10">
                                <div className='w-20 h-20 rounded-full bg-secondary flex items-center justify-center'>
                                    <img
                                        loading="lazy"
                                        src={join1}
                                        className="w-16 rounded-full opacity-90 aspect-square"
                                        alt='join 1'
                                    />
                                </div>
                                <div className='self-end mt-14 w-20 h-20 rounded-full bg-secondary flex items-center justify-center max-md:mt-10'>
                                    <img
                                        loading="lazy"
                                        src={join2}
                                        className=" w-16 rounded-full opacity-90 aspect-square"
                                        alt='join 2'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-center font-medium max-md:mt-10 max-md:max-w-full">
                                <div className="mx-5 md:text-4xl font-medium text-3xl text-center max-md:mx-2.5 text-text-color">
                                    Yuk Bergabung dengan Kami
                                </div>
                                <div className="mt-5 text-sm md:text-base leading-5 text-center text-text-color max-md:max-w-full">
                                    A fresh page has been opened at SMPIT Al-Itqaan, waiting to be
                                    filled with success stories
                                </div>
                                <Link to='/pendaftaran' className="justify-center self-center px-10 py-4 mt-16 md:text-lg text-md text-white bg-primary rounded-lg hover:opacity-90 hover:scale-95 md:px-8 md:mt-10 transition-all duration-300">
                                    Daftar Sekarang
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col max-md:mt-10">
                                <div className='self-end w-20 h-20 rounded-full bg-secondary flex items-center justify-center'>
                                    <img
                                        loading="lazy"
                                        src={join3}
                                        className="w-16 rounded-full opacity-90 aspect-square"
                                        alt='join 3'
                                    />
                                </div>
                                <div className='mt-14 w-20 h-20 rounded-full bg-secondary flex items-center justify-center max-md:mt-10'>
                                    <img
                                        loading="lazy"
                                        srcSet={join4}
                                        className=" w-16 aspect-square rounded-full opacity-90"
                                        alt='join 4'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='max-w-6xl mx-auto md:py-24 py-16 px-10 md:px-20 bg-secondary lg:rounded-lg md:mb-6 lg:mt-40 md:mt-32 mt-12'>
                <div className='flex flex-wrap lg:justify-between justify-center mb-8 lg:mb-12 items-center gap-y-2 gap-x-4'>
                    <div className='md:mb-0 mb-3 text-center lg:text-left'>
                        <h3 className='text-dark font-semibold text-3xl lg:text-4xl'>
                            Galeri Sekolah
                        </h3>
                        <p className='text-text-color opacity-95 md:text-lg mt-1'>
                            Galeri sekolah yang berisi kegiatan SMPIT Al-Itqaan
                        </p>
                    </div>
                    {isAboveLargeScreens && (
                        <Link className='bg-[#ff9822] w-fit h-fit hover:opacity-90 hover:scale-95 text-white p-2 rounded-lg font-semibold transition-all duration-300'>
                            Lebih Banyak
                        </Link>
                    )}
                </div>
                <div className='columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5 md:p-5 p-3 rounded-lg'>
                    {posts.map((post, index) => (
                        <img className='rounded-md opacity-95' loading='lazy' key={index} src={`http://localhost:3001/asset/${post.image}`} alt="galeri sekolah" />
                    ))}
                </div>
                {!isAboveLargeScreens && (
                    <div className='text-center mt-10'>
                        <Link className='bg-[#ff9822] w-fit h-fit hover:opacity-90 hover:scale-95 text-white p-2 rounded-lg font-semibold transition-all duration-300'>
                            Lihat Lebih Banyak
                        </Link>
                    </div>
                )}
            </section>
            <section className='max-w-6xl mx-auto p-5 py-14 md:py-18 lg:py-24'>
                <Header header='FAQ'>
                    Paling sering ditanyakan
                </Header>
                <div className='flex gap-5 items-center'>
                    <div className='w-1/2 hidden md:flex justify-center items-center'>
                        <div className='w-60 h-60 bg-primary rounded-full flex justify-center items-center'>
                            <FaQuestion className='text-white text-9xl' />
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <Accordion 
                            question='Apakah SMPIT Al-Itqaan mondok?' 
                            answer='Untuk sementara SMPIT Al-Itqaan belum mondok bu dikarenakan SMPIT Al-Itqaan baru dibuka tahun ini.
                                    Tapi insya allah untuk beberapa tahun ke depan SMPIT Al-Itqaan akan menerapkan sistem pondok' 
                        />
                        <Accordion 
                            question='Hari apa saja SMPIT Al-Itqaan masuk sekolah?'
                            answer="Karena SMPIT Al-Itqaan menerapkan sistem fullday.Jadi hari masuknya dari hari senin sampai jum'at dan untuk waktu pembelajarannya dari jam 07.45 - 15.00"
                        />
                        <Accordion
                            question='Apakah Sekolah Al-Itqaan baru buka smp saja?' 
                            answer='Iya, untuk sekarang Sekolah Al-Itqaan baru buka smp saja. Doakan saja semoga untuk kedepannya Sekolah Al-Itqaan bisa buka jenjang-jenjang yang lainnya'
                        />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Home