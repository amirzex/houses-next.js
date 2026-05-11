"use client";
import React, { useState } from 'react';
import { MoreHorizontal, SlidersHorizontal, CheckCircle2, XCircle, Clock, CreditCard, Info, Trash2, AlertCircle } from 'lucide-react';
import { useBookings } from '@/core/api/dashboard/booking/bookingQuery/BookingQuery';

const BookingsPage = () => {
    const [openMenu, setOpenMenu] = useState<number | null>(null);

    const { data: apiData, isLoading } = useBookings();

    const staticBookings = [
        { id: 1, property: "هتل سراوان رانین رشت (استاتیک)", date: "۱۲ مرداد - ۱۴۰۱ / ۱۲:۳۳", amount: "۱,۸۰۰,۰۰۰", passengers: "۲ عدد مسافر", status: "تایید شده", payment: "لغو شده" },
        { id: 2, property: "هتل سراوان رانین رشت (استاتیک)", date: "۱۲ مرداد - ۱۴۰۱ / ۱۲:۳۳", amount: "۱,۸۰۰,۰۰۰", passengers: "۲ عدد مسافر", status: "در انتظار", payment: "تایید شده" },
        { id: 3, property: "هتل سراوان رانین رشت (استاتیک)", date: "۱۲ مرداد - ۱۴۰۱ / ۱۲:۳۳", amount: "۱,۸۰۰,۰۰۰", passengers: "۲ عدد مسافر", status: "تایید شده", payment: "تایید شده" },
    ];

    const rawData = Array.isArray(apiData) ? apiData : (apiData as any)?.data || [];

    const isDataStatic = !isLoading && rawData.length === 0;


    const displayData = isDataStatic ? staticBookings : rawData.map((item: any) => ({
        id: item.id,
        property: `اقامتگاه کد ${item.houseId}`,
        date: new Date(item.created_at).toLocaleDateString('fa-IR'),
        amount: "نامشخص",
        passengers: `${item.traveler_details?.length || 0} عدد مسافر`,
        status: item.status === 'pending' ? 'در انتظار' : item.status === 'confirmed' ? 'تایید شده' : 'لغو شده',
        payment: item.status === 'pending' ? 'در انتظار' : 'تایید شده',
    }));

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'تایید شده':
                return <span className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/50 text-black rounded-full text-[10px] font-black border border-[#CCFF00]/30"><CheckCircle2 size={12} /> {status}</span>;
            case 'لغو شده':
                return <span className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-100 text-rose-500 rounded-full text-[10px] font-black border border-rose-200"><XCircle size={12} /> {status}</span>;
            case 'در انتظار':
                return <span className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 text-amber-500 rounded-full text-[10px] font-black border border-amber-200"><Clock size={12} /> {status}</span>;
            default:
                return null;
        }
    };

    if (isLoading) return <div className="p-10 text-center font-bold">در حال بارگذاری...</div>;

    return (
        <div className="p-4 md:p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="flex flex-row-reverse justify-between items-end gap-6 bg-white dark:bg-[#1E1E1E]">
                <div className="flex flex-row-reverse items-center gap-4 w-full md:w-auto">
                    <button className="bg-black hover:bg-[#353535] text-white font-black px-6 py-3 rounded-2xl transition-all flex items-center gap-2 text-sm ">
                        فیلترها
                        <SlidersHorizontal size={18} />
                    </button>

                    <div className="relative flex-grow md:w-80 group">
                        <span className="absolute -top-3 right-6 bg-white dark:bg-[#1E1E1E] px-2 text-[10px] text-slate-400 font-bold z-10">جستجو:</span>
                        <input
                            placeholder="نام هتل مورد نظر..."
                            className="w-full bg-transparent border-2 border-slate-100 dark:border-white/5 rounded-full px-6 py-3 text-sm outline-none focus:border-black transition-all text-right"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <h1 className="text-xl font-black text-slate-800 dark:text-white">لیست رزرو های شما</h1>
                    {isDataStatic && (
                        <span className="flex items-center gap-1 text-[10px] text-amber-500 font-bold">
                            <AlertCircle size={12} /> در حال نمایش دیتای استاتیک
                        </span>
                    )}
                </div>
            </div>

            <div className="bg-white dark:bg-[#1E1E1E] rounded-[32px] shadow-sm border border-slate-50 dark:border-white/5 overflow-hidden">
                <div className="overflow-x-auto text-right" dir="rtl">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 dark:bg-white/5 text-slate-400 text-[11px] font-black uppercase tracking-wider">
                                <th className="p-5 text-center">نام اقامتگاه</th>
                                <th className="p-5">تاریخ رزرو</th>
                                <th className="p-5">قیمت کل</th>
                                <th className="p-5 text-center">تعداد مسافر</th>
                                <th className="p-5 text-center">وضعیت رزرو</th>
                                <th className="p-5 text-center">وضعیت پرداخت</th>
                                <th className="p-5 w-10"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-white/5">
                            {displayData.map((item: any, index: number) => (
                                <tr key={index} className="group hover:bg-slate-50/30 dark:hover:bg-white/[0.02] transition-all">
                                    <td className="p-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-14 h-14 bg-slate-100 dark:bg-white/10 rounded-2xl flex-shrink-0"></div>
                                            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{item.property}</span>
                                        </div>
                                    </td>
                                    <td className="p-5 text-xs font-medium text-slate-500 leading-relaxed tabular-nums">{item.date}</td>
                                    <td className="p-5 text-sm font-black text-slate-800 dark:text-white tabular-nums">{item.amount} <span className="text-[10px] font-normal opacity-60">ت</span></td>
                                    <td className="p-5 text-center text-xs font-bold text-slate-600 dark:text-slate-400">{item.passengers}</td>
                                    <td className="p-5"><div className="flex justify-center">{getStatusBadge(item.status)}</div></td>
                                    <td className="p-5"><div className="flex justify-center">{getStatusBadge(item.payment)}</div></td>
                                    <td className="p-5 relative">
                                        <button
                                            onClick={() => setOpenMenu(openMenu === index ? null : index)}
                                            className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors text-slate-400"
                                        >
                                            <MoreHorizontal size={20} />
                                        </button>

                                        {openMenu === index && (
                                            <div className="absolute left-full top-0 mt-2 w-32 bg-white dark:bg-[#252525] shadow-2xl rounded-2xl border border-slate-100 dark:border-white/10 z-50 overflow-hidden animate-in zoom-in-95">
                                                <button className="w-full px-4 py-3 text-[11px] font-black text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 flex items-center justify-between">
                                                    پرداخت <CreditCard size={14} className="text-slate-400" />
                                                </button>
                                                <button className="w-full px-4 py-3 text-[11px] font-black text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 flex items-center justify-between border-y border-slate-50 dark:border-white/5">
                                                    جزئیات <Info size={14} className="text-slate-400" />
                                                </button>
                                                <button className="w-full px-4 py-3 text-[11px] font-black text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 flex items-center justify-between">
                                                    حذف <Trash2 size={14} />
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

            <div className="flex justify-center gap-2 py-4">
                {[1, 2, 3, 4, 5, '...', 9].map((page, i) => (
                    <button
                        key={i}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black transition-all ${page === 1
                            ? 'bg-black text-white shadow-lg shadow-[#CCFF00]/20'
                            : 'bg-white dark:bg-[#1E1E1E] text-slate-400 hover:bg-slate-50'
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default BookingsPage;
