import { products } from '@/constant/pro1'
import React from 'react'
import { ProductCard } from '../productCard/productCard'

function OurProducts() {
  return (
    <>
    {/* Product Section */}
    <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Our Products</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button className="border-2 border-[#B88E2F] px-8 py-2 text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-colors">
              Show More
            </button>
          </div>
        </div>
      </section>

    </>
  )
}

export default OurProducts