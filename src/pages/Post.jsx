import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { FaImage } from "react-icons/fa6";
import { BiSolidTrash } from 'react-icons/bi';

const ImageCard = ({ id, image, customFunc }) => {
    return (
        <figure className="relative">
            <img className='rounded-md opacity-95' loading='lazy' src={`https://itqaanserver-production.up.railway.app/asset/${image}`} alt="galeri sekolah" />
            <figcaption className="absolute bottom-3 right-3">
                <button onClick={() => customFunc(id)} className='flex gap-1 items-center text-white bg-red-600 px-2 py-1 text-sm rounded-md'>
                    <BiSolidTrash />
                    Delete
                </button>
            </figcaption>
        </figure>
    )
}

const Post = () => {
    const [posts, setPosts] = useState([])
    const [file, setFile] = useState('')
    const [description, setDescription] = useState('')
    const [preview, setPreview] = useState('')
    const [id, setId] = useState(null)
    const [modal, setModal] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getPosts()
    }, [])

    const addNewImage = async (e) => {
        e.preventDefault()
        setLoading(true)
        const data = new FormData()
        data.set('image', file)
        data.set('description', description)
        const response = await fetch('https://itqaanserver-production.up.railway.app/posts', {
            method: 'POST',
            body: data,
        })
        if (response.ok) {
            setLoading(false)
            setModal(false)
            window.location.reload();
        }
    }

    const deletePost = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://itqaanserver-production.up.railway.app/posts/${id}`, {
            method: 'DELETE'
        })
        if (response.ok) {
            setId('')
            setModal(false)
            window.location.reload();
        }
    }

    const getPosts = async () => {
        const response = await fetch('https://itqaanserver-production.up.railway.app/posts')
        const data = await response.json()
        setPosts(data)
    }

    const loadImage = (e) => {
        const image = e.target.files[0]
        setFile(image)
        setPreview(URL.createObjectURL(image))
    }

    const deletePreview = (e) => {
        e.preventDefault()
        setPreview('')
    }

    const deleteButton = (id) => {
        setId(id)
        setModalDelete(true)
    }

    return (
        <Dashboard>
            <div className='mt-20 max-w-6xl mx-auto p-5'>
                <h1 className='text-xl md:text-2xl font-bold text-slate-800 mb-4'>
                    Post Page
                </h1>
                <div className='mt-6'>
                    <button onClick={() => setModal(true)} className='w-fit bg-primary flex gap-2 items-center text-white px-4 py-1.5 rounded-md'>
                        <FaImage />
                        Add Image
                    </button>
                </div>
                <div className='mt-10 columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5'>
                    {posts.map((post, index) => (
                        <ImageCard key={index} {...post} customFunc={deleteButton} />
                    ))}
                </div>
                {modal && (
                    <div id="crud-modal" tabindex="-1" aria-hidden="true" className="flex z-[100] backdrop-blur-sm overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative p-4 w-full max-w-md max-h-full">
                            <div className="relative bg-white rounded-lg shadow">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                    <h3 className="text-lg font-semibold textgray-900">
                                        Add New Image
                                    </h3>
                                    <button onClick={() => setModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-800 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center transition-all duration-200" data-modal-toggle="crud-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <form onSubmit={addNewImage} className="p-4 md:p-5">
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <div for="name" className="block mb-2 text-sm font-medium text-gray-900">Image</div>
                                            <div className="flex items-center justify-center w-full">
                                                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                                                    {preview ? (
                                                        <div className='relative'>
                                                            <button type="button" onClick={deletePreview} className="absolute right-0 z-20 bg-transparent bg-gray-50 text-gray-700 hover:bg-opacity-90 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center transition-all duration-200" data-modal-toggle="crud-modal">
                                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                                </svg>
                                                                <span className="sr-only">Close modal</span>
                                                            </button>
                                                            <figure className='flex items-center'>
                                                                <img src={preview} loading='lazy' alt="galeri sekolah" className='object-contain w-full h-56 opacity-95 rounded-sm' />
                                                            </figure>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                                <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                                </svg>
                                                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                            </div>
                                                            <input id="dropzone-file" type="file" className="hidden" onChange={loadImage} />
                                                        </div>
                                                    )}
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-span-2">
                                            <label for="description" className="block mb-2 text-sm font-medium text-gray-900">Image Description</label>
                                            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary" placeholder="Write image description here"></textarea>
                                        </div>
                                    </div>
                                    {loading ? (
                                        <button disabled type="submit" className="text-white inline-flex items-center bg-primary hover:bg-opacity-90 focus:ring-4 focus:outline-none transition-all font-medium rounded-lg text-sm px-4 py-2.5 text-center">
                                            <svg aria-hidden="true" className="inline w-5 h-5 mr-2 text-gray-200 animate-spin fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                            Loading...
                                        </button>
                                    ) : (
                                        <button type="submit" className="text-white inline-flex items-center bg-primary hover:bg-opacity-90 focus:ring-4 focus:outline-none transition-all font-medium rounded-lg text-sm px-4 py-2.5 text-center">
                                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                            Add new image
                                        </button>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                )}
                {modalDelete && (
                    <div id="crud-modal" tabindex="-1" aria-hidden="true" className="flex z-[100] backdrop-blur-sm overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">

                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 justify-center items-center w-[24rem]">
                            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                                <div className="relative p-4 text-center bg-white rounded-lg shadow sm:p-5">
                                    <button onClick={() => setModalDelete(false)} type="button" className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-800 transition-all rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="deleteModal">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                    <svg className="text-gray-400 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                    <p className="mb-4 text-gray-700 opacity-95">Are you sure you want to delete this image?</p>
                                    <div className="flex justify-center items-center space-x-4">
                                        <button onClick={() => setModalDelete(false)} type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10">
                                            No, cancel
                                        </button>
                                        <button onClick={deletePost} type="submit" className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300">
                                            Yes, I'm sure
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Dashboard>
    )
}

export default Post