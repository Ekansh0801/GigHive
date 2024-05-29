import React from 'react'
import { Link } from 'react-router-dom'

const CatCard = ({item}) => {
  // console.log(item);
  return (
    <div>
    <Link to='/gigs?cat=design'>
    <div className='w-[252px] h-[344px] text-white rounded-[5px] cursor-pointer relative'>
        <img src={item.img} alt='image' className='w-full h-full object-cover'/>
        <span className='absolute font-light top-[15px] left-[15px]'>{item.desc}</span>
        <span className='absolute font-medium text-2xl left-[15px] top-[40px] '>{item.title}</span>
    </div>        
    </Link>        
    </div>

  )
}

export default CatCard