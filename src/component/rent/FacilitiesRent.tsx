import Image from 'next/image'
import parking from '../../assets/reserve/CarParking02Icon.svg'

const FacilitiesRent = () => {
    return (
        <div className=' w-full flex flex-row flex-wrap gap-5 p-10'>
            {/* cards */}

            <div className='w-[15%] bg-[#FFFFFA] dark:bg-[#272727] rounded-2xl  p-3 flex flex-col gap-1 justify-center items-center border  hover:border-r-6 hover:border-blue-900 transition-all duration-200 hover:bg-blue-100'>
                <div className='w-full flex justify-center items-center '>
                    <Image src={parking} alt='' unoptimized className='bg-blue-900 w-15 p-3  rounded-full' />
                </div>
                <h2 className='text-blue-900'>پارکینگ</h2>
                <p className='text-gray-300'>دارد</p>
            </div>
            <div className='w-[15%] bg-[#FFFFFA] dark:bg-[#272727]  rounded-2xl  p-3 flex flex-col gap-1 justify-center items-center border  hover:border-r-6 hover:border-blue-900 transition-all duration-200 hover:bg-blue-100'>
                <div className='w-full flex justify-center items-center '>
                    <Image src={parking} alt='' unoptimized className='bg-blue-900 w-15 p-3  rounded-full' />
                </div>
                <h2 className='text-blue-900'>پارکینگ</h2>
                <p className='text-gray-300'>دارد</p>
            </div>
            <div className='w-[15%] bg-[#FFFFFA] dark:bg-[#272727] rounded-2xl  p-3 flex flex-col gap-1 justify-center items-center border  hover:border-r-6 hover:border-blue-900 transition-all duration-200 hover:bg-blue-100'>
                <div className='w-full flex justify-center items-center '>
                    <Image src={parking} alt='' unoptimized className='bg-blue-900 w-15 p-3  rounded-full' />
                </div>
                <h2 className='text-blue-900'>پارکینگ</h2>
                <p className='text-gray-300'>دارد</p>
            </div>

        </div>
    )
}

export default FacilitiesRent