
// import FastReserve from '@/component/FastReserve/FastReserve'
// interface SearchParams {
//     searchParams: { [key: string]: string | string[] | undefined }
// }

// const FastReservePage = async ({ searchParams }: { searchParams: Promise<SearchParams> }) => {

//     const params = await searchParams
//     return (
//         <FastReserve searchParams={params} />
//     )
// }

// export default FastReservePage
import FastReserve from '@/component/FastReserve/FastReserve'
import React from 'react'

const page = () => {
  return (
    <div>
        <FastReserve />
    </div>
  )
}

export default page