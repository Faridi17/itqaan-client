import React, { useState } from 'react'
import Dashboard from './Dashboard'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom'

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

const Create = () => {
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const createNewBlog = async (e) => {
        e.preventDefault()
        setLoading(true)
        const data = new FormData()
        data.set('title', title)
        data.set('summary', summary)
        data.set('content', content)
        data.set('image', files[0])
        const response = await fetch('https://itqaanserver-production.up.railway.app/blogs', {
            method: 'POST',
            body: data,
        })
        if (response.ok) {
            navigate('/dashboard/blog')
            setLoading(false)
        }
    }

    return (
        <Dashboard>
            <div className='mt-20 max-w-5xl mx-auto p-5'>
                <h1 className='text-xl md:text-2xl font-bold text-slate-800 opacity-90 mb-4'>
                    Create Blog
                </h1>
                <form onSubmit={createNewBlog}>
                    <div className="w-full mb-4">
                        <label for="email" className="text-base font-[490] text-slate-700 opacity-95">
                            Title
                        </label>
                        <input
                            type="text"
                            className="w-full border-2 text-dark p-3 rounded-sm focus:outline-none focus:ring-slate-300 focus:ring-1 "
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="w-full mb-4">
                        <label for="email" className="text-base font-[490] text-slate-700 opacity-95">
                            Summary
                        </label>
                        <textarea
                            type="text"
                            className="h-32 w-full border-2 text-dark p-3 rounded-sm focus:outline-none focus:ring-slate-300 focus:ring-1 "
                            value={summary}
                            onChange={e => setSummary(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mb-5">
                        <label for="email" className="text-base font-[490] text-slate-700 opacity-95">
                            Cover
                        </label>
                        <input
                            className="relative m-0 block w-full min-w-0 cursor-pointer flex-auto rounded-sm border border-solid border-slate-300 bg-clip-padding px-3 py-[0.32rem] opacity-95 text-sm text-slate-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-primary file:px-3 file:py-[0.5rem] file:text-white file:cursor-pointer file:text-sm file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] focus:outline-none"
                            type="file"
                            id="formFile"
                            onChange={e => setFiles(e.target.files)}
                        />
                    </div>
                    <div>
                        <label for="email" className="text-base font-[490] text-slate-700 opacity-95">
                            Content
                        </label>
                        <ReactQuill
                            value={content}
                            modules={modules}
                            onChange={(newContent) => setContent(newContent)}
                            formats={formats}
                        />
                    </div>
                    <div className='flex md:justify-end'>
                        {loading ?
                            <button disabled type='submit' className="my-5 w-full md:w-32 p-2 rounded-md bg-primary text-white">
                                <svg aria-hidden="true" className="inline w-5 h-5 mr-2 text-gray-200 animate-spin fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                Loading...
                            </button> :
                            <button type='submit' className="my-5 w-full md:w-32  p-2 rounded-md bg-primary hover:bg-opacity-90 text-white">
                                Create
                            </button>
                        }
                    </div>
                </form>
            </div>
        </Dashboard>
    )
}

export default Create