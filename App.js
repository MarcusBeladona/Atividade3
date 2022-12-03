import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Estudante from "./src/screens/estudante/Estudante";
import AddEstudante from "./src/screens/estudante/AddEstudante";
import editEstudante from "./src/screens/estudante/editEstudante";

import Professor from "./src/screens/professor/Professor";
import AddProfessor from "./src/screens/professor/AddProfessor";
import EditProfessor from "./src/screens/professor/editProfessor";

const EstudanteStack = createNativeStackNavigator();
function EstudanteStackScreen() {
	return (
		<EstudanteStack.Navigator>
			<EstudanteStack.Screen name="Estudante" component={Estudante} options={{ title: "Estudantes" }} />
			<EstudanteStack.Screen name="AddEstudante" component={AddEstudante} options={{ title: "Adicionar Estudante" }} />
			<EstudanteStack.Screen name="editEstudante" component={editEstudante} options={{ title: "Editar Estudante" }} />
		</EstudanteStack.Navigator>
	);
}

const ProfessorStack = createNativeStackNavigator();
function ProfessorStackScreen() {
	return (
		<ProfessorStack.Navigator>
			<ProfessorStack.Screen name="Professor" component={Professor} options={{ title: "Professores" }} />
			<ProfessorStack.Screen name="AddProfessor" component={AddProfessor} options={{ title: "Adicionar Professores" }} />
			<ProfessorStack.Screen name="editProfessor" component={EditProfessor} options={{ title: "Editar Professor" }} />
		</ProfessorStack.Navigator>
	);
}

const Tab = createBottomTabNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName="Estudante">
				<Tab.Screen name="Estudantes" options={{ headerShown: false }} component={EstudanteStackScreen} />
				<Tab.Screen name="Professores" options={{ headerShown: false }} component={ProfessorStackScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
