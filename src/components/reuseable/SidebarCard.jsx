import React from 'react'
import { Link } from 'react-router-dom'

const SidebarCard = () => {
  return (
    <div className='bg-[var(--secondary-bg)] p-3'>
      <h1>Create your first playlist</h1>
      <p>it's easy, we'll help you</p>
      <Link to="/playlist">
        Create Playlist
      </Link>
    </div>
  )
}

export default SidebarCard
