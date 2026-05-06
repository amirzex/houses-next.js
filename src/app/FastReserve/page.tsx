// app/fast-reserve/page.tsx
import FastReserve from '@/component/FastReserve/FastReserve'


interface SearchParams {
    searchParams: { [key: string]: string | string[] | undefined }
}

const FastReservePage = async ({ searchParams }: { searchParams: Promise<SearchParams> }) => {

    const params = await searchParams
    return (
        <FastReserve searchParams={params} />
    )
}

export default FastReservePage