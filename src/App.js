import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'
import News from './pages/News.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<News />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
