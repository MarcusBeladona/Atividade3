import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import ServiceEstudante from "../../services/ServiceEstudante";

export default ({ navigation, route }) => {
	const [estudantes, setEstudantes] = useState([]);
	useEffect(() => {
		ServiceEstudante.get(estudantes => {
			setEstudantes(estudantes);
		});
	}, [route]);

	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<FlatList
					data={estudantes}
					renderItem={({ item }) => (
						<View style={styles.cardItem}>
							<View style={styles.cardInfo}>
								<Text>{item.nome}</Text>
								<Text>{item.curso}</Text>
								<Text>{item.ira}</Text>
							</View>
							<View style={styles.cardButtons}>
								<View style={styles.minibutton}>
									<Button title="Editar" onPress={() => navigation.navigate("editEstudante", { item: item })} />
								</View>
								<View style={[styles.minibutton, { marginLeft: 8 }]}>
									<Button title="Excluir" onPress={() => ServiceEstudante.delete(item.id, () => navigation.navigate("Estudante", { refresh: true }))} />
								</View>
							</View>
						</View>
					)}
				></FlatList>
			</View>
			<View style={styles.button}>
				<Button
					title="Adicionar"
					onPress={() => {
						navigation.navigate("AddEstudante");
					}}
				></Button>
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
		height: "90%",
		borderColor: "#000",
		borderWidth: 1,
		borderRadius: 8,
		borderStyle: "solid",
		marginBottom: 16,
	},
	cardItem: {
		height: "auto",
		flexDirection: "column",
		padding: 16,
		alignItems: "center",
		backgroundColor: "#eee",
		borderRadius: 8,
		marginBottom: 8,
	},
	cardInfo: {
		flex: 1,
		width: "100%",
		marginBottom: 8,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	cardButtons: {
		width: "100%",
		height: "auto",
		flexDirection: "row",
		height: 40,
		flex: 1,
	},
	minibutton: {
		flex: 1,
	},
	button: {
		borderRadius: 8,
		overflow: "hidden",
		width: "100%",
	},
});
