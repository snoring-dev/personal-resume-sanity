export default {
  name: 'language',
  title: 'Language',
  type: 'document',
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'keyValue',
        },
      ],
    },
  ],
}
