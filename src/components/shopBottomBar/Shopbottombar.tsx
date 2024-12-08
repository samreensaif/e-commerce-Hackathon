import React from 'react'
import Image from 'next/image'
function Shopbottombar() {
  return (
    <>
    <section className='w-full h-[207px] flex items-center justify-center bg-[#f9f1e7]'>
        
        <div className='w-[1334px] flex m-auto'>
        {/* 1st div */}

        <div className="flex w-[337px] h-[70px] gap-[10px]  items-center"
        >

            <Image
            
            src="/trophy 1.png"
            alt="trophy"
            width={60}
            height={60}
            
            ></Image>

            <div className='flex flex-col items-start'>
                <h1 className='font-semibold text-[25px] leading-[37.5px]'>High Quality</h1>
                <p className='font-[500] text-[20px] text-[#898989] leading-[30px]'>crafted from top materials</p>
            </div>



        </div>
        {/* 2nd div */}

        <div className="flex w-[337px] h-[70px]  gap-[10px] items-center"
        >

            <Image
            
            src="/guarantee.png"
            alt="gaurantee"
            width={60}
            height={60}
            
            ></Image>

            <div className='flex flex-col items-start'>
                <h1 className='font-semibold text-[25px] leading-[37.5px]'>Warranty Protection</h1>
                <p className='font-[500] text-[20px] text-[#898989] leading-[30px]'>Over 2 years</p>
            </div>



        </div>
        {/* 3rd div */}

        <div className="flex w-[337px] h-[70px]  gap-[10px] items-center"
        >

            <Image
            
            src="/shipping.png"
            alt="shipping"
            width={60}
            height={60}
            
            ></Image>

            <div className='flex flex-col items-start'>
                <h1 className='font-semibold text-[25px] leading-[37.5px]'>Free Shipping</h1>
                <p className='font-[500] text-[20px] text-[#898989] leading-[30px]'>Order over 150 $</p>
            </div>



        </div>
        {/* 4rth div */}

        <div className="flex w-[337px]  h-[70px] gap-[10px] items-center"
        >

            <Image
            
            src="/cust.png"
            alt="cust"
            width={60}
            height={60}
            
            ></Image>

            <div className='flex flex-col items-start'>
                <h1 className='font-semibold text-[25px] leading-[37.5px]'>24/7 Support</h1>
                <p className='font-[500] text-[20px] text-[#898989] leading-[30px]'>Dedicated support </p>
            </div>



        </div>
        
        </div>
        
    </section></>
  )
}

export default Shopbottombar
