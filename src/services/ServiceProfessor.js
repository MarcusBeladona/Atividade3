import { getDocs, addDoc, collection, doc, updateDoc, deleteDoc } from "firebase/firestore";
import db from "../db/db";

export default class ServiceProfessor {
	static get = callback => {
		const professores = [];
		getDocs(collection(db, "professores")).then(querySnapshot => {
			querySnapshot.forEach(doc => {
				professores.push({ id: doc.id, ...doc.data() });
			});
			callback(professores);
		});
	};

	static create = (professor, callback) => {
		addDoc(collection(db, "professores"), professor)
			.then(() => {
				callback();
			})
			.catch(error => {
				console.log(error);
			});
	};

	static update = (id, professor, callback) => {
		updateDoc(doc(db, "professores", id), professor)
			.then(() => {
				callback();
			})
			.catch(error => {
				console.log(error);
			});
	};

	static delete = (id, callback) => {
		deleteDoc(doc(db, "professores", id))
			.then(() => {
				callback(true);
			})
			.catch(error => console.log(error));
	};
}
