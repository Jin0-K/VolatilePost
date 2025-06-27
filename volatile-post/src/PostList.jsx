// PostList.jsx
import React from 'react'
import Post from './Post'
import './PostList.css'

function PostList({ posts }) {
  if (!posts || posts.length === 0) {
    return <p className="PostList-empty">No posts available.</p>
  }

  return (
    <div className="PostList-container">
      {posts.map(post => (
        <Post
          key={post.postId}
          title={post.title}
          content={post.content}
          imageUrls={post.imageUrls}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  )
}

export default PostList
