import React from 'react'
import tw from 'twin.macro'
import { Link, useIntl } from 'gatsby-plugin-intl'

import Layout from '@components/layout'
import SEO from '@components/seo'
import Container from '@components/container'
import Button from '@components/button'

const NotFoundPage = () => {
  const intl = useIntl().formatMessage
  return (
    <Layout>
      <SEO
        title={intl({ id: 'notFoundPage.title' })}
        lang={intl({ id: 'lang' })}
      />
      <Container css={[tw`my-40! space-y-16 text-center`]}>
        <h1>
          <span className="mint">{intl({ id: 'notFoundPage.title' })}</span>
        </h1>
        <p className="lead">{intl({ id: 'notFoundPage.message' })}</p>
        <div>
          <Link to="/">
            <Button label={intl({ id: 'notFoundPage.button' })} primary />
          </Link>
        </div>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
