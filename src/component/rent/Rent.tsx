"use client"
import React from 'react'
import Card from '../common/Card'
import { slides } from '../Landing/suggestion/Suggestion'
import FilterForm from './FilterForm'
import Breadcrumb from '../common/Breadcrumb'
import FilterWithMobileMenu from './FilterWithMobileMenu'

const Rent = () => {
    return (
        <div className="flex flex-col w-full font-sans text-gray-800" dir='rtl' >

            {/*  Breadcrumb */}
            <Breadcrumb />

            {/* filter form div */}
            <div className="px-10 lg:px-20 w-full mb-4">
                {/* desktop */}
                <div className='max-sm:hidden md:block'>
                    <FilterForm />
                </div>


                {/* mobile */}
                <div className='max-sm:block md:hidden'>
                    <FilterWithMobileMenu />
                </div>

            </div>

            <div className='flex flex-row max-sm:flex-col justify-center p-10 items-center flex-wrap gap-6 max-sm:flex-col max-sm:p-5' dir='ltr'>
                {slides.map((item, index) => (
                    <Card value={item} key={index} />
                ))}
            </div>

            {/* صفحه‌بندی (Pagination) */}
            <div className="flex items-center justify-center gap-1 md:gap-2 mb-12 mt-4 font-bold text-sm" dir="ltr">
                <button className="text-gray-400 hover:text-[#1a3b99] px-2 transition-colors ml-2">قبلی</button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-[#1a3b99] text-white">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded text-gray-600 hover:bg-gray-100 transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded text-gray-600 hover:bg-gray-100 transition-colors">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded text-gray-600 hover:bg-gray-100 transition-colors">4</button>
                <span className="w-8 h-8 flex items-center justify-center text-gray-400 tracking-widest">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded text-gray-600 hover:bg-gray-100 transition-colors">10</button>
                <button className="text-gray-800 hover:text-[#1a3b99] px-2 transition-colors mr-2">بعدی</button>
            </div>

        </div>
    )
}

export default Rent
