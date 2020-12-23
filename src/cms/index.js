import { init, registerPreviewTemplate as template } from 'netlify-cms-app'

import Posts from '@collections/posts'
import Works from '@collections/works'
import Team from '@collections/team'
import WorksAudiovisual from '@collections/works-audiovisual'
import WorksBranding from '@collections/works-branding'
import WorksSocialMedia from '@collections/works-social-media'
import WorksWebDesign from '@collections/works-web-design'
import Locales from '@collections/locales'
import Settings from '@collections/settings'

import PostItemPreview from '@templates/post-item'
import TeamMemberPreview from '@templates/team-member'

import '@theme/theme-base.css'
import 'typeface-baloo-2'
import 'typeface-rubik'

template('posts', PostItemPreview)
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
      Posts,
      Works,
      WorksAudiovisual,
      WorksBranding,
      WorksSocialMedia,
      WorksWebDesign,
      Team,
      Locales,
      Settings
    ]
  }
})
