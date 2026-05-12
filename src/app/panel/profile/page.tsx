"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/core/api/dashboard/user/userQuery/UserQuery";
import { User } from "lucide-react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface TokenPayload {
    id: string;
}

export default function ProfilePage() {
    const [id, setId] = useState<string | null>(null);

    useEffect(() => {
        const token = Cookies.get("token");

        if (token) {
            const decoded: TokenPayload = jwtDecode(token);
            setId(decoded.id);
            console.log(decoded)
        }
    }, []);

    const { data, isLoading } = useUser(id ?? "");

    // if (!id) return null;

    if (isLoading)
        return <p className="text-center p-10">در حال دریافت اطلاعات...</p>;

    const user = data?.user;
    console.log(Cookies.get("token"))


    return (
        <div className="mx-auto space-y-8" dir="rtl">
            <div className="bg-white dark:bg-[#1E1E1E] rounded-[32px] p-8 shadow-sm">
                <div className="flex items-center gap-6 pb-8 border-b dark:border-white/5">
                    <div className="relative">
                        <div className="w-24 h-24 bg-slate-200 rounded-[28px] flex items-center justify-center overflow-hidden">
                            {user?.profilePicture && user.profilePicture !== "string" ? (
                                <img
                                    src={user.profilePicture}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <User size={40} className="text-slate-400" />
                            )}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-black text-lg dark:text-white">
                            {user?.fullName || "بارگذاری..."}
                        </h3>
                        <p className="text-slate-400 text-sm">
                            سطح دسترسی: {user?.role === "buyer" ? "خریدار" : user?.role}
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500">
                            نام و نام خانوادگی
                        </label>
                        <input
                            type="text"
                            defaultValue={user?.fullName}
                            className="w-full bg-slate-50 dark:bg-white/5 rounded-2xl p-4 outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500">
                            شماره تماس
                        </label>
                        <input
                            type="text"
                            defaultValue={user?.phoneNumber}
                            className="w-full bg-slate-50 dark:bg-white/5 rounded-2xl p-4 outline-none text-left"
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-bold text-slate-500">ایمیل</label>
                        <input
                            type="email"
                            defaultValue={user?.email}
                            className="w-full bg-slate-50 dark:bg-white/5 rounded-2xl p-4 outline-none text-left"
                        />
                    </div>
                </div>

                <div className="pt-8 flex justify-end">
                    <button className="bg-primary text-white px-10 py-4 rounded-2xl font-black hover:opacity-90 transition-all">
                        ذخیره تغییرات
                    </button>
                </div>
            </div>
        </div>
    );
}
