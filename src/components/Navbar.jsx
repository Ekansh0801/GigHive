import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [active,setActive] = useState(false);
    const [open,setOpen] = useState(false);
    const {pathname} = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll",isActive)

        return () => {
            window.removeEventListener("scroll",isActive);
        }
    },[])

    const currentUser = {
      id:1,
      username:"John Doe",
      isSeller:true,
    }
    
  return (
    <div className={active || pathname !== "/" ? 'flex flex-col items-center bg-white text-black ease-in duration-300 sticky top-0 z-50' : 'flex flex-col items-center bg-[#013914] text-white ease-in duration-300 top-0 sticky '}>
        {/* container */}
        <div className='container w-[1400px] flex justify-between py-5'>
          {/* logo */}
          <Link className='text-[34px] font-bold '>
            <span>GigHive</span>
            <span className='text-[#1dbf73]'>.</span>
          </Link>
          {/* nav-items */}
          <div className='flex gap-6 items-center font-medium font-[Montserrat]'>
            <span className='cursor-pointer'>GigHive Bussiness</span>
            <span className='cursor-pointer'>Explore</span>
            <span className='cursor-pointer'>English Bussiness</span>
            {!currentUser && <span className='cursor-pointer'>Sign In</span>}
            {!currentUser ?.isSeller && <span className='cursor-pointer'>Become a Seller</span>}
            {!currentUser && <button className='text-white py-[10px] px-[20px] rounded-[5px] border-[1px] border-solid border-white cursor-pointer hover:bg-[#1dbf73] hover:border-[#1dbf73]'>Join</button>}
            {currentUser && (
              <div className='flex gap-[10px] items-center relative' onClick={() => (setOpen(!open))}>
              <img className='w-8 h-8 rounded-lg object-cover cursor-pointer' src="https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png"/>
              <span className='cursor-pointer'>{currentUser.username}</span>
              {open && <div className='absolute top-[50px]  right-0 p-5 rounded-[10px] bg-white border-[1px] border-solid border-[#d3d3d3] flex flex-col gap-[10px] text-[#808080] w-[200px] font-[300px]'>
              {
                currentUser?.isSeller && (
                <>
                <Link to="/mygigs">Gigs</Link>
                <Link to="/add">Add new Gig</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/messages">Messages</Link>
                <Link to="/">Logout</Link>
                </>
                )
              }
              </div>}
              </div>
            )}
          </div>
        </div>
        {
            (active || pathname !== '/') && (<>
                <hr className="w-[100%] h-0 border-[0.5px] border-solid border-[#d3d3d3]"/>
                <div className='w-[1400px] py-[10px] flex justify-between font-light text-[#808080] font-[Montserrat]'>
                <Link to="/">Graphics & Design</Link>
                <Link to="/">Video & Animation</Link>
                <Link to="/">AI Services</Link>
                <Link to="/">Music & Audio</Link>
                <Link to="/">Programming & Tech</Link>
                <Link to="/">Bussiness</Link>
                <Link to="/">Lifestyle</Link>
                </div>  
                <hr className="w-[100%] h-0 border-[0.5px] border-solid border-[#d3d3d3]"/> 
          </>     
            )
        }
    </div>
  )
}

export default Navbar