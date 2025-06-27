// Post.jsx
import React from 'react'
import './Post.css'

function Post({ title, content, imageUrls, createdAt }) {
  const formattedTime = new Date(createdAt * 1000).toLocaleString()

  return (
    <div className="Post-whole">
      <h2 className="Post-title">{title}</h2>

      {imageUrls?.length > 0 && (
        <img
          src={imageUrls[0]}
          alt="post"
          className="Post-image"
        />
      )}

      <p className="Post-content">{content}</p>

      <p className="Post-time">Posted: {formattedTime}</p>
    </div>
  )
}

export default Post
