import Image from 'next/image'
import userprofile from '../../assets/reserve/Ellipse 15.svg'
import { useHouseComments } from '@/core/api/comments/CommentQuery/CommentQuery'

const ReserveComments = ({ id }) => {
    const { data } = useHouseComments(id)

    return (
        <div className="w-full border rounded-2xl bg-[#FFFFFA] dark:bg-[#272727] mt-10 " dir="rtl">
            <section className="w-full  p-6">

                {/* comments*/}
                {data?.comments?.map((comment) => (
                    <div key={comment.id} className="mb-10">
                        <div className="flex items-center gap-3 mb-3 border-b pb-3">
                            <Image
                                src={comment.user?.profilePicture || userprofile}
                                alt="profile"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex flex-col">
                                <span className="font-bold text-lg  text-gray-900 dark:text-[#D9D9E0]">
                                    {comment.user?.firstName} {comment.user?.lastName}
                                </span>
                                <span className="text-gray-400 text-sm">
                                    {new Date(comment.created_at).toLocaleDateString('fa-IR')}
                                </span>
                            </div>
                        </div>

                        <p className="text-gray-500 dark:text-[#D9D9E0] leading-8 text-sm md:text-base">
                            {comment.caption}
                        </p>
                    </div>
                ))}

                {/* create comments*/}
                <div className="mb-8">
                    <p className="font-bold text-gray-900 mb-4 text-base dark:text-[#D9D9E0]">نظر خود را وارد کنید</p>
                    <div className="flex items-center justify-between w-full px-5 py-3 bg-[#f5f5f5] dark:bg-[#353535] rounded-full cursor-pointer transition-colors hover:bg-gray-200">
                        <p className="text-sm text-gray-400">تایپ کنید</p>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* reply*/}
                <div className="bg-[#f5f5f5] dark:bg-[#353535] rounded-2xl p-5 border-r-[4px] border-[#1d3557]">
                    <div className="flex items-center gap-3 mb-4">
                        <Image
                            src={userprofile}
                            alt="profile"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                            <span className="font-bold text-lg text-gray-900 dark:text-[#D9D9E0]">امیر محمد</span>
                            <span className="text-gray-400 text-sm">@amirKh</span>
                        </div>
                    </div>

                    <hr className="border-gray-200 mb-4" />

                    <p className="text-gray-500 dark:text-[#D9D9E0] leading-8 text-sm md:text-base">
                        سلام عزیز.
                        <br />
                        حدودا ۹ روز دیگه (۱ اردیبهشت) برای این دوره تخفیف خواهیم داشت.
                        <br />
                        برای مطلع شدن از تخفیف‌ها و جشنواره‌ها لطفا خود سایت و سوشال های سبزلرن رو دنبال کنین ✌️❤️
                    </p>
                </div>

            </section>
        </div>
    )
}

export default ReserveComments
