export const postSchema = {
  collection: 'Posts',
  fields: {
    Artitle: 'string',
    Entitle: 'string',
    ArBody: 'string',
    EnBody: 'string',
    userId: 'reference', // Reference to the User entity
    // Add any other post fields as needed
  },
};
