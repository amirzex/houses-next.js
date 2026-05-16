"use client"
import BlogCard from '@/component/common/BlogCard'
import Breadcrumb from '@/component/common/Breadcrumb'
import React from 'react'
import BlogFilter from './BlogFilter'
import { useGetBlog } from '@/core/api/blog/blogQuery/BlogQuery'
import FilterBlogMobile from './FilterBlogMobile'
import { useCategories } from '@/core/api/categories/categoriesQuery/CategoriesQuery'
import useDebounce from './useDebounce'

const BlogPage = () => {

    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const [searchTerm, setSearchTerm] = React.useState("");


    const { data, isLoading, error } = useGetBlog(selectedCategory, searchTerm);

    const { data: Category, isError } = useCategories({
        page: 1,
        limit: 10,
        sort: "name",
        order: "DESC",
    });
    if (isLoading) return <p>در حال دریافت بلاگ‌ها...</p>;
    if (error) return <p>خطا در دریافت اطلاعات</p>;
    return (
        <div className='w-full flex flex-col justify-center items-center mt-30 ' dir='rtl'>

            <Breadcrumb />

            {/* filter sectionF */}
            <div className='w-full pr-5 pb-5 max-sm:hidden md:block'>
                <BlogFilter
                    data={Category}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />

            </div>

            <div className='max-sm:block md:hidden'>
                <FilterBlogMobile />
            </div>

            {/* cards */}
            <div className='w-full flex-wrap flex flex-row max-sm:flex-col justify-center items-center gap-5 '>
                {data?.data?.map((item) => (
                    <div className='w-[31.5%] max-sm:w-full max-sm:p-5' key={item.id}>
                        <BlogCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogPage