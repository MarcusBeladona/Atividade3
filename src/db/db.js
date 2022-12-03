import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCpaWVKzn4fMefRlmb0CuAhChCiDD0tZ34",
	authDomain: "myapp-567b2.firebaseapp.com",
	projectId: "myapp-567b2",
	storageBucket: "myapp-567b2.appspot.com",
	messagingSenderId: "171565932382",
	appId: "1:171565932382:web:38cc2175485850b00bb9cf",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
