import React from 'react'

const TrustedBy = () => {
  return (
    <div className='bg-[#fafafa] h-[100px] flex justify-center'>
    <div className='w-[760 px] flex items-center justify-center gap-[20px] text-[#d3d3d3] font-medium'>
    <span>Trusted By:</span>
        <img className=' h-[50px] object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png" alt="" />
        <img className=' h-[50px] object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png" alt="" />
        <img className=' h-[50px] object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png" alt="" />
        <img className=' h-[50px] object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" alt="" />
        <img className=' h-[50px] object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png" alt="" />
    </div>
    </div>
  )
}

export default TrustedBy