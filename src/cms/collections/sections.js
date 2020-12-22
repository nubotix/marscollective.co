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
    }
  ]
}

export default Sections
