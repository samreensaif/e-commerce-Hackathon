import React from 'react'
import { Star, StarHalf, ChevronDown } from 'lucide-react'
import Image from 'next/image';


interface ProductCardProps {
  name: string;
  price: string;
  rating: number;
  reviews: number;
}

export default function ProductShowcase() {
  return (
    <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="flex flex-col gap-2 ">
            <h2 className="text-2xl md:text-[28px] font-medium leading-tight text-black max-w-[223px]">
              Go to Product page for more Products
            </h2>
            <div className="flex items-center gap-2 group cursor-pointer w-fit">
              <span className="text-xl text-gray-500 font-medium">View More</span>
              <div className="h-0.5 w-[115px] bg-gray-500 group-hover:bg-gray-700 transition-colors" />
            </div>
          </div>

          <ProductCard
            name="Asgaard Sofa"
            price="Rs. 250,000.00"
            rating={4.7}
            reviews={204}
          />
          <ProductCard
            name="Outdoor Sofa Set"
            price="Rs. 224,000.00"
            rating={4.2}
            reviews={145}
          />
          <div className="flex flex-col gap-4 justify-center">
            <h3 className="text-2xl font-semibold">Add A Product</h3>
            <button className="bg-[#B88E2F] hover:bg-[#A67E2A] text-white gap-2 py-2 px-4 rounded flex items-center justify-center">
              Choose a Product
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
    </div>
  )
}

function ProductCard({ name, price, rating, reviews }: ProductCardProps) {
  return (
    <div className="bg-[#F9F1E7] rounded-lg p-5">
      <div className="aspect-[5/3] relative mb-4">
        <Image
          src="/Spmain.png"
          alt={name}
          className="object-cover w-full h-full rounded"
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-medium">{name}</h3>
        <p className="text-lg font-medium">{price}</p>
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium">{rating}</span>
          <div className="flex">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FFC700] text-[#FFC700]" />
            ))}
            <StarHalf className="w-5 h-5 fill-[#FFC700] text-[#FFC700]" />
          </div>
          <span className="w-px h-[30px] bg-gray-400 mx-2" />
          <span className="text-sm text-gray-500">{reviews} Review</span>
        </div>
      </div>
    </div>
  )
}

