import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { format } from 'date-fns'
import Layout from './Layout'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { masjid1 } from '../images'

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

const BlogDetail = () => {
    const [blog, setBlog] = useState(null)
    const [relatedBlogs, setRelatedBlogs] = useState([])
    const { title } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogResponse = await fetch(`http://localhost:3001/blogs/${title}`)
                if (!blogResponse.ok) {
                    throw new Error('Blog not found')
                }
                const blogData = await blogResponse.json()
                setBlog(blogData)

                const relatedBlogsResponse = await fetch(`http://localhost:3001/blogs/related/${title}`)
                if (!relatedBlogsResponse.ok) {
                    throw new Error('Related blogs not found')
                }
                const relatedBlogsData = await relatedBlogsResponse.json()
                setRelatedBlogs(relatedBlogsData)
            } catch (error) {
                console.error('Error fetching data:', error)
                navigate('/galeri')
            }
        }

        fetchData()
    }, [title, navigate])


    return (
        <Layout>
            <section className='max-w-7xl py-14 lg:py-18 mx-auto p-5'>
                <div className='lg:flex'>
                    <div className='lg:w-9/12 w-full'>
                        <h1 className='text-xl md:text-2xl font-bold text-slate-800 opacity-95'>
                            {blog?.title}
                        </h1>
                        {blog?.createdAt && (
                            <time className='text-sm font-[490] text-primary opacity-95'>
                                {format(new Date(blog?.createdAt), 'HH:mm, d MMM yyyy')}
                            </time>
                        )}
                        <div className="rounded-md object-cover px-12 py-5">
                            <img className='object-cover rounded-sm' loading='lazy' src={`http://localhost:3001/asset/${blog?.cover}`} alt="cover blog" />
                        </div>
                        <div className='mt-8 text-slate-700' dangerouslySetInnerHTML={{ __html: blog?.content }} />
                        <div className='border mt-12' />
                        <div className="flex items-center my-5 ml-1">
                            {sosmedLinks.map((link, index) => (
                                <a
                                    href={link.path}
                                    target="_blank"
                                    key={index}
                                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border bg-primary hover:border-primary hover:bg-opacity-90 hover:text-white transition-all duration-300 text-secondary text-xl"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                        <div className='border' />
                    </div>
                    <div className='lg:w-3/12 md:w-[35rem] lg:mt-20 mt-8'>
                        <h1 className='text-xl font-semibold text-dark'>
                            Artikel Lain
                        </h1>
                        <div className='flex flex-col gap-y-3 mt-2'>
                            {relatedBlogs.map((blog, index) => (
                                <Link to={`/blog/${blog?.title}`} className='border p-2 rounded-lg flex items-center gap-3'>
                                    <div className='w-5/12'>
                                        <img src={`http://localhost:3001/asset/${blog?.cover}`} loading='lazy' alt="" className='w-48 rounded-md' />
                                    </div>
                                    <div className='flex flex-col gap-y-1 w-7/12'>
                                        <h2 className='text-xs text-text-color'>
                                            {format(new Date(blog?.createdAt), 'd MMM yyyy')}
                                        </h2>
                                        <h1 className='font-semibold text-dark text-sm'>
                                            {blog?.title}
                                        </h1>
                                        <div className="flex justify-end items-center group">
                                            <p className="inline-flex text-[12px] items-center font-medium hover:text-primary text-slate-700 hover:underline group-hover:text-primary">
                                                Baca Selengkapnya
                                                <svg className="ml-2 w-4 h-4 group-hover:text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default BlogDetail