const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./fir-fe3bb-firebase-adminsdk-8h07s-b0f1526a03.json');
const cors = require('cors')({ orgin: true });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.login = functions.https.onRequest((request, response) => {
  cors(({ body: { email, password } }), response, () => {
    admin.database().ref(`users/${email}`).once('value')
    .then(({ val: { password, displayName } }) => {
      console.log('login data', email, password, displayName);
      return Promise.resolve()
    })
    .then(() => response.status(200).json({ message: 'OK' }))
    .catch((err) => response.status(500).json({ error: err }));
  });
})

exports.signUp = functions.https.onRequest((request, response) => {
  cors(({ body: { email, username, password } }), response, () => {
    // TODO: check if email exists
    admin.auth().createUser({
        displayName: username,
        email,
        password
    })
    .then((userRecord) => {
      console.log("Successfully created new user:", userRecord);
      return admin.database().ref('users').push({
        uid: userRecord.uid,
        email: userRecord.email,
        password: userRecord.password
      })
    })
    .then(() => response.status(200).json({ message: 'OK' }))
    .catch((err) => response.status(500).json({ error: err }));
  });
})

exports.logout = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    firebase.auth().signOut()
    .then(() => response.status(200).json({ message: 'User Logout' }))
    .catch((err) => response.status(500).json({ error: err }));
  })
})

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://fir-fe3bb.firebaseio.com',
});
