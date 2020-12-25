const PortfolioFields = [
  { label: 'key', name: 'key', widget: 'hidden', default: 'portfolio-item' },
  { label: 'Título', name: 'title', widget: 'string' },
  {
    label: 'Descrições',
    name: 'descriptions',
    widget: 'object',
    required: false,
    hint:
      'Esses campos são opcionais. Na pré visualização ao lado somente é exibida a descrição em português.',
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
    options: [
      { label: 'Web design', value: 'webDesign' },
      { label: 'Branding', value: 'branding' },
      { label: 'Social media', value: 'socialMedia' },
      { label: 'Audiovisual', value: 'audiovisual' }
    ]
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
  {
    label: 'Imagem em destaque',
    name: 'image',
    widget: 'image',
    hint:
      'Essa imagem será a que aparecerá na página principal do site e será, também, a primeira imagem da página do projeto.'
  },
  {
    label: 'Imagem',
    name: 'content',
    widget: 'list',
    required: false,
    hint:
      'Esse campo é opcional. Aqui você pode adicionar mais imagens no corpo da página do projeto, bem como alterar a ordem de exibição arrastando os ítens. Mas a imagem em destaque será sempre a primeira.',
    field: { label: 'Imagem', name: 'image', widget: 'image' }
  },
  { label: 'Vídeo ID', name: 'video', widget: 'string', required: false }
]

export default PortfolioFields
