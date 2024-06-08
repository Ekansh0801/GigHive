import { Slider } from 'infinite-react-carousel'
import React from 'react'

const Gig = () => {
  return (
    <div className="gig flex justify-center">
      <div className='container w-[1400px] py-[30px] flex gap-[50px] '>
        <div className='left flex-2 flex flex-col gap-5'>
          <span className='breadCrumbs font-light text-[13px] text-[#555]'>GIGHIVE > GRAPHICS & DESIGN></span>
          <h1>I will create AI generated art for you</h1>
          <div className='user flex items-center gap-[10px] '>
            <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-8 h-8 rounded-full object-cover' alt=""/>
            <span className='text-sm font-medium '>John Doe</span>
            <div className='stars flex items-center gap-[5px]'>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <span className='text-sm font-bold text-[#ffc108]'>5</span>
            </div>
          </div>
          <Slider slideToShow={1} arrowsScroll={1} className="w-[800px]">
          <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className='max-h-[500px] object-contain'
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className='max-h-[500px] object-contain'
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className='max-h-[500px] object-contain'
              alt=""
            />
          </Slider>
          <h2 className='font-normal '>About This Gig</h2>
          <p className='font-light text-[#555] leading-[25px] w-[800px]'>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className='seller mt-[50px] flex flex-col gap-5'>
            <h2>About the Seller</h2>
            <div className='user flex items-center gap-5'>
              <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-[100px] h-[100px] rounded-full object-cover' alt=""/>
              <div className='info flex flex-col gap-[10px] '>
                <span>John Doe</span>
            <div className='stars flex items-center gap-[5px]'>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <span className='text-[14px] text-[#fcc108] font-bold'>5</span>
            </div>
            <button className='text-black rounded-[5px] border-[1px] border-[#d3d3d3] p-[10px] cursor-pointer'>Contact Me</button>
              </div>
            </div>
            <div className='box border-[1px] w-[800px] border-solid border-[#d3d3d3] rounded-[5px] p-5 mt-5'>
              <div className='items flex flex-wrap justify-between'>
              <div className="item w-[300px] flex flex-col gap-[10px] mb-5">
                  <span className="title font-light">From</span>
                  <span className="desc">India</span>
                </div>
                <div className="item w-[300px] flex flex-col gap-[10px] mb-5">
                  <span className="title font-light">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item w-[300px] flex flex-col gap-[10px] mb-5">
                  <span className="title font-light">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item w-[300px] flex flex-col gap-[10px] mb-5">
                  <span className="title font-light">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item w-[300px] flex flex-col gap-[10px] mb-5">
                  <span className="title font-light">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr className='h-0 border-[1px] border-solid border-[#d3d3d3] mb-5 '/>
              <p>My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
        <div className='reviews mt-[50px]'>
          <h2>Reviews</h2>
          <div className='item flex flex-col gap-5 my-5 w-[800px]'>
            <div className='user flex items-center gap-4'>
              <img src = "https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-[50px] w-[50px] rounded-full object-cover' alt=''/>
              <div className='info'>
                <span>John Doe</span>
                <div className='country flex item-center gap-[10px] text-[#808080]'>
                <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f3.png" className='w-5' alt=""/>
                <span>India</span>
                </div>
              </div>
            </div>
          <div className='stars flex gap-[5px] items-center'>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <span className='text-[14px] font-bold text-[#fcc108]'>5</span>
            </div>
            <p>
            I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
            </p>
           <div className='helpful flex items-center gap-[10px] '>
           <span>Helpful?</span>
           <img className='w-[14px] cursor-pointer' src='/img/like.png'/>
           <span>Yes</span>
           <img className='w-[14px] cursor-pointer' src='/img/dislike.png'/>
           <span>No</span>
           </div>   
          </div>
          <hr className=' h-0 border-[0.5px] border-solid border-[#d3d3d3] my-[50px]'/>
          <div className='item flex flex-col gap-5 my-5 w-[800px]'>
            <div className='user flex items-center gap-4'>
              <img src = "https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-[50px] w-[50px] rounded-full object-cover' alt=''/>
              <div className='info'>
                <span>John Doe</span>
                <div className='country flex item-center gap-[10px] text-[#808080]'>
                <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f3.png" className='w-5' alt=""/>
                <span>India</span>
                </div>
              </div>
            </div>
          <div className='stars flex gap-[5px] items-center'>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <span className='text-[14px] font-bold text-[#fcc108]'>5</span>
            </div>
            <p>
            I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
            </p>
           <div className='helpful flex items-center gap-[10px] '>
           <span>Helpful?</span>
           <img className='w-[14px] cursor-pointer' src='/img/like.png'/>
           <span>Yes</span>
           <img className='w-[14px] cursor-pointer' src='/img/dislike.png'/>
           <span>No</span>
           </div>   
          </div>
          <hr className=' h-0 border-[0.5px] border-solid border-[#d3d3d3] my-[50px]'/>
          <div className='item flex flex-col gap-5 my-5 w-[800px]'>
            <div className='user flex items-center gap-4'>
              <img src = "https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-[50px] w-[50px] rounded-full object-cover' alt=''/>
              <div className='info'>
                <span>John Doe</span>
                <div className='country flex item-center gap-[10px] text-[#808080]'>
                <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f3.png" className='w-5' alt=""/>
                <span>India</span>
                </div>
              </div>
            </div>
          <div className='stars flex gap-[5px] items-center'>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <span className='text-[14px] font-bold text-[#fcc108]'>5</span>
            </div>
            <p>
            I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
            </p>
           <div className='helpful flex items-center gap-[10px] '>
           <span>Helpful?</span>
           <img className='w-[14px] cursor-pointer' src='/img/like.png'/>
           <span>Yes</span>
           <img className='w-[14px] cursor-pointer' src='/img/dislike.png'/>
           <span>No</span>
           </div>   
          </div>
          <hr className=' h-0 border-[0.5px] border-solid border-[#d3d3d3] my-[50px]'/>
          <div className='item flex flex-col gap-5 my-5 w-[800px]'>
            <div className='user flex items-center gap-4'>
              <img src = "https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" className='h-[50px] w-[50px] rounded-full object-cover' alt=''/>
              <div className='info'>
                <span>John Doe</span>
                <div className='country flex item-center gap-[10px] text-[#808080]'>
                <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f3.png" className='w-5' alt=""/>
                <span>India</span>
                </div>
              </div>
            </div>
          <div className='stars flex gap-[5px] items-center'>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <img className='w-[14px] h-[14px]' src='/img/star.png' alt=""/>
              <span className='text-[14px] font-bold text-[#fcc108]'>5</span>
            </div>
            <p>
            I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
            </p>
           <div className='helpful flex items-center gap-[10px] '>
           <span>Helpful?</span>
           <img className='w-[14px] cursor-pointer' src='/img/like.png'/>
           <span>Yes</span>
           <img className='w-[14px] cursor-pointer' src='/img/dislike.png'/>
           <span>No</span>
           </div>   
          </div>
        </div>
        </div>
        <div className='right flex-1 border-[1px] border-solid border-[#d3d3d3] p-5 rounded-[5px] flex flex-col gap-5 sticky top-[150px] h-max max-h-[500px]'>
        <div className='price flex items-center justify-between '>
          <h3 className='font-medium'>AI Generated Images</h3>
          <h2 className='font-light'>₹ 2000</h2>
        </div>
        <p className='text-[#808080] my-[10px] '>I will create a unique high quality AI generated image based on a
            description that you give me</p>
        <div className='details flex items-center justify-between text-[14px] '>
          <div className='item flex items-center gap-[10px] '>
            <img className='w-[20px]' src='/img/clock.png'/>
            <span>2 Days Delivery</span>
          </div>
          <div className='item flex items-center gap-[10px]'>
            <img className='w-[20px]' src='/img/recycle.png'/>
            <span>3 revisions</span>
          </div>
        </div>
        <div className='features flex flex-col gap-[10px] '>
          <div className='item flex items-center gap-[10px] font-light text-[#808080]'>
            <img className='w-[14px]' src='/img/greencheck.png'/>
            <span>Promp Writing</span>
          </div>
          <div className='item flex items-center gap-[10px] font-light text-[#808080]'>
            <img className='w-[14px]' src='/img/greencheck.png'/>
            <span>Promp Writing</span>
          </div>
          <div className='item flex items-center gap-[10px] font-light text-[#808080]'>
            <img className='w-[14px]' src='/img/greencheck.png'/>
            <span>Promp Writing</span>
          </div>
          <div className='item flex items-center gap-[10px] font-light text-[#808080]'>
            <img className='w-[14px]' src='/img/greencheck.png'/>
            <span>Promp Writing</span>
          </div>
        </div>
        <button className='bg-[#1dbf73] p-[10px] text-white border-none font-medium text-[18px] cursor-pointer'>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig