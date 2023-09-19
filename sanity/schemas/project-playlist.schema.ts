const schema = {
    name: "projectPlaylist",
    title: "Project Playlist",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "projects",
        title: "projects",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "project" }],
          },
        ],
      },
    ],
  };
  
  export default schema;