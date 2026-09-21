import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Feitiços</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'PlayfairDisplay_400Regular',
},
});
