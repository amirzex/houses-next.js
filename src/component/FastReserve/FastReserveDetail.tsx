import Image from 'next/image'
import React, { FC } from 'react'
import villa from '../../assets/landing/villa.png'
import loc from '../../assets/reserve/icons8-location-50.png'
import Link from 'next/link'
import PropertyTabs from './PropertyTabs'

interface IProps {
    id: string
}

const FastReserveDetail: FC<IProps> = ({ id }) => {
    console.log(id)
    return (
        <div className='w-full flex flex-col gap-5 justify-center items-center pr-25 pl-25 '>
            {/* top side */}
            <div className='w-full flex flex-row-reverse gap-10 justify-center items-center'>

                <div className='w-full flex flex-row-reverse gap-10'>
                    <div className="w-[70%] h-140 overflow-hidden rounded-4xl">
                        <Image
                            src={villa}
                            alt='img'
                            className=' rounded-4xl scale-115 '
                        />
                    </div>
                    {/* top left side */}
                    <div className="w-[30%] flex flex-col h-140 gap-10">
                        <div className="h-70 overflow-hidden rounded-4xl">
                            <Image
                                src={villa}
                                alt='img'
                                className='rounded-4xl'
                            />
                        </div>
                        <div className="h-70 overflow-hidden rounded-4xl relative border-2">
                            <Image
                                src={villa}
                                alt='img'
                                className='rounded-4xl brightness-50'
                            />
                            <Link href={''}
                                className='left-37 top-25 absolute p-3 w-50 flex flex-row justify-center items-center gap-2 text-white cursor-pointer border-2 border-white rounded-4xl'>
                                <p>مشاهده بیشتر</p>
                                <span>+ 5</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* middle part */}

            <div className='border-2 w-full flex flex-row-reverse justify-center items-center gap-10'>
                {/* right side */}
                <div className="w-[70%] flex flex-col justify-center items-end gap-3 border-2">

                    <h2 className='text-3xl text-right w-full'>هتل همایون فر کیش ایران </h2>
                    <div className='flex flex-row w-full text-right justify-end items-center text-sm'>
                        <p>لوکیشن باید اینجا گذاشته شود</p>
                        <Image
                            src={loc}
                            width={20}
                            alt='location' />
                    </div>
                    {/* info layout  */}
                    <div className='w-full flex flex-col gap-5 border-2'>
                        <PropertyTabs />
                    </div>
                </div>
                {/* left side */}
                <div className="w-[30%]">
                    
                </div>
            </div>

        </div>
    )
}

export default FastReserveDetail