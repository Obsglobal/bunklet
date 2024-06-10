import PropertyCard from '@/components/ui/property-card'
import { featuredProperties } from '@/constants'
import React from 'react'

const SimilarProperties = () => {
  return (
    <div className='md:px-20 px-6 py-10'>
      <div className="flex flex-col">
        <span className='text-[20px] font-semibold my-2'>Similar Homes</span>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {featuredProperties.slice(0, 2).map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </div>
      </div>
    </div>
  )
}

export default SimilarProperties