import React from 'react'
import Image from 'next/image'
import Shopbottombar from '@/components/shopBottomBar/Shopbottombar'
import { Input } from '@/components/ui/input'
import { Trash } from 'lucide-react';

function Cart() {
  return (
    <>
    <div className="bg-[url('/blogMainImage.png')] bg-cover mb-[63px] bg-center py-16">
    <div className="container text-center">
      <div className="inline-block w-16 h-16 bg-[url('/logo1.png')]  mb-4" />
      <h1 className="text-4xl font-medium mb-4 font-poppins">Cart</h1>
      <div className="flex items-center justify-center gap-2 text-sm">
        <a href="#" className="hover:underline">Home</a>
        <span>
            <Image
            src={"/rightA.png"}
            width={20}
            height={20}
            alt="arrow"
            ></Image>
        </span>
        <span>Checkout</span>
      </div>
    </div>
  </div>

{/* middle div */}
  <div className='w-full flex gap-[30px] px-[100px] mb-[85px]'>

    {/* left div */}

    <div className='w-[817px] '>

        <div className='bg-[#f9f1e7]  w-full h-[55px] px[14.6px] flex items-center   text-[16px] leading-[24px]'>

            <p className='mr-[114px] ml-[142px]'>Product</p>
            <p className='mr-[137px]'>Price</p>
            <p className='mr-[36px]'>Quantity</p>
            <p>SubTotal</p>
        </div>

        <div className='mt-[55px] flex items-center'>

            <div className='mr-[34px]'>
            <Image
            src="/cart2.png"
            alt="cart2"
            width={108}
            height={105}   
            
            >

            </Image>
            </div>
            <p className='mr-[69px] text-[#9f9f9f]'>Asgaard sofa</p>
            <p className='mr-[80px] text-[#9f9f9f]'>Rs. 250,000.00</p>
            <Input placeholder='1' className='w-[32px] h-[32px] mr-[80px] text-center font-[16px] leading-[24px] '/>

            <p className='mr-[40px]'>Rs. 250,000.00</p>

            <Trash size={28} fill='#b88e2f' />

        </div>


    </div>
    {/* right div */}

    <div>

        <Image
        src={"/cart1.png"}
        alt=""
        width={393}
        height={390}
        
        >

        </Image>
    </div>

  </div>


<Shopbottombar/>
    
    </>
  )
}

export default Cart