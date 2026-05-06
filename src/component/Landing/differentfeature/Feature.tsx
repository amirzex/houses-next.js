import Image from 'next/image'
import feature from '../../../assets/landing/commentsbg.svg'
import CommentCard from '@/component/common/CommentCard';


const mockComments = [
    {
        id: 'امیر محمد',
        caption: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای',
        created_at: '1401/05/12',
        rating: 5
    },
    {
        id: 'علی احمدی',
        caption: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای',
        created_at: '1401/05/12',
        rating: 4
    },
    {
        id: 'سارا حسینی',
        caption: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای',
        created_at: '1401/05/12',
        rating: 5
    },
    {
        id: 'رضا کریمی',
        caption: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
        created_at: '1401/05/12',
        rating: 4.5
    }
];

const Feature = () => {
    return (
        <section dir="rtl" className='relative w-full min-h-screen py-20  mt-30  flex items-center overflow-hidden max-sm:hidden md:block' >

            <div className='absolute inset-0 -z-10'>
                <Image
                    src={feature}
                    alt='background'
                    fill
                    className='object-cover object-center'
                />
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-12 '>
                <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>

                    <div className='lg:w-1/2 w-full text-white flex flex-col gap-6 text-right'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-md'>
                            رضایت شما اعتبار ماست
                        </h2>
                        <p className='text-sm sm:text-base leading-8 sm:leading-[2.5rem] text-gray-100 font-medium drop-shadow'>
                            پیدا کردن ویلای مناسب همیشه کار راحتی نیست. ما اینجاییم تا همه چیز رو برای شما ساده کنیم. از بین صدها فایل، فقط بهترین و معتبرترین گزینه‌ها رو گلچین می‌کنیم تا وقت ارزشمندتون صرف جستجوی بی‌پایان نشه. چه به دنبال اجاره کوتاه‌مدت برای تعطیلات باشین و چه به فکر خرید یا اجاره بلندمدت، ما با توجه به بودجه و نیاز شما، بهترین انتخاب‌ها رو معرفی می‌کنیم. پشتیبانی ۲۴ ساعته و همراهی قدم‌به‌قدم ما باعث میشه هیچوقت تنها نباشید و با خیال راحت ویلای رویایی خودتون رو پیدا کنید.
                        </p>
                    </div>

                    <div className='lg:w-1/2 w-full relative flex justify-center lg:justify-end'>

                        <div className='w-full max-w-[420px] h-[700px] overflow-y-auto overflow-x-hidden py-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>
                            <div className='flex flex-col gap-8'>
                                {mockComments.map((comment, index) => (
                                    <CommentCard key={index} value={comment as any} />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Feature
