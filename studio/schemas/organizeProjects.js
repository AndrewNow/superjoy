export default {
  name: 'organizedProjects',
  title: 'Organize Projects Order',
  type: 'document',
  fields: [
    {
      name: 'allProjects',
      title: 'Organize Project order',
      description:
        'Projects will appear in order as laid out below. The first project will appear largest, the second and third slightly smaller, and all other projects below that will be laid out in list view.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'projects',
          },
        },
      ],
    },
  ],

  preview: {
    select: {
      // title: `test`,
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: 'Add/Edit projects here',
        subtitle: 'Add projects here for them to appear on the website.',
      }
    },
  },
}
