import React, { useState } from 'react'
import { gigs } from '../data';
import GigCard from '../components/GigCard';

const Gigs = () => {
  const [open,setOpen] = useState(false);
  const [sort,setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  }

  return (
    <div className='flex justify-center'>
     <div className='w-[1400px] py-[30px] flex flex-col gap-[15px] '>
      <span className='breadcrumbs font-light text-[13px] text-[#555] '>GIGHIVE > GRAPHICS & DESIGN ></span>
      <h1>AI Artists</h1>
      <p className='text-[#999] font-light'>Explore the boundaries of art and technology with GigHive's AI artists</p>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-[10px] text-[#555]'>
          <span>Budget</span>
          <input className='p-[5px] border border-solid border-[#d3d3d3] outline-none placeholder:text-[#808080]' type='text' placeholder='min'/>
          <input className='p-[5px] border border-solid border-[#d3d3d3] outline-none placeholder:text-[#808080]' type='text' placeholder='max'/>
          <button className='bg-[#1dbf73] text-white font-medium border-none cursor-pointer py-[5px] px-[10px] rounded-[5px]'>Apply</button>
        </div>
        <div className='flex items-center gap-[10px] relative'>
          <span className='text-[#555] font-light'>Sort By</span>
          <span className='font-medium'>{sort === "sales" ? "Best Selling" : "Newest"}</span>
          <img src='./img/down.png' className='cursor-pointer w-[15px]' onClick={() => (setOpen(!open))}/>
          {open && <div className='p-5 bg-white rounded-[5px] border-[0.5px] border-solid border-[#d3d3d3] absolute top-[30px] right-0 flex flex-col gap-5 text-[#555]'>
            {sort === "sales" ? (<span className='cursor-pointer' onClick={() => reSort("CreatedAt")}>Newest</span>) : (<span className='cursor-pointer' onClick={() => reSort("sales")}>Best Selling</span>)}
          </div>}
        </div>
      </div>
      <div className='cards flex flex-wrap justify-between'>
      {
        gigs.map((gig) => (
          <GigCard key={gig.id} item={gig}/>
        ))
      }
      </div>
     </div>
    </div>
  )
}

export default Gigs