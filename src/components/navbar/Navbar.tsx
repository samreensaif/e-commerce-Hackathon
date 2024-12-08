'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Heart, ShoppingCart, UserCircle } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="relative w-full  bg-white  ">
      <div className="max-w-[1286px] mx-auto px-4  flex items-center justify-between h-[41px] mt-[29px] ml-[54px]">
        {/* Logo Section */}
        
        <div className="flex items-center gap-1">
          <div className="w-[50px] h-[32px]">
            {/* Logo placeholder - replace with actual logo */}
            <div className="w-full h-full " />
          </div>
          <h1 className="text-[34px] font-bold font-montserrat text-black flex items-center gap-4">
            <div><Image src={'/logo.png'} alt={'Logo'} height={32} width={50}></Image></div>
            Furniro
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 ">
          <Link 
            href="/" 
            className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/shop" 
            className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
          >
            Shop
          </Link>
          <Link 
            href="/about" 
            className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button 
            aria-label="Account" 
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <UserCircle className="w-6 h-6" />
          </button>
          <button 
            aria-label="Search" 
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <Search className="w-6 h-6" />
          </button>
          <button 
            aria-label="Wishlist" 
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <Heart className="w-6 h-6" />
          </button>
          <button 
            aria-label="Shopping Cart" 
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}