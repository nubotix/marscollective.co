import WorksFields from '@cmsUtils/works-fields'

const Works = {
  name: 'works',
  label: 'Trabalhos',
  label_singular: 'trabalho',
  folder: 'content/works',
  format: 'yaml',
  extension: 'yaml',
  create: true,
  media_folder: 'images',
  public_folder: 'images',
  sortable_fields: [],
  path: '{{slug}}/index',
  editor: { preview: false },
  fields: WorksFields
}

export default Works
