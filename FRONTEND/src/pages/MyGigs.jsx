import React from 'react'
import {Link} from 'react-router-dom' 

const MyGigs = () => {
  return (
    <div className='mygigs flex justify-center'>
      <div className='container w-[1400px] py-[50px] '>
        <div className='title flex justify-between items-center'>
          <h1 className='font-medium text-3xl mb-5'>Gigs</h1>
          <Link to="/add" className='bg-[#1dbf73] text-white font-medium p-[10px] border-none rounded-md cursor-pointer'>Add New Gig</Link>
        </div>
        <table className='w-full self-center'>
          <tr className='h-[50px] '>
            <th className='text-left'>Image</th>
            <th className='text-left'>Title</th>
            <th className='text-left'>Price</th>
            <th className='text-left'>Sales</th>
            <th className='text-left'>Action</th>
          </tr>
          <tr className='h-[50px] even:bg-[#1dbf703f]'>
            <td>
              <img className='w-[50px] h-[25px] object-cover' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='w-[20px] cursor-pointer' src='/img/delete.png'/>
            </td>
          </tr>
          <tr className='h-[50px] even:bg-[#1dbf703f]'>
            <td>
              <img className='w-[50px] h-[25px] object-cover' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='w-[20px] cursor-pointer' src='/img/delete.png'/>
            </td>
          </tr>
          <tr className='h-[50px] even:bg-[#1dbf703f]'>
            <td>
              <img className='w-[50px] h-[25px] object-cover' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='w-[20px] cursor-pointer' src='/img/delete.png'/>
            </td>
          </tr>
          <tr className='h-[50px] even:bg-[#1dbf703f]'>
            <td>
              <img className='w-[50px] h-[25px] object-cover' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='w-[20px] cursor-pointer' src='/img/delete.png'/>
            </td>
          </tr>
          <tr className='h-[50px] even:bg-[#1dbf703f]'>
            <td>
              <img className='w-[50px] h-[25px] object-cover' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='w-[20px] cursor-pointer' src='/img/delete.png'/>
            </td>
          </tr>
          <tr className='h-[50px] even:bg-[#1dbf703f]'>
            <td>
              <img className='w-[50px] h-[25px] object-cover' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='w-[20px] cursor-pointer' src='/img/delete.png'/>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs