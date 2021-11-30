import React from 'react'
import axios from 'axios'

export default function DeleteArticle({ id }) {
  const handleDelete = () => {
    axios.delete('http://localhost:3003/articles/' + id)
    window.location.reload()
  }

  return (
    <button
      onClick={() => {
        if (window.confirm('Are you sure you want to delete this article ?')) {
          handleDelete()
        }
      }}
    >
      Delete
    </button>
  )
}
