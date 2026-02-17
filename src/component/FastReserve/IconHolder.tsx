"use client"
import Image from 'next/image'
import React from 'react'

const IconHolder = () => {
    const data = [
        { id: 1, title: 'دستشویی', icon: '../../../src/assets/landing/bath.svg' },
        { id: 2, title: 'پارکینگ', icon: '../../../src/assets/landing/car.svg' },
        { id: 3, title: 'اتاق', icon: '../../../src/assets/landing/bed.svg' },
        { id: 4, title: 'حیاط', icon: '../../../src/assets/landing/count.svg' },
    ]

    return (
        <div className='w-full flex flex-row flex-wrap justify-end items-center gap-4'>
            {data.map((item, index) => (
                <div key={index} className='w-[20%] flex flex-row-reverse items-center gap-3 border-2 rounded-4xl p-2'>
                    <div className='w-[20%] flex justify-center items-center '>
                        <Image
                            width={50}
                            height={50}
                            src={item.icon}
                            alt={item.title}
                            className='w-15'
                            unoptimized
                        />
                    </div>
                    <div className='w-[80%] flex flex-col gap-1 text-right '>
                        <p className='text-xl w-full pr-1'>{item.title}</p>
                        <p className='w-full pr-1'>نوساز</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default IconHolder