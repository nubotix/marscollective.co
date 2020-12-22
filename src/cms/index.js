import { init } from 'netlify-cms-app'

import Posts from '@collections/posts'
import Works from '@collections/works'
import Team from '@collections/team'
import WorksAudiovisual from '@collections/works-audiovisual'
import WorksBranding from '@collections/works-branding'
import WorksSocialMedia from '@collections/works-social-media'
import WorksWebDesign from '@collections/works-web-design'
import Locales from '@collections/locales'
import Settings from '@collections/settings'

init({
  config: {
    backend: {
      name: 'git-gateway',
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
