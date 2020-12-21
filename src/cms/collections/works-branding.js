import WorksFields from '@cmsUtils/works-fields'

const WorksBranding = {
  name: 'works-branding',
  label: 'Trabalhos em branding',
  folder: 'content/works',
  filter: { field: 'role', value: 'Branding' },
  format: 'yaml',
  extension: 'yaml',
  media_folder: 'images',
  public_folder: 'images',
  sortable_fields: [],
  path: '{{slug}}/index',
  editor: { preview: false },
  fields: WorksFields
}

export default WorksBranding
