import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import MainTextField from './MainTextField';

export function Main() {
  return (
    <>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
        </Button>
        <View style={{padding:20, height: "100%", width: "80%"}}>
          <MainTextField />
        </View>
    </>
  );
}

