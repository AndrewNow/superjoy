export default {
  name: 'landing',
  title: 'Homepage landing section',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image should be 1920x1080 at minimum.',
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
      name: 'partners',
      title: 'Our trusted partners',
      type: 'array',
      description: "Array of images for the 'our trusted partners' section.",
      of: [
        {
          type: 'image',
          name: 'partnerImage',
          title: 'Partner logo',
        },
      ],
    },
  ],

  preview: {
    select: {
      media: 'mainImage',
      title: 'Landing image',
    },
  },
}
