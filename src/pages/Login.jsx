import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useMediaQuery from '../hooks/useMediaQuery'
import { setLogin } from '../state'
import { itqaan } from '../images'

const Login = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false)
    const isAboveLargeScreens = useMediaQuery("(min-width: 1024px)")
    const isAboveMediumScreens = useMediaQuery("(min-width: 768px)")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setIsPasswordVisible((prevState) => !prevState);
    }

    const onSubmit = async (data) => {
        setLoading(true)
        const response = await fetch('https://itqaanserver-production.up.railway.app/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        const loggedIn = await response.json()
        if (loggedIn.token) {
            dispatch(
                setLogin({
                    token: loggedIn.token,
                })
            )
            navigate('/dashboard/blog')
        }
        setLoading(false)
    };

    return (
        <div className={isAboveLargeScreens ? 'flex flex-col items-center justify-center min-h-screen py-5 bg-gray-100' : ''}>
            <div className={isAboveLargeScreens ? "bg-white rounded-2xl w-[850px] shadow-2xl flex" : ''}>
                <div className='w-full lg:w-2/5 p-5'>
                    <div className="text-left font-bold flex">
                        <img src={itqaan} loading='lazy' alt="logo" className='w-6 mr-2' />
                        <h4 className='bg-gradient-to-br bg-clip-text text-transparent from-primary to-teal-500 text-2xl font-bold'>Al-Itqaan</h4>
                    </div>
                    <div className='mt-40 max-w-md mx-auto lg:mt-0'>
                        <div className="mt-10 mb-4 text-center">
                            <h2 className='text-xl font-bold text-slate-800 opacity-90'>
                                Masuk Ke Admin
                            </h2>
                            <div className="border-primary border-2 rounded-full inline-block w-10" />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto bg-white px-4">
                            <div className="mb-7">
                                <div className='relative'>
                                    <input type="text" id="username" className="block px-2.5 pb-2.5 border-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" "
                                        {...register('username', { required: true })}
                                    />
                                    <label for="username" className="ml-2 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Username</label>
                                </div>
                                {errors?.username?.type === "required" && <p className='ml-2 h-0 text-xs text-primary'>field harus diisi</p>}
                            </div>
                            <div className="mb-4">
                                <div className='relative'>
                                    <input
                                        type={isPasswordVisible ? "text" : "password"}
                                        id="password"
                                        className="block px-2.5 pb-2.5 border-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                                        placeholder=" "
                                        {...register('password', { required: true, minLength: 8 })}
                                    />
                                    <label
                                        for="password"
                                        className="ml-2 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                    >
                                        Kata Sandi
                                    </label>
                                    <button
                                        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {isPasswordVisible ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {errors?.password?.type === "required" && <p className='ml-2 h-0 text-xs text-primary'>field harus diisi</p>}
                                {errors?.password?.type === "minLength" && <p className='ml-2 h-0 text-xs text-primary'>panjang password minimal 8 karakter</p>}
                            </div>
                            {loading ?
                                <button disabled type='submit' className="my-5 w-full p-2 rounded-md bg-primary text-white">
                                    Loading...
                                </button> :
                                <button type='submit' className="my-5 w-full p-2 rounded-md bg-primary hover:bg-opacity-90 text-white">
                                    Masuk
                                </button>
                            }
                        </form>
                    </div>
                </div>
                <div className='hidden lg:inline w-3/5 bg-gradient-to-r from-teal-500 to-primary text-white lg:rounded-tr-2xl lg:rounded-br-2xl py-36 px-12 text-center'>
                    <h2 className='text-2xl font-bold mb-2 mt-28 lg:mt-10'>
                        Qur'ani Mandiri Serta Terdepan dalam Prestasi
                    </h2>
                    <div className='border-2 w-10 border-white inline-block rounded-xl mb-2' />
                </div>
                <div className="lg:hidden fixed bottom-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width={isAboveMediumScreens ? '1010' : '780'} viewBox="0 0 1440 320">
                        <path fill="#0d9488" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,154.7C384,139,480,117,576,112C672,107,768,117,864,106.7C960,96,1056,64,1152,64C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Login