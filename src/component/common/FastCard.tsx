import img from '../../assets/landing/card.jpg'
import bed from '../../assets/landing/bed.svg'
import bath from '../../assets/landing/bath.svg'
import user from '../../assets/landing/user.svg'
import park from '../../assets/landing/car.svg'
import Link from 'next/link'
import arrowleft from '../../assets/landing/arrowleft.svg'
import start from '../../assets/landing/start.svg'
import loca from '../../assets/landing/location.svg'
import Image from 'next/image'
import { IData } from '@/core/types/IData'
import { FC } from 'react'

interface CardProps {
    value: IData
}


const FastCard: FC<CardProps> = ({ item }) => {
    return (
        <div>
            <div className='w-full dark:bg-[#272727] flex flex-row justify-center items-center gap-5 border rounded-3xl p-5'>
                <div className='w-[30%] h-70'>
                    <Image src={img} alt='' unoptimized className='w-full h-full rounded-2xl ' />
                </div>
                <div className='w-[70%] flex flex-col justify-center items-start gap-3 '>
                    <div className='w-full text-4xl'>{item.title}</div>
                    <div className='bg-blue-900 px-5 py-2  rounded-full text-white flex flex-row-reverse justify-center items-center gap-1'>
                        <Image src={start} alt='' unoptimized />
                        <p>ستاره</p>
                        {item.rate}
                    </div>
                    <div className='w-full flex flex-row justify-start items-center text-gray-500 text-2xl gap-3'>
                        <Image src={loca} alt='' unoptimized />
                        {item.adress}
                    </div>
                    <div className='w-full flex flex-row justify-start items-center gap-5'>
                        <div className='w-[15%] flex flex-row justify-start gap-1 text-2xl text-gray-500 items-center'>
                            <Image src={bed} alt='' unoptimized className='w-6 ' />
                            <div>{item.bed}</div>
                            <p>خواب</p>

                        </div>
                        <div className='w-[15%] flex flex-row justify-start text-gray-500 gap-1 text-2xl items-center'>
                            <Image src={bath} alt='' unoptimized className='w-6' />
                            <div>{item.bed}</div>
                            <p>نفر</p>
                        </div>
                        <div className='w-[15%] flex flex-row justify-start text-2xl text-gray-500 gap-1 items-center'>
                            <Image src={user} alt='' unoptimized className='w-6' />
                            <div>{item.bed}</div>
                            <p>حمام</p>
                        </div>
                        <div className='w-[15%] flex flex-row justify-start text-2xl text-gray-500 gap-1 items-center'>
                            <Image src={park} alt='' unoptimized className='w-6' />
                            <div>{item.bed}</div>
                            <p>پارکینگ</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-row gap-10'>
                        <div className='w-[80%] bg-gray-200 dark:bg-[#353535] flex flex-row justify-center items-center p-5 rounded-full'>
                            <p className='w-[40%] text-gray-400 text-2xl'>اجاره ماهانه </p>
                            <div className='w-[60%] flex flex-row-reverse text-2xl justify-start items-center gap-3'>
                                <p className='text-gray-400'>هر شب</p>
                                {item.price} /
                            </div>
                        </div>
                        <div className='w-[20%] flex flex-row-reverse justify-end items-center'>
                            <Image src={arrowleft} alt='' unoptimized />
                            <Link href={`FastReserve/${item.id}`} className='text-blue-900'> مشاهده جزییات </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FastCard