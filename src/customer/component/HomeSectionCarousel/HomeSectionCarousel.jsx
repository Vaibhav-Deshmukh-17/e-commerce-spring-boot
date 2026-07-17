import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const HomeSectionCarousel = () => {

    const responsive = {
    0: { item: 1 },
    720: { item: 3 },
    1024: { item: 4 },
};

const item = [1,1,1,1,1].map((item) => <HomeSectionCard/>)
  return (

    <div>
        <AliceCarousel
        items={item}
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        infinite
        responsive={responsive}
    />
    </div>

  )
}

export default HomeSectionCarousel