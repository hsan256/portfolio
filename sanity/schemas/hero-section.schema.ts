const heroSchema = {
    name: "hero",
    title: "Hero Section",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Intro Title",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "words",
            title: "Typist Words",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "socialLinks",
            title: "Social Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "type",
                            title: "Type",
                            type: "string",
                            options: {
                                list: ['linkedin', 'github', 'medium'],
                            },
                            validation: (Rule: any) => Rule.required(),
                        },
                        {
                            name: "url",
                            title: "URL",
                            type: "url",
                            validation: (Rule: any) => Rule.required(),
                        },
                    ],
                },
            ],
        },
        {
            name: "email",
            title: "Email Address",
            type: "email",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "resumeLink",
            title: "Resume Link",
            type: "url",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule: any) => Rule.required(),
        },
    ],
};

export default heroSchema;
