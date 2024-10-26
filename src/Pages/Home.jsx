import React from 'react'
import Header from '../Components/Header'
import Steps from '../Components/Steps'
import BgSlider from '../Components/BgSlider'
import Testemonial from '../Components/Testemonial'
import Upload from '../Components/Upload'

const Home = () => {
  return (
    <div>
        <Header />
        <Steps />
        <BgSlider />
        <Testemonial />
        <Upload />
    </div>
  )
}

export default Home