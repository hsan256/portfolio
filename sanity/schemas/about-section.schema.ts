const aboutMe = {
    name: "aboutMe",
    title: "About Me Page",
    type: "document",
    fields: [
        // Hero Section
        {
            name: "name",
            title: "Full Name",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "tagline",
            title: "Tagline",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "avatar",
            title: "Profile Picture",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [], // You can define custom styles here if needed
                    lists: [], // Define list types if required
                    marks: {
                        // Define custom decorators if needed
                        decorators: [{ title: 'Strong', value: 'strong' }],
                        // Here we define the types of annotations which are allowed
                        annotations: [
                            {
                                name: "externalLink",
                                type: "object",
                                title: "External link",
                                fields: [
                                    {
                                        name: "href",
                                        type: "url",
                                        title: "URL"
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        // Experience Section
        {
            name: "experiences",
            title: "Experiences",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "role",
                            title: "Role",
                            type: "string",
                        },
                        {
                            name: "company",
                            title: "Company",
                            type: "string",
                        },
                        {
                            name: "companyLogo",
                            title: "Company Logo",
                            type: "image",
                            options: {
                                hotspot: true,
                            }
                        },
                        {
                            name: "timeframe",
                            title: "Timeframe",
                            type: "string",
                        },
                        {
                            name: "type",
                            title: "Job Type",
                            type: "string",
                        },
                        {
                            name: "currentPosition",
                            title: "Currently in this position?",
                            type: "boolean",
                            description: "Check if you are currently in this position.",
                        }
                    ]
                }
            ]
        },
        // Skills Section
        {
            name: "skills",
            title: "Skills",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "technology",
                            title: "Technology",
                            type: "string",
                        },
                        {
                            name: "iconLink",
                            title: "Icon Link",
                            type: "url",
                        },
                        {
                            name: "iconWhiteBackground",
                            title: "White Background?",
                            type: "boolean",
                            description: "Do you want a white background for this icon?",
                        }
                    ]
                }
            ]
        },
        {
            name: "skillsAssessmentPlatform",
            title: "Skills Assessment Platform",
            type: "url",
            description: "Link to the skills assessment platform.",
        },
        // Strengths Section
        {
            name: "strengths",
            title: "Strengths",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            title: "Title",
                            type: "string",
                        },
                        {
                            name: "description",
                            title: "Description",
                            type: "text",
                        },
                        {
                            name: "illustration",
                            title: "Illustration",
                            type: "image",
                            options: {
                                hotspot: true,
                            }
                        }
                    ]
                }
            ]
        }
    ],
};

export default aboutMe;