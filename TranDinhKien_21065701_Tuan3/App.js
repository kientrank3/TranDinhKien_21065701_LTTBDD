import { Text, View, StyleSheet, Image,Pressable,TouchableOpacity } from 'react-native';
import Screen1 from './pages/screen1';
import Screen2 from './pages/screen2';
import Screen3 from './pages/screen3';
import Screen4 from './pages/screen4';
import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(0); 

  const totalPages = 4; 

  const nextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const renderPage = () => {
    switch (page) {
      case 0:
        return <Screen1/>;
      case 1:
        return <Screen2/>;
      case 2:
        return <Screen3/>;
      case 3:
        return <Screen4/>
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>{renderPage()}</View>
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={[styles.button, page === 0 && styles.disabledButton]} 
          onPress={previousPage}
          disabled={page === 0}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, page === totalPages - 1 && styles.disabledButton]} 
          onPress={nextPage}
          disabled={page === totalPages - 1}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height:'90%',
    alignItems: 'center',
    marginBottom: 10,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#ffbee8',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '25%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
  disabledButton: {
    backgroundColor: '#ccc', 
  },
});
