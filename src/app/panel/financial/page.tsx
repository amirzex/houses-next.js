import { ArrowUpLeft, ArrowDownRight, CreditCard, Download } from 'lucide-react';

export default function FinancialPage() {
    const transactions = [
        { id: 1, type: 'deposit', title: 'افزایش اعتبار کیف پول', amount: '۱,۲۰۰,۰۰۰+', date: '۱۴ آبان ۱۴۰۲', status: 'موفق' },
        { id: 2, type: 'withdraw', title: 'رزرو اقامتگاه بومگردی', amount: '۸۵۰,۰۰۰-', date: '۱۰ آبان ۱۴۰۲', status: 'موفق' },
        { id: 3, type: 'deposit', title: 'هدیه دعوت از دوستان', amount: '۵۰,۰۰۰+', date: '۰۵ آبان ۱۴۰۲', status: 'موفق' },
    ];

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 dark:text-white">مدیریت مالی</h1>
                    <p className="text-slate-500 mt-1">گزارش درآمدها، پرداخت‌ها و تراکنش‌های حساب</p>
                </div>
                <button className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-xl text-sm font-bold">
                    <Download size={18} />
                    خروجی اکسل
                </button>
            </div>

            {/* Cards Section */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-[32px] border-b-4 border-blue-500 shadow-sm">
                    <p className="text-slate-500 text-sm font-bold">کل مخارج</p>
                    <p className="text-2xl font-black mt-2 dark:text-white">۱۲,۴۰۰,۰۰۰ تومان</p>
                </div>
                <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-[32px] border-b-4 border-emerald-500 shadow-sm">
                    <p className="text-slate-500 text-sm font-bold">کل واریزی‌ها</p>
                    <p className="text-2xl font-black mt-2 dark:text-white">۱۶,۹۰۰,۰۰۰ تومان</p>
                </div>
                <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-[32px] border-b-4 border-primary shadow-sm">
                    <p className="text-slate-500 text-sm font-bold">مانده نهایی</p>
                    <p className="text-2xl font-black mt-2 dark:text-white">۴,۵۰۰,۰۰۰ تومان</p>
                </div>
            </div>

            {/* Transactions Table */}
            <div className="bg-white dark:bg-[#1E1E1E] rounded-[32px] overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm">
                <div className="p-8 border-b border-gray-50 dark:border-white/5">
                    <h3 className="font-black text-lg dark:text-white">تاریخچه تراکنش‌ها</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-right">
                        <thead className="bg-slate-50 dark:bg-white/5 text-slate-400 text-xs font-bold uppercase">
                            <tr>
                                <th className="px-8 py-4">نوع</th>
                                <th className="px-8 py-4">عنوان تراکنش</th>
                                <th className="px-8 py-4">تاریخ</th>
                                <th className="px-8 py-4">مبلغ (تومان)</th>
                                <th className="px-8 py-4 text-center">وضعیت</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-white/5">
                            {transactions.map((t) => (
                                <tr key={t.id} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                                    <td className="px-8 py-6">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${t.type === 'deposit' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
                                            }`}>
                                            {t.type === 'deposit' ? <ArrowUpLeft size={20} /> : <ArrowDownRight size={20} />}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-sm font-bold text-slate-700 dark:text-slate-200">{t.title}</td>
                                    <td className="px-8 py-6 text-sm text-slate-400">{t.date}</td>
                                    <td className={`px-8 py-6 text-sm font-black ${t.type === 'deposit' ? 'text-emerald-500' : 'text-rose-500'
                                        }`}>{t.amount}</td>
                                    <td className="px-8 py-6 text-center">
                                        <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg text-[10px] font-bold">{t.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
