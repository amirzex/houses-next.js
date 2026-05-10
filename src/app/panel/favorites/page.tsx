"use client";
import React, { useState } from "react";
import { Heart, Trash2, MoreHorizontal, MapPin, Star } from "lucide-react";

const FavoritesPage = () => {
    const [openMenu, setOpenMenu] = useState<number | null>(null);

    const favorites = [
        {
            id: 1,
            property: "ویلا ساحلی رامسر",
            location: "مازندران، رامسر",
            price: "۳,۲۰۰,۰۰۰",
            rating: "4.8",
        },
        {
            id: 2,
            property: "کلبه جنگلی ماسال",
            location: "گیلان، ماسال",
            price: "۲,۱۰۰,۰۰۰",
            rating: "4.7",
        },
        {
            id: 3,
            property: "سوئیت لوکس کیش",
            location: "جزیره کیش",
            price: "۴,۵۰۰,۰۰۰",
            rating: "4.9",
        },
    ];

    return (
        <div className="p-4 md:p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* header */}
            <div className="flex flex-row-reverse justify-between items-end gap-6 bg-white dark:bg-[#1E1E1E]">
                <h1 className="text-xl font-black text-slate-800 dark:text-white">
                    لیست علاقه‌مندی‌های شما
                </h1>
            </div>

            {/* table */}
            <div className="bg-white dark:bg-[#1E1E1E] rounded-[32px] shadow-sm border border-slate-50 dark:border-white/5 overflow-hidden">

                <div className="overflow-x-auto text-right" dir="rtl">

                    <table className="w-full border-collapse">

                        <thead>
                            <tr className="bg-slate-50/50 dark:bg-white/5 text-slate-400 text-[11px] font-black uppercase tracking-wider">
                                <th className="p-5 text-center">نام اقامتگاه</th>
                                <th className="p-5">موقعیت</th>
                                <th className="p-5 text-center">امتیاز</th>
                                <th className="p-5">قیمت هر شب</th>
                                <th className="p-5 w-10"></th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-50 dark:divide-white/5">

                            {favorites.map((item, index) => (
                                <tr
                                    key={index}
                                    className="group hover:bg-slate-50/30 dark:hover:bg-white/[0.02] transition-all"
                                >
                                    {/* property */}
                                    <td className="p-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-14 h-14 bg-slate-100 dark:bg-white/10 rounded-2xl flex-shrink-0"></div>

                                            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                                                {item.property}
                                            </span>
                                        </div>
                                    </td>

                                    {/* location */}
                                    <td className="p-5 text-xs font-medium text-slate-500 flex items-center gap-1">
                                        <MapPin size={14} />
                                        {item.location}
                                    </td>

                                    {/* rating */}
                                    <td className="p-5">
                                        <div className="flex justify-center">
                                            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-100 text-yellow-600 rounded-full text-[10px] font-black border border-yellow-200">
                                                <Star size={12} />
                                                {item.rating}
                                            </span>
                                        </div>
                                    </td>

                                    {/* price */}
                                    <td className="p-5 text-sm font-black text-slate-800 dark:text-white">
                                        {item.price}
                                        <span className="text-[10px] font-normal opacity-60 mr-1">
                                            ت
                                        </span>
                                    </td>

                                    {/* actions */}
                                    <td className="p-5 relative">

                                        <button
                                            onClick={() =>
                                                setOpenMenu(openMenu === index ? null : index)
                                            }
                                            className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors text-slate-400"
                                        >
                                            <MoreHorizontal size={20} />
                                        </button>

                                        {openMenu === index && (
                                            <div className="absolute left-full mt-2 w-36 bg-white dark:bg-[#252525] shadow-2xl rounded-2xl border border-slate-100 dark:border-white/10 z-50 overflow-hidden animate-in zoom-in-95">

                                                <button className="w-full px-4 py-3 text-[11px] font-black text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 flex items-center justify-between">
                                                    مشاهده
                                                    <Heart size={14} className="text-slate-400" />
                                                </button>

                                                <button className="w-full px-4 py-3 text-[11px] font-black text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 flex items-center justify-between border-t border-slate-50 dark:border-white/5">
                                                    حذف
                                                    <Trash2 size={14} />
                                                </button>

                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>
            </div>

            {/* pagination */}
            <div className="flex justify-center gap-2 py-4">
                {[1, 2, 3, 4, 5].map((page, i) => (
                    <button
                        key={i}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black transition-all ${page === 1
                                ? "bg-black text-white shadow-lg shadow-[#CCFF00]/20"
                                : "bg-white dark:bg-[#1E1E1E] text-slate-400 hover:bg-slate-50"
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default FavoritesPage;
