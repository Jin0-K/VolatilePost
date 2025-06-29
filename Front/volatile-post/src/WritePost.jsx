// WritePost.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './WritePost.css'

function WritePost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // TODO: Replace with actual API call
    console.log('New post submitted:', {
      title,
      content,
      createdAt: Math.floor(Date.now() / 1000),
    })

    setTitle('')
    setContent('')

    // Navigate to Home
    navigate('/')
  }

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div className="WritePost-container">
      <h2 className="WritePost-title">New Note</h2>

      <form className="WritePost-form" onSubmit={handleSubmit}>
        <label className="WritePost-label">
          Title
          <input
            type="text"
            className="WritePost-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        
        <label className="WritePost-label">
          Content
          <textarea
            className="WritePost-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            required
          />
        </label>

        <div className="WritePost-buttons">
          <button type="submit" className="WritePost-button">
            Submit
          </button>
          <button type="button" className="WritePost-back" onClick={handleBack}>
            Back
          </button>
        </div>
      </form>
    </div>
  )
}

export default WritePost
