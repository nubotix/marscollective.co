import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import All from '../../components/WorkQueries/All'
import WebDesign from '../../components/WorkQueries/WebDesign'
import Branding from '../../components/WorkQueries/Branding'
import SocialMedia from '../../components/WorkQueries/SocialMedia'
import Audiovisual from '../../components/WorkQueries/Audiovisual'

import Button from '../../components/button'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'

const OurWork = () => {
  const intl = useIntl()

  return (
    <div
      className="container"
      id={intl.formatMessage({ id: 'nav.portfolio.url' })}
    >
      <div className="grid grid-cols-3 gap-8">
        <TabList className="self-center list-none text-center">
          <h2 data-sal="slide-up">
            <FormattedMessage id="portfolio.title" />
          </h2>
          <div className="grid gap-16">
            <div className="grid gap-8" data-sal="slide-up">
              <Tab className="font-semibold outline-none transition duration-500">
                <FormattedMessage id="portfolio.items.all" />
              </Tab>
              <Tab className="font-semibold outline-none transition duration-500">
                <FormattedMessage id="portfolio.items.webDesign" />
              </Tab>
              <Tab className="font-semibold outline-none transition duration-500">
                <FormattedMessage id="portfolio.items.branding" />
              </Tab>
              <Tab className="font-semibold outline-none transition duration-500">
                <FormattedMessage id="portfolio.items.socialMedia" />
              </Tab>
              <Tab className="font-semibold outline-none transition duration-500">
                <FormattedMessage id="portfolio.items.audiovisual" />
              </Tab>
            </div>
            <a
              href="https://www.behance.net/marscollective"
              title="Behance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label={intl.formatMessage({
                  id: 'portfolio.button.label'
                })}
                primary
              />
            </a>
          </div>
        </TabList>
        <div className="col-span-2" data-sal="slide-up">
          <TabPanel className="grid grid-cols-3 gap-16">
            <All />
          </TabPanel>
          <TabPanel className="grid grid-cols-3 gap-16">
            <WebDesign />
          </TabPanel>
          <TabPanel className="grid grid-cols-3 gap-16">
            <Branding />
          </TabPanel>
          <TabPanel className="grid grid-cols-3 gap-16">
            <SocialMedia />
          </TabPanel>
          <TabPanel className="grid grid-cols-3 gap-16">
            <Audiovisual />
          </TabPanel>
        </div>
      </div>
    </div>
  )
}

export default OurWork
