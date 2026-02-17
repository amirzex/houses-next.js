import Image from 'next/image'
import footer from '../../assets/landing/footer.png'

const Footer = () => {
  return (
    <div className='w-full mt-60'>
      <Image
      src={footer}
      alt='footer'
      className='w-full' />
    </div>
  )
}

export default Footer