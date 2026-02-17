import React from 'react'

const ReserveForm = () => {
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

            <div className='border-t-2 w-full  border-gray-300 flex flex-col gap-5 pt-5'>
                <div className='flex flex-row gap-40'>
                    <span className='flex flex-row-reverse justify-end gap-1 text-gray-400 text-3xl '>5,000,000  <p>تومان</p> </span>
                    <div className='flex flex-row gap-2 bg-red-500 text-white rounded-4xl p-3'>
                        <p> تخفیف </p>
                        <span>50%</span>
                    </div>
                </div>
                <span className='flex flex-row-reverse justify-end gap-1 text-3xl'>2,500,000  <p>تومان</p> </span>
            </div>

            <button className='bg-blue-900 p-3 w-full rounded-4xl text-white hover:scale-95 transition-all duration-300'> ثبت درخواست رزرو </button></div>
    )
}

export default ReserveForm