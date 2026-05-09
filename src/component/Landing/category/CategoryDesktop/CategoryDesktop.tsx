import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import boom from '../../../../assets/landing/boom.png'
import arrow from '../../../../assets/landing/Frame.svg'
import apartment from '../../../../assets/landing/apartment.jpg'
import kolbe from '../../../../assets/landing/kolbe.jpg'
import beech from '../../../../assets/landing/beech.png'
import pool from '../../../../assets/landing/pool.jpg'
import villa from '../../../../assets/landing/villa.png'

const CategoryDesktop = () => {
    return (
        <div>
            <div className='w-full flex flex-row justify-center items-center gap-3   '>
                {/* left div */}
                <div className='relative w-[16.6%]  h-110 rounded-4xl flex justify-center overflow-hidden '>
                    <Image
                        src={boom}
                        // width={500}
                        fill
                        alt="landing background"
                        className=" object-cover overflow-hidden brightness-75 hover:scale-110 transition-all duration-300 hover:brightness-100"
                        unoptimized
                    />
                    <Link href={"/"} className=' absolute bottom-5 right-5 bg-white text-black text-center text-xl p-2 w-[35%] rounded-4xl'>بوم گردی </Link>
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

                <div className='relative w-[16.6%]   h-110 overflow-hidden rounded-4xl'>
                    <Image
                        src={kolbe}
                        // width={500}
                        fill
                        alt="landing background"
                        className="h-full object-cover overflow-hidden brightness-75 rounded-4xl hover:scale-110 transition-all duration-300 hover:brightness-100"
                        unoptimized
                    />
                    <Link href={"/"} className='absolute bottom-5 right-5 bg-white text-black text-center text-xl p-2 w-[35%] rounded-4xl'>ملک کلبه</Link>
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
                <div className='relative w-[16.6%]   h-110 overflow-hidden rounded-4xl'>
                    <Image
                        src={beech}
                        // width={500}
                        fill
                        alt="landing background"
                        className="h-full object-cover overflow-hidden brightness-75 rounded-4xl hover:scale-110 transition-all duration-300 hover:brightness-100"
                        unoptimized
                    />
                    <Link href={"/"} className='absolute bottom-5 right-5 bg-white text-black text-center text-xl p-2 w-[40%] rounded-4xl'>ملک ساحلی </Link>

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

                <div className='relative w-[16.6%]   h-110 overflow-hidden rounded-4xl'>
                    <Image
                        src={villa}
                        // width={500}
                        fill
                        alt="landing background"
                        className="h-full object-cover overflow-hidden brightness-75 rounded-4xl hover:scale-110 transition-all duration-300 hover:brightness-100"
                        unoptimized
                    />
                    <Link href={"/"} className='absolute bottom-5 right-5 bg-white text-black text-center text-xl p-2 w-[40%] rounded-4xl'>ملک ویلایی </Link>

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

                <div className='relative w-[16.6%]   h-110 overflow-hidden rounded-4xl'>
                    <Image
                        src={pool}
                        // width={500}
                        fill
                        alt="landing background"
                        className="h-full object-cover overflow-hidden brightness-75 rounded-4xl hover:scale-110 transition-all duration-300 hover:brightness-100"
                        unoptimized
                    />

                    <Link href={"/"} className='absolute bottom-5 right-5 bg-white text-black text-center text-xl p-2 w-[40%] rounded-4xl'> استخر دار </Link>
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
                {/* right div */}
                <div className='relative w-[16.6%]   h-110 rounded-4xl flex justify-center overflow-hidden '>
                    <Image
                        src={apartment}
                        // width={500}
                        fill
                        alt="landing background"
                        className=" object-cover overflow-hidden brightness-75 hover:scale-110 transition-all duration-300 hover:brightness-100"
                        unoptimized
                    />
                    <Link href={"/"} className=' absolute bottom-5 right-5 bg-white text-black text-center text-xl p-2 w-[35%] rounded-4xl'>آپارتمان  </Link>
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

export default CategoryDesktop