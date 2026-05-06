"use client"
import Image from 'next/image'
import horn from '../../../assets/landing/megaphone-01.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HeaderNav = () => {
    const pathname = usePathname()

    const navItems = [
        { href: '/', label: 'خانه' },
        { href: '/rent', label: 'رهن و اجاره' },
        { href: '/FastReserve', label: 'رزرو سریع' },
        { href: '/ContactUs', label: 'تماس با ما' },

    ]

    return (
        <div className='w-full bg-gray-100 p-2 text-gray-700 rounded-full text-2xl flex flex-row-reverse gap-10 justify-center items-center '>
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`w-[17.5%] pb-2 transition-all ${pathname === item.href
                        ? ' text-blue-900'
                        : ''
                        }`}
                >
                    {item.label}
                </Link>
            ))}
            <div className='border w-[30%] py-3 rounded-full flex flex-row-reverse justify-center items-center gap-3 bg-blue-900'>
                <Image
                    src={horn}
                    alt=''
                    unoptimized 
                    className='w-[20%]'/>
                <p className='text-white'>!فروشنده شو</p>
            </div>
        </div>
    )
}

export default HeaderNav