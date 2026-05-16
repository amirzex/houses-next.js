"use client";
import React, { useState } from "react";
import { Bell, Check, MoreHorizontal, Trash2 } from "lucide-react";

type Notification = {
  id: number;
  title: string;
  description: string;
  time: string;
  isRead: boolean;
};

const notificationsData: Notification[] = [
  {
    id: 1,
    title: "رزرو جدید",
    description: "کاربر جدید اقامتگاه شما را رزرو کرد.",
    time: "2 دقیقه پیش",
    isRead: false,
  },
  {
    id: 2,
    title: "پیام جدید",
    description: "یک پیام جدید از طرف مهمان دریافت کردید.",
    time: "10 دقیقه پیش",
    isRead: false,
  },
  {
    id: 3,
    title: "پرداخت موفق",
    description: "پرداخت رزرو با موفقیت انجام شد.",
    time: "1 ساعت پیش",
    isRead: true,
  },
];

const Notifications = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [notifications, setNotifications] =
    useState<Notification[]>(notificationsData);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, isRead: true } : n
      )
    );
    setOpenMenu(null);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="p-4 md:p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="flex justify-between items-end bg-white dark:bg-[#1E1E1E]">
        <h1 className="text-xl font-black text-slate-800 dark:text-white">
          اعلان‌های شما
        </h1>
      </div>

      <div className="bg-white dark:bg-[#1E1E1E] rounded-[32px] shadow-sm border border-slate-50 dark:border-white/5 h-[600px] overflow-y-auto">

        <div className="overflow-x-auto text-right" dir="rtl">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-slate-50/50 dark:bg-white/5 text-slate-400 text-[11px] font-black uppercase tracking-wider">
                <th className="p-5 text-center">اعلان</th>
                <th className="p-5">توضیحات</th>
                <th className="p-5 text-center">زمان</th>
                <th className="p-5 text-center">وضعیت</th>
                <th className="p-5 w-10"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-50 dark:divide-white/5">
              {notifications.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">
                    اعلانی وجود ندارد
                  </td>
                </tr>
              ) : (
                notifications.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`group hover:bg-slate-50/30 dark:hover:bg-white/[0.02] transition-all ${
                      !item.isRead ? "bg-blue-50/40 dark:bg-blue-500/5" : ""
                    }`}
                  >
                    <td className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-500/10">
                          <Bell size={18} />
                        </div>

                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                          {item.title}
                        </span>
                      </div>
                    </td>

                    <td className="p-5 text-xs font-medium text-slate-500">
                      {item.description}
                    </td>

                    <td className="p-5 text-center text-xs text-slate-500">
                      {item.time}
                    </td>

                    <td className="p-5 text-center">
                      {item.isRead ? (
                        <span className="px-3 py-1 text-[10px] font-black bg-green-100 text-green-600 rounded-full">
                          خوانده شده
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-[10px] font-black bg-blue-100 text-blue-600 rounded-full">
                          جدید
                        </span>
                      )}
                    </td>

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
                        <div className="absolute top-0 left-full mt-2 w-36 bg-white dark:bg-[#252525] shadow-2xl rounded-2xl border border-slate-100 dark:border-white/10 z-50 overflow-hidden animate-in zoom-in-95">

                          {!item.isRead && (
                            <button
                              onClick={() => markAsRead(item.id)}
                              className="w-full px-4 py-3 text-[11px] font-black text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 flex items-center justify-between"
                            >
                              خواندن
                              <Check size={14} />
                            </button>
                          )}

                          <button
                            onClick={() => removeNotification(item.id)}
                            className="w-full px-4 py-3 text-[11px] font-black text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 flex items-center justify-between"
                          >
                            حذف
                            <Trash2 size={14} />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
