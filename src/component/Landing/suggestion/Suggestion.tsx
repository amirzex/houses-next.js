import { getSuggestion } from '@/core/api/Landing'
import Link from 'next/link'
import Card from '@/component/common/Card'
import MySwiper from '@/component/common/Swiper'

const Suggestion = async () => {

  const response = await getSuggestion()
  const slides = Array.isArray(response) ? response.map(item => ({
    id: item.id,
    content: <Card value={item} />
  })) : []
  return (
    <div className="w-full flex flex-col gap-10 p-20">
      {/* Header */}
      <div className="w-full flex flex-row-reverse">
        <div className="w-[50%] flex flex-row-reverse text-2xl gap-1">
          <p className="text-red-500">پیشنهادهای خاص</p>
          <p>اجاره ویلا</p>
        </div>

        <div className="w-[50%] flex flex-row">
          <Link
            href="/"
            className="border-2 border-blue-900 text-blue-900 w-[15%] text-center p-3 rounded-4xl"
          >
            مشاهده همه
          </Link>
        </div>
      </div>

      {/* Array map */}
      <div className="">
        {slides.length > 0 ? (
          <MySwiper slides={slides} />
        ) : (
          <p className="text-center text-gray-500">هیچ خانه‌ای یافت نشد</p>
        )}
      </div>
    </div>
  )
}

export default Suggestion