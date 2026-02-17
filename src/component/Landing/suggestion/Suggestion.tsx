import { getSuggestion } from '@/core/api/Landing'
import Link from 'next/link'
import Card from '@/component/common/Card'

const Suggestion = async () => {

  const response = await getSuggestion()

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(response) && response?.length > 0 ? (
          response?.map((item) => (
            <Card key={item.id} value={item} />
          ))
        ) : (
          <p className="text-center text-gray-500">هیچ خانه‌ای یافت نشد</p>
        )}
      </div>
    </div>
  )
}

export default Suggestion