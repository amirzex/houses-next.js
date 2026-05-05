import TopSide from './topside/TopSide'
import Category from './category/Category'
import Suggestion from './suggestion/Suggestion'
import Choose from './whychoose/Choose'
import BestChoice from './bestchoice/BestChoice'
import BestLocation from './bestlocation/BestLocation'
import Feature from './differentfeature/Feature'
import Help from './help/Help'
import LandingComment from './customercomment/LandingComment'

const Landing = async () => {

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <TopSide />
      <Category />
      <Suggestion />
      <Choose />
      <Feature />
      <Suggestion />
      <Help />
    </div>
  )
}

export default Landing