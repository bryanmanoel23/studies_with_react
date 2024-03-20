import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './main'


export default function Home(){

  function handlerbutton(){
    console.log('botão clicado')
  }

  return(
    <View style={styles.container}>
    <Text key="1" style={styles.View1}>teste de cria</Text>

    <Text key="2"
    style={styles.View2}>hello world</Text>

   <View style={styles.form}>
   <TextInput 
    style={ styles.input}
    placeholder='Digite o texto...'
    placeholderTextColor={'#6B6B6B6B'}
    />

    <TouchableOpacity style={styles.button} onPress={handlerbutton}>
      <Text style={ styles.buttonText}>+</Text>
    </TouchableOpacity>
   </View>
    </View>
  );

}