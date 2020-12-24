import PortfolioFields from '@cmsUtils/portfolio-fields'

const PortfolioWebDesign = {
  name: 'portfolio-web-design',
  label: 'Portfólio de web design',
  folder: 'content/portfolio',
  filter: { field: 'role', value: 'Web design' },
  media_folder: 'images',
  public_folder: 'images',
  sortable_fields: [],
  path: '{{slug}}/index',
  editor: { preview: false },
  fields: PortfolioFields
}

export default PortfolioWebDesign
