import React from 'react'
import {Link} from 'react-router-dom' 

const Orders = () => {
  const currentUser = {
    id:1,
    username:"John Doe",
    isSeller:true,
  } 
  return (
    <div className='orders flex justify-center'>
      <div className='container w-[1400px] py-[50px] '>
        <div className='title flex justify-between items-center'>
          <h1>Orders</h1>
        </div>
        <table className='w-full self-center'>
          <tr className='h-[50px] '>
            <th className='text-left'>Image</th>
            <th className='text-left'>Title</th>
            <th className='text-left'>Price</th>
            <th className='text-left'>{currentUser.isSeller ? 'Buyer' : 'Seller'}</th>
            <th className='text-left'>Contact</th>
          </tr>
          <tr className='h-[50px] even:bg-[#1dbf703f]'>
            <td>
              <img className='w-[50px] h-[25px] object-cover' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
            </td>
            <td>Stunning Concept Art</td>
            <td>59.<sup>99</sup></td>
            <td>Maria Anders</td>
            <td>
              <img className='w-[20px] cursor-pointer' src='/img/message.png'/>
            </td>
          </tr>
          <tr className='h-[50px] even:bg-[#1dbf703f]'>
            <td>
              <img className='w-[50px] h-[25px] object-cover' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
            </td>
            <td>AI Generated Concept Art</td>
            <td>59.<sup>99</sup></td>
            <td>Francisco Chang</td>
            <td>
              <img className='w-[20px] cursor-pointer' src='/img/message.png'/>
            </td>
          </tr>
          <tr className='h-[50px] even:bg-[#1dbf703f]'>
            <td>
              <img className='w-[50px] h-[25px] object-cover' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
            </td>
            <td>High quality digital characte</td>
            <td>59.<sup>99</sup></td>
            <td>Roland Mendel</td>
            <td>
              <img className='w-[20px] cursor-pointer' src='/img/message.png'/>
            </td>
          </tr>
          <tr className='h-[50px] even:bg-[#1dbf703f]'>
            <td>
              <img className='w-[50px] h-[25px] object-cover' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>59.<sup>99</sup></td>
            <td>Helen Bennett</td>
            <td>
              <img className='w-[20px] cursor-pointer' src='/img/message.png'/>
            </td>
          </tr>
          <tr className='h-[50px] even:bg-[#1dbf703f]'>
            <td>
              <img className='w-[50px] h-[25px] object-cover' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
            </td>
            <td>Original ai generated digital art</td>
            <td>59.<sup>99</sup></td>
            <td>Yoshi Tannamuri</td>
            <td>
              <img className='w-[20px] cursor-pointer' src='/img/message.png'/>
            </td>
          </tr>
          <tr className='h-[50px] even:bg-[#1dbf703f]'>
            <td>
              <img className='w-[50px] h-[25px] object-cover' src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
            </td>
            <td>Text based ai generated art</td>
            <td>59.<sup>99</sup></td>
            <td>Giovanni Rovelli</td>
            <td>
              <img className='w-[20px] cursor-pointer' src='/img/message.png'/>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders