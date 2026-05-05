import { getSuggestion } from '@/core/api/Landing'
import Link from 'next/link'
import Card from '@/component/common/Card'
import MySwiper from '@/component/common/Swiper'
import Image from 'next/image'
import clock from '../../../assets/landing/megaphone-01.svg'

const Suggestion = async () => {

  // const response = await getSuggestion()
  // const slides = Array.isArray(response) ? response.map(item => ({
  //   id: item.id,
  //   content: <Card value={item} />
  // })) : []
  // console.log(response,"response")
  const slides = [
    {
      id: 1,
      title: "ویلای مدرن با چشم‌انداز کوهستان",
      adress: "بلوار ساحلی، سانتا مونیکا، لس آنجلس",
      bed: 3,
      bath: 2,
      space: 180,
      park: 2,
      rate: 4.7,
      discount: 3200000,
      price: 4800000
    },
    {
      id: 2,
      title: "خانه کلاسیک حیاط‌دار",
      adress: "خیابان 12 شرقی، بروکلین، نیویورک",
      bed: 4,
      bath: 2,
      space: 210,
      park: 1,
      rate: 4.3,
      discount: 2500000,
      price: 3900000
    },
    {
      id: 3,
      title: "پنت‌هاوس لوکس با بالکن بزرگ",
      adress: "خیابان 5 مرکزی، منهتن، نیویورک",
      bed: 2,
      bath: 2,
      space: 150,
      park: 1,
      rate: 4.9,
      discount: 5200000,
      price: 6800000
    },
    {
      id: 4,
      title: "خانه ویلایی استخردار",
      adress: "خیابان سن‌دیگو 45، کالیفرنیا",
      bed: 5,
      bath: 3,
      space: 260,
      park: 3,
      rate: 4.6,
      discount: 4100000,
      price: 6200000
    },
    {
      id: 5,
      title: "آپارتمان شیک نزدیک مرکز شهر",
      adress: "خیابان هالیوود 222، لس آنجلس",
      bed: 1,
      bath: 1,
      space: 95,
      park: 1,
      rate: 4.2,
      discount: 1500000,
      price: 2500000
    }
  ]

  return (
    <div className="w-full flex flex-col gap-10 p-20">
      {/* Header */}
      <div className="w-full flex flex-col gap-7">
        <div className="w-full flex flex-row-reverse justify-center items-center text-2xl gap-5">
          <div className='flex flex-row px-7 py-3 rounded-full gap-3 bg-orange-500 justify-center items-center'>
            <Image
              src={clock}
              alt=''
              unoptimized
              className='w-full text-white' />
            <span className='text-white'>2:25:00</span>
          </div>
          <p className="text-orange-500"> فرصت رو از دست نده  </p>
        </div>
        <h2 className='w-full text-center text-5xl'> تخفیفات ویژه  برای شروع تابستان </h2>
      </div>

      {/* Array map */}
      <div className=" gap-10 flex flex-row w-full ">
        {/* {slides.length > 0 ? (
          <MySwiper slides={slides} />
        ) : (
          <p className="text-center text-gray-500">هیچ خانه‌ای یافت نشد</p>
        )} */}
        {slides.slice(0, 3).map((item, index) => (
          <Card value={item} key={index} />
        ))}
      </div>
      <div className='w-full flex justify-center items-center '>
        <Link href="/" className='border border-blue-900 p-5 rounded-full text-blue-900 text-2xl '> مشاهده بیشتر </Link>
      </div>
    </div>
  )
}

export default Suggestion