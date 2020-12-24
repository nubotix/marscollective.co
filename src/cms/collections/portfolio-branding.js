import PortfolioFields from '@cmsUtils/portfolio-fields'

const PortfolioBranding = {
  name: 'portfolio-branding',
  label: 'Portfólio de branding',
  folder: 'content/portfolio',
  filter: { field: 'role', value: 'Branding' },
  media_folder: 'images',
  public_folder: 'images',
  sortable_fields: [],
  path: '{{slug}}/index',
  editor: { preview: false },
  fields: PortfolioFields
}

export default PortfolioBranding
