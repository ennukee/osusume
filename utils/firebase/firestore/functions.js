import firebase from '@/firebase-client';
import 'firebase/firestore';

const db = firebase.firestore();

export const getDocByID = async (id) => {
  const doc = await db.collection("config").doc(id).get();

  if (doc.exists) return Promise.resolve(doc.data())
  else return Promise.reject('No document with specified ID');
}