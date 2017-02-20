import React from 'react'
import { shallow, mount } from 'enzyme'
import ArticleList from './List'
import ArticleItem from './Item'

const propArticles = [
  {
    title: 'Test Article',
    author: 'Brennen Denomme',
    abstract: 'This is a paragraph of abstract text, depending on the API source this may be reddits self text or the first paragraph of another API, This is a paragraph of abstract text, depending on the API source this may be reddits self text or the first paragraph of another API',
    link: 'http://google.com',
    hasInteraction: true,
    interactionType: 'star',
    interactionCount: 124,
    hasComments: false,
    comments: []
  },
  {
    title: 'Test Article',
    author: 'Brennen Denomme',
    abstract: 'This is a paragraph of abstract text, depending on the API source this may be reddits self text or the first paragraph of another API, This is a paragraph of abstract text, depending on the API source this may be reddits self text or the first paragraph of another API',
    link: 'http://google.com',
    hasInteraction: true,
    interactionType: 'star',
    interactionCount: 124,
    hasComments: false,
    comments: []
  }
]

it('renders no articles without crashing', () => {
  shallow(<ArticleList />)
})

it('renders a list of articles', () => {
  const wrapper = mount(<ArticleList articles={propArticles} />)

  expect(wrapper.find('.article-item').length).toEqual(2)

})