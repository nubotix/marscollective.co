import WorksFields from '@cmsUtils/works-fields'

const WorksAudiovisual = {
  name: 'works-Audiovisual',
  label: 'Trabalhos em audiovisual',
  folder: 'content/works',
  filter: { field: 'role', value: 'Audiovisual' },
  format: 'yaml',
  extension: 'yaml',
  media_folder: 'images',
  public_folder: 'images',
  sortable_fields: [],
  path: '{{slug}}/index',
  editor: { preview: false },
  fields: WorksFields
}

export default WorksAudiovisual
