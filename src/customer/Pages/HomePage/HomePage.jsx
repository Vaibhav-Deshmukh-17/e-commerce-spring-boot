import React from 'react'
import MainCarousel from '../../component/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../component/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/mens_kurta'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>

        <div className='py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirts"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Sarees"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
           
        </div>
    </div>
  )
}

export default HomePage