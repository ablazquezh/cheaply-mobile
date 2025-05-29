import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

export function Main() {
  return (
    <>
        <Text>Open up App.js to sddtart working on your app!</Text>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
        </Button>
    </>
  );
}

