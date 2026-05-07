// "use client"; 

// import { useEffect } from 'react';
// import { useReserve } from '@/core/context/ReserveContext';
// import Card from '@/component/common/Card';
// import { FastReserveProps } from '@/core/types/IReserve';
// import Form from '@/component/Form/Form';
// import LocationMap from '../common/Map';
// import PaginationFor from '../common/Pagination';

// const FastReserve = ({ searchParams }: FastReserveProps) => {
//     const {
//         filteredProperties,
//         loading,
//         error,
//         filters,
//         setFilters,
//         totalCount
//     } = useReserve();


//     useEffect(() => {
//         const filterParams = {
//             ...searchParams,
//             page: searchParams.page ? Number(searchParams.page) : 1,
//             limit: searchParams.limit ? Number(searchParams.limit) : 9,
//             minPrice: searchParams.minPrice ? Number(searchParams.minPrice) : undefined,
//             maxPrice: searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined,
//             sort: searchParams.sort || "last_updated",
//             location: searchParams.location || '',
//             search: searchParams.search || searchParams.q || '',
//         };

//         setFilters(filterParams);
//     }, []); 

//     if (loading && filteredProperties.length === 0) {
//         return <div className="text-center p-10">در حال بارگذاری...</div>;
//     }

//     if (error) {
//         return <div className="text-center p-10 text-red-500">{error}</div>;
//     }

//     return (
//         <div className='flex flex-col justify-center items-center'>
//             {/* filter */}
//             <div className='flex flex-row-reverse justify-center items-center gap-5 w-full '>
//                 {/* right side */}
//                 <div className='flex flex-col gap-7 w-[60%] pr-25 '>
//                     <div className='w-full flex flex-row-reverse justify-center items-center' >
//                         <p className='text-xl w-[10%] text-right pr-3'>فیلتر ها </p>
//                         <div className='w-[90%]'></div>
//                         <span className='flex flex-row-reverse gap-1 text-blue-400'>
//                             {totalCount} <p>نتیجه</p>
//                         </span>
//                     </div>

//                     {/* filter's input */}
//                     <Form />
//                 </div>
//                 {/* left side */}
//                 <div className='flex flex-col w-[40%] h-94 pl-25 '>
//                     <LocationMap />
//                 </div>
//             </div>

//             {/* card map */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-25">
//                 {filteredProperties?.length > 0 ? (
//                     filteredProperties?.map((item) => (
//                         <Card key={item.id} value={item} />
//                     ))
//                 ) : (
//                     <p className="text-center text-gray-500">هیچ خانه‌ای یافت نشد</p>
//                 )}
//             </div>
//             <PaginationFor />
//         </div>
//     );
// };

// export default FastReserve;
"use client"
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import { slides } from '../Landing/suggestion/Suggestion'
import Image from 'next/image'
import img from '../../assets/landing/card.jpg'
import bed from '../../assets/landing/bed.svg'
import bath from '../../assets/landing/bath.svg'
import user from '../../assets/landing/user.svg'
import park from '../../assets/landing/car.svg'
import Link from 'next/link'
import arrowleft from '../../assets/landing/arrowleft.svg'
import start from '../../assets/landing/start.svg'
import loca from '../../assets/landing/location.svg'
import LocationMap from '../common/Map'
import FilterForm from '../rent/FilterForm'


const FastReserve = () => {
    return (
        <div className='flex flex-col justify-center  items-center mt-30' dir='rtl'>

            <Breadcrumb />

            {/* filter div */}
            <div className='w-full p-10 mb-10'>
                <FilterForm />
            </div>

            <div className='w-full flex flex-row justify-center items-start gap-5 '>

                <div className='w-[60%] flex flex-col justify-start items-center gap-5 pr-10 h-200 overflow-y-auto ' >
                    {slides.map((item, index) => (
                        <div className='w-full flex flex-row justify-center items-center gap-5 border rounded-3xl p-5' key={index}>
                            <div className='w-[30%] h-70'>
                                <Image src={img} alt='' unoptimized className='w-full h-full rounded-2xl ' />
                            </div>
                            <div className='w-[70%] flex flex-col justify-center items-start gap-3 '>
                                <div className='w-full text-4xl'>{item.title}</div>
                                <div className='bg-blue-900 px-5 py-2  rounded-full text-white flex flex-row-reverse justify-center items-center gap-1'>
                                    <Image src={start} alt='' unoptimized />
                                    <p>ستاره</p>
                                    {item.rate}
                                </div>
                                <div className='w-full flex flex-row justify-start items-center text-gray-500 text-2xl gap-3'>
                                    <Image src={loca} alt='' unoptimized />
                                    {item.adress}
                                </div>
                                <div className='w-full flex flex-row justify-start items-center gap-5'>
                                    <div className='w-[15%] flex flex-row justify-start gap-1 text-2xl text-gray-500 items-center'>
                                        <Image src={bed} alt='' unoptimized className='w-6 ' />
                                        <div>{item.bed}</div>
                                        <p>خواب</p>

                                    </div>
                                    <div className='w-[15%] flex flex-row justify-start text-gray-500 gap-1 text-2xl items-center'>
                                        <Image src={bath} alt='' unoptimized className='w-6' />
                                        <div>{item.bed}</div>
                                        <p>نفر</p>
                                    </div>
                                    <div className='w-[15%] flex flex-row justify-start text-2xl text-gray-500 gap-1 items-center'>
                                        <Image src={user} alt='' unoptimized className='w-6' />
                                        <div>{item.bed}</div>
                                        <p>حمام</p>
                                    </div>
                                    <div className='w-[15%] flex flex-row justify-start text-2xl text-gray-500 gap-1 items-center'>
                                        <Image src={park} alt='' unoptimized className='w-6' />
                                        <div>{item.bed}</div>
                                        <p>پارکینگ</p>
                                    </div>
                                </div>
                                <div className='w-full flex flex-row gap-10'>
                                    <div className='w-[80%] bg-gray-200 flex flex-row justify-center items-center p-5 rounded-full'>
                                        <p className='w-[40%] text-gray-400 text-2xl'>اجاره ماهانه </p>
                                        <div className='w-[60%] flex flex-row-reverse text-2xl justify-start items-center gap-3'>
                                            <p className='text-gray-400'>هر شب</p>
                                            {item.price} /
                                        </div>
                                    </div>
                                    <div className='w-[20%] flex flex-row-reverse justify-end items-center'>
                                        <Image src={arrowleft} alt='' unoptimized />
                                        <Link href='/' className='text-blue-900'> مشاهده جزییات </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='w-[40%] pl-10'>
                    <LocationMap />
                </div>
            </div>
        </div>
    )
}

export default FastReserve
