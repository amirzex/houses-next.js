
export const Step3Form = ({ onBack }) => (
    <div className="w-full flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-300">
        {/* نام کاربری */}
        <div className="relative w-full">
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </span>
            <input
                className="w-full border dark:bg-[#353535] text-gray-700 outline-none p-3.5 pr-12 rounded-full focus:border-[#1a3b99] transition-colors placeholder:text-gray-400 text-sm"
                placeholder="نام کاربری خود را وارد کنید"
                type="text"
            />
        </div>

        {/* رمز عبور */}
        <div className="relative w-full">
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </span>
            <input
                className="w-full border dark:bg-[#353535] text-gray-700 outline-none p-3.5 pr-12 rounded-full focus:border-[#1a3b99] transition-colors placeholder:text-gray-400 text-sm"
                placeholder="رمز عبور"
                type="password"
            />
        </div>

        {/* تکرار رمز عبور */}
        <div className="relative w-full">
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </span>
            <input
                className="w-full border dark:bg-[#353535] text-gray-700 outline-none p-3.5 pr-12 rounded-full focus:border-[#1a3b99] transition-colors placeholder:text-gray-400 text-sm"
                placeholder="تکرار رمز عبور"
                type="password"
            />
        </div>

        <button
            onClick={(e) => { e.preventDefault(); alert("ثبت نام انجام شد!"); }}
            className="bg-[#1a3b99] text-white p-4 rounded-full mt-2 font-bold text-sm hover:bg-blue-900 transition-colors"
        >
            ارسال و ورود
        </button>

        <div className="flex justify-end mt-2">
            <button onClick={onBack} className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1">
                بازگشت
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
        </div>
    </div>
);