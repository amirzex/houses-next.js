"use client"
import Image from 'next/image'
import picture from '../../assets/landing/card.jpg'
import loc from '../../assets/landing/location.svg'
import bath from '../../assets/landing/bath.svg'
import bed from '../../assets/landing/bed.svg'
import count from '../../assets/landing/count.svg'
import car from '../../assets/landing/car.svg'
import { IData } from '@/core/types/IData'
import { FC } from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/router'

interface CardProps {
    value: IData
}

const Card: FC<CardProps> = ({ value }) => {

    // console.log(value.id)
    // const router = useRouter()

    // const handleClick = () => {
    //     router.push(`FastReserve/${value.id}`)
    // }

    return (
        <Link href={`FastReserve/${value.id}`} className='flex flex-col w-full h-full rounded-4xl overflow-hidden border border-gray-300'>
            {/* image holder */}
            <div className='h-[50%] overflow-hidden'>
                <Image
                    src={picture}
                    // width={500}
                    // fill
                    alt="landing background"
                    className=" object-cover "
                    unoptimized
                />
            </div>
            {/* card info */}
            <div className='flex flex-col gap-10 h-[50%] p-5'>

                <div className='flex flex-row w-full justify-end items-center gap-5 '>
                    <span className='flex flex-row-reverse justify-center items-center text-2xl gap-2'>
                        {value.price || "2,500,000"}
                        <p className='text-gray-400 text-sm'>تومان</p>
                    </span>
                    {value.discounted_price && (
                        <span className='flex flex-row-reverse justify-center items-center text-2xl text-gray-400 gap-2'>
                            {value.discounted_price}
                            <p className='text-gray-400 text-sm'>تومان</p>
                        </span>
                    )}
                </div>

                <div className='flex flex-row justify-end items-center text-2xl w-full'>
                    {/* <p>خانه ویلایی بسیار عالی</p> */}
                    <p>{value.title}</p>
                </div>

                <div className='w-full flex flex-row-reverse gap-1 justify-start items-center'>
                    <Image
                        src={loc}
                        // width={500}
                        // fill
                        alt="landing background"
                        className=" object-cover "
                        unoptimized
                    />
                    {/* <p>مازندران ، تنکابن</p> */}
                    <p>{value.address}</p>
                </div>
                {/* card bottom */}
                <div className='w-full flex flex-row-reverse justify-center items-center border-t-gray-200 border-solid border-t-2 pt-5'>

                    <div className='flex flex-row-reverse gap-1 justify-center items-center w-[25%]'>
                        <Image
                            src={bed}
                            // width={500}
                            // fill
                            alt="landing background"
                            className=" object-cover "
                            unoptimized
                        />
                        <span className='text-gray-400'>{value.rooms}</span>
                        <p className='text-gray-400'> خواب</p>
                    </div>
                    <div className='flex flex-row-reverse gap-1 justify-center items-center w-[25%]'>
                        <Image
                            src={bath}
                            // width={500}
                            // fill
                            alt="landing background"
                            className=" object-cover "
                            unoptimized
                        />
                        <span className='text-gray-400'>{value.bathrooms}</span>
                        <p className='text-gray-400'> حمام</p>
                    </div>
                    <div className='flex flex-row-reverse gap-1 justify-center items-center w-[25%]'>
                        <Image
                            src={count}
                            // width={500}
                            // fill
                            alt="landing background"
                            className=" object-cover "
                            unoptimized
                        />
                        <span className='text-gray-400'>{value.num_comments}</span>
                        <p className='text-gray-400'> نفر</p>
                    </div>
                    <div className='flex flex-row-reverse gap-1 justify-center items-center w-[25%]'>
                        <Image
                            src={car}
                            // width={500}
                            // fill
                            alt="landing background"
                            className=" object-cover "
                            unoptimized
                        />
                        <span className='text-gray-400'>{value.parking}</span>
                        <p className='text-gray-400'> پارکینگ</p>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default Card