const Blog = {
  name: 'blog',
  label: 'Blog',
  label_singular: 'post',
  folder: 'content/blog',
  create: true,
  media_folder: 'images',
  public_folder: 'images',
  sortable_fields: [],
  slug: '{{date}}',
  path: '{{slug}}/index',
  identifier_field: 'titles.pt',
  fields: [
    { label: 'key', name: 'key', widget: 'hidden', default: 'blog-item' },
    {
      label: 'Títulos',
      name: 'titles',
      widget: 'object',
      fields: [
        { label: 'en', name: 'en', widget: 'string' },
        { label: 'es', name: 'es', widget: 'string' },
        { label: 'pt', name: 'pt', widget: 'string' }
      ]
    },
    {
      label: 'Descrições',
      name: 'descriptions',
      widget: 'object',
      fields: [
        { label: 'en', name: 'en', widget: 'text' },
        { label: 'es', name: 'es', widget: 'text' },
        { label: 'pt', name: 'pt', widget: 'text' }
      ]
    },
    { label: 'Imagem em destaque', name: 'image', widget: 'image' },
    {
      label: 'Data',
      name: 'date',
      widget: 'datetime',
      format: 'YYYY-MM-DD',
      date_format: 'DD-MM-YYYY',
      time_format: ''
    },
    {
      label: 'Autor(a)',
      name: 'author',
      widget: 'relation',
      collection: 'team',
      value_field: 'name',
      search_fields: ['name']
    },
    {
      label: 'Texto em inglês',
      name: 'textEN',
      widget: 'markdown',
      buttons: [
        'heading-two',
        'heading-three',
        'heading-four',
        'heading-five',
        'heading-six',
        'bold',
        'italic',
        'link',
        'code',
        'quote',
        'bulleted-list',
        'numbered-list'
      ]
    },
    {
      label: 'Texto em espanhol',
      name: 'textES',
      widget: 'markdown',
      buttons: [
        'heading-two',
        'heading-three',
        'heading-four',
        'heading-five',
        'heading-six',
        'bold',
        'italic',
        'link',
        'code',
        'quote',
        'bulleted-list',
        'numbered-list'
      ]
    },
    {
      label: 'Texto em português',
      name: 'textPT',
      widget: 'markdown',
      buttons: [
        'heading-two',
        'heading-three',
        'heading-four',
        'heading-five',
        'heading-six',
        'bold',
        'italic',
        'link',
        'code',
        'quote',
        'bulleted-list',
        'numbered-list'
      ]
    }
  ]
}

export default Blog
