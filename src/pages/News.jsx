import React, { useEffect, useState } from 'react'
import Logo from '../components/Logo'
import axios from 'axios'
import Article from '../components/Article'

export default function News() {
  const [newsData, setNewsData] = useState([])
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios
      .get('http://localhost:3003/articles')
      .then(res => setNewsData(res.data))
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (content.length < 140) {
      setError(true)
    } else {
      axios
        .post('http://localhost:3003/articles', {
          author,
          content,
          date: Date.now()
        })
        .then(() => {
          setError(false)
          setAuthor('')
          setContent('')
          getData()
        })
    }
  }

  return (
    <>
      <div className="news-container">
        <Logo />
        <h1>News</h1>
        <form onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Name"
            onChange={e => setAuthor(e.target.value)}
            value={author}
          />
          <textarea
            style={{ border: error ? '1px solid red' : '1px solid #61dafb' }}
            placeholder="Message"
            onChange={e => setContent(e.target.value)}
            value={content}
          ></textarea>
          {error && <p>Please insert a minimum of 140 characters</p>}
          <input type="submit" value="Send" />
        </form>
        <ul>
          {newsData
            .sort((a, b) => b.date - a.date)
            .map(article => (
              <Article key={article.id} article={article} />
            ))}
        </ul>
      </div>
    </>
  )
}
