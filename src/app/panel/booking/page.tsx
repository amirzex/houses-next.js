const BookingsPage = () => {
    const bookings = [
        { id: 1, property: "ویلا استخردار رامسر", date: "1402/05/12", amount: "4,500,000", status: "تایید شده" },
        { id: 2, property: "کلبه چوبی جنگلی", date: "1402/05/10", amount: "2,200,000", status: "در انتظار" },
    ];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h1 className="text-2xl font-black dark:text-white">مدیریت رزروهای مشتریان</h1>
                <div className="flex gap-2 w-full md:w-auto">
                    <input
                        placeholder="جستجو با نام ملک..."
                        className="bg-white dark:bg-[#272727] border-none rounded-full px-4 py-2 text-sm w-full md:w-64 shadow-sm outline-none focus:ring-2 focus:ring-[#1a3b99]/20"
                    />
                </div>
            </div>

            <div className="bg-white dark:bg-[#272727] rounded-[32px] shadow-sm overflow-hidden border border-gray-50 dark:border-gray-800">
                <div className="overflow-x-auto">
                    <table className="w-full text-right">
                        <thead className="bg-gray-50/50 dark:bg-[#353535] text-gray-400 text-xs uppercase">
                            <tr>
                                <th className="p-6">نام ملک</th>
                                <th className="p-6">تاریخ رزرو</th>
                                <th className="p-6">مبلغ (تومان)</th>
                                <th className="p-6">وضعیت</th>
                                <th className="p-6">عملیات</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                            {bookings.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50/50 dark:hover:bg-[#353535]/50 transition-colors">
                                    <td className="p-6 text-sm font-bold dark:text-white">{item.property}</td>
                                    <td className="p-6 text-sm text-gray-500">{item.date}</td>
                                    <td className="p-6 text-sm font-bold text-[#1a3b99]">{item.amount}</td>
                                    <td className="p-6">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${item.status === 'تایید شده' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="p-6">
                                        <button className="text-xs text-[#1a3b99] font-bold hover:underline">جزئیات</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookingsPage;
