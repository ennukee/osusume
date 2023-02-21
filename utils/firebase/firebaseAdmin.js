import * as admin from "firebase-admin";
import serviceAccount from './serviceAccount.json';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: serviceAccount,
    });
  } catch (e) {
    console.log("Failed to initialize App: " + e);
  }
}

export default admin;