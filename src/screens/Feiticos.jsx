import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display';
import api from '../services/api';
import { useState } from 'react';

export default function Spells() {

  const navigation = useNavigation();

  const [spells, setSpells] = useState([]);


  useEffect(() => {
    try {
      const setup = async () => {
        await loadData()
      }
      setup();
    } catch (error) {
      console.log(error);
      Alert.alert('Ocorreu um erro');
    }
  }, []);


  useFocusEffect(
    useCallback(() => {
      async function load() {
        await loadData();
      }
      load();
    }, [])
  );
  

  async function loadData() {
    try {
      const response = await api.get('/categorias');
      setSpells(response.data.result);
    } catch (error) {
      console.log(error);
      Alert.alert('Ocorreu um erro', error.message);
    }

  }

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
