import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='flex flex-col  justify-center '>
            <h2 className='text-3xl text-blue-500 p-10 text-center'>page is not found</h2>

            <Link className='text-center' href={"/"}>go to home page</Link>
        </div>

    )
}

export default NotFound