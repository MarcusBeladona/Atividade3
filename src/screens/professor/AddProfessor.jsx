import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import ServiceProfessor from "../../services/ServiceProfessor";

export default ({ navigation }) => {
	const [nome, setnome] = useState("");
	const [curso, setcurso] = useState("");
	const [salario, setsalario] = useState("");

	const submit = () => {
		ServiceProfessor.create({ nome, curso, salario }, () => {
			navigation.navigate("Professor", { refresh: true });
		});
	};

	return (
		<View style={styles.container}>
			<TextInput
				value={nome}
				placeholder="Nome"
				onChangeText={nome => {
					setnome(nome);
				}}
				style={styles.input}
			/>

			<TextInput
				value={curso}
				placeholder="Curso"
				onChangeText={curso => {
					setcurso(curso);
				}}
				style={styles.input}
			/>

			<TextInput
				value={salario}
				placeholder="Salario"
				onChangeText={salario => {
					setsalario(salario);
				}}
				keyboardType="numeric"
				style={styles.input}
			/>

			<View style={styles.button}>
				<Button title="Salvar" onPress={submit}></Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	card: {
		padding: 16,
		width: "100%",
		height: "80%",
		borderColor: "#000",
		borderWidth: 1,
		borderRadius: 8,
		borderStyle: "solid",
		marginBottom: 16,
	},
	button: {
		borderRadius: 8,
		overflow: "hidden",
		width: "100%",
	},
	input: {
		width: "100%",
		padding: 8,
		borderColor: "#000",
		borderWidth: 1,
		borderRadius: 8,
		borderStyle: "solid",
		marginBottom: 16,
	},
});
