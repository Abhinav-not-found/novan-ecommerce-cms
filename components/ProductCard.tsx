import React from 'react'

const ProductCard = () => {
  return (
    <div className=' w-full h-[15em]'>
      <div className='bg-red-50 w-full h-full rounded-xl'></div>
      <div className='mt-2'>
        <p className='text-2xl'>Name</p>
        <p className='font-bold text-xl'>price</p>
      </div>
    </div>
  )
}

export default ProductCard
