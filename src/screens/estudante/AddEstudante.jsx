import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import ServiceEstudante from "../../services/ServiceEstudante";

export default ({ navigation }) => {
	const [nome, setnome] = useState("");
	const [curso, setcurso] = useState("");
	const [ira, setira] = useState(0);

	const submit = () => {
		ServiceEstudante.create({ nome, curso, ira }, () => {
			navigation.navigate("Estudante", { refresh: true });
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
				value={ira}
				placeholder="Ira"
				onChangeText={ira => {
					setira(ira);
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
