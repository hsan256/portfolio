const schema = {
    name: "blogPlaylist",
    title: "Blog Playlist",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "blogs",
        title: "blogs",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "blog" }],
          },
        ],
      },
    ],
  };
  
  export default schema;