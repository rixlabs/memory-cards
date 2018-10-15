import firebase from 'firebase';

const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECTD_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
};

const app = firebase.initializeApp(config);

const db = app.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);
const auth = firebase.auth();
const authProvider = new firebase.auth.GoogleAuthProvider();
const currentUser = auth.currentUser;
const decksCollection = db.collection('decks');

export {
  db,
  auth,
  authProvider,
  currentUser,
  decksCollection,
};
