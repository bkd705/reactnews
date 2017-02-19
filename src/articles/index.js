import React from 'react'
import ArticleList from './components/List'

class Articles extends React.Component {
  render() {
    return (
      <div className="article-container">
        <ArticleList />
      </div>
    )
  }
}

export default Articles