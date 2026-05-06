import React from 'react'

const Form = () => {
    return (
        <div>
            <form className="w-full flex flex-col gap-5">

                <div className="relative w-full">
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </span>
                    <input
                        className="w-full border border-gray-200 text-gray-700 outline-none p-3.5 pr-12 rounded-full focus:border-[#1a3b99] transition-colors placeholder:text-gray-400 text-sm"
                        placeholder="ایمیل خود را وارد کنید"
                        type="email"
                    />
                </div>

                <div className="relative w-full">
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </span>
                    <input
                        className="w-full border border-gray-200 text-gray-700 outline-none p-3.5 pr-12 rounded-full focus:border-[#1a3b99] transition-colors placeholder:text-gray-400 text-sm"
                        placeholder="رمز عبور خود را وارد کنید"
                        type="password"
                    />
                </div>

                <div className="w-full flex justify-start mt-1">
                    <a className="text-[#1a3b99] text-sm flex items-center gap-1.5 hover:underline" href="Forget">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        رمز عبور خود را فراموش کرده اید ؟
                    </a>
                </div>

                <button className="bg-[#1a3b99] text-white p-4 rounded-full mt-4 font-bold text-base hover:bg-blue-900 transition-colors">
                    ورود به حساب کاربری
                </button>
            </form>
        </div>
    )
}

export default Form