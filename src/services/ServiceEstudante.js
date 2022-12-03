import { getDocs, addDoc, collection, doc, updateDoc, deleteDoc } from "firebase/firestore";
import db from "../db/db";

export default class ServiceEstudante {
	static get = callback => {
		const estudantes = [];
		getDocs(collection(db, "estudantes")).then(querySnapshot => {
			querySnapshot.forEach(doc => {
				estudantes.push({ id: doc.id, ...doc.data() });
			});
			callback(estudantes);
		});
	};

	static create = (estudante, callback) => {
		addDoc(collection(db, "estudantes"), estudante)
			.then(() => {
				callback();
			})
			.catch(error => {
				console.log(error);
			});
	};

	static update = (id, estudante, callback) => {
		updateDoc(doc(db, "estudantes", id), estudante)
			.then(() => {
				callback();
			})
			.catch(error => {
				console.log(error);
			});
	};

	static delete = (id, callback) => {
		deleteDoc(doc(db, "estudantes", id))
			.then(() => {
				callback(true);
			})
			.catch(error => console.log(error));
	};
}
