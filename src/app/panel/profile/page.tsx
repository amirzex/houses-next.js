"use client"

import { useUser } from "@/core/api/dashboard/user/userQuery/UserQuery";
import { User } from "lucide-react";

export default function ProfilePage() {

    const id = 179; // فعلاً ثابت برای تست
    const { data, isLoading } = useUser(id);

    if (isLoading) return <p>در حال دریافت اطلاعات...</p>

    const user = data?.data || data;

    return (
        <div className="mx-auto space-y-8" dir="rtl">

            <div className="bg-white dark:bg-[#1E1E1E] rounded-[32px] p-8 shadow-sm">

                <div className="flex items-center gap-6 pb-8 border-b dark:border-white/5">
                    <div className="relative">
                        <div className="w-24 h-24 bg-slate-200 rounded-[28px]" />
                        <button className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-xl">
                            <User size={16} />
                        </button>
                    </div>

                    <div>
                        <h3 className="font-black text-lg dark:text-white">
                            {user?.fullName}
                        </h3>
                        <p className="text-slate-400 text-sm">
                            سطح دسترسی: {user?.role}
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500">نام و نام خانوادگی</label>
                        <input
                            type="text"
                            defaultValue={user?.fullName}
                            className="w-full bg-slate-50 dark:bg-white/5 rounded-2xl p-4"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500">شماره تماس</label>
                        <input
                            type="text"
                            defaultValue={user?.phone}
                            className="w-full bg-slate-50 dark:bg-white/5 rounded-2xl p-4"
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-bold text-slate-500">ایمیل</label>
                        <input
                            type="email"
                            defaultValue={user?.email}
                            className="w-full bg-slate-50 dark:bg-white/5 rounded-2xl p-4"
                        />
                    </div>

                </div>

                <div className="pt-4 flex justify-end">
                    <button className="bg-primary text-white px-10 py-4 rounded-2xl font-black">
                        ذخیره تغییرات
                    </button>
                </div>

            </div>
        </div>
    );
}
