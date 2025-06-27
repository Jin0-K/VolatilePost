// Home.jsx
import React, { useState, useEffect } from 'react'
import PostList from './PostList'
import STRINGS from './components/strings'
import './Home.css'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Mock data — replace with API fetch later
    const dummyPosts = [
      {
        postId: '1',
        title: STRINGS.welcomeTitle,
        content: STRINGS.welcomeContent,
        imageUrls: [],
        createdAt: Math.floor(Date.now() / 1000),
      },
      {
        postId: '2',
        title: 'Image Post',
        content: 'This one has an image.',
        imageUrls: ['https://via.placeholder.com/300'],
        createdAt: Math.floor(Date.now() / 1000) - 3600,
      },
    ]

    setPosts(dummyPosts)
  }, [])

  const handleNewNote = () => {
    // Placeholder for opening a form/modal later
    alert('New Note form will open here.')
  }

  return (
    <div className="Home-container">
      <header className="Home-header">
        <h1 className="Home-title">{STRINGS.siteTitle}</h1>
          <button className='NewNote-btn' onClick={handleNewNote}>
            {STRINGS.newNote}
          </button>
      </header>
      <main>
        <PostList posts={posts} />
      </main>
    </div>
  )
}

export default Home
