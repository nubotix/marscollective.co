import Social from '@cmsUtils/social'

const Team = {
  name: 'team',
  label: 'Equipe',
  folder: 'content/team',
  media_folder: '',
  public_folder: '',
  sortable_fields: [],
  path: '{{slug}}/index',
  identifier_field: 'name',
  fields: [
    { label: 'Nome', name: 'name', widget: 'hidden' },
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

export default Team
