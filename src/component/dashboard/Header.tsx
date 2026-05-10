"use client";
import React, { useState } from 'react';
import { Bell, Moon, Sun, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <header className="w-full mb-5 pt-6 pb-2" >
            <div className="bg-white dark:bg-[#1E1E1E] h-20 rounded-[32px] shadow-sm border border-gray-100 dark:border-white/5 flex flex-row-reverse items-center justify-between px-6 md:px-10 transition-all">


                <div className="flex flex-row-reverse items-center gap-4 md:gap-6">

                    <div className="flex flex-row-reverse items-center gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 p-2 rounded-2xl transition-colors">
                        <ChevronDown size={16} className="text-slate-400" />
                        <div className="text-left hidden sm:block">
                            <p className="text-sm font-black text-slate-800 dark:text-white leading-tight">امیر محمد ملایی</p>
                            <p className="text-[10px] font-bold text-slate-400 mt-0.5">خریدار</p>
                        </div>
                        <div className="w-11 h-11 bg-slate-100 dark:bg-white/10 rounded-2xl border-2 border-white dark:border-slate-800 overflow-hidden shadow-sm">
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                                ام
                            </div>
                        </div>
                    </div>

                    <div className="w-[1px] h-8 bg-slate-100 dark:bg-white/10 hidden md:block"></div>


                    <button className="relative p-2.5 bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 rounded-2xl hover:bg-primary/10 hover:text-primary transition-all group">
                        <Bell size={20} className="group-hover:animate-swing" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 border-2 border-white dark:border-[#1E1E1E] rounded-full"></span>
                    </button>


                    <div
                        onClick={() => setIsDark(!isDark)}
                        className="flex items-center bg-slate-100 dark:bg-white/10 p-1.5 rounded-2xl cursor-pointer w-20 relative transition-all"
                    >
                        <div className={`absolute w-8 h-8 bg-white dark:bg-primary rounded-xl shadow-sm transition-all duration-300 transform ${isDark ? '-translate-x-9' : 'translate-x-0'}`}></div>
                        <div className="flex justify-between w-full px-1.5 relative z-10 pointer-events-none">
                            <Sun size={16} className={isDark ? 'text-slate-400' : 'text-primary'} />
                            <Moon size={16} className={isDark ? 'text-white' : 'text-slate-400'} />
                        </div>
                    </div>

                </div>


                <div className="flex items-center gap-4">
                    <h2 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white tracking-tight">داشبورد</h2>
                    <div className="w-2 h-8 bg-primary rounded-full hidden md:block"></div>
                </div>

            </div>
        </header>
    );
};

export default Header;
