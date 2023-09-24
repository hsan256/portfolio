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
        name: 'category',
        title: 'Category',
        type: 'array',
        of: [{ type: 'string' }],
        validation: (Rule: any) => Rule.required().min(1), // Ensure at least one category is selected
        options: {
          list: [
            { title: 'Full Stack', value: 'fullstack' },
            { title: 'Front End', value: 'frontend' },
            { title: 'Back End', value: 'backend' },
            { title: 'Other', value: 'other' }
          ],
          layout: 'checkbox' // Render as checkboxes for multiple selection
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
      },
      {
        name: 'views',
        title: 'Views',
        type: 'number',
        initialValue: 0,
      },
    ]
}

export default blogSchema;