  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  import { 
    getFirestore, 
    collection, 
    addDoc,
    getDocs,
    deleteDoc,
    onSnapshot,
    doc,
    getDoc,
    updateDoc
  } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCEQ-YDSzc54KR021W8KBYa42LE_bdqxik",
    authDomain: "fir-javascript-crud-1429e.firebaseapp.com",
    projectId: "fir-javascript-crud-1429e",
    storageBucket: "fir-javascript-crud-1429e.appspot.com",
    messagingSenderId: "754091143079",
    appId: "1:754091143079:web:409fdcdc3bcff1d946d082"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore()

  export const saveTask = (title, description)=>{
    //console.log(title, description)
    addDoc(collection(db, 'tasks'), {title, description})
  }
  //export const getTasks = () => console.log('tasks list')
  export const getTasks = () => getDocs(collection(db, 'tasks'))

  /* export const onGetTasks = () => console.log('onGetTasks')

  export {
    onSnapshot,
    collection,
    db
  } */

  export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback)
  //export const deleteTask = id => console.log(id)
  export const deleteTask = id => deleteDoc(doc(db, 'tasks', id));

  export const getTask = (id) => getDoc(doc(db, "tasks",id));

  export const updateTask = (id, newFields) => 
  updateDoc(doc(db, 'tasks', id), newFields)