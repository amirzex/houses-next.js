import Image from 'next/image'
import whyChoose from '../../../assets/landing/whyChoose.png'

const Choose = () => {
    return (
        <div className='flex w-full mt-30'>
            <Image
                src={whyChoose}
                alt="next"
                className="object-contain w-full"
            />
        </div>
    )
}

export default Choose