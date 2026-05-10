"use client";
import React from 'react';
import { Download, ChevronDown, CheckCircle2, XCircle, Receipt, ArrowUpLeft, ArrowDownRight } from 'lucide-react';

const FinancialPage = () => {
    const transactions = [
        { id: 1, date: "۱۲ مرداد - ۱۴۰۱ / ۱۲:۳۳", trackingId: "۱۲۳۴۵۶۷۸۹۱۲۳۴۵۶", amount: "۱,۲۵۰,۰۰۰", status: "تایید شده", type: "شارژ کیف پول" },
        { id: 2, date: "۱۲ مرداد - ۱۴۰۱ / ۱۲:۳۳", trackingId: "۱۲۳۴۵۶۷۸۹۱۲۳۴۵۶", amount: "۱,۲۵۰,۰۰۰", status: "تایید شده", type: "شارژ کیف پول" },
        { id: 3, date: "۱۲ مرداد - ۱۴۰۱ / ۱۲:۳۳", trackingId: "۱۲۳۴۵۶۷۸۹۱۲۳۴۵۶", amount: "۱,۲۵۰,۰۰۰", status: "تایید نشده", type: "رزرو" },
        { id: 4, date: "۱۲ مرداد - ۱۴۰۱ / ۱۲:۳۳", trackingId: "۱۲۳۴۵۶۷۸۹۱۲۳۴۵۶", amount: "۱,۲۵۰,۰۰۰", status: "تایید شده", type: "شارژ کیف پول" },
        { id: 5, date: "۱۲ مرداد - ۱۴۰۱ / ۱۲:۳۳", trackingId: "۱۲۳۴۵۶۷۸۹۱۲۳۴۵۶", amount: "۱,۲۵۰,۰۰۰", status: "تایید نشده", type: "رزرو" },
    ];

    return (
        <div className="p-4 md:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* بخش هدر و فیلترها (دقیقاً مشابه عکس) */}
            <div className="bg-white dark:bg-[#1E1E1E]">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-row-reverse items-center gap-4 w-full md:w-auto">

                        {/* فیلتر وضعیت پرداخت */}
                        <div className="relative flex-grow md:w-48">
                            <span className="absolute -top-3 right-6 bg-white dark:bg-[#1E1E1E] px-2 text-[10px] text-slate-400 font-bold z-10">وضعیت پرداخت:</span>
                            <div className="w-full border-2 border-slate-100 dark:border-white/5 rounded-full px-5 py-3 flex justify-between items-center text-xs font-bold text-slate-400 cursor-pointer group hover:border-primary transition-all">
                                <ChevronDown size={16} />
                                تایید شده
                            </div>
                        </div>

                        {/* فیلتر نوع تراکنش */}
                        <div className="relative flex-grow md:w-48">
                            <span className="absolute -top-3 right-6 bg-white dark:bg-[#1E1E1E] px-2 text-[10px] text-slate-400 font-bold z-10">نوع تراکنش:</span>
                            <div className="w-full border-2 border-slate-100 dark:border-white/5 rounded-full px-5 py-3 flex justify-between items-center text-xs font-bold text-slate-400 cursor-pointer group hover:border-primary transition-all">
                                <ChevronDown size={16} />
                                رزرو
                            </div>
                        </div>

                        <button className="p-3 bg-slate-50 dark:bg-white/5 text-slate-400 rounded-2xl hover:text-primary transition-colors">
                            <Download size={20} />
                        </button>
                    </div>

                    <h1 className="text-xl font-black text-slate-800 dark:text-white">لیست تراکنش های شما</h1>
                </div>
            </div>

            {/* کارت‌های خلاصه وضعیت */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-[32px] border-r-8 border-rose-500 shadow-sm group hover:scale-[1.02] transition-all">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-rose-50 dark:bg-rose-500/10 text-rose-500 rounded-2xl"><ArrowDownRight size={24} /></div>
                        <p className="text-slate-400 text-[10px] font-black uppercase">Expenses</p>
                    </div>
                    <p className="text-slate-500 text-xs font-bold">کل مخارج</p>
                    <p className="text-2xl font-black mt-1 dark:text-white">۱۲,۴۰۰,۰۰۰ <span className="text-xs font-normal opacity-50">تومان</span></p>
                </div>

                <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-[32px] border-r-8 border-green-500 shadow-sm group hover:scale-[1.02] transition-all">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-[#CCFF00]/10 text-green-500 rounded-2xl"><ArrowUpLeft size={24} /></div>
                        <p className="text-slate-400 text-[10px] font-black uppercase">Deposits</p>
                    </div>
                    <p className="text-slate-500 text-xs font-bold">کل واریزی‌ها</p>
                    <p className="text-2xl font-black mt-1 dark:text-white">۱۶,۹۰۰,۰۰۰ <span className="text-xs font-normal opacity-50">تومان</span></p>
                </div>

                <div className="bg-primary text-white p-6 rounded-[32px] shadow-xl shadow-primary/20 group hover:scale-[1.02] transition-all">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-white/20 rounded-2xl"><Receipt size={24} /></div>
                        <p className="text-white/60 text-[10px] font-black uppercase">Balance</p>
                    </div>
                    <p className="text-white/80 text-xs font-bold">مانده نهایی</p>
                    <p className="text-2xl font-black mt-1">۴,۵۰۰,۰۰۰ <span className="text-xs font-normal opacity-70">تومان</span></p>
                </div>
            </div>

            {/* جدول تراکنش‌ها */}
            <div className="bg-white dark:bg-[#1E1E1E] rounded-[32px] shadow-sm border border-slate-50 dark:border-white/5 overflow-hidden">
                <div className="overflow-x-auto text-right" dir="rtl">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-slate-100/50 dark:bg-white/5 text-slate-800 dark:text-slate-200 text-xs font-black uppercase">
                                <th className="p-6">تاریخ</th>
                                <th className="p-6 text-center">شماره پیگیری</th>
                                <th className="p-6 text-center">مبلغ</th>
                                <th className="p-6 text-center">وضعیت پرداخت</th>
                                <th className="p-6 text-center">نوع تراکنش</th>
                                <th className="p-6 text-left">عملیات</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-white/5">
                            {transactions.map((t) => (
                                <tr key={t.id} className="group hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-all">
                                    <td className="p-6 text-xs font-medium text-slate-500">{t.date}</td>
                                    <td className="p-6 text-center text-sm font-bold text-slate-400 tabular-nums">{t.trackingId}</td>
                                    <td className="p-6 text-center text-sm font-black text-slate-800 dark:text-white tracking-tighter">{t.amount}</td>
                                    <td className="p-6">
                                        <div className="flex justify-center">
                                            {t.status === 'تایید شده' ? (
                                                <span className="flex items-center gap-1.5 px-4 py-1.5 bg-green-500 text-black rounded-full text-[10px] font-black shadow-lg shadow-[#CCFF00]/20 italic">
                                                    <CheckCircle2 size={12} /> {t.status}
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-1.5 px-4 py-1.5 bg-rose-400 text-white rounded-full text-[10px] font-black shadow-lg shadow-rose-400/20 italic">
                                                    <XCircle size={12} /> {t.status}
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-6 text-center text-xs font-bold text-slate-600 dark:text-slate-400">{t.type}</td>
                                    <td className="p-6 text-left">
                                        <button className="text-[10px] font-black text-slate-400 hover:text-primary transition-colors hover:underline underline-offset-4">مشاهده رسید</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* پجینیشن */}
            <div className="flex justify-center gap-2 py-4">
                {[1, 2, 3, 4, 5, '...', 9].map((page, i) => (
                    <button key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black transition-all ${page === 1 ? 'bg-black text-white shadow-lg shadow-[#CCFF00]/20' : 'bg-white dark:bg-[#1E1E1E] text-slate-400 hover:bg-slate-50'}`}>
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FinancialPage;
