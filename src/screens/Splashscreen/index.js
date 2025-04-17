import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import LogoPega from '../../../assets/PeganaTela.png'

export const  Splashscreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={LogoPega}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.nome}> PEGA NA TELA
        
      </Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  nome:{
   color:'#000',
   fontSize:15,
   fontWeight:'bold',
   marginBottom:10,
  },
});
