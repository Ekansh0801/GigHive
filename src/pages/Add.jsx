import React from "react";

const Add = () => {
  return (
    <div className="add flex justify-center">
      <div className="container w-[1400px] py-[50px] ">
        <h1 className="font-light text-[#808080] mb-[30px] ">Add New Gig</h1>
        <div className="sections flex justify-between gap-[100px] ">
          <div className="info left  flex flex-col gap-[10px] justify-between">
            <label htmlFor="" className="text-[#808080] text-[18px]">Title</label>
            <input
              type="text"
              className="p-5 border-[1px] border-solid border-[#808080]"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label htmlFor="">Category</label>
            <select className="p-5 border-[1px] border-solid border-[#808080]" name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea className="p-5 border-[1px] border-solid border-[#808080]" name="" id="" placeholder="Brief descriptions to introduce your service to customers" cols="80" rows="16"></textarea>
            <button className="p-5 bg-[#1dbf73] text-white font-medium text-[18px] cursor-pointer">Create</button>
          </div>
          <div className="details right flex flex-col gap-[10px] justify-between">
            <label htmlFor="">Service Title</label>
            <input className="p-5 border-[1px] border-solid border-[#808080]" type="text" placeholder="e.g. One-page web design" />
            <label htmlFor="">Short Description</label>
            <textarea className="p-5 border-[1px] border-solid border-[#808080]" name="" id="" placeholder="Short description of your service" cols="80" rows="10"></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input className="p-5" type="number" />
            <label htmlFor="">Revision Number</label>
            <input className="p-5 border-[1px] border-solid border-[#808080]" type="number" />
            <label htmlFor="">Add Features</label>
            <input className="p-5 border-[1px] border-solid border-[#808080]" type="text" placeholder="e.g. page design" />
            <input className="p-5 border-[1px] border-solid border-[#808080]" type="text" placeholder="e.g. file uploading" />
            <input className="p-5 border-[1px] border-solid border-[#808080]" type="text" placeholder="e.g. setting up a domain" />
            <input className="p-5 border-[1px] border-solid border-[#808080]" type="text" placeholder="e.g. hosting" />
            <label htmlFor="">Price</label>
            <input className="p-5 border-[1px] border-solid border-[#808080]" type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;