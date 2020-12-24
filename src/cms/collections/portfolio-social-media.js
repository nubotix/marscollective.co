import PortfolioFields from '@cmsUtils/portfolio-fields'

const PortfolioSocialMedia = {
  name: 'portfolio-social-media',
  label: 'Portfólio de social media',
  folder: 'content/portfolio',
  filter: { field: 'role', value: 'Social Media' },
  media_folder: 'images',
  public_folder: 'images',
  sortable_fields: [],
  path: '{{slug}}/index',
  editor: { preview: false },
  fields: PortfolioFields
}

export default PortfolioSocialMedia
