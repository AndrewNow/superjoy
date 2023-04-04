export default {
  name: 'faq',
  type: 'document',
  title: 'FAQ',
  fields: [
    {
      name: 'faqData',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          fields: [
            {
              type: 'string',
              name: 'question',
              title: 'Question',
              validation: (Rule) => Rule.required(),
            },
            {
              type: 'blockContent',
              name: 'answer',
              title: 'Answer',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'question',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'FAQ',
    },
  },
}
