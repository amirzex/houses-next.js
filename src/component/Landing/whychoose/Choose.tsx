import Image from 'next/image'
import whyChoose from '../../../assets/landing/whyChoose.png'
import DestinationCard from '@/component/common/DistinationCard'
import Link from 'next/link'

const Choose = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-5 mt-20'>
                <p className='text-blue-900 text-2xl'>
                    ویلا ها را با ما انتخاب کنید
                </p>
                <h2 className='text-4xl'>
                    اجاره ویلا در محبوب ترین مقاصد ایران
                </h2>
            </div>
            <div className='flex flex-row justify-center items-center gap-10 px-25 w-full mt-30 '>

                <DestinationCard
                    title="اجاره ویلا در سوادکوه"
                    count={50}
                    countLabel="مورد"
                    imageSrc={whyChoose}
                />
                <DestinationCard
                    title="اجاره ویلا در سوادکوه"
                    count={50}
                    countLabel="مورد"
                    imageSrc={whyChoose}
                />
                <DestinationCard
                    title="اجاره ویلا در سوادکوه"
                    count={50}
                    countLabel="مورد"
                    imageSrc={whyChoose}
                />
                <DestinationCard
                    title="اجاره ویلا در سوادکوه"
                    count={50}
                    countLabel="مورد"
                    imageSrc={whyChoose}
                />
            </div>
            <div className='w-full flex justify-center items-center mt-15'>
                <Link href="/" className='border border-blue-900 p-5 rounded-full text-blue-900 text-2xl '> مشاهده بیشتر </Link>
            </div>
        </>

    )
}

export default Choose