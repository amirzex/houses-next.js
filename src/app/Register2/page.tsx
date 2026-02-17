import Image from 'next/image'
import Link from 'next/link'
import apartment from '../../assets/register/modern-tokyo-street-background_23-2149394920.avif'
import person1 from '../../assets/register/1.jpg'
import person2 from '../../assets/register/2.webp'
import person3 from '../../assets/register/5.jpeg'
import person4 from '../../assets/register/4.webp'
import arrow from '../../assets/register/icons8-arrow-right-48.png'

const Register = () => {
    return (
        <div className='w-full flex flex-row-reverse items-center justify-center p-15 gap-10'>
            {/* right div */}
            <div className='w-[35%] h-197 flex flex-col justify-center bg-white shadow-black shadow-sm text-right rounded-4xl p-5 '>
                {/* top */}
                <Link className='mb-5 mt-20 flex flex-row-reverse items-center gap-1 text-blue-900' href={'Register'}>
                    <Image
                        src={arrow}
                        width={18}
                        alt="landing background"
                        className=" object-cover overflow-hidden"
                        unoptimized
                    />
                    بازگشت
                </Link>
                <div className='w-full flex flex-col gap-2 '>
                    <h2 className='font-black text-2xl w-full'>   ایجاد حساب کاربری (مرحله دوم)     </h2>
                    <p className='w-full'> amir@gmail.com کد تایید به ایمل شما  ارسال می شود </p>
                    <Link href={"Register"} className='text-sm text-blue-400 underline'> تغییر ایمل </Link>
                </div>
                {/* form */}
                <div className='w-full mt-7 mb-10'>
                    <form className='w-full flex flex-col gap-5 ' action="">
                        <input className='bg-gray-200 outline-0 text-right p-3 rounded-4xl' placeholder='ایمیل خود را وارد کنید' type="text" />
                        <div className='flex flex-row justify-center items-center gap-2'>
                            <p> تا ارسال مجدد</p>
                            <span> 01:30 </span>
                        </div>
                        <button className='bg-blue-900 text-white p-3 rounded-4xl'>
                            <Link href={"Register3"}>
                                ارسال  
                            </Link>
                        </button>
                    </form>

                </div>

            </div>
            {/* left side */}
            <div className='relative w-[35%] h-197 shadow-sm shadow-black overflow-hidden flex flex-col justify-center items-center rounded-4xl '>
                <Image
                    src={apartment}
                    width={650}
                    alt="landing background"
                    className=" object-cover overflow-hidden"
                    unoptimized
                />
                <div className='w-[95%] bg-gray-900/70  flex flex-row-reverse justify-center items-center gap-5 rounded-4xl  absolute bottom-4'>
                    <div className='relative flex flex-row justify-center items-center w-[20%] p-11'>
                        <Image
                            src={person3}
                            width={45}
                            alt="landing background"
                            className=" object-cover overflow-hidden rounded-4xl absolute right-0 border-2 border-white hover:z-50 hover:scale-110 transition-all duration-300"
                            unoptimized
                        />
                        <Image
                            src={person2}
                            width={45}
                            alt="landing background"
                            className=" object-cover overflow-hidden rounded-4xl absolute right-8 border-2 border-white hover:z-50 hover:scale-110 transition-all duration-300"
                            unoptimized
                        />
                        <Image
                            src={person4}
                            width={45}
                            alt="landing background"
                            className=" object-cover overflow-hidden rounded-4xl absolute right-16 border-2 border-white hover:z-50 hover:scale-110 transition-all duration-300"
                            unoptimized
                        />
                        <Image
                            src={person1}
                            width={45}
                            alt="landing background"
                            className=" object-cover overflow-hidden rounded-4xl absolute right-24 border-2 border-white hover:z-50 hover:scale-110 transition-all duration-300 "
                            unoptimized
                        />
                    </div>
                    <div className='w-[70%] flex flex-col gap-1 text-white text-right pr-5 '>
                        <h2> همین حالا به ما بپیوند </h2>
                        <p>همراه هزارات کاربر دیگر از خدمات ما استفاده کنید    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register