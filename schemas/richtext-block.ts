export default {
  name: 'richtext-block',
  title: 'Richtext Block',
  type: 'document',
  fields: [
    {
      name: 'display_name',
      type: 'string',
      title: 'Display name',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'body',
      title: 'Experience Body',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
