export default {
  name: 'project-overview',
  title: 'Project Overview',
  type: 'document',
  fields: [
    {
      name: 'display_name',
      type: 'string',
      title: 'Display name',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
    },
    {
      name: 'start_date',
      type: 'date',
      title: 'Start date',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'company',
      type: 'string',
      title: 'Company',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'industry',
      type: 'string',
      title: 'Industry',
    },
    {
      name: 'size',
      type: 'string',
      title: 'Size (how much people are working there?)',
    },
    {
      name: 'website',
      type: 'string',
      title: 'Website',
    },
    {
      title: 'Content blocks',
      name: 'content_blocks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'richtext-block'}],
        },
      ],
    },
    {
      name: 'company_logo',
      type: 'image',
      title: 'Company logo',
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
    },
    {
      name: 'carousel',
      title: 'Carousel',
      type: 'array',
      of: [
        {
          type: 'carousel_image',
        },
      ],
    },
  ],
}
