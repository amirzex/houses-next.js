"use client";
import MobileNav from '@/component/dashboard/MobileNav';
import Sidebar from '@/component/dashboard/Sidebar';

import React from 'react';

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#121212] flex flex-row-reverse font-[vazir,system-ui]" dir="rtl">

      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-72 flex-col fixed inset-y-0 right-0 z-50 bg-white dark:bg-[#1E1E1E] border-l border-gray-100 dark:border-white/5">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:pr-72 flex flex-col min-w-0">
        {/* <Header /> */}

        <main className="p-4 md:p-8 pb-32 lg:pb-8">
          <div className="max-w-6xl mx-auto w-full animate-in fade-in duration-700">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white/80 dark:bg-black/80 backdrop-blur-xl border-t border-gray-100 dark:border-white/5 px-4 py-2">
        <MobileNav />
      </div>
    </div>
  );
}
