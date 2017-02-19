import React from 'react'

const ArticleItem = ({ article }) => {

  const onClick = () => {
    console.log('Clicked')
  }
  return (
    <div className="article-item" onClick={onClick}>
      <p>{article.title}</p>
    </div>
  )
}

export default ArticleItem