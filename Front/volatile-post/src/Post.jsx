// Post.jsx
import React from 'react'
import './Post.css'

function Post({ title, content, createdAt }) {
  const formattedTime = new Date(createdAt * 1000).toLocaleString()

  return (
    <div className="Post-whole">
      <h2 className="Post-title">{title}</h2>

      <p className="Post-content">{content}</p>

      <div className='Post-lifeJobs'>
        <button className='Post-like'>Like</button>
        <button className='Post-dislike'>Dislike</button>

        <p className="Post-time">Posted: {formattedTime}</p>
      </div>
    </div>
  )
}

export default Post
