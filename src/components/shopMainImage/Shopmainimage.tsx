import React from 'react'
import Image from 'next/image'
import { Input } from '../ui/input'

function Shopmainimage() {
  return (
    <>
    <section className='mb-[46px]'>


        <div className='w-full '>

            <Image 
            src="/shopMainImage.png"
            alt="shopImage"
            width={1440}
            height={316}>


            </Image>
        </div>


        <div className=' flex items-center justify-around w-full h-[100px] bg-[#f9f1e7]'>


        {/* leftdiv */}

        <div className='flex items-center justify-items-start gap-[64px] '>
            <div className='flex items-center justify-center'>
            <Image
            src="/shopIcon1.png"
            alt="shopIcon1"
            width={25}
            height={25}>

            </Image>

            <p className='text-[20px] leading-[30px] font[400] font-poppins text-black ml-3 mr-[23px]'>Filter</p>

            <Image
            src="/shopIcon2.png"
            alt="shopIcon1"
            width={25}
            height={25}>

            </Image>
            <Image
            src="/shopIcon3.png"
            alt="shopIcon1"
            width={25}
            height={25}
            
            className='ml-[24px]'>

            </Image>
            </div>

            <div className='w-[237px] border-l-2 border-black '>

                <p className='pl-[34px] text-[16px] leading-[24px] font[400] font-poppins text-black'>Showing 1–16 of 32 results</p>

            </div>

        </div>


        {/* rightdiv */}

        <div className='flex items-center justify-center text-[20px] leading-[30px]  '>

            <p className='pr-[35px]'>Show</p>
            <Input
            placeholder='16'
            className='w-[55px] h-[55px]  bg-white rounded-none text-center mr-[29px]  text-[16px] leading-[24px] font[400] font-poppins text-[#9f9f9f]'
            />

            <p className='pr-[35px]'>Short By</p>
            <Input
            placeholder='Default'
            className='w-[188px] h-[55px]  bg-white rounded-none text-center   text-[16px] leading-[24px] font[400] font-poppins text-[#9f9f9f]'
            />

        </div>

        </div>
    </section>
    </>
  )
}

export default Shopmainimage
