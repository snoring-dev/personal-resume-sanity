export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'body',
      title: 'Experience Body',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'technical_stack',
      title: 'Technical Stack',
      type: 'array',
      of: [{type: 'text'}],
    },
  ],
}