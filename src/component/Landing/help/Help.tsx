import Image from 'next/image'
import bg from '../../../assets/landing/howshouldi.svg'

const Help = () => {
    return (
        <div className='w-full mt-30 overflow-hidden rounded-r-[100px]'>

            <Image
                src={bg}
                alt=''
                unoptimized 
                className='w-full'/>
        </div>
    )
}

export default Help