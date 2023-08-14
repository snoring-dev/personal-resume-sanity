export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'position_title',
      type: 'string',
      title: 'Position title',
    },
    {
      name: 'company_name',
      type: 'string',
      title: 'Company name',
    },
    {
      name: 'location_name',
      type: 'string',
      title: 'Location name',
    },
    {
      name: 'start_date',
      type: 'date',
      title: 'Start date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'end_date',
      type: 'date',
      title: 'End date',
    },
    {
      name: 'is_present',
      type: 'boolean',
      title: 'Are you still working here?',
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
