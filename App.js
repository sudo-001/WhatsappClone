import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainRoot from './routes/main';

export default function App() {
  return (
    <>
      <MainRoot />
      <StatusBar hidden />
    </>
  );
}
