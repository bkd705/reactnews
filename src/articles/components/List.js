import React from 'react'
import ArticleItem from './Item'

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      <h2>Articles</h2>
      { articles
      ? articles.map((article, key) => <ArticleItem key={key} article={article} />)
      : <p>Sorry, there are no articles at this time!</p>}
    </div>
  )
}

export default ArticleList