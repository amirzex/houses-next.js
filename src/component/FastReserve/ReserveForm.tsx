// import React from 'react'

// const ReserveForm = ({ property }) => {
//     return (
//         <div className='w-full flex flex-col gap-5'>
//             <form className=' w-full flex flex-col gap-5 justify-center items-center ' action="">
//                 <div className='w-full flex flex-col gap-3 text-right'>
//                     <h3 className='text-2xl'> تاریخ ورود </h3>
//                     <input
//                         type="text"
//                         placeholder='1404/06/10'
//                         className='text-right bg-gray-100 pr-2 rounded-4xl p-3 w-full'
//                     />
//                 </div>

//                 <div className='w-full flex flex-col gap-3 text-right'>
//                     <h3 className='text-2xl'> تاریخ خروج </h3>
//                     <input
//                         type="text"
//                         placeholder='1404/06/10'
//                         className='text-right bg-gray-100 pr-2 rounded-4xl p-3 w-full'
//                     />
//                 </div>
//                 <div className='w-full flex flex-col gap-3 text-right'>
//                     <h3 className='text-2xl'> تعداد نفرات  </h3>
//                     <input
//                         type="text"
//                         placeholder='0'
//                         className='text-right bg-gray-100 pr-2 rounded-4xl p-3 w-full'
//                     />
//                 </div>
//             </form>

//             <div className='border-t-2 w-full border-gray-300 flex flex-col gap-5 pt-5'>
//                 <div className='flex flex-row gap-40 items-center'>
//                     <span className='flex flex-row-reverse justify-end gap-1 text-gray-400 text-3xl line-through'>
//                         {property?.discounted_price || 0}
//                         <p>تومان</p>
//                     </span>

//                     {/* calculate the discount */}
//                     {property?.price && property?.discounted_price && (
//                         <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
//                             {Math.round(((property.price - property.discounted_price) / property.price) * 100)}% تخفیف
//                         </div>
//                     )}
//                 </div>

//                 <span className='flex flex-row-reverse justify-end gap-1 text-3xl'>
//                     {property?.price}
//                     <p>تومان</p>
//                 </span>
//             </div>

//             <button className='bg-blue-900 p-3 w-full rounded-4xl text-white hover:scale-95 transition-all duration-300'> ثبت درخواست رزرو </button></div>
//     )
// }

// export default ReserveForm
// components/ReservationForm.jsx



import Image from 'next/image';
import home from '../../assets/reserve/home.svg';
import Link from 'next/link';

// کامپوننت‌های SVG برای آیکون‌ها (برای خوانایی بیشتر جدا شده‌اند)
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const PriceTagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 15h2v2H7v-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 3v2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h2a2 2 0 012 2v5a2 2 0 01-2 2h-2m-5 4v2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15h2v2h-2v-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 15v2" />
    </svg>
);

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);

const ReservationForm = () => {
    return (
        <div dir="rtl" className="w-[90%] flex flex-col justify-center items-center bg-[#FFFFFA] border rounded-3xl p-6 gap-5">

            {/* title */}

            <div className=' w-full flex flex-row justify-center items-center gap-3'>
                <Image src={home} alt='' unoptimized className='w-6 h-6' />
                <h2 className='text-2xl'>رزرو خونه برای</h2>
            </div>

            <form className="w-full flex flex-col gap-6">
                {/* inputs */}
                <div className='w-full flex flex-col gap-3'>
                    <p className="text-xl">تاریخ رفت</p>
                    <div className="w-full flex items-center justify-between bg-gray-100 rounded-full px-4 py-3">
                        <div className="flex items-center gap-3">
                            <input type='date' className="font-semibold text-sm" placeholder='1403-4-5' />
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col gap-3'>
                    <p className="text-xl">تاریخ برگشت</p>
                    <div className="w-full flex items-center justify-between bg-gray-100 rounded-full px-4 py-3">
                        <div className="flex items-center gap-3">
                            <input type='date' className="font-semibold text-sm" placeholder='1403-4-5' />
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col gap-3'>
                    <p className="text-xl"> تعداد مسافران</p>
                    <div className="w-full flex items-center justify-between bg-gray-100 rounded-full px-4 py-3">
                        <div className="flex items-center gap-3">
                            <input type='text' className="font-semibold text-sm" placeholder='5 نفر' />
                        </div>
                    </div>
                </div>


                {/* reserve price section*/}
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className="w-full flex items-center gap-2 mb-4 ">
                        <div className='w-[33%] border-b border-2'></div>
                        <div className='w-[33%] flex flex-row justify-center items-center gap-2'>
                            <PriceTagIcon />
                            <h3 className="font-bold text-gray-800 ">قیمت های رزرو</h3>
                        </div>
                        <div className='w-[33%] border-b border-2'></div>
                    </div>
                    {/* prices */}
                    <div className="space-y-3 text-xl w-[80%]">

                        <div className="flex justify-between items-center pb-2 ">

                            <div className="flex items-center gap-3">
                                <span className="text-gray-400">5 شب</span>
                                <span className="text-gray-400  flex flex-row-reverse gap-1 ">
                                    <p>ت</p>
                                    17.000.000
                                </span>
                            </div>
                            <span className="text-gray-600  flex flex-row-reverse gap-1 ">
                                <p>ت</p>
                                18.000.000
                            </span>
                        </div>

                    </div>
                </div>

                {/* بخش قیمت نهایی */}
                <div>
                    <div className="w-full flex items-center gap-2 mb-4 ">
                        <div className='w-[33%] border-b border-2'></div>
                        <div className='w-[33%] flex flex-row justify-center items-center gap-2'>
                            <PriceTagIcon />
                            <h3 className="font-bold text-gray-800 ">قیمت  نهایی</h3>
                        </div>
                        <div className='w-[33%] border-b border-2'></div>
                    </div>
                    <div className="flex justify-center  items-center w-full">
                        <div className="w-[90%] flex items-center gap-4 ">
                            <div className="bg-orange-500 text-white text-sm font-bold w-14 h-12 flex items-center justify-center rounded-full">
                                %15
                            </div>
                            <div className='w-[90%] bg-gray-200 rounded-full flex flex-row-reverse gap-3 justify-center items-center p-3'>
                                <p className="text-xl font-extrabold text-gray-900">4.500.000 <span className="text-sm font-normal">تومان</span></p>
                                <p className="text-orange-500 line-through">5.500.000 تومان</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* دکمه رزرو */}
                <Link href="2/Payment" className="w-full bg-blue-900 text-white font-bold py-4 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors duration-300">
                    <span>همین الان رزرو کن</span>
                    <ArrowLeftIcon />
                </Link>

            </form >
        </div >
    );
};

export default ReservationForm;
