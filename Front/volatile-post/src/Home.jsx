// Home.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
        createdAt: Math.floor(Date.now() / 1000),
      },
      {
        postId: '2',
        title: 'A Note',
        content: 'This one is an example of note.',
        createdAt: Math.floor(Date.now() / 1000) - 3600,
      },
    ]

    setPosts(dummyPosts)
  }, [])


  return (
    <div className="Home-container">
      <header className="Home-header">
        <h1 className="Home-title">{STRINGS.siteTitle}</h1>
          <button className='NewNote-btn'>
            <Link to="/write" className="NewNote-link">{STRINGS.newNote}</Link>
          </button>
      </header>
      <main>
        <PostList posts={posts} />
      </main>
    </div>
  )
}

export default Home
