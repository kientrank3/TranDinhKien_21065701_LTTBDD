import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';

const views = {
  1: <Screen1 />,
  2: <Screen2 />,
  3: <Screen3 />,
  4: <Screen4 />,
};

export default function App() {
  const [currentView, setCurrentView] = useState<keyof typeof views>(4);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>{views[currentView]}</View>
      <View style={{ flexDirection: 'row', flexShrink: 1 }}>
        {Array.from(Array(4)).map((value, index) => (
          <View style={{ width: '25%' }}>
            <Button
              title={`Page ${index + 1}`}
              onPress={() => setCurrentView((index + 1) as keyof typeof views)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
