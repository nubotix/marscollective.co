const WorksFields = [
  { label: 'Título', name: 'title', widget: 'string' },
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
  {
    label: 'Categoria(s)',
    name: 'role',
    widget: 'select',
    multiple: true,
    options: ['Web design', 'Branding', 'Social media', 'Audiovisual']
  },
  {
    label: 'Autor(a) e/ou Equipe',
    name: 'team',
    widget: 'relation',
    multiple: true,
    collection: 'team',
    value_field: 'name',
    search_fields: ['name']
  },
  {
    label: 'Data de estrega',
    name: 'date',
    widget: 'datetime',
    format: 'YYYY-MM-DD',
    date_format: 'DD-MM-YYYY',
    time_format: ''
  },
  { label: 'Imagem em destaque', name: 'image', widget: 'image' },
  {
    label: 'Conteúdo',
    name: 'content',
    widget: 'image',
    media_library: { config: { multiple: true } },
    required: false
  },
  { label: 'Vídeo ID', name: 'video', widget: 'string', required: false }
]

export default WorksFields
