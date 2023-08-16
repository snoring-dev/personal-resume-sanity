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
      name: 'show_title',
      type: 'boolean',
      title: 'Show title?',
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
  initialValue: {
    show_title: false,
  },
}
