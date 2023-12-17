import * as admin from 'firebase-admin';
import { postSchema } from '../posts.repo';
export const CreatePostRepo = async (postDto) => {
  const postDocumentId = await admin
    .firestore()
    .collection(postSchema.collection)
    .add(postDto);
  const postDocument = (await postDocumentId.get()).data();
  return { ...postDocument, id: postDocumentId.id, userId: postDto.userId };
};
