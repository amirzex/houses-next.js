export const Step2Passengers = () => {
    return (
        <div className="flex flex-col gap-10">

            <section>
                <h2 className="text-xl font-bold mb-6 text-gray-800">مشخصات مسافران</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
                    <input type="text" placeholder="نام" className="bg-gray-100 p-3 rounded-full outline-none focus:ring-2 ring-blue-500 w-full" />
                    <input type="text" placeholder="نام خانوادگی" className="bg-gray-100 p-3 rounded-full outline-none focus:ring-2 ring-blue-500 w-full" />
                    <input type="text" placeholder="جنسیت شما" className="bg-gray-100 p-3 rounded-full outline-none focus:ring-2 ring-blue-500 w-full" />
                    <input type="text" placeholder="کدملی" className="bg-gray-100 p-3 rounded-full outline-none focus:ring-2 ring-blue-500 w-full" />
                    <input type="text" placeholder="تاریخ تولد" className="bg-gray-100 p-3 rounded-full outline-none focus:ring-2 ring-blue-500 w-full md:col-start-1" />

                    <div className="flex flex-row-reverse gap-3 justify-end mt-4">
                        <button className="border w-[50%] flex-row justify-center border-blue-800 text-blue-800 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-50 transition">
                            <span>🕒</span> انتخاب مسافران سابق
                        </button>
                        <button className="bg-blue-800 w-[50%] flex-row justify-center text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition">
                            <span>👤+</span> افزودن مسافر جدید
                        </button>
                    </div>
                </div>
            </section>

            <hr className="border-gray-200" />

            <section>
                <h2 className="text-xl font-bold mb-6 text-gray-800">ارسال بلیت به دیگران</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="شماره تلفن" className="bg-gray-100 p-3 rounded-full outline-none focus:ring-2 ring-blue-500 w-full" />
                    <input type="email" placeholder="ایمیل" className="bg-gray-100 p-3 rounded-full outline-none focus:ring-2 ring-blue-500 w-full" />
                </div>
                <div className="flex justify-end mt-4" dir='ltr'>
                    <button className="bg-blue-800 text-white px-6 py-2 rounded-full flex flex-row-reverse items-center gap-2 hover:bg-blue-700 transition">
                        ثبت اطلاعات <span>‹</span>
                    </button>
                </div>
            </section>
        </div>
    );
};