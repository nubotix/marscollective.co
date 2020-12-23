import React from 'react'
import { format, zonedTimeToUtc } from 'date-fns-tz'
import { es, pt } from 'date-fns/locale'

import PostItem from '@components/post-item'

const PostItemPreview = ({ entry, getAsset, widgetFor }) => {
  const { author, date, image, titles } = entry.getIn(['data']).toJS()
  const znDate = zonedTimeToUtc(date || new Date(), 'America/Sao_Paulo')

  const data = [
    {
      date: format(new Date(znDate), 'MMMM d, yyyy'),
      text: widgetFor('textEN'),
      title: titles?.en || 'English title'
    },
    {
      date: format(new Date(znDate), "d 'de' MMMM 'de' yyyy", { locale: es }),
      text: widgetFor('textES'),
      title: titles?.es || 'Título en español'
    },
    {
      date: format(new Date(znDate), "d 'de' MMMM 'de' yyyy", {
        locale: pt
      }),
      text: widgetFor('textPT'),
      title: titles?.pt || 'Título em português'
    }
  ]

  return (
    <div className="light">
      {data.map(({ date, text, title }, i) => (
        <PostItem
          authorName={author || 'Autor(a)'}
          date={date}
          html={text}
          image={getAsset(image)}
          title={title}
          key={i}
        />
      ))}
    </div>
  )
}

export default PostItemPreview
