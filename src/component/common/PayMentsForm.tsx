import React from 'react'
import Breadcrumb from './Breadcrumb'
import Link from 'next/link'
import { slides } from '../Landing/suggestion/Suggestion'

import PayMentCard from '@/app/FastReserve/[id]/Payment/PayMentCard'

const PayMentsForm = ({ id }) => {
    const value = slides.find(slide => slide.id === Number(id))
    console.log(value)
    return (
        <div className='w-full flex flex-col justify-center items-center ' dir='rtl'>

            <Breadcrumb />

            {/* middle holder div */}
            <div className='w-full flex flex-row justify-center items-center gap-10 p-10 '>

                {/* form wizard */}
                <form className='w-[70%] flex flex-col justify-center items-center gap-5 border' action="">

                </form>

                {/* card */}
                <div className='w-[30%] p-10'>
                    <PayMentCard value={value} />
                </div>

            </div>
        </div>
    )
}

export default PayMentsForm