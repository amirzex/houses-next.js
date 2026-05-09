import React from 'react'

const ContactForm = () => {
    return (
        <>
            <form className="w-full md:w-[40%] p-6 md:p-10 flex flex-col gap-5 shadow-2xl bg-white dark:bg-[#272727] rounded-[28px] z-10" onSubmit={(e) => e.preventDefault()}>
                <h4 className="text-xl font-bold text-center mb-4 dark:text-[#D9D9E0]">با ما در ارتباط باشید</h4>

                <input
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    className="bg-gray-100/70 dark:bg-[#353535] border-none rounded-full p-4 text-sm w-full outline-none focus:ring-2 focus:ring-[#1a3b99]/20 transition-all placeholder:text-gray-400"
                />
                <input
                    type="email"
                    placeholder="ایمیل"
                    className="bg-gray-100/70 dark:bg-[#353535] border-none rounded-full p-4 text-sm w-full outline-none focus:ring-2 focus:ring-[#1a3b99]/20 transition-all placeholder:text-gray-400"
                />
                <textarea
                    placeholder="پیام شما"
                    className="bg-gray-100/70 dark:bg-[#353535] border-none rounded-[24px] p-4 text-sm w-full h-32 outline-none focus:ring-2 focus:ring-[#1a3b99]/20 transition-all placeholder:text-gray-400 resize-none"
                ></textarea>

                <button type="submit" className="bg-[#1a3b99] text-white font-bold rounded-full py-4 w-full hover:bg-blue-900 transition-colors mt-2 text-sm">
                    ارسال درخواست شما
                </button>
            </form>
        </>
    )
}

export default ContactForm