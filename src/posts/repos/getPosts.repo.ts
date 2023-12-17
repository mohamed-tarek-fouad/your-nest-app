import * as admin from 'firebase-admin';
import { postSchema } from '../posts.repo';
export const GetPostsRepo = async (userId) => {
  console.log(userId);
  const postsDocuments = await admin
    .firestore()
    .collection(postSchema.collection)
    .where('userId', '==', userId)
    .get();
  const posts = [];
  postsDocuments.forEach((doc) => {
    posts.push({ ...doc.data(), id: doc.id, userId });
  });
  return posts;
};
