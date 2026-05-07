// // src/component/FastReserve/FastReserveDetail.tsx
// "use client";

// import { useEffect } from 'react';
// import { useReserve } from '@/core/context/ReserveContext';
// import Image from 'next/image';
// import React, { FC } from 'react';
// import villa from '../../assets/landing/villa.png';
// import loc from '../../assets/reserve/icons8-location-50.png';
// import Link from 'next/link';
// import PropertyTabs from './PropertyTabs';
// import ReserveForm from './ReserveForm';

// interface IProps {
//     id: string;
// }

// const FastReserveDetail: FC<IProps> = ({ id }) => {
//     const { selectedProperty, loading, error, fetchPropertyById } = useReserve();

//     useEffect(() => {
//         fetchPropertyById(id);
//     }, [id, fetchPropertyById]);

//     if (loading) {
//         return <div className="text-center p-10">در حال بارگذاری...</div>;
//     }

//     if (error) {
//         return <div className="text-center p-10 text-red-500">{error}</div>;
//     }

//     if (!selectedProperty) {
//         return <div className="text-center p-10">ملک مورد نظر یافت نشد</div>;
//     }

//     return (
//         <div className='w-full flex flex-col gap-5 justify-center items-center pr-25 pl-25 '>
//             {/* top side */}
//             <div className='w-full flex flex-row-reverse gap-10 justify-center items-center'>
//                 <div className='w-full flex flex-row-reverse gap-10'>
//                     <div className="w-[70%] h-140 overflow-hidden rounded-4xl">
//                         <Image
//                             src={selectedProperty.photos?.[0] || villa}
//                             width={100}
//                             height={100}
//                             alt="landing background"
//                             className="object-cover h-200 w-full "
//                             unoptimized
//                         />
//                     </div>
//                     {/* top left side */}
//                     <div className="w-[30%] flex flex-col h-140 gap-10">
//                         <div className="h-70 overflow-hidden rounded-4xl">
//                             <Image
//                                 src={selectedProperty.images?.[1] || villa}
//                                 alt='img'
//                                 className='rounded-4xl'
//                             // width={400}
//                             // height={300}
//                             />
//                         </div>
//                         <div className="h-70 overflow-hidden rounded-4xl relative border-2">
//                             <Image
//                                 src={selectedProperty.images?.[2] || villa}
//                                 alt='img'
//                                 className='rounded-4xl brightness-50'
//                             // width={400}
//                             // height={300}
//                             />
//                             <Link href={''}
//                                 className='left-37 top-25 absolute p-3 w-50 flex flex-row justify-center items-center gap-2 text-white cursor-pointer border-2 border-white rounded-4xl'>
//                                 <p>مشاهده بیشتر</p>
//                                 <span>+ {selectedProperty.images?.length - 3 || 5}</span>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* middle part */}
//             <div className=' w-full flex flex-row-reverse justify-center items-start gap-10'>
//                 {/* right side */}
//                 <div className="w-[70%] flex flex-col justify-center items-end gap-3 ">
//                     <h2 className='text-3xl text-right w-full'>{selectedProperty.title}</h2>
//                     <div className='flex flex-row w-full text-right justify-end items-center text-sm'>
//                         <p>{selectedProperty.address}</p>
//                         <Image
//                             src={loc}
//                             width={20}
//                             alt='location' />
//                     </div>
//                     {/* info layout  */}
//                     <div className='w-full flex flex-col gap-5 '>
//                         <PropertyTabs property={selectedProperty} />
//                     </div>
//                 </div>
//                 {/* left side */}
//                 <div className="border-2 w-[30%] flex flex-col gap-5 justify-center items-center rounded-4xl p-5">
//                     <ReserveForm property={selectedProperty} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FastReserveDetail;

import React, { FC } from 'react'
import Breadcrumb from '../common/Breadcrumb'
import { slides } from '../Landing/suggestion/Suggestion';
import Image from 'next/image';
import start from '../../assets/landing/start.svg'
import loca from '../../assets/landing/location.svg'
import shair from '../../assets/reserve/Only-IconButton.svg'
import copy from '../../assets/reserve/Copy01Icon.svg'
import houses from '../../assets/reserve/Frame 14333.png'
import house1 from '../../assets/reserve/image 2.svg'
import house2 from '../../assets/reserve/image 3.svg'
import ReserveComments from './ReserveComments';
import ReservationForm from './ReserveForm';
import Facilities from './Facilities';
interface IProps {
  id: string;
}

const FastReserveDetail: FC<IProps> = ({ id }) => {

  const data = slides.find(slide => slide.id === Number(id))

  return (
    <div className='w-full flex flex-col justify-center items-center gap-10 p-10' dir='rtl'>

      <Breadcrumb />

      {/* top side picture div */}
      <div className='w-full flex flex-col justify-center items-center gap-5 '>

        {/* title div */}
        <div className='w-full flex flex-row justify-center items-center px-5'>
          <h1 className='w-[50%] flex justify-start items-center text-3xl'>{data?.title}</h1>
          <div className='w-[50%] flex justify-end items-center '>
            <div className='bg-blue-900 px-5 py-2 w-[15%]  rounded-full text-white flex flex-row-reverse justify-center items-center gap-1'>
              <Image src={start} alt='' unoptimized />
              <p>ستاره</p>
              {data?.rate}
            </div>
          </div>
        </div>

        {/* location div */}
        <div className='w-full flex flex-row justify-center items-center px-5'>
          <h1 className='w-[50%] flex justify-start items-center text-gray-400 text-xl'>
            <Image src={loca} alt='' unoptimized />
            {data?.adress}
          </h1>
          <div className='w-[50%] flex justify-end items-center '>
            <div className=' w-[15%]  flex flex-row-reverse justify-start items-center gap-1'>
              <Image src={shair} alt='' unoptimized />
              <Image src={copy} alt='' unoptimized className='text-blue-900 border border-blue-900 p-5 rounded-full' />
            </div>
          </div>
        </div>

        {/* houses images */}
        <div className='w-full '>
          <Image src={houses} alt='' unoptimized className='w-full' />
        </div>

        {/* middle div */}
        <div className='w-full flex flex-row justify-center items-start gap-20 p-10 '>

          {/* commenst and description  */}
          <div className="w-[70%] bg-white flex flex-col justify-center items-center rounded-lg">
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-right">چرا {data?.title} رو انتخاب کنیم؟</h2>
              <p className="text-gray-600 leading-relaxed text-xl text-right">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد. تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <div className="w-full  flex flex-row  justify-center items-center gap-10 p-5">
                <div className='w-[70%] flex flex-row justify-center items-center  gap-10 '>
                  <Image src={house1} alt="Lighthouse" className="w-full rounded-lg  h-64" />
                  <Image src={house2} alt="Lighthouse" className="w-full rounded-lg  h-64" />
                </div>

              </div>
              <p className="text-gray-600 leading-relaxed text-xl text-right">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد. تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراح
              </p>
            </section>

            {/* comments */}

            <ReserveComments />

          </div>

          {/* reserve form and houses item */}

          <div className='w-[30%] flex flex-col justify-center gap-5 items-center'>
            <ReservationForm />

            <Facilities />
          </div>
        </div>

      </div>
    </div>
  )
}

export default FastReserveDetail