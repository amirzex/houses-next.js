import Image from 'next/image'
import feature from '../../../assets/landing/Usability testing-pana 1.png'
import text from '../../../assets/landing/featuretext.png'

const Feature = () => {
    return (
        <div className='flex flex-row-reverse justify-center items-center w-full mt-30 '>
            <div className='w-[50%] flex justify-center items-center '>
                <Image
                    src={feature}
                    alt='next'
                    className='border-2 w-[70%] h-160' />
            </div>
            <div className='w-[50%] flex justify-center'>
                <Image
                    src={text}
                    alt='next'
                    className='w-[70%]' />
            </div>

        </div>
    )
}

export default Feature