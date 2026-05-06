import React from 'react'

const FormSearchMobile = () => {
    return (
        <div className='bg-white w-full rounded-[2rem] p-5'>

            {/* دکمه جستجو در بالا سمت چپ */}
            <div className="w-full flex justify-start mb-6">
                <button className='flex items-center gap-2 text-sm bg-[#2a45a6] text-white font-medium rounded-full px-5 py-2.5'>
                    <span>جستجو کن</span>
                    {/* آیکون ذره‌بین */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <form className='w-full flex flex-col gap-5' action="">

                {/* ۱. انتخاب مقصد */}
                <div className="w-full text-black flex flex-col gap-2 items-end">
                    <p className="text-[15px] font-bold pr-3">انتخاب مقصد</p>
                    <div className="relative w-full">
                        <select
                            className="appearance-none bg-[#f4f5f8] w-full text-right py-3.5 pr-5 pl-10 rounded-full cursor-pointer text-[13px] text-gray-400 focus:outline-none"
                            defaultValue=""
                        >
                            <option value="" disabled>استان ، شهر ، اقامتگاه ....</option>
                            <option value="tehran">تهران</option>
                            <option value="mashhad">مشهد</option>
                            <option value="isfahan">اصفهان</option>
                            <option value="shiraz">شیراز</option>
                            <option value="mazandaran">مازندران</option>
                        </select>
                        {/* آیکون فلش رو به پایین */}
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-800 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </div>

                {/* ۲. تاریخ ورود */}
                <div className="w-full text-black flex flex-col gap-2 items-end">
                    <p className="text-[15px] font-bold pr-3">تاریخ ورود</p>
                    <div className="relative w-full">
                        {/* در تصویر از input متنی شبیه‌سازی شده استفاده شده است */}
                        <input
                            type="text"
                            className="bg-[#f4f5f8] w-full text-right py-3.5 pr-5 pl-10 rounded-full cursor-pointer appearance-none text-[13px] placeholder-gray-400 focus:outline-none"
                            placeholder="وارد کنید ...."
                        />
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-800 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </div>

                {/* ۳. تاریخ خروج */}
                <div className="w-full text-black flex flex-col gap-2 items-end">
                    <p className="text-[15px] font-bold pr-3">تاریخ خروج</p>
                    <div className="relative w-full">
                        <input
                            type="text"
                            className="bg-[#f4f5f8] w-full text-right py-3.5 pr-5 pl-10 rounded-full cursor-pointer appearance-none text-[13px] placeholder-gray-400 focus:outline-none"
                            placeholder="وارد کنید ...."
                        />
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-800 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </div>

                {/* ۴. تعداد نفرات */}
                <div className='w-full text-black flex flex-col gap-2 items-end'>
                    <p className='text-[15px] font-bold pr-3'>تعداد نفرات</p>
                    <div className="relative w-full">
                        <input
                            className='bg-[#f4f5f8] w-full text-right py-3.5 pr-5 pl-10 rounded-full text-[13px] placeholder-gray-400 focus:outline-none'
                            type="text"
                            placeholder='وارد کنید ....'
                        />
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-800 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default FormSearchMobile
