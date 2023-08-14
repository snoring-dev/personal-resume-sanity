// schemas/pet.js
export default {
  name: 'resume',
  type: 'document',
  title: 'Resume',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'lang',
      type: 'string',
      title: 'Language',
    },
    {
      title: 'Personal Data',
      name: 'personal_data',
      type: 'reference',
      to: [{type: 'personalData'}],
    },
  ],
}
