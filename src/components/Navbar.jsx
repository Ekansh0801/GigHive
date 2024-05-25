import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [active,setActive] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll",isActive)

        return () => {
            window.removeEventListener("scroll",isActive);
        }
    },[])
  return (
    <div className={active ? 'flex flex-col items-center bg-white text-black ease-in duration-300 sticky top-0' : 'flex flex-col items-center bg-[#013914] text-white ease-in duration-300 top-0 sticky'}>
        {/* container */}
        <div className='container w-[1400px] flex justify-between py-5'>
          {/* logo */}
          <div className='text-[34px] font-bold '>
            <span>GigHive</span>
            <span className='text-[#1dbf73]'>.</span>
          </div>
          {/* nav-items */}
          <div className='flex gap-6 items-center font-medium font-[Montserrat]'>
            <span className='cursor-pointer'>GigHive Bussiness</span>
            <span className='cursor-pointer'>Explore</span>
            <span className='cursor-pointer'>English Bussiness</span>
            <span className='cursor-pointer'>Sign In</span>
            <span className='cursor-pointer'>Become a Seller</span>
            <button className='text-white py-[10px] px-[20px] rounded-[5px] border-[1px] border-solid border-white cursor-pointer hover:bg-[#1dbf73] hover:border-[#1dbf73]'>Join</button>
          </div>
        </div>
        {
            active && (<>
                <hr className="w-[100%] h-0 border-[0.5px] border-solid border-[#d3d3d3]"/>
                <div className='w-[1400px] py-[10px] flex justify-between font-light text-[#808080] font-[Montserrat]'>
                <span>Test</span>
                <span>Test2</span>
                </div>   
          </>     
            )
        }
    </div>
  )
}

export default Navbar