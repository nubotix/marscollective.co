import React from 'react'
import { Link, useIntl } from 'gatsby-plugin-intl'

import Layout from '@components/layout'
import SEO from '@components/seo'
import Button from '@components/button'

const NotFoundPage = () => {
  const intl = useIntl().formatMessage
  return (
    <Layout>
      <SEO
        title={intl({ id: 'notFoundPage.title' })}
        lang={intl({ id: 'lang' })}
      />
      <section className=" container my-40 space-y-16 text-center">
        <h1>
          <span className="mint">{intl({ id: 'notFoundPage.title' })}</span>
        </h1>
        <p className="lead">{intl({ id: 'notFoundPage.message' })}</p>
        <div>
          <Link to="/">
            <Button label={intl({ id: 'notFoundPage.button' })} primary />
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
