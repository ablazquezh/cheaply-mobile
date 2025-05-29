import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import MainTextField from './primitive/MainTextField';

export function Main() {
  return (
    <View style={styles.textfield}>
        
        <View style={{padding: 10, paddingTop: 15 , height: "50%", width: "90%"}}>
          <MainTextField />
        
          <Button mode="contained" style={{width: "100%", borderRadius: 10, marginTop: 15}}
            onPress={() => console.log('Pressed')}>
              Buscar
          </Button>

        </View>
    </ View>
  );
}

const styles = StyleSheet.create({
  textfield: {
    width: "80%",
    height: "100%",
    marginTop: 10,
    //flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center'
  },
});