import PortfolioFields from '@cmsUtils/portfolio-fields'

const PortfolioAudiovisual = {
  name: 'portfolio-Audiovisual',
  label: 'Portfólio de audiovisual',
  folder: 'content/portfolio',
  filter: { field: 'role', value: 'Audiovisual' },
  media_folder: 'images',
  public_folder: 'images',
  sortable_fields: [],
  path: '{{slug}}/index',
  editor: { preview: false },
  fields: PortfolioFields
}

export default PortfolioAudiovisual
