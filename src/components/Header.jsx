import React from 'react'

const Header = ({ header, children }) => {
    return (
        <div className='md:mb-12 mb-8 text-center'>
            <h3 className='text-dark font-semibold text-3xl lg:text-4xl'>
                {header}
            </h3>
            <p className='text-text-color md:text-lg mt-2'>
                {children}
            </p>
        </div>
    )
}

export default Header