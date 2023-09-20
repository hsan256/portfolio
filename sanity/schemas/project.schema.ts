const schema = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        require,
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title' }
      },
      {
        name: 'githubLink',
        title: 'Github Link',
        type: 'url',
      },
      {
        name: 'liveLink',
        title: 'Live Link',
        type: 'url',
      },
      {
        name: 'views',
        title: 'Views',
        type: 'number',
        initialValue: 0,
      },
      {
        name: 'image',
        title: 'Image',
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
            { title: 'Fullstack', value: 'fullstack' },
            { title: 'Frontend', value: 'frontend' },
            { title: 'Backend', value: 'backend' },
            { title: 'Blockchain', value: 'blockchain' },
            { title: 'Artificial Intelligence', value: 'ai' },
            { title: 'Other', value: 'other' }
          ],
          layout: 'checkbox' // Render as checkboxes for multiple selection
        }
      },
      {
        name: 'technologies',
        title: 'Technologies Used',
        type: 'array',
        of: [{ type: 'string' }],
        validation: (Rule: any) => Rule.required().min(1),
        options: {
          list: [
            { title: 'React', value: 'react' },
            { title: 'Next.js', value: 'next.js' },
            { title: 'Angular', value: 'angular' },
            { title: 'Node.js', value: 'nodejs' },
            { title: 'PostgreSQL', value: 'postgresql' },
            { title: 'PlanetScale', value: 'planetscale' },
            { title: 'MongoDB', value: 'mongodb' },
            { title: 'Solidity', value: 'solidity' },
            { title: 'LangChain', value: 'langchain' },
          ],
          layout: 'checkbox'
        }
      },
      {
        name: 'startDate',
        title: 'Start Date',
        type: 'date',
        validation: (Rule: any) => Rule.min('1999-04-29').max('2100-12-31')
      },
      {
        name: 'endDate',
        title: 'End Date',
        type: 'date',
        validation: (Rule: any) => Rule.min('1999-04-29').max('2100-12-31')
      }
    ]
  }
  
  export default schema;