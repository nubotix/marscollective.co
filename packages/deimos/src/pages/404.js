import React from 'react'
import tw from 'twin.macro'
import { Link, useIntl } from 'gatsby-plugin-intl'

import Layout from '@components/layout'
import Container from '@components/container'
import { Bigger, H1, Lead } from '@components/heading'
import Button from '@components/button'

const NotFoundPage = () => {
  const intl = useIntl().formatMessage
  return (
    <Layout>
      <Container css={[tw`my-40! space-y-16 text-center`]}>
        <H1>
          <Bigger center mint>
            {intl({ id: 'notFoundPage.title' })}
          </Bigger>
        </H1>
        <Lead center>{intl({ id: 'notFoundPage.message' })}</Lead>
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
