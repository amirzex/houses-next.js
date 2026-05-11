"use client";

import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import LocationMap from "../common/Map";
import FilterForm from "../rent/FilterForm";
import FastCard from "../common/FastCard";
import FilterWithMobileMenu from "../rent/FilterWithMobileMenu";
import Card from "../common/Card";
import { useReservationQuery } from "@/core/api/landingQuery/LandingQuery";

const FastReserve = () => {
    const { data, isLoading, error } = useReservationQuery();

    if (isLoading) {
        return <div className="text-center mt-10">در حال بارگذاری...</div>;
    }

    if (error) {
        return <div className="text-center mt-10">خطا در دریافت اطلاعات</div>;
    }

    return (
        <div
            className="flex flex-col justify-center items-center mt-30"
            dir="rtl"
        >
            <Breadcrumb />

            {/* filter div */}
            <div className="w-full p-10 mb-10 max-sm:p-5 max-sm:mb-0">
                {/* desktop */}
                <div className="max-sm:hidden md:block">
                    <FilterForm />
                </div>

                {/* mobile */}
                <div className="max-sm:block md:hidden">
                    <FilterWithMobileMenu />
                </div>
            </div>

            <div className="w-full flex flex-row max-sm:flex-col-reverse justify-center items-start gap-5 max-sm:gap-0">

                {/* desktop cards */}
                <div className="w-[60%] max-sm:hidden md:flex flex-col justify-start items-center gap-5 pr-10 h-370 overflow-y-auto">
                    {data?.map((item, index) => (
                        <FastCard item={item} key={index} />
                    ))}
                </div>

                {/* mobile cards */}
                <div className="w-full max-sm:flex md:hidden flex-col justify-start items-center gap-5 p-5" dir="">
                    {data?.map((item, index) => (
                        <Card value={item} key={index} />
                    ))}
                </div>

                {/* map */}
                <div className="w-[40%] max-sm:pl-0 max-sm:w-full pl-10">
                    <LocationMap />
                </div>
            </div>
        </div>
    );
};

export default FastReserve;
