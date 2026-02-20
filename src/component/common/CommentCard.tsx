import Image from 'next/image'
import user from '../../assets/landing/commnet.png'
import usere from '../../assets/landing/Group 5,,.svg'
import { FC } from 'react'
import { IComment } from '@/core/types/IComment'
import star from '../../assets/landing/icons8-star-48.png'

interface CommentCardProps {
    value: IComment
}



const CommentCard: FC<CommentCardProps> = ({ value }) => {
    return (
        <div className='border-2 border-gray-300 rounded-4xl w-full flex flex-col gap-8 justify-end items-end p-5 '>
            {/* img card */}
            <div className='w-full flex flex-row-reverse justify-center items-center'>
                <Image
                    src={user}
                    alt='next'
                    className='w-[30%] h-35 rounded-2xl'
                />
                <div className='w-[55%]'></div>
                <Image
                    src={usere}
                    alt='next'
                    className='w-[15%]'
                />
            </div>
            {/* card info */}
            <div className='w-full text-right text-xl h-30'>
                {/* <h1>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم</h1> */}
                <h1 className='flex flex-row-reverse gap-2'>
                    <p>: عنوان </p>{value.caption}
                </h1>
            </div>
            <div className='w-full flex flex-row-reverse justify-center items-center gap-2 '>
                {/* <p >اما واتسون</p> */}
                <div className='w-[30%] flex flex-row-reverse justify-center items-center gap-2'>
                    <p>{value.id}</p>
                    <p>-</p>
                    {/* <span className='text-gray-400'>16 شهریور 1404</span> */}
                    <span className='text-gray-400'>{value.created_at.slice(0, 10)}</span></div>
                <div className='flex flex-row items-center w-[70%]'>
                    <Image
                        src={star}
                        alt={value.id}
                        className='w-[5%]'
                    />
                    {value.rating}
                </div>
            </div>
        </div>
    )
}

export default CommentCard