import { Text, SafeAreaView, StyleSheet,View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import ShoppingList from './components/ShoppingList'
import ShoppingGrid from './components/ShoppingGrid'
// or any files within the Snack

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
