import React from 'react'
import { Link } from 'react-router-dom'

const GigCard = ({item}) => {
  return (
    <Link to=""> 
    <div className='w-[324px] h-[450px] border border-solid border-[#d3d3d3] mb-[25px] '>
        <img className='h-[50%] w-[100%] object-cover' src={item.img} alt=""/>
        <div className='py-[10px] px-5 flex flex-col gap-[15px] '>
            <div className='flex items-center gap-[10px] '>
              <img className='w-[26px] h-[26px] rounded-lg' src={item.pp}/>
              <span>{item.username}</span>                
            </div>
            <p className='text-[#111] '>{item.desc}</p>
            <div className='flex items-center gap-[5px] '>
                <img className='w-[14px] h-[14px] ' src='./img/star.png'/>
                <span className='text-sm font-bold text-[#fcc108] '>{item.star}</span>
            </div>
        </div>
        <hr className='h-0 border-[0.5px] border-solid border-[#d3d3d3] '/>
        <div className='py-[10px] px-5 flex items-center justify-between '>
            <img className='w-4 h-4 cursor-pointer ' src='./img/heart.png'/>
            <div className='price'>
            <span className='text-[#999] text-xs'>STARTING AT</span>
            <h2 className='text-[#555] text-lg font-normal'>{item.price}</h2>
            </div>
        </div>
    </div>        
    </Link>
  )
}

export default GigCard