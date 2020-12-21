import WorksFields from '@cmsUtils/works-fields'

const WorksWebDesign = {
  name: 'works-web-design',
  label: 'Trabalhos em web design',
  folder: 'content/works',
  filter: { field: 'role', value: 'Web design' },
  format: 'yaml',
  extension: 'yaml',
  media_folder: 'images',
  public_folder: 'images',
  sortable_fields: [],
  path: '{{slug}}/index',
  editor: { preview: false },
  fields: WorksFields
}

export default WorksWebDesign
