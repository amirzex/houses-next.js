import Image from 'next/image'
import home from '../../assets/landing/Vector.svg'
// import Link from 'next/link'
import HeaderNav from './Headernavbar/HeaderNav'
import Link from 'next/link'


const Header = () => {
  return (
    <div className=' w-full flex flex-row-reverse justify-center items-center'>
      {/* logo */}
      <div className='w-[25%] flex flex-row gap-5 justify-end items-center pr-25'>
        <p className='text-4xl font-bold text-blue-900'>لوگو</p>
        <Image
          src={home}
          width={50}
          height={50}
          unoptimized
          alt={''} />
      </div>
      {/* navigate */}
      <div className='w-[50%] p-10 font-bold text-2xl flex flex-row-reverse gap-10 justify-center items-center text-black '>
        <HeaderNav />
      </div>
      {/* signin */}
      <div className='w-[25%] flex flex-row-reverse gap-5 justify-center items-center '>
        <button className='bg-blue-900 text-white text-xl font-bold p-3 rounded-4xl w-[20%]'>
          <Link href={'Login'}> ورود </Link>
        </button>
        <button className='w-[30%] text-blue-900 border-2 p-2 rounded-4xl text-2xl'>
          <Link href={'Register'}>ثبت نام </Link>
        </button>
      </div>

    </div>
  )
}

export default Header