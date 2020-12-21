import Social from '@cmsUtils/social'

const Settings = {
  name: 'settings',
  label: 'Configurações',
  media_folder: '',
  public_folder: '',
  sortable_fields: [],
  editor: { preview: false },
  files: [
    {
      file: '.github/README.md',
      label: 'README',
      name: 'readme',
      fields: [{ label: 'Corpo', name: 'body', widget: 'markdown' }]
    },
    {
      file: 'content/metadata/index.yaml',
      label: 'Metadata',
      name: 'metadata',
      fields: [
        { label: 'Título', name: 'title', widget: 'string' },
        { label: 'Título curto', name: 'shortTitle', widget: 'string' },
        {
          label: 'Descrições',
          name: 'descriptions',
          widget: 'object',
          fields: [
            { label: 'EN', name: 'en', widget: 'text' },
            { label: 'ES', name: 'es', widget: 'text' },
            { label: 'PT', name: 'pt', widget: 'text' }
          ]
        },
        { label: 'Telefone', name: 'phone', widget: 'string' },
        { label: 'Email', name: 'email', widget: 'string' },
        { label: 'URL', name: 'siteUrl', widget: 'string' },
        { label: 'Favicon', name: 'favicon', widget: 'image' },
        {
          label: 'Social',
          name: 'social',
          widget: 'list',
          fields: [
            {
              label: 'Rótulo',
              name: 'label',
              widget: 'select',
              options: Social
            },
            { label: 'URL', name: 'url', widget: 'string' }
          ]
        },
        {
          label: 'Tracking',
          name: 'tracking',
          widget: 'object',
          fields: [
            {
              label: 'Tracker',
              name: 'which',
              widget: 'select',
              options: [
                { label: 'Nenhum', value: 'none' },
                { label: 'Google Analytics', value: 'analytics' },
                { label: 'Google Tag Manager', value: 'gtm' }
              ]
            },
            { label: 'id', name: 'id', widget: 'string' }
          ]
        },
        {
          label: 'Cores do PWA',
          name: 'colors',
          widget: 'object',
          fields: [
            { label: 'background', name: 'background', widget: 'color' },
            { label: 'highlight', name: 'highlight', widget: 'color' }
          ]
        }
      ]
    }
  ]
}

export default Settings
