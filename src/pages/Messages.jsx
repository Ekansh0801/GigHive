import React from 'react'
import {Link} from 'react-router-dom' 

const Messages = () => {
  const currentUser = {
    id:1,
    username:"John Doe",
    isSeller:true,
  } 

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;


  return (
    <div className='messages flex justify-center'>
      <div className='container w-[1400px] py-[50px] '>
        <div className='title flex justify-between items-center'>
          <h1>Orders</h1>
        </div>
        <table className='w-full self-center'>
          <tr className='h-[50px]'>
            <th className='text-left'>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th className='text-left'>Last Message</th>
            <th className='text-left'>Date</th>
            <th className='text-left'>Action</th>
          </tr>
          <tr className='active h-[100px] bg-[#1dbf703f]'>
            <td className='p-[10px] font-medium'>Charley Shar</td>
            <td className='p-[10px] text-[#808080]'>
            <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className='p-[10px] text-[#808080]'>1 hour ago</td>
            <td className='p-[10px]'>
            <button className='bg-[#1dbf73] p-[10px] text-white border-none cursor-pointer'>Mark as Read</button>
            </td>
          </tr>
          <tr className='h-[100px] bg-[#1dbf703f]'>
          <td className='p-[10px] font-medium'>Charley Shar</td>
          <td className='p-[10px] text-[#808080]'>
            <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className='p-[10px] text-[#808080]'>1 hour ago</td>
            <td className='p-[10px]'>
            <button className='bg-[#1dbf73] p-[10px] text-white border-none cursor-pointer'>Mark as Read</button>
            </td>
          </tr>
          <tr className='h-[100px] active:bg-[#1dbf703f]'>
          <td className='p-[10px] font-medium'>Charley Shar</td>
          <td className='p-[10px] text-[#808080]'>
            <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className='p-[10px] text-[#808080]'>1 hour ago</td>
            <td className='p-[10px]'>
              <button className='bg-[#1dbf73] p-[10px] text-white border-none cursor-pointer'>Mark as Read</button>
            </td>
          </tr>
          <tr className='h-[100px] active:bg-[#1dbf703f]'>
          <td className='p-[10px] font-medium'>Charley Shar</td>
          <td className='p-[10px] text-[#808080]'>
            <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className='p-[10px] text-[#808080]'>1 hour ago</td>
            <td className='p-[10px]'>
            <button className='bg-[#1dbf73] p-[10px] text-white border-none cursor-pointer'>Mark as Read</button>
            </td>
          </tr>
          <tr className='h-[100px] active:bg-[#1dbf703f]'>
          <td className='p-[10px] font-medium'>Charley Shar</td>
          <td className='p-[10px] text-[#808080]'>
            <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className='p-[10px] text-[#808080]'>1 hour ago</td>
            <td className='p-[10px]'>
            <button className='bg-[#1dbf73] p-[10px] text-white border-none cursor-pointer'>Mark as Read</button>
            </td>
          </tr>
          <tr className='h-[100px] active:bg-[#1dbf703f]'>
          <td className='p-[10px] font-medium'>Charley Shar</td>
          <td className='p-[10px] text-[#808080]'>
            <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className='p-[10px] text-[#808080]'>1 hour ago</td>
            <td className='p-[10px]'>
            <button className='bg-[#1dbf73] p-[10px] text-white border-none cursor-pointer'>Mark as Read</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages