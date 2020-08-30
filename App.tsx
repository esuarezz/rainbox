import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RainbowScreen from './src/screens/rainbow'

import Amplify from 'aws-amplify'
import awsConfig from './aws-exports'

Amplify.configure(awsConfig)


export default function App() {
  return (
      <RainbowScreen/>
  );
}
