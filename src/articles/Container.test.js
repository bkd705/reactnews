import React from 'react'
import { shallow } from 'enzyme'
import ArticleContainer from './Container'

it('renders without crashing', () => {
  shallow(<ArticleContainer />)
})
