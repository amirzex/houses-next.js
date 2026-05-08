// src/components/FilterWithMobileMenu.jsx

import React, { useState } from 'react';
import FilterForm from './FilterForm';

// آیکون فیلتر
const FilterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
    </svg>
);

// آیکون بستن
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const FilterWithMobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="  w-full ">

            
            <div className="hidden lg:block bg-white p-6 rounded-xl shadow-lg border border-gray-200/80">
                <h3 className="text-xl font-bold mb-6 text-gray-800">فیلترها</h3>
                {/* پراپ isMobile ارسال نمی‌شود (مقدار پیش‌فرض false است) */}
                <FilterForm />
            </div>

            {/* ====== دکمه نمایش فیلترها در حالت موبایل (کوچکتر از lg) ====== */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="flex items-center justify-center gap-x-2 w-full px-4 py-3 bg-gray-300 text-blue-900 rounded-lg shadow-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                    <FilterIcon />
                    <span>نمایش فیلترها</span>
                </button>
            </div>

            {/* ====== منوی موبایل (Off-canvas) ====== */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true">
                    {/* پس‌زمینه نیمه‌شفاف با انیمیشن محو شدن */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-300"
                        onClick={closeMenu}
                    ></div>

                    {/* پنل اصلی منو با انیمیشن باز شدن از راست */}
                    <div className="relative flex flex-col w-full max-w-sm h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">

                        {/* هدر منو */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">فیلترها</h2>
                            <button
                                type="button"
                                className="p-1 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                onClick={closeMenu}
                            >
                                <span className="sr-only">بستن منو</span>
                                <CloseIcon />
                            </button>
                        </div>

                        {/* بدنه منو (با قابلیت اسکرول) */}
                        <div className="flex-1 p-6 overflow-y-auto">
                            {/* پراپ isMobile={true} برای نمایش عمودی فیلدها ارسال می‌شود */}
                            <FilterForm isMobile={true} />
                        </div>

                        {/* فوتر منو */}
                        <div className="p-4 border-t border-gray-200 bg-gray-50">
                            <button
                                onClick={closeMenu}
                                className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                            >
                                اعمال فیلترها
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterWithMobileMenu;
