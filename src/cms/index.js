import { init, registerPreviewTemplate as template } from 'netlify-cms-app'

import Blog from '@collections/blog'
import Portfolio from '@collections/portfolio'
import PortfolioAudiovisual from '@collections/portfolio-audiovisual'
import PortfolioBranding from '@collections/portfolio-branding'
import PortfolioSocialMedia from '@collections/portfolio-social-media'
import PortfolioWebDesign from '@collections/portfolio-web-design'
import Team from '@collections/team'
import Locales from '@collections/locales'
import Settings from '@collections/settings'

import BlogItemPreview from '@templates/blog-item'
import PortfolioItemPreview from '@templates/portfolio-item'
import TeamMemberPreview from '@templates/team-member'

import '@theme/theme-base.css'
import 'typeface-baloo-2'
import 'typeface-rubik'

template('blog', BlogItemPreview)
template('portfolio', PortfolioItemPreview)
template('team', TeamMemberPreview)

init({
  config: {
    backend: {
      name: 'github',
      repo: 'marscollective/marscollective.co',
      branch: 'main',
      commit_messages: {
        create: 'feat: create “{{slug}}”',
        update: 'feat: update “{{slug}}”',
        delete: 'refactor: delete “{{slug}}”',
        uploadMedia: 'feat: upload “{{path}}” [skip ci]',
        deleteMedia: 'refactor: delete “{{path}}” [skip ci]'
      }
    },
    local_backend: {
      url: 'http://localhost:8000/api/v1'
    },
    media_folder: 'static/assets',
    public_folder: 'assets',
    locale: 'pt',
    display_url: 'https://marscollective.co',
    collections: [
      Blog,
      Portfolio,
      PortfolioAudiovisual,
      PortfolioBranding,
      PortfolioSocialMedia,
      PortfolioWebDesign,
      Team,
      Locales,
      Settings
    ]
  }
})
