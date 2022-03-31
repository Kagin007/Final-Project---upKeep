// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// firebase.intializeApp({
//         apiKey: "AIzaSyCRC2fOOjC5EYpfZsp4qli7xWVx_MDfyHI",
//         authDomain: "upkeeper-messenger.firebaseapp.com",
//         projectId: "upkeeper-messenger",
//         storageBucket: "upkeeper-messenger.appspot.com",
//         messagingSenderId: "748655613949",
//         appId: "1:748655613949:web:0302b7cda9f8a4e1b5eb94",
//         measurementId: "G-KMB4YHXQKY"

// })

// const auth = firebase.auth();
//   const firestore = firebase.firestore();

function Messenger() {
  return (
    <div>
      <h1>Message {user}</h1>
      <form>
        <label>name</label>
        <input type="text" name="namee" />

        <label>Email</label>
        <input type="email" name="user_email" />

        <label>Message</label>
        <textarea name="message" rows="4" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Messenger;
