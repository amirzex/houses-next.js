"use client"
import Image from 'next/image'
import background from '../../../assets/landing/504b1d866abb82631873b29a03394f56ad50f878.jpg'
import { useState } from 'react';
import Link from 'next/link';


const TopSide = () => {
    const [selected, setSelected] = useState<number | null>(null);

    const options = ["رزرو ملک", "رهن و اجاره", "خرید و فروش"];

    return (
        <div className="w-full flex flex-row justify-center">
            <div className="relative w-[90%] h-200  flex justify-center rounded-[60px] overflow-hidden">
                <Image
                    src={background}
                    alt="landing background"
                    fill
                    className="object-cover"
                    unoptimized
                />

                <div className="w-full absolute text-white flex flex-row items-center justify-center h-full px-6 text-center ">
                    {/* left */}
                    <div className='w-[50%] flex flex-col items-end text-right gap-5'>
                        <div className='flex flex-col w-full gap-5'>
                            <span className="text-[45px] font-bold w-full">
                                خانه رویایی یا هتل دلخواهت رو اینجا پیدا کن
                            </span>
                            <p className="text-2xl">
                                از خرید و فروش ملک تا اجاره کوتاه‌مدت هتل و آپارتمان؛
                                <p>به راحتی جستجو کن،
                                    مقایسه کن و بهترین انتخاب رو داشته باش.</p>
                            </p></div>
                        <Link href={"rent"} className="border-2 w-[27%] p-2 border-white text-center hover:text-blue-400 hover:border-blue-400 text-2xl text-white rounded-4xl transition-all duration-200">
                            رهن و اجاره ملک
                        </Link>
                    </div>
                    {/* right */}
                    <div className='w-[50%] flex justify-center items-center h-auto'>
                        <div className='w-[80%] flex flex-col  items-center bg-white h-190 rounded-4xl pt-5'>
                            <p className='font-bold text-2xl text-blue-900  w-full'>همین حالا رزرو کنید !</p>
                            <div className="w-full flex flex-row-reverse justify-center items-center gap-5 pt-5">
                                {options.map((option, index) => (
                                    <p
                                        key={index}
                                        onClick={() => setSelected(index)}
                                        className={`border-2 p-2 text-xl rounded-4xl cursor-pointer transition
                                                ${selected === index
                                                ? "border-blue-900 text-blue-900"
                                                : "border-gray-200 text-gray-500"}`}
                                    >
                                        {option}
                                    </p>
                                ))}
                            </div>

                            <form className=' w-full' action="">
                                <div className="w-full text-black flex flex-col gap-1 items-end p-5">
                                    <p className="text-xl font-bold">انتخاب مقصد</p>
                                    <div className="relative w-full">
                                        <select
                                            className="appearance-none bg-gray-100 w-full text-right p-4 rounded-4xl cursor-pointer pr-4"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>
                                                مقصد را انتخاب کنید
                                            </option>
                                            <option value="tehran">تهران</option>
                                            <option value="mashhad">مشهد</option>
                                            <option value="isfahan">اصفهان</option>
                                            <option value="shiraz">شیراز</option>
                                            <option value="mazandaran">مازندران</option>
                                        </select>

                                        {/* Dropdown icon */}
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                            ▼
                                        </span>
                                    </div>
                                </div>
                                <div className='w-full text-black  flex flex-col gap-1 items-end p-5'>
                                    <p className='text-xl font-bold' >تعداد نفرات</p>
                                    <input className='bg-gray-100 w-full text-right p-4 rounded-4xl' type="text" placeholder=' تعداد نفرات را انتخاب کنید' />
                                </div>
                                <div className="w-full text-black flex flex-col gap-1 items-end p-5">
                                    <p className="text-xl font-bold">تاریخ ورود</p>
                                    <div className="relative w-full">
                                        <input
                                            type="date"
                                            className="bg-gray-100 w-full text-right p-4 rounded-4xl cursor-pointer appearance-none"
                                            placeholder="تاریخ ورود را انتخاب کنید"
                                        />
                                    </div>
                                </div>

                                <div className="w-full text-black flex flex-col gap-1 items-end p-5">
                                    <p className="text-xl font-bold">تاریخ خروج</p>
                                    <div className="relative w-full">
                                        <input
                                            type="date"
                                            className="bg-gray-100 w-full text-right p-4 rounded-4xl cursor-pointer appearance-none"
                                            placeholder="تاریخ خروج را انتخاب کنید"
                                        />
                                    </div>
                                </div>
                            </form>
                            <button className='text-xl bg-blue-900 text-white font-bold  w-[95%] rounded-4xl p-4'>جستجو کنید</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopSide