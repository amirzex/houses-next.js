"use client"
import React, { useState } from 'react';

const BlogFilter = () => {

    const [activeFilter, setActiveFilter] = useState('اخرین بروزرسانی');

    const filters = ['اخرین بروزرسانی', 'جدید ترین', 'پر بازدید ترین'];

    return (
        <div dir="rtl" className="w-full font-sans">
            <form action="" className="w-full flex flex-wrap lg:flex-nowrap justify-start items-end gap-4 p-4">

                <div className="flex flex-col flex-grow md:flex-grow-0 md:w-1/4">
                    <label className="text-gray-800 font-bold mb-2 text-sm pr-2 dark:text-white">جستجو</label>
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="نام هتل مورد نظر"
                            className="w-full bg-gray-100 dark:text-gray-400 dark:bg-[#353535] text-gray-500 rounded-full py-4 px-5 outline-none text-sm appearance-none"
                        />
                        <svg className="w-4 h-4 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>

                <div className="flex flex-col flex-grow md:flex-grow-0 md:w-1/6">
                    <label className="text-gray-800 font-bold mb-2 text-sm pr-2 dark:text-white">دسته بندی</label>
                    <div className="relative w-full">
                        <select className="w-full bg-gray-100 dark:text-gray-400 dark:bg-[#353535] text-gray-400 rounded-full py-4 px-5 outline-none text-sm appearance-none cursor-pointer">
                            <option value="">نام هتل مورد نظر</option>
                        </select>
                        <svg className="w-4 h-4 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-3 overflow-x-auto pb-1 md:pb-0">

                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => setActiveFilter(filter)}
                            className={`whitespace-nowrap rounded-full py-2.5 px-6 text-xl font-medium transition-colors 
                                ${activeFilter === filter
                                    ? 'bg-blue-800 text-white hover:bg-blue-900'
                                    : 'bg-white dark:bg-[#353535] text-blue-800 dark:text-blue-600/90 dark:border-blue-600/90 border border-blue-800 hover:bg-blue-50'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}

                    <button
                        type="button"
                        onClick={() => setActiveFilter('')}
                        className="whitespace-nowrap bg-red-600 text-white rounded-full py-2.5 px-6 text-sm font-medium flex flex-row-reverse items-center justify-center gap-2 transition-colors hover:bg-red-700"
                    >
                        <span className='p-1 text-xl'>حذف</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M6 18L18 6" className="text-white opacity-100" />
                        </svg>
                    </button>
                </div>

            </form>
        </div>
    );
}

export default BlogFilter;
