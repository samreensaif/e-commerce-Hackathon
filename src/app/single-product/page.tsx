import Productdetails from '@/components/productdetails/Productdetails'
import Relatedproducts from '@/components/relatedProduct/Relatedproducts'
import Spmain from '@/components/spmain/Spmain'
import { ChevronRight } from 'lucide-react';

import React from 'react'

function Singleproduct
() {
  return (
    <>

<div className=' flex items-center  w-full h-[100px] mt-3 bg-[#f9f1e7]'>







{/* rightdiv */}

<div className='flex items-center  text-[20px] leading-[30px]  '>

    <p className=' pl-[99px] text-[#7c7474] '>Home  <ChevronRight  className='inline pl-[14px] w-[40px] h-[40px]'/></p>

    
    
    <p className='pl-[24px] text-[#7c7474] pr-[30px]'>Shop  <ChevronRight  className='inline pl-[14px] w-[40px] h-[40px]' /></p>
    
    <div className=' border-l-2 border-black'>
    <p className='pl-[35px]'>Asgaard Sofa</p>
    </div>
    

</div>

</div>
    
    <Spmain/>

    <Productdetails/>


    <Relatedproducts/>
    </>
  )
}

export default Singleproduct
