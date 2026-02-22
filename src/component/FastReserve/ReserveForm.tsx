import React from 'react'

const ReserveForm = ({ property }) => {
    return (
        <div className='w-full flex flex-col gap-5'>
            <form className=' w-full flex flex-col gap-5 justify-center items-center ' action="">
                <div className='w-full flex flex-col gap-3 text-right'>
                    <h3 className='text-2xl'> تاریخ ورود </h3>
                    <input
                        type="text"
                        placeholder='1404/06/10'
                        className='text-right bg-gray-100 pr-2 rounded-4xl p-3 w-full'
                    />
                </div>

                <div className='w-full flex flex-col gap-3 text-right'>
                    <h3 className='text-2xl'> تاریخ خروج </h3>
                    <input
                        type="text"
                        placeholder='1404/06/10'
                        className='text-right bg-gray-100 pr-2 rounded-4xl p-3 w-full'
                    />
                </div>
                <div className='w-full flex flex-col gap-3 text-right'>
                    <h3 className='text-2xl'> تعداد نفرات  </h3>
                    <input
                        type="text"
                        placeholder='0'
                        className='text-right bg-gray-100 pr-2 rounded-4xl p-3 w-full'
                    />
                </div>
            </form>

            <div className='border-t-2 w-full border-gray-300 flex flex-col gap-5 pt-5'>
                <div className='flex flex-row gap-40 items-center'>
                    <span className='flex flex-row-reverse justify-end gap-1 text-gray-400 text-3xl line-through'>
                        {property?.discounted_price || 0}
                        <p>تومان</p>
                    </span>

                    {/* calculate the discount */}
                    {property?.price && property?.discounted_price && (
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            {Math.round(((property.price - property.discounted_price) / property.price) * 100)}% تخفیف
                        </div>
                    )}
                </div>

                <span className='flex flex-row-reverse justify-end gap-1 text-3xl'>
                    {property?.price}
                    <p>تومان</p>
                </span>
            </div>

            <button className='bg-blue-900 p-3 w-full rounded-4xl text-white hover:scale-95 transition-all duration-300'> ثبت درخواست رزرو </button></div>
    )
}

export default ReserveForm