//yarn start
//sudo npm install -g expo-cli
//expo init mobile-app


// react native n tem as mesmas tags do HTML
// qualquer container/section por usar View
// Text vale pra qualquer tipo de texto
// Nao tem semantica/uma tag de maior importancia
// n tem classname, id


// flex: todo elemento ja tem display flex por padrao
//onde no CSS a segunda palavra era separada por hifen, aqui tudo fica junto com uma letra mauscula
//o que n eh numero fica separado por ''

// n existe heranca de estilos
// cada elemento tem sua descricao
// exemplo, o titulo

/*

import { StyleSheet, Text, View } from 'react-native';

//estrutura
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
    </View>
  );
}

//estilo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    color: '#FFF', 
    fontSize: 20,
  }
});

*/

import React from 'react';

import 'intl'; 
import 'intl/locale-data/jsonp/pt-BR'; 


import Routes from './src/routes'; 

export default function App() {
  return (
    <Routes />
  );
}
