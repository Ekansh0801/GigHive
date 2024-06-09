import React from 'react'
import Slider from 'infinite-react-carousel';

const Slide = ({children,slidesToShow,arrowsScroll}) => {
  return (
    <div className='flex justify-center py-[100px]'>
      <div className='w-[1400px]'>
      <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
        {children}
      </Slider>        
      </div>
    </div>
  )
}

export default Slide