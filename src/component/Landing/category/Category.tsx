import Image from 'next/image'
import boom from '../../../assets/landing/boom.png'
import arrow from '../../../assets/landing/Frame.svg'
import apartment from '../../../assets/landing/apartment.jpg'
import kolbe from '../../../assets/landing/kolbe.jpg'
import beech from '../../../assets/landing/beech.png'
import pool from '../../../assets/landing/pool.jpg'
import villa from '../../../assets/landing/villa.png'
import Link from 'next/link'

const Category = () => {
    return (
        <div className='w-full flex flex-col text-right mt-30 p-20 gap-10'>
            <p className=' text-3xl '>دسته بندی ها</p>
            <div className='w-full  flex flex-row justify-center items-center gap-5  '>
                {/* left div */}
                <div className='relative w-[25%] h-180 rounded-4xl flex justify-center overflow-hidden '>
                    <Image
                        src={boom}
                        // width={500}
                        fill
                        alt="landing background"
                        className=" object-cover overflow-hidden brightness-75 hover:scale-110 transition-all duration-300 hover:brightness-100"
                        unoptimized
                    />
                    <Link href={"/"} className=' absolute bottom-5 right-5 bg-white text-black text-center text-2xl p-2 w-[35%] rounded-4xl'>بوم گردی </Link>
                    <button className='absolute bottom-5 left-5 bg-white w-[10%] rounded-full overflow-hidden'>
                        <Image
                            src={arrow}
                            width={100}
                            alt="landing background"
                            className=" object-cover overflow-hidden brightness-75  "
                            unoptimized
                        />
                    </button>
                </div>
                {/* middle div */}
                <div className='w-[50%] gap-10 h-180 flex flex-col '>

                    {/* top middle div */}
                    <div className=' w-full h-[50%] flex flex-row gap-10 justify-center items-center'>

                        <div className='relative w-[45%] h-full overflow-hidden rounded-4xl'>
                            <Image
                                src={kolbe}
                                // width={500}
                                fill
                                alt="landing background"
                                className="h-full object-cover overflow-hidden brightness-75 rounded-4xl hover:scale-110 transition-all duration-300 hover:brightness-100"
                                unoptimized
                            />
                            <Link href={"/"} className='absolute bottom-5 right-5 bg-white text-black text-center text-2xl p-2 w-[35%] rounded-4xl'>ملک کلبه</Link>
                            <button className='absolute bottom-5 left-5 bg-white w-[10%] rounded-full overflow-hidden'>
                                <Image
                                    src={arrow}
                                    width={100}
                                    alt="landing background"
                                    className=" object-cover overflow-hidden brightness-75  "
                                    unoptimized
                                />
                            </button>
                        </div>

                        <div className='relative w-[45%] h-full overflow-hidden rounded-4xl'>
                            <Image
                                src={beech}
                                // width={500}
                                fill
                                alt="landing background"
                                className="h-full object-cover overflow-hidden brightness-75 rounded-4xl hover:scale-110 transition-all duration-300 hover:brightness-100"
                                unoptimized
                            />
                            <Link href={"/"} className='absolute bottom-5 right-5 bg-white text-black text-center text-2xl p-2 w-[40%] rounded-4xl'>ملک ساحلی </Link>

                            <button className='absolute bottom-5 left-5 bg-white w-[10%] rounded-full overflow-hidden'>
                                <Image
                                    src={arrow}
                                    width={100}
                                    alt="landing background"
                                    className=" object-cover overflow-hidden brightness-75 "
                                    unoptimized
                                />
                            </button>
                        </div>

                    </div>

                    {/* bottom middle div */}
                    <div className=' w-full h-[55%]  flex flex-row gap-10 justify-center items-center'>

                        <div className='relative w-[45%] h-full overflow-hidden rounded-4xl'>
                            <Image
                                src={villa}
                                // width={500}
                                fill
                                alt="landing background"
                                className="h-full object-cover overflow-hidden brightness-75 rounded-4xl hover:scale-110 transition-all duration-300 hover:brightness-100"
                                unoptimized
                            />
                            <Link href={"/"} className='absolute bottom-5 right-5 bg-white text-black text-center text-2xl p-2 w-[40%] rounded-4xl'>ملک ویلایی </Link>

                            <button className='absolute bottom-5 left-5 bg-white w-[10%] rounded-full overflow-hidden'>
                                <Image
                                    src={arrow}
                                    width={100}
                                    alt="landing background"
                                    className=" object-cover overflow-hidden brightness-75  "
                                    unoptimized
                                />
                            </button>
                        </div>

                        <div className='relative w-[45%] h-full overflow-hidden rounded-4xl'>
                            <Image
                                src={pool}
                                // width={500}
                                fill
                                alt="landing background"
                                className="h-full object-cover overflow-hidden brightness-75 rounded-4xl hover:scale-110 transition-all duration-300 hover:brightness-100"
                                unoptimized
                            />

                            <Link href={"/"} className='absolute bottom-5 right-5 bg-white text-black text-center text-2xl p-2 w-[40%] rounded-4xl'> استخر دار </Link>
                            <button className='absolute bottom-5 left-5 bg-white w-[10%] rounded-full overflow-hidden'>
                                <Image
                                    src={arrow}
                                    width={100}
                                    alt="landing background"
                                    className=" object-cover overflow-hidden brightness-75 "
                                    unoptimized
                                />
                            </button>
                        </div>

                    </div>
                </div>
                {/* right div */}
                <div className='relative w-[25%] h-180 rounded-4xl flex justify-center overflow-hidden '>
                    <Image
                        src={apartment}
                        // width={500}
                        fill
                        alt="landing background"
                        className=" object-cover overflow-hidden brightness-75 hover:scale-110 transition-all duration-300 hover:brightness-100"
                        unoptimized
                    />
                    <Link href={"/"} className=' absolute bottom-5 right-5 bg-white text-black text-center text-2xl p-2 w-[35%] rounded-4xl'>آپارتمان  </Link>
                    <button className='absolute bottom-5 left-5 bg-white w-[10%] rounded-full overflow-hidden'>
                        <Image
                            src={arrow}
                            width={100}
                            alt="landing background"
                            className=" object-cover overflow-hidden brightness-75 "
                            unoptimized
                        />
                    </button>
                </div>

            </div>
        </div>

    )
}

export default Category