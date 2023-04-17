export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'projectName',
      title: 'Project name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image should be 1850x1035 at minimum.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'video',
      title: 'Video embed',
      description: 'Paste Amazon S3 storage link to video here.',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descriptive text',
      description: 'Descriptive text that will be displayed underneath the image',
      type: 'string',
      validation: (Rule) =>
        Rule.max(200).warning("The description shouldn't be longer than 200 characters"),
    },
    {
      name: 'gameMode',
      title: 'Game Mode',
      description: 'Ex: 2v2 Arenas, Competitive',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'client',
      title: 'Client',
      description: 'Ex: National Football League & Enthusiast Gaming',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'code',
      title: 'Code',
      description: 'Ex: 0893-8977-9494',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imageArray',
      title: 'More images',
      type: 'array',
      description: 'Add more images here.',
      of: [
        {
          type: 'image',
          name: 'additionalImage',
          title: 'Image',
        },
      ],
    },
  ],

  preview: {
    select: {
      media: 'mainImage',
      title: 'projectName',
    },
  },
}
