import React from 'react'
import { format, zonedTimeToUtc } from 'date-fns-tz'
import { pt } from 'date-fns/locale'

import PortfolioItem from '@components/portfolio-item'
import { Image } from '@components/image'

const PortfolioItemPreview = ({ entry, getAsset }) => {
  const {
    content,
    date,
    descriptions,
    image,
    role,
    video,
    team,
    title
  } = entry.getIn(['data']).toJS()
  const znDate = zonedTimeToUtc(date || new Date(), 'America/Sao_Paulo')

  return (
    <div className="light">
      <PortfolioItem
        date={format(new Date(znDate), "d 'de' MMMM 'de' yyyy", {
          locale: pt
        })}
        dateTitle="Data de entrega"
        description={descriptions?.pt}
        image={getAsset(image)}
        role={role?.map(roleItem => roleItem).join(', ') || 'Lorem ipsum'}
        roleTitle="Categoria"
        title={title || 'Título'}
        team={team?.join(', ') || 'Lorem ipsum'}
        teamTitle="Equipe"
        video={video}
      >
        <Image src={getAsset(image)} alt={title} />
        {content &&
          content.map((contentItem, i) => (
            <Image src={getAsset(contentItem)} alt={title} key={i} />
          ))}
      </PortfolioItem>
    </div>
  )
}

export default PortfolioItemPreview
