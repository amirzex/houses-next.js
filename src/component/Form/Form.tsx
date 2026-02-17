"use client";

import SortFilter from '@/component/Sort/SortFilter'
import SortFilter2 from '@/component/Sort/SortFilter2'
import PriceRange from '@/component/Sort/PriceRange'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface ISort {
    searchParams: { [key: string]: string | undefined };
};

const Form = ({ searchParams }: ISort) => {

    const router = useRouter();

    const [search, setSearch] = useState(searchParams.search || "");
    const [currentSort, setCurrentSort] = useState(searchParams.sort || "");
    const [minPrice, setMinPrice] = useState(searchParams.minPrice || "");
    const [maxPrice, setMaxPrice] = useState(searchParams.maxPrice || "");
    const [location, setLocation] = useState(searchParams.location || "");


    useEffect(() => {
        const timer = setTimeout(() => {
            const query = new URLSearchParams();

            query.set("page", "1");
            query.set("limit", "9");

            if (search.trim()) query.set("search", search.trim());
            if (currentSort) query.set("sort", currentSort);
            if (minPrice) query.set("minPrice", minPrice);
            if (maxPrice) query.set("maxPrice", maxPrice);
            if (location) query.set("location", location);

            const queryString = query.toString();
            router.replace(queryString ? `?${queryString}` : "?");
        }, 500);

        return () => clearTimeout(timer);
    }, [search, currentSort, minPrice, maxPrice, location, router]);

    const clearFilters = () => {
        router.replace("?");
        setSearch("");
        setCurrentSort("");
        setMinPrice("");
        setMaxPrice("");
        setLocation("");
    };

    return (
        <form
            className='w-full flex flex-col gap-5 border-2 border-gray-300 rounded-4xl p-5'
            onSubmit={(e) => e.preventDefault()}
        >
            {/* top */}
            <div className='w-full flex flex-row-reverse justify-center items-center gap-5 '>

                {/* search */}
                <div className='w-[50%] flex flex-col gap-4'>
                    <p className='w-full text-right pr-3'>جستجو</p>
                    <input
                        type="text"
                        placeholder='نام هتل یا اقامتگاه'
                        className='w-full text-right p-3 bg-gray-100 rounded-4xl outline-0 focus:ring-2 focus:ring-blue-300 transition-all'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* sort */}
                <div className='w-[50%] flex flex-col gap-5 '>
                    <p className='w-full text-right pr-3'>مرتب سازی بر اساس</p>
                    <SortFilter
                        currentSort={currentSort}
                        onChange={(value) => setCurrentSort(value)}
                    />
                </div>
            </div>

            {/* bottom */}
            <div className='w-full flex flex-row-reverse justify-center items-center gap-5 '>

                {/* امکانات */}
                <div className='w-[50%] flex flex-col gap-4'>
                    <p className='w-full text-right pr-3'>امکانات هتل</p>
                    <SortFilter2
                        currentSort={currentSort}
                        onChange={(value) => setCurrentSort(value)}
                    />
                </div>

                {/* price range */}
                <div className='w-[50%] flex flex-col gap-4'>
                    <p className='w-full text-right pr-3'>رنج قیمت</p>
                    <PriceRange
                        onChange={(min, max) => {
                            setMinPrice(min);
                            setMaxPrice(max);
                        }}
                    />
                </div>
            </div>

            {/* delete button */}
            <div className='flex justify-end items-center gap-4 mt-2'>

                {/* active filter */}
                <div className='flex flex-row gap-2 text-sm text-gray-600'>
                    {search && <span className='bg-gray-100 px-3 py-1 rounded-full'>جستجو: {search}</span>}
                    {currentSort && <span className='bg-gray-100 px-3 py-1 rounded-full'>مرتب‌سازی: {currentSort}</span>}
                    {(minPrice || maxPrice) && (
                        <span className='bg-gray-100 px-3 py-1 rounded-full'>
                            قیمت: {minPrice || 0} - {maxPrice || "∞"}
                        </span>
                    )}
                </div>

                <button
                    type="button"
                    onClick={clearFilters}
                    className="text-red-500 hover:text-red-700 text-sm underline transition-colors"
                >
                    حذف فیلترها
                </button>

            </div>

        </form>
    );
};

export default Form;