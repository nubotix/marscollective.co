import Social from '@cmsUtils/social'

const Sections = {
  name: 'sections',
  label: 'Seções',
  media_folder: 'images',
  public_folder: 'images',
  sortable_fields: [],
  editor: { preview: false },
  files: [
    {
      file: 'content/services/index.yaml',
      label: 'Serviços',
      name: 'services',
      fields: [
        {
          label: 'Títulos',
          name: 'titles',
          widget: 'object',
          fields: [
            { label: 'EN', name: 'en', widget: 'string' },
            { label: 'ES', name: 'es', widget: 'string' },
            { label: 'PT', name: 'pt', widget: 'string' }
          ]
        },
        {
          label: 'Itens',
          name: 'items',
          widget: 'list',
          summary: '{{titles.pt}}',
          fields: [
            {
              label: 'Títulos',
              name: 'titles',
              widget: 'object',
              fields: [
                { label: 'EN', name: 'en', widget: 'string' },
                { label: 'ES', name: 'es', widget: 'string' },
                { label: 'PT', name: 'pt', widget: 'string' }
              ]
            },
            {
              label: 'Conteúdos',
              name: 'contents',
              widget: 'object',
              fields: [
                { label: 'EN', name: 'en', widget: 'text' },
                { label: 'ES', name: 'es', widget: 'text' },
                { label: 'PT', name: 'pt', widget: 'text' }
              ]
            },
            { label: 'Imagem', name: 'image', widget: 'image' }
          ]
        }
      ]
    },
    {
      file: 'content/team/index.yaml',
      label: 'Equipe',
      name: 'team',
      fields: [
        {
          label: 'Títulos',
          name: 'titles',
          widget: 'object',
          fields: [
            { label: 'EN', name: 'en', widget: 'string' },
            { label: 'ES', name: 'es', widget: 'string' },
            { label: 'PT', name: 'pt', widget: 'string' }
          ]
        },
        {
          label: 'Membros',
          name: 'members',
          widget: 'list',
          fields: [
            { label: 'Nome', name: 'name', widget: 'string' },
            { label: 'Imagem', name: 'image', widget: 'image' },
            {
              label: 'Função',
              name: 'position',
              widget: 'object',
              fields: [
                { label: 'EN', name: 'en', widget: 'string' },
                { label: 'ES', name: 'es', widget: 'string' },
                { label: 'PT', name: 'pt', widget: 'string' }
              ]
            },
            {
              label: 'Bio',
              name: 'bio',
              widget: 'object',
              fields: [
                { label: 'EN', name: 'en', widget: 'text' },
                { label: 'ES', name: 'es', widget: 'text' },
                { label: 'PT', name: 'pt', widget: 'text' }
              ]
            },
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
            }
          ]
        }
      ]
    }
  ]
}

export default Sections
