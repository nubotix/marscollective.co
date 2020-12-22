const Posts = {
  name: 'locales',
  label: 'Traduções',
  folder: 'content/locales',
  format: 'json',
  media_folder: '',
  public_folder: '',
  sortable_fields: [],
  identifier_field: 'lang',
  editor: { preview: false },
  fields: [
    { label: 'Idioma', name: 'lang', widget: 'string' },
    {
      label: 'Menu de navegação',
      name: 'nav',
      widget: 'object',
      fields: [
        {
          label: 'Home',
          name: 'home',
          widget: 'object',
          fields: [
            { label: 'Rótulo', name: 'label', widget: 'string' },
            { label: 'URL', name: 'url', widget: 'string' }
          ]
        },
        {
          label: 'Serviços',
          name: 'services',
          widget: 'object',
          fields: [
            { label: 'Rótulo', name: 'label', widget: 'string' },
            { label: 'URL', name: 'url', widget: 'string' }
          ]
        },
        {
          label: 'Portfolio',
          name: 'portfolio',
          widget: 'object',
          fields: [
            { label: 'Rótulo', name: 'label', widget: 'string' },
            { label: 'URL', name: 'url', widget: 'string' }
          ]
        },
        {
          label: 'Sobre nós',
          name: 'about',
          widget: 'object',
          fields: [
            { label: 'Rótulo', name: 'label', widget: 'string' },
            { label: 'URL', name: 'url', widget: 'string' }
          ]
        },
        {
          label: 'Blog',
          name: 'blog',
          widget: 'object',
          fields: [
            { label: 'Rótulo', name: 'label', widget: 'string' },
            { label: 'URL', name: 'url', widget: 'string' }
          ]
        },
        {
          label: 'Contato',
          name: 'contact',
          widget: 'object',
          fields: [
            { label: 'Rótulo', name: 'label', widget: 'string' },
            { label: 'URL', name: 'url', widget: 'string' }
          ]
        }
      ]
    },
    {
      label: 'Banner principal',
      name: 'welcome',
      widget: 'object',
      fields: [
        { label: 'Título', name: 'title', widget: 'string' },
        { label: 'Lead', name: 'lead', widget: 'string' },
        {
          label: 'Botão primário',
          name: 'buttonPrimary',
          widget: 'object',
          fields: [
            { label: 'Rótulo', name: 'label', widget: 'string' },
            { label: 'URL', name: 'url', widget: 'string' }
          ]
        },
        {
          label: 'Botão secundário',
          name: 'buttonSecondary',
          widget: 'object',
          fields: [
            { label: 'Rótulo', name: 'label', widget: 'string' },
            { label: 'URL', name: 'url', widget: 'string' }
          ]
        }
      ]
    },
    {
      label: 'Equipe',
      name: 'team',
      widget: 'object',
      field: { label: 'Título', name: 'title', widget: 'string' }
    },
    {
      label: 'Portfólio',
      name: 'portfolio',
      widget: 'object',
      fields: [
        { label: 'Título', name: 'title', widget: 'string' },
        {
          label: 'itens',
          name: 'items',
          widget: 'object',
          fields: [
            { label: 'Tudo', name: 'all', widget: 'string' },
            { label: 'Web design', name: 'webDesign', widget: 'string' },
            { label: 'Branding', name: 'branding', widget: 'string' },
            { label: 'Social media', name: 'socialMedia', widget: 'string' },
            { label: 'Audiovisual', name: 'audiovisual', widget: 'string' }
          ]
        },
        {
          label: 'Botão',
          name: 'button',
          widget: 'object',
          fields: [
            { label: 'Rótulo', name: 'label', widget: 'string' },
            { label: 'URL', name: 'url', widget: 'string' }
          ]
        },
        {
          label: 'Página individual',
          name: 'itemPage',
          widget: 'object',
          fields: [
            { label: 'Categoria', name: 'role', widget: 'string' },
            { label: 'Equipe', name: 'team', widget: 'string' },
            { label: 'Data de entrega', name: 'finishedDate', widget: 'string' }
          ]
        }
      ]
    },
    {
      label: 'Blog',
      name: 'blog',
      widget: 'object',
      fields: [
        { label: 'Título', name: 'title', widget: 'string' },
        {
          label: 'Botão',
          name: 'button',
          widget: 'object',
          fields: [
            { label: 'Rótulo', name: 'label', widget: 'string' },
            { label: 'URL', name: 'url', widget: 'string' }
          ]
        }
      ]
    },
    {
      label: 'Contato',
      name: 'contact',
      widget: 'object',
      fields: [
        { label: 'Título', name: 'title', widget: 'string' },
        {
          label: 'Form',
          name: 'form',
          widget: 'object',
          fields: [
            { label: 'Título', name: 'title', widget: 'string' },
            { label: 'Nome', name: 'name', widget: 'string' },
            { label: 'Email', name: 'email', widget: 'string' },
            { label: 'Mensagem', name: 'message', widget: 'string' },
            { label: 'Botão', name: 'button', widget: 'string' },
            {
              label: 'Mensagem de sucesso',
              name: 'successMessage',
              widget: 'string'
            }
          ]
        }
      ]
    },
    {
      label: 'Página de erro 404',
      name: 'notFoundPage',
      widget: 'object',
      fields: [
        { label: 'Título', name: 'title', widget: 'string' },
        { label: 'Mensagem', name: 'message', widget: 'string' },
        { label: 'Botão', name: 'button', widget: 'string' }
      ]
    }
  ]
}

export default Posts
