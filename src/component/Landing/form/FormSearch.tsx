import React from 'react'

const FormSearch = () => {

    return (

        <div className='w-full flex flex-row-reverse justify-center items-center'>

            <form className=' w-full flex flex-row-reverse justify-center items-center' action="">
                <div className="w-full text-black flex flex-col gap-1 items-end p-5">
                    <p className="text-xl font-bold">انتخاب مقصد</p>
                    <div className="relative w-full">
                        <select
                            className="appearance-none bg-gray-100 w-full text-right p-5 rounded-4xl cursor-pointer pr-4"
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
            <button className='text-xl bg-blue-900 text-white font-bold mt-8 w-[20%] rounded-4xl p-4'>جستجو کنید</button>
        </div>

    )
}

export default FormSearch