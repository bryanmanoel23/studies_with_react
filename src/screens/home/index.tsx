import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './main'
import { Participant } from '../../componentes/participant';


export default function Home(){
const [ participantes, setParticipantes] = useState<string[]>([])
const [ participantesName, setPartipanteName ] = useState('')

  function handlerbutton(){
    if(participantes.includes(participantesName)){
      return Alert.alert('Atenção','Usuário já cadastrado')
    }

    setParticipantes(prevState => [...participantes,participantesName])
    setPartipanteName('')
  
  }

  function removerParticipant(name: string){

    Alert.alert('Atenção !', `deseja remover o usuario ${name} ?`, [
      {
        text: 'Sim',
        onPress : ()=> setParticipantes(prevState => prevState.filter(participantes => participantes !== name) )
      },
      {
        text: 'Não',
        style: 'cancel'

      }
    ],
   )
    console.log(`Participante ${name} removido`)
  }

  return(    
    <View style={styles.container}>
      
    <Text key="1" style={styles.View1}>Nome do Evento</Text>

    <Text key="2"
    style={styles.View2}>22 de março de 2024</Text>

   <View style={styles.form}>
   <TextInput 
    style={ styles.input}
    placeholder='Digite o texto...'
    placeholderTextColor={'#6B6B6B6B'}
    onChangeText={ setPartipanteName}
    value={participantesName}
    />

    <TouchableOpacity style={styles.button} onPress={handlerbutton}>
      <Text style={ styles.buttonText}>+</Text>
    </TouchableOpacity>
    
   </View>

   <FlatList data = {participantes}
   keyExtractor={item => item}
   renderItem= { ({item}) => ( <Participant key={item}
    name={ item }
     onRemove={()=> removerParticipant(item)} />)}
     showsVerticalScrollIndicator={false}
     ListEmptyComponent={
      <Text style={styles.componentEmpt }>Ninguém chegou no evento ainda ? adicione participantes a sua lista de presença.</Text>
     }
   />
     
    
    
    </View> 
    
  );

}
