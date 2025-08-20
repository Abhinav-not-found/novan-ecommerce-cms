import ProductCard from '@/components/ProductCard'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div className='bg-red-50 w-full h-[35em] rounded-lg'></div>
      <div className='featured-products'>
        <h1 className='text-7xl mt-18'>Featured Products</h1>
        <div className='flex gap-8 mt-8'>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
