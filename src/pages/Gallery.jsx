import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { MdAppRegistration, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdSchool } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'
import { RiGalleryLine } from 'react-icons/ri'
import { FaQuestion } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Header from '../components/Header'
import 'swiper/css';

const quickLinks1 = [
    {
        path: "/",
        name: "Beranda",
        icon: <AiFillHome className='text-md text-text-color opacity-95' />,
    },
    {
        path: "/profil",
        name: "Profil",
        icon: <MdSchool className='text-md text-text-color opacity-95' />,
    },
    {
        path: "/galeri",
        name: "Galeri",
        icon: <RiGalleryLine className='text-md text-text-color opacity-95' />,
    },
    {
        path: "/pendaftaran",
        name: "Daftar",
        icon: <MdAppRegistration className='text-md text-text-color opacity-95' />,
    },
    {
        path: "/kontak",
        name: "Kontak",
        icon: <FaQuestion className='text-md text-text-color opacity-95' />
    },
];

const ArticleCard = ({ createdAt, title, summary, cover }) => {
    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 md:flex gap-4 items-center">
            <div className='md:w-2/5'>
                <img src={`http://localhost:3001/asset/${cover}`} loading='lazy' className='rounded-md' alt="cover blog" />
            </div>
            <div className='mt-2 md:w-3/5'>
                <div className="mb-3 text-gray-500">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center py-0.5 rounded">
                        {format(new Date(createdAt), 'HH:mm, d MMM yyyy')}
                    </span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight opacity-95 text-slate-800">{title}</h2>
                <p className="mb-5 text-gray-700 font-[490] opacity-90">{summary}</p>
                <div className="flex justify-end items-center group">
                    <Link to={`/blog/${title}`} className="inline-flex items-center font-medium hover:text-primary text-slate-700 hover:underline group-hover:text-primary">
                        Baca Selengkapnya
                        <svg className="ml-2 w-4 h-4 group-hover:text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}

const ImageGallery = ({ posts }) => {
    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
    };

    const chunkedPosts = chunkArray(posts, 12);

    return (
        <div className="relative">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: '.swiper-button-next-gal',
                    prevEl: '.swiper-button-prev-gal',
                }}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                className="mySwiper custom-swiper"
            >
                {chunkedPosts.map((chunk, slideIndex) => (
                    <SwiperSlide key={slideIndex}>
                        <div className='columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5 max-w-5xl mx-auto bg-secondary md:p-5 p-3 rounded-lg'>
                            {chunk.map((post, index) => (
                                <img
                                    className='rounded-md opacity-95 w-full mb-5'
                                    key={`${slideIndex}-${index}`}
                                    src={`http://localhost:3001/asset/${post.image}`}
                                    alt={`gambar ${index}`}
                                />
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="swiper-button-prev-gal absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 bg-primary rounded-full flex backdrop-blur-2xl items-center justify-center z-10 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-secondary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button className="swiper-button-next-gal absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 bg-primary rounded-full backdrop-blur-2xl flex items-center justify-center z-10 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-secondary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

const Gallery = () => {
    const [blogs, setBlogs] = useState([])
    const [posts, setPosts] = useState([])
    const [totalPageArticle, setTotalPageArticle] = useState(0)
    const [countArticle, setCountArticle] = useState(1)

    const getBlogs = async () => {
        const response = await fetch(`http://localhost:3001/blogs?page=${countArticle}&limit=5`)
        const data = await response.json()
        setBlogs(data.blogs)
        setTotalPageArticle(data.totalPage)
    }

    const getPosts = async () => {
        const response = await fetch('http://localhost:3001/posts')
        const data = await response.json()
        setPosts(data)
    }

    useEffect(() => {
        getBlogs()
        getPosts()
    }, [countArticle])

    const previousArticle = () => {
        setCountArticle(countArticle <= 1 ? 1 : countArticle - 1)
    }

    const nextArticle = () => {
        setCountArticle(countArticle <= totalPageArticle ? totalPageArticle : countArticle + 1)
    }

    return (
        <Layout>
            <section id='artikel-sekolah' className='max-w-7xl mx-auto p-5 py-16 lg:py-18'>
                <Header header='Artikel Terkini'>
                    Artikel terkini dan terupdate seputar kegiatan di SMPIT Al-Itqaan
                </Header>
                <div className='flex justify-between gap-36'>
                    <div className='flex flex-wrap gap-4 mt-5'>
                        {blogs.map((blog, index) => (
                            <ArticleCard key={index} {...blog} />
                        ))}
                    </div>
                    <div className='w-2/6 hidden lg:inline mt-5 py-6 px-10 border h-fit rounded-lg text-primary'>
                        <h1 className='font-bold mb-1.5 text-md'>
                            Link Cepat
                        </h1>
                        {quickLinks1.map((link, index) => (
                            <div key={index} className='mb-1 flex items-center gap-1.5 hover:opacity-95'>
                                {link.icon}
                                <Link to={link.path} className='text-text-color'>
                                    {link.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={countArticle === 1 ? 'md:flex hidden max-w-6xl justify-end mt-8 px-4' : 'md:flex hidden max-w-6xl justify-between mt-8 px-4'}>
                    {countArticle !== 1 && (
                        <div className='flex'>
                            <div className={`bg-primary px-3 py-1.5 rounded-lg cursor-pointer hover:opacity-95 transition-all duration-200`} onClick={previousArticle}>
                                <div className='flex items-center gap-1'>
                                    <MdKeyboardArrowLeft className='text-lg text-white' />
                                    <p className='text-white'>
                                        Sebelumnya
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='flex justify-end'>
                        <div className='bg-primary px-3 py-1.5 text-right rounded-lg cursor-pointer hover:opacity-95 transition-all duration-200' onClick={nextArticle}>
                            <div className='flex items-center gap-1'>
                                <p className='text-white'>
                                    Selanjutnya
                                </p>
                                <MdKeyboardArrowRight className='text-lg text-white' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex md:hidden justify-end items-center my-4 mr-4'>
                    <div className='text-white bg-primary rounded-tl-md rounded-bl-md p-2 cursor-pointer active:opacity-95 transition-all duration-200' onClick={previousArticle}>
                        <MdKeyboardArrowLeft />
                    </div>
                    <div className='text-gray-600 text-lg font-semibold px-3 py-[1.5px]'>
                        {countArticle}
                    </div>
                    <div className='text-white bg-primary rounded-tr-md rounded-br-md p-2 cursor-pointer active:opacity-95 transition-all duration-200' onClick={nextArticle}>
                        <MdKeyboardArrowRight />
                    </div>
                </div>
            </section>
            <section id='galeri-sekolah' className='pt-16 pb-16 bg-white'>
                <div className='max-w-6xl mx-auto'>
                    <Header header='Galeri Sekolah'>
                        Galeri sekolah yang berisi kegiatan SMPIT Al-Itqaan
                    </Header>
                    <ImageGallery posts={posts} />
                </div>
            </section>
        </Layout>
    )
}

export default Gallery