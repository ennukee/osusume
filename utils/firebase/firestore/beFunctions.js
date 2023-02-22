import admin from "@/firebase-admin";

/*
 * used in getStaticProps, getStaticPaths, etc
 ! NOT client/non-SSR code 
*/
export const adminDocById = async (id) => {
  const doc = await admin.firestore().collection("config").doc(id).get();
  if (doc.exists) {
    return doc.data();
  }
  return null;
}