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
import LocationMap from '../common/Map'
import FilterForm from '../rent/FilterForm'
import FastCard from '../common/FastCard'
import FilterWithMobileMenu from '../rent/FilterWithMobileMenu'
import Card from '../common/Card'


const FastReserve = () => {
    return (
        <div className='flex flex-col justify-center  items-center mt-30' dir='rtl'>

            <Breadcrumb />

            {/* filter div */}
            <div className='w-full p-10 mb-10 max-sm:mb-0'>
                {/* desktop */}
                <div className='max-sm:hidden md:block'>
                    <FilterForm />
                </div>


                {/* mobile */}
                <div className='max-sm:block md:hidden'>
                    <FilterWithMobileMenu />
                </div>
            </div>

            <div className='w-full flex flex-row max-sm:flex-col-reverse justify-center items-start gap-5 max-sm:gap-0 '>

                <div className='w-[60%] max-sm:hidden md:flex flex flex-col justify-start items-center gap-5 pr-10 h-200 overflow-y-auto ' >
                    {slides.map((item, index) => (
                        <FastCard item={item} key={index} />
                    ))}
                </div>
                <div className='w-full max-sm:flex md:hidden flex flex-col justify-start items-center gap-5 p-5 ' >
                    {slides.map((item, index) => (
                        <Card value={item} key={index} />
                    ))}
                </div>

                <div className='w-[40%]  max-sm:pl-0  max-sm:w-full pl-10'>
                    <LocationMap />
                </div>
            </div>
        </div>
    )
}

export default FastReserve
