"use client"
import BlogCard from '@/component/common/BlogCard'
import Breadcrumb from '@/component/common/Breadcrumb'
import React from 'react'
import BlogFilter from './BlogFilter'
import { useGetBlog } from '@/core/api/blog/blogQuery/BlogQuery'

const BlogPage = () => {
    const { data, isLoading, error } = useGetBlog();

    if (isLoading) return <p>در حال دریافت بلاگ‌ها...</p>;
    if (error) return <p>خطا در دریافت اطلاعات</p>;
    return (
        <div className='w-full flex flex-col justify-center items-center mt-30 ' dir='rtl'>

            <Breadcrumb />

            {/* filter sectionF */}
            <div className='w-full pr-5 pb-5'>
                <BlogFilter />
            </div>

            {/* cards */}
            <div className='w-full flex-wrap flex flex-row justify-center items-center gap-5 '>
                {data?.data?.map((item) => (
                    <div className='w-[31.5%]' key={item.id}>
                        <BlogCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogPage