import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Main } from './@components/Main';
import { PaperProvider } from 'react-native-paper';
import TopBar from './@components/TopBar';
import BottomBar from './@components/BottomBar';

export default function App() {
  return (
    <PaperProvider>

      <TopBar />

        <View style={styles.container}>
            
            <Main />
            <StatusBar style="auto" />
            
        </View>
        
      <BottomBar />

    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 64
  },
});
