import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({item}) => {
  // console.log(item);
  return (
    <div>
    <Link to='/'>
    <div className='w-[300px] h-[300px] rounded-[5px] cursor-pointer m-5 overflow-hidden'>
      <img src={item.img} className='w-[100%] h-[70%] object-cover' alt=""/>
      <div className='flex items-center gap-[20px] p-[15px]'>
        <img src={item.pp} className='w-10 h-10 rounded-full object-cover' alt=""/>
        <div className=''>
            <h2 className='text-sm font-medium'>{item.cat}</h2>
            <span className='text-sm'>{item.username}</span>
        </div>
      </div>
    </div>        
    </Link>        
    </div>

  )
}

export default ProjectCard