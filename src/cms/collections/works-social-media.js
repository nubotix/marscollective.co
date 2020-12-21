import WorksFields from '@cmsUtils/works-fields'

const WorksSocialMedia = {
  name: 'works-social-media',
  label: 'Trabalhos em social media',
  folder: 'content/works',
  filter: { field: 'role', value: 'Social Media' },
  format: 'yaml',
  extension: 'yaml',
  media_folder: 'images',
  public_folder: 'images',
  sortable_fields: [],
  path: '{{slug}}/index',
  editor: { preview: false },
  fields: WorksFields
}

export default WorksSocialMedia
