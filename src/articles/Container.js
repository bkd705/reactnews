import React from 'react'
import ArticleList from './List'

class ArticleContainer extends React.Component {
  render() {
    return (
      <div className="article-container">
        <ArticleList />
      </div>
    )
  }
}

export default ArticleContainer