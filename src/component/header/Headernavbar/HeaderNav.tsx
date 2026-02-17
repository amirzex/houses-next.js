"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HeaderNav = () => {
    const pathname = usePathname()

    const navItems = [
        { href: '/', label: 'خانه' },
        { href: '/FastReserve', label: 'رزرو سریع' },
        { href: '/rent', label: 'رهن و اجاره' },
        { href: '/articles', label: 'مقالات' },
        { href: '/about', label: 'درباره ما' },
    ]

    return (
        <div className='w-full  text-2xl flex flex-row-reverse gap-10 justify-center items-center text-black '>
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`pb-2 transition-all ${pathname === item.href
                        ? 'border-b-3 border-blue-900 text-blue-900'
                        : 'hover:border-b-4 hover:border-gray-400'
                        }`}
                >
                    {item.label}
                </Link>
            ))}
        </div>
    )
}

export default HeaderNav