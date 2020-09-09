import React from 'react'

import BlogItemHeader from '../../components/BlogItemHeader'
import BlogItemBody from '../../components/BlogItemBody'
import { Container } from '../../components/Container'

const Article = ({ image, title, avatar, author, date, html }) => (
  <Container>
    <BlogItemHeader
      image={image}
      title={title}
      avatar={avatar}
      author={author}
      date={date}
    />
    <BlogItemBody html={html} />
  </Container>
)

export default Article
