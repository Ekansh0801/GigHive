import React from 'react'
import Featured from '../components/Featured'
import TrustedBy from '../components/TrustedBy'
import Slide from '../components/Slide'
import {cards} from '../data'
import {projects} from "../data"
import CatCard from '../components/CatCard'
import ProjectCard from '../components/ProjectCard'

const Home = () => {
  return (
    <div>
        <Featured/>
        <TrustedBy/>
        <Slide slidesToShow={5} arrowsScroll={5}>
          {
            cards.map((card) => (
              <CatCard key={card.id} item = {card}/>
            ))
          }
        </Slide>
        <div className='flex bg-[#f1fdf7] justify-center  py-[100px]'>
          <div className='w-[1400px] flex items-center gap-[200px]'>
            <div className='grow-0'>
             <h1 className='font-medium text-[32px] mb-[10px]'>The best part? Everything.</h1>
             <div className='flex items-center gap-[10px] font-medium text-lg text-[#808080]'>
              <img src='./img/check.png' className='w-6 h-6'/>
              Get quality work done quickly
             </div>
             <p className='text-lg font-light text-[#808080] leading-7 tracking-wide'>
             Hand your project over to a talented freelancer in minutes, get long-lasting results.
             </p>

             <div className='flex items-center gap-[10px] font-medium text-lg text-[#808080]'>
              <img src='./img/check.png' className='w-6 h-6'/>
              Pay when you're happy
             </div>
             <p className='text-lg font-light text-[#808080] leading-7 tracking-wide'>
             Upfront quotes mean no surprises. Payments only get released when you approve.
             </p>   

              <div className='flex items-center gap-[10px] font-medium text-lg text-[#808080]'>
              <img src='./img/check.png' className='w-6 h-6'/>
              Stick to your budget
             </div>
             <p className='text-lg font-light text-[#808080] leading-7 tracking-wide'>
             Find the right service for every price point. No hourly rates, just project-based pricing.
             </p>

              <div className='flex items-center gap-[10px] font-medium text-lg text-[#808080]'>
              <img src='./img/check.png' />
              Count on 24/7 support
             </div>
             <p className='text-lg font-light text-[#808080] leading-7 tracking-wide'>
             Our round-the-clock support team is available to help anytime, anywhere.
             </p>                                  
            </div>
            <div className='grow'>
              <video src='./img/video.mp4' controls className='w-[720px]'/>
            </div>
          </div>
        </div>

        <div className='icon-section flex justify-center  py-[100px]'>
          <div className='container w-[1400px] flex flex-col'>
            <h1 className='font-bold text-[32px] text-[#404145] mb-[40px] pb-[24px]'>You need it, we've got it</h1>
            <div className='icons w-[1200px] gap-32 mx-auto flex flex-wrap justify-between'>
              <div className='icon flex flex-col items-center gap-1 cursor-pointer group'>
                <img className='h-12 w-12' src='/img/graphics-design.png'/>
                <div className="rounded-sm bottom-0 w-[50%] h-[1px] bg-[#d3d3d3] transition-all duration-200 group-hover:w-[70%] group-hover:bg-[#1dbf73]"></div>
                <div className='text-[16px] font-normal text-[#222325]'>Graphics & Design</div>
              </div>
              <div className='icon flex flex-col items-center gap-1 group cursor-pointer'>
                <img className='h-12 w-12' src='/img/online-marketing.png'/>
                <div className="rounded-sm bottom-0 w-[50%] h-[1px] bg-[#d3d3d3] transition-all duration-200 group-hover:w-[70%] group-hover:bg-[#1dbf73]"></div>
                <div className='text-[16px] font-normal text-[#222325]'>Digital Marketing</div>
              </div>
              <div className='icon flex flex-col items-center gap-1 group cursor-pointer'>
                <img className='h-12 w-12' src='/img/writing-translation.png'/>
                <div className="rounded-sm bottom-0 w-[50%] h-[1px] bg-[#d3d3d3] transition-all duration-200 group-hover:w-[70%] group-hover:bg-[#1dbf73]"></div>
                <div className='text-[16px] font-normal text-[#222325]'>Writing & Translation</div>
              </div>
              <div className='icon flex flex-col items-center gap-1 group cursor-pointer'>
                <img className='h-12 w-12' src='/img/video-animation.png'/>
                <div className="rounded-sm bottom-0 w-[50%] h-[1px] bg-[#d3d3d3] transition-all duration-200 group-hover:w-[70%] group-hover:bg-[#1dbf73]"></div>
                <div className='text-[16px] font-normal text-[#222325]'>Video & Animation</div>
              </div>
              <div className='icon flex flex-col items-center gap-1 group cursor-pointer'>
                <img className='h-12 w-12' src='/img/music-audio.png'/>
                <div className="rounded-sm bottom-0 w-[50%] h-[1px] bg-[#d3d3d3] transition-all duration-200 group-hover:w-[70%] group-hover:bg-[#1dbf73]"></div>
                <div className='text-[16px] font-normal text-[#222325]'>Music & Audio</div>
              </div>
              <div className='icon flex flex-col items-center gap-1 group cursor-pointer'>
                <img className='h-12 w-12' src='/img/programming.png'/>
                <div className="rounded-sm bottom-0 w-[50%] h-[1px] bg-[#d3d3d3] transition-all duration-200 group-hover:w-[70%] group-hover:bg-[#1dbf73]"></div>
                <div className='text-[16px] font-normal text-[#222325]'>Programming & Tech</div>
              </div>
              <div className='icon flex flex-col items-center gap-1 group cursor-pointer'>
                <img className='h-12 w-12' src='/img/business.png'/>
                <div className="rounded-sm bottom-0 w-[50%] h-[1px] bg-[#d3d3d3] transition-all duration-200 group-hover:w-[70%] group-hover:bg-[#1dbf73]"></div>
                <div className='text-[16px] font-normal text-[#222325]'>Business</div>
              </div>
              <div className='icon flex flex-col items-center gap-1 group cursor-pointer'>
                <img className='h-12 w-12' src='/img/lifestyle.png'/>
                <div className="rounded-sm bottom-0 w-[50%] h-[1px] bg-[#d3d3d3] transition-all duration-200 group-hover:w-[70%] group-hover:bg-[#1dbf73]"></div>
                <div className='text-[16px] font-normal text-[#222325]'>Lifestyle</div>
              </div>
              <div className='icon flex flex-col items-center gap-1 group cursor-pointer'>
                <img className='h-12 w-12' src='/img/data.png'/>
                <div className="rounded-sm bottom-0 w-[50%] h-[1px] bg-[#d3d3d3] transition-all duration-200 group-hover:w-[70%] group-hover:bg-[#1dbf73]"></div>
                <div className='text-[16px] font-normal text-[#222325]'>Data</div>
              </div>
              <div className='icon flex flex-col items-center gap-1 group cursor-pointer'>
                <img className='h-12 w-12' src='/img/photography.png'/>
                <div className="rounded-sm bottom-0 w-[50%] h-[1px] bg-[#d3d3d3] transition-all duration-200 group-hover:w-[70%] group-hover:bg-[#1dbf73]"></div>
                <div className='text-[16px] font-normal text-[#222325]'>Photography</div>
              </div>

            </div>
          </div>
        </div>

        <div className='flex justify-center bg-[#0d084d] text-white  py-[100px]'>
          <div className='w-[1400px] flex items-center gap-[100px]'>
            <div className='grow-0'>
             <h1 className='font-medium text-3xl mb-6'><span className='font-bold'>GigHive</span> pro.</h1>
             <h1 className='text-[50px] leading-[59px] tracking-tighter mb-5'>We're here for your <br/> <span className='font-bold'>e-Commerce</span> everything</h1>
             <h1 className='font-bold'>Get a project manager</h1>
             <p className='mb-3'>to guide you through each stage of launching your e-Commerce business</p>
             <h1 className='font-bold'>Accelerate time-to-market</h1>
             <p className='mb-3'>with a dedicated team of top-tier freelance experts</p>
             <h1 className='font-bold'>Optimize your budget</h1>
             <p className='mb-10'>with a dedicated project manager who will handle all your tasks, leaving you more money for marketing and growth</p>
             <a className='bg-[#fc832b] border-1 border-solid border-transparent rounded box-border font-semibold py-3 px-6 cursor-pointer'>Get started</a>
            </div>
            <div className='grow'>
              <img src='./img/pro.png' className='w-[720px]'/>
            </div>
          </div>
        </div>  
        <Slide slidesToShow={4} arrowsScroll={4}>
        {
          projects.map((project) => (
            <ProjectCard key={project.id} item = {project}/>
          ))
        }
      </Slide>              
    </div>
  )
}

export default Home