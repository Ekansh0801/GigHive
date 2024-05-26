import React from 'react'

const Featured = () => {
  return (
    <div className='flex justify-center h-[600px] bg-[#013914] text-white'>
        <div className='w-[1400px] flex items-center'>
            {/* left */}
            <div className='flex flex-col gap-[30px]'>
               <h1 className='text-[50px]'>
                Find the perfect <span className='font-light italic'>freelance</span> services for your business
               </h1>
               <div className='flex items-center justify-between bg-white rounded-[5px]'>
                <div className='flex items-center gap-[10px]'>
                    <img className='w-5 h-5 m-[10px]' src="./img/search.png"/>
                    <input className='border-none outline-none' type='text' placeholder='Try Building Websites'/>
                </div>    
                    <button className='w-[120px] h-[50px] bg-[#1dbf73]'>Search</button>   
               </div>
               <div className='flex items-center gap-[10px]'>
                 <span>Popular:</span>
                 <button className='text-white bg-transparent border-[1px] border-solid border-white py-[5px] px-[10px] text-sm rounded-[20px]'>Web Desgin</button>
                 <button className='text-white bg-transparent border-[1px] border-solid border-white py-[5px] px-[10px] text-sm rounded-[20px]'>WordPress</button>
                 <button className='text-white bg-transparent border-[1px] border-solid border-white py-[5px] px-[10px] text-sm rounded-[20px]'>Logo Desgin</button>
                 <button className='text-white bg-transparent border-[1px] border-solid border-white py-[5px] px-[10px] text-sm rounded-[20px]'>AI Services</button>  
               </div> 
            </div>
            {/* right */}
            <div className='h-[100%]'>
              <img className='object-contain h-[100%]' src='./img/man.png'/>
            </div>
        </div>
    </div>
  )
}

export default Featured