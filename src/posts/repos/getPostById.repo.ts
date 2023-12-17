import * as admin from 'firebase-admin';
import { postSchema } from '../posts.repo';
import { HttpException, HttpStatus } from '@nestjs/common';
export const GetPostByIdRepo = async (data) => {
  const post = await admin
    .firestore()
    .collection(postSchema.collection)
    .doc(data.id)
    .get();
  //service !!!!!!!
  if (post.data().userId !== data.user) {
    throw new HttpException('NOT AUTHRIZED', HttpStatus.UNAUTHORIZED);
  }
  //   const posts = [];
  //   postsDocuments.forEach((doc) => {
  //     posts.push({ ...doc.data(), id: doc.id, ...data });
  //   });
  //console.log(post.data());
  return post.data();
};
