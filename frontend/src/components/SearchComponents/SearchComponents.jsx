import React from 'react'
import './SearchComponents.css'
import SearchUser from './SearchUser'

const SearchComponents = () => {
  return (
    <div className='searchContainer'>
        <div className='px-3 pb-5'>
            <h1 className='text-xl pb-5'>Search</h1>
            <input className='searchInput' type="text" placeholder='Search...' />
        </div>

        <hr />

{/* When Searching is done within searchbar */}
        <div className='px-3 pt-5'>
          {[1,1,1].map((item)=><SearchUser/>)}
        </div>
    </div>
  )
}

export default SearchComponents