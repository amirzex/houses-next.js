import { getCommentData } from '@/core/api/Landing'
import CommentCard from '../../common/CommentCard'
import React from 'react'

const LandingComment = async() => {

    const response = await getCommentData()

    return (
        <div className='flex w-full  flex-col gap-10 p-15 '>
            <p className='text-2xl text-right w-full '>مشتریان در باره ما چه می گویند ؟</p>

            {/* card holder */}
            <div className='w-full flex flex-row justify-center items-center gap-10'>
                <div className="w-full flex justify-center  items-center gap-6 ">
                    {Array.isArray(response) && response?.length > 0 ? (
                        response?.map((item) => (
                            <CommentCard key={item.id} value={item} />
                        ))
                    ) : (
                        <p className="text-center text-gray-500">هیچ خانه‌ای یافت نشد</p>
                    )}
                </div>
            </div>


        </div>
    )
}

export default LandingComment