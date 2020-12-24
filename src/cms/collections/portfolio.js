import PortfolioFields from '@cmsUtils/portfolio-fields'

const Portfolio = {
  name: 'portfolio',
  label: 'Portfolio',
  label_singular: 'trabalho',
  folder: 'content/portfolio',
  create: true,
  media_folder: 'images',
  public_folder: 'images',
  sortable_fields: [],
  path: '{{slug}}/index',
  fields: PortfolioFields
}

export default Portfolio
