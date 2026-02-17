"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import IconHolder from './IconHolder';

const PropertyTabs = () => {
    const [activeTab, setActiveTab] = useState('about');

    // تعریف محتوای هر تب به صورت آبجکت
    const tabContents = {
        about: {
            title: "چرا هتل همایون رو انتخاب کنیم ؟",
            content: "هتل همایون با معماری سنتی ایرانی و خدمات مدرن، تجربه‌ای بی‌نظیر از اقامت در اصفهان رو برای شما فراهم می‌کنه. این هتل در نزدیکی میدان نقش جهان واقع شده و دسترسی آسان به جاذبه‌های گردشگری داره.",
            buttonText: "مشاهده بیشتر"
        },
        amenities: {
            title: "امکانات اقامتگاه",
            content: [
                "استخر سرپوشیده",
                "اینترنت پرسرعت",
                "پارکینگ رایگان",
                "رستوران سنتی",
                "سالن ورزشی",
                "سرویس فرودگاه",
                "استخر سرپوشیده",
                "اینترنت پرسرعت",
                "پارکینگ رایگان",
                "رستوران سنتی",
                "سالن ورزشی",
                "سرویس فرودگاه",
                "سرویس فرودگاه",
                "سرویس فرودگاه",
            ],
            buttonText: "مشاهده همه "
        },
        reviews: {
            title: "نظرات کاربران",
            content: [
                { name: "علی محمدی", rating: 5, comment: "اقامت بسیار خوبی داشتیم. پرسنل محترم و خوش‌برخورد بودند." },
                { name: "سارا احمدی", rating: 4, comment: "موقعیت مکانی عالی، فقط صبحانه می‌تونست متنوع‌تر باشه." },
                { name: "رضا کریمی", rating: 5, comment: "تمیز و با کیفیت. حتماً دوباره میام." }
            ],
            buttonText: "مشاهده همه نظرات"
        }
    };

    // رندر محتوا براساس تب فعال
    const renderContent = () => {
        const currentTab = tabContents[activeTab];

        if (activeTab === 'about') {
            return (
                <div className='w-full flex flex-col gap-3'>
                    <h3 className='text-right text-2xl w-full'>{currentTab.title}</h3>
                    <p className='text-right'>{currentTab.content}</p>
                </div>
            );
        }

        if (activeTab === 'amenities') {
            return (
                <div className='w-full flex flex-col gap-3'>
                    {/* big div  */}
                    <IconHolder />
                </div>
            );
        }

        if (activeTab === 'reviews') {
            return (
                <div className='w-full flex flex-col gap-3'>
                    <h3 className='text-right text-2xl w-full'>{currentTab.title}</h3>
                    <div className='text-right space-y-4'>
                        {currentTab.content.map((review, index) => (
                            <div key={index} className='border-b pb-3'>
                                <div className='flex justify-between'>
                                    <span className='font-bold'>{review.name}</span>
                                    <span>{'⭐'.repeat(review.rating)}</span>
                                </div>
                                <p>{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    };

    return (
        <div className='w-full flex flex-col gap-5 p-4 rounded-lg'>
            {/* دکمه‌ها */}
            <div className='w-full flex flex-row-reverse items-center justify-start gap-5 flex-wrap'>
                <button
                    onClick={() => setActiveTab('about')}
                    className={`p-3 w-[120px] text-center rounded-4xl transition-all duration-300 ${activeTab === 'about'
                        ? 'bg-blue-900 text-white shadow-lg scale-105'
                        : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                >
                    درباره املاک
                </button>
                <button
                    onClick={() => setActiveTab('amenities')}
                    className={`p-3 w-[150px] text-center rounded-4xl transition-all duration-300 ${activeTab === 'amenities'
                        ? 'bg-blue-900 text-white shadow-lg scale-105'
                        : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                >
                    امکانات اقامتگاه
                </button>
                <button
                    onClick={() => setActiveTab('reviews')}
                    className={`p-3 w-[120px] text-center rounded-4xl transition-all duration-300 ${activeTab === 'reviews'
                        ? 'bg-blue-900 text-white shadow-lg scale-105'
                        : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                >
                    نظرات کاربران
                </button>
            </div>

            {/* محتوای اصلی با انیمیشن */}
            <div className='transition-all duration-500 ease-in-out'>
                {renderContent()}
            </div>

            {/* دکمه مشاهده بیشتر (مشترک) */}
            <div className='text-gray-400 w-full flex flex-row justify-center items-center'>
                <button className='w-[12%] border-2 p-2 rounded-4xl hover:bg-gray-100 transition-colors'>
                    {tabContents[activeTab].buttonText}
                </button>
            </div>
        </div>
    );
};

export default PropertyTabs;