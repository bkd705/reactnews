import React from 'react'
import { shallow } from 'enzyme'
import ArticleItem from './Item'

const article = {
  title: 'Test Article',
  author: 'Brennen Denomme',
  abstract: 'This is a paragraph of abstract text, depending on the API source this may be reddits self text or the first paragraph of another API',
  link: 'http://google.com',
  hasInteraction: true,
  interactionType: 'star',
  interactionCount: 124,
  hasComments: false,
  comments: []
}

it('renders without crashing', () => {
  shallow(<ArticleItem article={article}/>)
})
