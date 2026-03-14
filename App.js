import { StyleSheet, Text, View } from 'react-native';
import Alumno from './Alumno';

export default function App() {
  return (

    <View style={styles.container}>
      <Text>Hola Mundo</Text>
      <Alumno nombre = "Emilio Rivera" matricula = "2013503"/>
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6e2fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
