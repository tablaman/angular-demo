// Used to connect to db
// use if we have multiple exports you want to dump into 
// a single one and call it form there: e.g. firebase.auth
import * as firebase from 'firebase';


// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }

// database.ref()
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//     // console.log(snapshot.val().expenses);
//     // const test = snapshot.val().expenses;
//     // convert to array
//     // const array = Object.keys(test).map(key=>test[key]);

//     // you can also use forEach using snapshot!
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   })


// database.ref('expenses').push({
//   description: 'hello',
//   note: 'note',
//   createdAt: 0
// })


// ref() <-- root of db
// database.ref().set({
//   name: 'Milinda',
//   age: 26,
//   isSingle: false,
//   location: {
//     city: 'Perth',
//     country: 'Australia'
//   }
// }).then(()=> {console.log('cool!')})
// .catch(err=> console.log(err))

// // database.ref().set('my data');

// database.ref('age').set(27)
// database.ref('location/city').set('Colombo');
// database.ref('attrs').set ({
//     height: 1,
//     weight: 55
// }).then(() => { console.log('attrs set')} )
// .catch((err)=> console.log(err))

// Remove
// database.ref('isSingle') //or .ref('blah').set(null)
//   .remove()
//   .then(()=> console.info('removed'))
//   .catch(err=>console.log(err));

// // Update
// database.ref().update({
//   name: 'Milza',
//   age: 21,
//   job: false
// })



// read
// database.ref('location')
//   .once('value')
//   .then((snapshot)=>{
//     const val = snapshot.val();
//     console.log(val)
//   })
//   .catch(e => {
//     console.log(e)
//   })

//   // using this callback to run over and over on 'on'
//   database.ref()
//     .on('value', (snapshot) => console.log(snapshot.val()) )



