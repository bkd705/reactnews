import React from 'react'
import truncate from 'lodash/truncate'

const ArticleItem = ({ article }) => {

  const onClick = () => {
    console.log('Clicked')
  }
  return (
    <a href="">
      <div className="article-item">
        <h3>{article.title}</h3>
        <div className="meta">
          <p>{article.author}</p>
        </div>
        <div className="content">
          <p>{truncate(article.abstract, { 'length': 140 })}</p>
        </div>
      </div>
    </a>
  )
}

export default ArticleItem