import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaWhatsapp } from 'react-icons/fa'

const Layout = ({children}) => {
    return (
        <div className='w-full overflow-x-hidden'>
            <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                    <button
                        href=''
                        type="button"
                        onClick={() => setThemeSettings(true)}
                        style={{ background: '#0d9488', borderRadius: '50%' }}
                        className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                    >
                        <FaWhatsapp />
                    </button>

            </div>
            <Navbar />
                <div className='mt-20'>
                    {children}
                </div>
            <Footer />
        </div>
    )
}

export default Layout