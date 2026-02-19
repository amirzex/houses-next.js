// src/component/FastReserve/FastReserveDetail.tsx
"use client";

import { useEffect } from 'react';
import { useReserve } from '@/core/context/ReserveContext';
import Image from 'next/image';
import React, { FC } from 'react';
import villa from '../../assets/landing/villa.png';
import loc from '../../assets/reserve/icons8-location-50.png';
import Link from 'next/link';
import PropertyTabs from './PropertyTabs';
import ReserveForm from './ReserveForm';

interface IProps {
    id: string;
}

const FastReserveDetail: FC<IProps> = ({ id }) => {
    const { selectedProperty, loading, error, fetchPropertyById } = useReserve();

    useEffect(() => {
        fetchPropertyById(id);
    }, [id, fetchPropertyById]);

    if (loading) {
        return <div className="text-center p-10">در حال بارگذاری...</div>;
    }

    if (error) {
        return <div className="text-center p-10 text-red-500">{error}</div>;
    }

    if (!selectedProperty) {
        return <div className="text-center p-10">ملک مورد نظر یافت نشد</div>;
    }

    return (
        <div className='w-full flex flex-col gap-5 justify-center items-center pr-25 pl-25 '>
            {/* top side */}
            <div className='w-full flex flex-row-reverse gap-10 justify-center items-center'>
                <div className='w-full flex flex-row-reverse gap-10'>
                    <div className="w-[70%] h-140 overflow-hidden rounded-4xl">
                        <Image
                            src={selectedProperty.images?.[0] || villa}
                            alt='img'
                            className=' rounded-4xl scale-115 '
                            // width={800}
                            // height={600}
                        />
                    </div>
                    {/* top left side */}
                    <div className="w-[30%] flex flex-col h-140 gap-10">
                        <div className="h-70 overflow-hidden rounded-4xl">
                            <Image
                                src={selectedProperty.images?.[1] || villa}
                                alt='img'
                                className='rounded-4xl'
                                // width={400}
                                // height={300}
                            />
                        </div>
                        <div className="h-70 overflow-hidden rounded-4xl relative border-2">
                            <Image
                                src={selectedProperty.images?.[2] || villa}
                                alt='img'
                                className='rounded-4xl brightness-50'
                                // width={400}
                                // height={300}
                            />
                            <Link href={''}
                                className='left-37 top-25 absolute p-3 w-50 flex flex-row justify-center items-center gap-2 text-white cursor-pointer border-2 border-white rounded-4xl'>
                                <p>مشاهده بیشتر</p>
                                <span>+ {selectedProperty.images?.length - 3 || 5}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* middle part */}
            <div className=' w-full flex flex-row-reverse justify-center items-start gap-10'>
                {/* right side */}
                <div className="w-[70%] flex flex-col justify-center items-end gap-3 ">
                    <h2 className='text-3xl text-right w-full'>{selectedProperty.title}</h2>
                    <div className='flex flex-row w-full text-right justify-end items-center text-sm'>
                        <p>{selectedProperty.address}</p>
                        <Image
                            src={loc}
                            width={20}
                            alt='location' />
                    </div>
                    {/* info layout  */}
                    <div className='w-full flex flex-col gap-5 '>
                        <PropertyTabs property={selectedProperty} />
                    </div>
                </div>
                {/* left side */}
                <div className="border-2 w-[30%] flex flex-col gap-5 justify-center items-center rounded-4xl p-5">
                    <ReserveForm property={selectedProperty} />
                </div>
            </div>
        </div>
    );
};

export default FastReserveDetail;