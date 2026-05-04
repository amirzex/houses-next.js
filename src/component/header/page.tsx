import Image from 'next/image'
import home from '../../assets/landing/Vector.svg'
import Link from 'next/link'
import HeaderNav from './Headernavbar/HeaderNav'
import user from '../../assets/landing/user.svg'


const Header = () => {
  return (
    <div className='z-10 absolute top-0 w-full flex flex-row-reverse justify-center items-center'>
      {/* logo */}
      <div className='w-[25%] flex flex-row gap-5 justify-end items-center pr-25'>
        <p className='text-4xl font-bold text-white'>لوگو</p>
        <Image
          src={home}
          width={50}
          height={50}
          unoptimized
          alt={''} 
          className='text-white'/>
      </div>
      {/* navigate */}
      <div className='w-[50%] p-10 font-bold text-2xl flex flex-row-reverse gap-10 justify-center items-center text-black '>
        <HeaderNav />
      </div>
      {/* signin */}
      <div className='w-[25%] flex flex-row-reverse gap-5 justify-center items-center '>
        <button className=' text-white bg-blue-900 flex flex-row gap-3 px-5 py-4 rounded-full text-2xl'>
          <Link href={'Register'}> ورود / ثبت نام  </Link>
          <Image
          src={user}
          alt='user'
          unoptimized />
        </button>
      </div>

    </div>
  )
}

export default Header