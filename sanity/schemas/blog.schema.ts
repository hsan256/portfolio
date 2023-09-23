const blogSchema = {
    name: 'blog',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title' }
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
        validation: (Rule: any) => Rule.max(200) // Limit to 200 characters
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        validation: (Rule: any) => Rule.required(),
        options: {
          hotspot: true,
        }
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          list: [
            { title: 'Web Development', value: 'webdev' },
            { title: 'AI', value: 'ai' },
            { title: 'Blockchain', value: 'blockchain' },
            { title: 'Tutorials', value: 'tutorials' },
            // ... Add other relevant tags here
          ],
          layout: 'checkbox'
        }
      },
      {
        name: 'publishedDate',
        title: 'Published Date',
        type: 'date',
        validation: (Rule: any) => Rule.min('1999-04-29').max('2100-12-31')
      },
      {
        name: 'platform',
        title: 'Published On',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
        options: {
          list: [
            { title: 'Medium', value: 'medium' },
            { title: 'Dev.to', value: 'dev.to' },
            // ... Add other platforms as needed
          ],
        }
      },
      {
        name: 'originalLink',
        title: 'Link to Original Post',
        type: 'url',
        validation: (Rule: any) => Rule.required().uri({
            allowRelative: false,
            scheme: ['http', 'https']
        })
      }
    ]
}

export default blogSchema;