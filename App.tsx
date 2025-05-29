import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Main } from './@components/Main';
import { PaperProvider } from 'react-native-paper';
import TopBar from './@components/primitive/TopBar';
import BottomBar from './@components/primitive/BottomBar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

function AppStatusBar() {
  const insets = useSafeAreaInsets();

  return(
    <>
    <View style={{backgroundColor:"", width: "100%", height: insets.top}} />
    <StatusBar style="auto" />
    </>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
    <PaperProvider>
      
      <AppStatusBar />
      <TopBar />

      <View style={styles.container}>
        <Main />
      </View>   
      
      <BottomBar />

    </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    //justifyContent: 'center'
  },
});
