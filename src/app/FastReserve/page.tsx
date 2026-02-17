// app/fast-reserve/page.tsx
import FastReserve from '@/component/FastReserve/FastReserve'

const FastReservePage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
    const params = await searchParams
    return (
        <FastReserve searchParams={params} />
    )
}

export default FastReservePage