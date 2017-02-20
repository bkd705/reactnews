import React from 'react'
import { shallow } from 'enzyme'
import truncate from 'lodash/truncate'
import ArticleItem from './Item'

const article = {
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

it('renders without crashing', () => {
  shallow(<ArticleItem article={article}/>)
})

it('should render a link to the abstract', () => {
  const wrapper = shallow(<ArticleItem article={article} />)
  
  expect(wrapper.find('a').length).toEqual(1)
})

it('should render an h3 title', () => {
  const wrapper = shallow(<ArticleItem article={article} />)
  const title = <h3>Test Article</h3>

  expect(wrapper.contains(title)).toEqual(true)
})

it('should render an abstract paragraph', () => {
  const wrapper = shallow(<ArticleItem article={article} />)
  const abstract = <p>{truncate(article.abstract, { 'length': 140 })}</p>

  expect(wrapper.contains(abstract)).toEqual(true)
})

it('should render a meta section', () => {
  const wrapper = shallow(<ArticleItem article={article} />)

  expect(wrapper.find('div.meta').length).toEqual(1)
})

it('should render an author', () => {
  const wrapper = shallow(<ArticleItem article={article} />)
  const author = <p>Brennen Denomme</p>

  expect(wrapper.contains(author)).toEqual(true)
})