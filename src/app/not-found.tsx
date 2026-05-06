import Image from 'next/image'
import Link from 'next/link'
import notFound from '../assets/404/Frame 1890164144.png'
import arrow from '../assets/404/Vector.svg'

const NotFound = () => {
    return (
        <div className='relative flex flex-col justify-center '>
            <div className=' absolute left-[45%] top-[20%] flex flex-col justify-center items-center gap-5'>
                <span className='text-blue-900 text-[100px]'>404</span>
                <h2> صفحه مورد نظر یافت نشد  </h2>
                <div className='bg-blue-900 text-white p-5 rounded-5xl flex flex-row gap-3 rounded-[50px]'>
                    <Image src={arrow} alt='' unoptimized />
                    <Link href="/" > برگردیم به صفحه اصلی  </Link>
                </div>
            </div>
            <Image src={notFound} alt='' unoptimized className='w-full' />
        </div>

    )
}

export default NotFound