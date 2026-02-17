import Link from 'next/link'

const Help = () => {
    return (
        <div className='w-full mt-30 p-15 '>

            <div className='w-full flex flex-row-reverse bg-blue-900 p-15 rounded-4xl'>

                <div className='w-[70%] flex flex-col justify-center gap-5 text-white'>
                    <p className='text-5xl text-right '>نیاز به راهنمایی دارید!؟</p>
                    <p className='text-2xl text-right'>کارشناسان ما همیشه آماده پاسخگویی به سوالات شما عزیزان هستند </p>
                </div>

                <Link
                    href={"/"}
                    className=' w-[30%] flex justify-center items-center p-10'
                >
                    <p className='bg-orange-400 w-full text-center text-white rounded-4xl p-5 text-2xl'>دریافت مشاوره رایگان</p>
                </Link>

            </div>
        </div>

    )
}

export default Help