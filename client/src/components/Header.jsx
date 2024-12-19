import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between mx-sm:flex-col gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* ----- Right Side ----- */}
      <div className='w-full max-w-md order-1 lg:order-2'>
        <img src={assets.header_img} alt="" />
      </div>
      
      {/* ----- Left Side ----- */}
      <div className='order-2 lg:order-1'>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
            Remove the <br className='max-md:hidden'/> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background</span> from <br className='max-md:hidden' /> images for free.
        </h1>

        <p className='my-6 text-[15px] text-gray-500'>
            Instantly remove backgrounds with 100% accuracy in just 5 seconds - all it takes is one click! <br className='max-sm:hidden' /> Achieve professional high quality results effortlessly.
        </p>

        <div>
            <input type="file" name="" id="upload1" hidden />
            <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload1">
                <img width={20} src={assets.upload_btn_icon} alt="" />
                <p className='text-white text-sm'>Upload your image</p>
            </label>
        </div>
      </div>
    </div>
  )
}

export default Header
