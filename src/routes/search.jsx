import React from 'react'
import SearchCard from '../components/reuseable/SearchCard'

const browser = () => {
  return (
    <div className='sm:p-3'>
      <h1 className='font-bold text-2xl mb-5 mt-10'>Browse all</h1>
      <SearchCard />
    </div>
  )
}

export default browser
