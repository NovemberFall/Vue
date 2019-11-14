import firebase from 'firebase';
import firebase from 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD-VyAXCSh-4cyp4FWLflbNF6R1-BMTkhE",
    authDomain: "music-online-chat.firebaseapp.com",
    databaseURL: "https://music-online-chat.firebaseio.com",
    projectId: "music-online-chat",
    storageBucket: "music-online-chat.appspot.com",
    messagingSenderId: "34846148953",
    appId: "1:34846148953:web:633d14870d629b85036448"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
export default firebaseApp.firestore()