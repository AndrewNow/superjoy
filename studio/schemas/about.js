export default {
  name: 'about',
  title: 'About page',
  type: 'document',
  fields: [
    {
      type: 'object',
      title: 'OUR MISSION SECTION',
      description: "Content for the 'Our mission' section of the About page.",
      name: 'ourMission',
      fields: [
        {
          type: 'blockContentLimited',
          name: 'descriptionOurMission',
          title: 'Descriptive text',
          description: 'Avoid using bullet points or numbered lists here.',
          validation: (Rule) => {
            Rule.required(),
              Rule.max(600).warning("The text here ideally shouldn't exceed 600 characters.")
          },
        },
      ],
      preview: {
        select: {
          title: 'header',
        },
      },
    },
    {
      type: 'object',
      title: 'WHO WE ARE SECTION',
      description: "Content for the 'Who we are' section of the About page.",
      name: 'whoWeAre',
      fields: [
        {
          type: 'string',
          name: 'header',
          title: 'Header',
          description: 'Leave blank to set this field to its default placeholder.',
          validation: (Rule) => Rule.required(),
        },
        {
          type: 'blockContentLimited',
          name: 'descriptionWhoWeAre',
          title: 'Descriptive text',
          description: 'Avoid using bullet points or numbered lists here.',
          validation: (Rule) => {
            Rule.required(),
              Rule.max(800).warning("The text here ideally shouldn't exceed 800 characters.")
          },
        },
      ],
      preview: {
        select: {
          title: 'header',
        },
      },
    },
    {
      type: 'object',
      title: 'TEAM SECTION',
      description: "Content for the 'Who we are' section of the About page.",
      name: 'team',
      fields: [
        {
          type: 'string',
          name: 'founderBio',
          title: 'Founders section descriptive text',
          description:
            'Try to keep this brief (1-4 sentences). Leave blank to set this field to its default placeholder.',
          validation: (Rule) => Rule.required(),
        },
        {
          type: 'image',
          name: 'danielaPortrait',
          title: "Daniela's portrait",
          description:
            'Minimum 330px. Image will be cropped to 1:1 aspect ratio. Border radius will be added automatically, so please upload a square image. Non-square images will be automatically cropped with no tuning.',
          validation: (Rule) => Rule.required(),
        },
        {
          type: 'image',
          name: 'aliPortrait',
          title: "Ali's portrait",
          description:
            'Minimum 330px. Image will be cropped to 1:1 aspect ratio. Border radius will be added automatically, so please upload a square image. Non-square images will be automatically cropped with no tuning.',
          validation: (Rule) => Rule.required(),
        },
      ],
      preview: {
        select: {
          title: 'team',
        },
      },
    },
  ],

  preview: {
    select: {
      // title: `test`,
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: "About page data",
        subtitle: "Modify the about page data here."
      }
    },
  },
}
