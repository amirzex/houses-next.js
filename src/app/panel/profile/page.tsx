import { User } from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="max-w-3xl mx-auto space-y-8 text-right" dir="rtl">
            <div>
                <h1 className="text-3xl font-black text-slate-800 dark:text-white">تنظیمات پروفایل</h1>
                <p className="text-slate-500 mt-1">اطلاعات شخصی و امنیتی حساب خود را مدیریت کنید</p>
            </div>

            <div className="bg-white dark:bg-[#1E1E1E] rounded-[32px] p-8 shadow-sm border border-gray-100 dark:border-white/5 space-y-8">
                <div className="flex items-center gap-6 pb-8 border-b border-gray-50 dark:border-white/5">
                    <div className="relative group">
                        <div className="w-24 h-24 bg-slate-200 rounded-[28px] overflow-hidden">
                            {/* Image placeholder */}
                        </div>
                        <button className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-xl shadow-lg border-4 border-white dark:border-[#1E1E1E]">
                            <User size={16} />
                        </button>
                    </div>
                    <div>
                        <h3 className="font-black text-lg dark:text-white">محمد امیر</h3>
                        <p className="text-slate-400 text-sm">سطح دسترسی: خریدار</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500 mr-2">نام و نام خانوادگی</label>
                        <input type="text" defaultValue="محمد امیر" className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500 mr-2">شماره تماس</label>
                        <input type="text" defaultValue="09123456789" className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-bold text-slate-500 mr-2">ایمیل</label>
                        <input type="email" defaultValue="user@example.com" className="w-full bg-slate-50 dark:bg-white/5 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                    </div>
                </div>

                <div className="pt-4 flex justify-end">
                    <button className="bg-primary text-white px-10 py-4 rounded-2xl font-black text-sm hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                        ذخیره تغییرات
                    </button>
                </div>
            </div>
        </div>
    );
}
