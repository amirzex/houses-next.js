// import FastReserveDetail from '@/component/FastReserve/FastReserveDetail'
// import { FC, use } from 'react'

// interface IProps {
//     params: Promise<{ id: string }>
// }

// const ReserveDetail: FC<IProps> = ({ params }) => {

//     const { id } = use(params)

//     return (
//         <div>
//             <FastReserveDetail id={id} />
//         </div>
//     )
// }

// export default ReserveDetail

import FastReserveDetail from '@/component/FastReserve/FastReserveDetail'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-30'>
            <FastReserveDetail />
        </div>
    )
}

export default page