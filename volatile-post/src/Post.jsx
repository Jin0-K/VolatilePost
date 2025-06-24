// Post.jsx
import React from 'react'

function Post({ title, content, imageUrls, createdAt }) {
  const formattedTime = new Date(createdAt * 1000).toLocaleString()

  return (
    <div className="bg-white shadow-md rounded-xl p-4 space-y-2">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

      {imageUrls?.length > 0 && (
        <img
          src={imageUrls[0]}
          alt="post"
          className="w-full max-h-64 object-cover rounded"
        />
      )}

      <p className="text-gray-700">{content}</p>

      <p className="text-sm text-gray-400">Posted: {formattedTime}</p>
    </div>
  )
}

export default Post
