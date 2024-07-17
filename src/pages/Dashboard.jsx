import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { AiOutlineMenu } from 'react-icons/ai'
import { CgUserlane } from 'react-icons/cg'
import { useDispatch } from 'react-redux'
import { setLogout } from '../state'

const Dashboard = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const dispatch = useDispatch()

    return (
        <div className="flex relative">
            {activeMenu ? (
                <div className="w-72 z-[100] fixed sidebar bg-white transition-all duration-500">
                    <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                </div>
            ) : (
                <div className="w-0 transition-all duration-500">
                    <Sidebar />
                </div>
            )}
            <div
                className={
                    activeMenu
                        ? '  bg-main-bg min-h-screen md:ml-72 w-full  '
                        : 'bg-main-bg w-full min-h-screen flex-2 '
                }
            >
                <div className="fixed md:static z-20 bg-main-bg shadow-md w-full ">
                    <div className="flex justify-between p-2 md:mr-6 relative bg-white">
                        <button
                            type="button"
                            onClick={() => setActiveMenu(!activeMenu)}
                            className="relative text-xl rounded-full p-3 hover:bg-slate-200 transition-all duration-300"
                        >
                            <AiOutlineMenu className='text-primary' />
                        </button>

                        <div className="flex gap-2 md:gap-3 items-center">
                            <div className="flex items-center gap-2 p-1 rounded-lg">
                                <CgUserlane className='text-primary' />
                                <p>
                                    <span className="text-gray-400 text-14">Hi,</span>{' '}
                                    <span className="text-gray-500 opacity-80 font-bold ml-1 text-14">
                                        Admin
                                    </span>
                                </p>
                            </div>
                            <button onClick={() => dispatch(setLogout())} className='text-sm h-9 opacity-90 text-white bg-primary hover:bg-teal-700 transition-all duration-200 rounded-lg px-2'>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Dashboard