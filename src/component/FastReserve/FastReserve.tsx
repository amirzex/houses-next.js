

import { getData } from '@/core/api/Landing'
import Card from '@/component/common/Card'
import { FastReserveProps } from '@/core/types/IReserve'
import Form from '@/component/Form/Form'
import LocationMap from '../common/Map'
import PaginationFor from '../common/Pagination'


const FastReserve = async ({ searchParams }: FastReserveProps) => {

    const filterParamsForApi = {
        ...searchParams,
        page: searchParams.page ? Number(searchParams.page) : 1,
        limit: searchParams.limit ? Number(searchParams.limit) : 9,
        minPrice: searchParams.minPrice ? Number(searchParams.minPrice) : undefined,
        maxPrice: searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined,
        sort: searchParams.sort || "last_updated",
        location: searchParams.location || '',
        search: searchParams.search || searchParams.q || '',
        name: searchParams.name || searchParams.search || '',
    }

    const searchQuery = searchParams.search || searchParams.q || searchParams.name;

    const filterParamsForForm = {
        ...searchParams,
        page: searchParams.page?.toString() || "1",
        limit: searchParams.limit?.toString() || "9",
        minPrice: searchParams.minPrice?.toString(),
        maxPrice: searchParams.maxPrice?.toString(),
        sort: searchParams.sort || "last_updated",
        location: searchParams.location || '',
        search: searchQuery,
    }

    const response = await getData(filterParamsForApi)


    return (
        <div className='flex flex-col justify-center items-center'>
            {/* filter */}

            <div className='flex flex-row-reverse justify-center items-center gap-5 w-full '>
                {/* right side */}
                <div className='flex flex-col gap-7 w-[60%] pr-25 '>

                    <div className='w-full flex flex-row-reverse justify-center items-center' >
                        <p className='text-xl w-[10%] text-right pr-3'>فیلتر ها </p>
                        <div className='w-[90%]'></div>
                        <span className='flex flex-row-reverse gap-1 text-blue-400'>{response?.length} <p>نتیجه</p></span>
                    </div>

                    {/* filter's input */}
                    <Form searchParams={filterParamsForForm} />

                </div>
                {/* left side */}
                <div className='flex flex-col w-[40%] h-94 pl-25 '>
                    <LocationMap />
                </div>
            </div>

            {/* card map */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-25">
                {Array.isArray(response) && response?.length > 0 ? (
                    response?.map((item) => (
                        <Card key={item.id} value={item} />
                    ))
                ) : (
                    <p className="text-center text-gray-500">هیچ خانه‌ای یافت نشد</p>
                )}
            </div>
            <PaginationFor />

        </div>
    )
}

export default FastReserve