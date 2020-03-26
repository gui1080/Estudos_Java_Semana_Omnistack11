// REACT NAVIGATION RECOMENDADO PELO EXPO
// npm install @react-navigation/native
// ja q usamos expo: expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

// existe navegacao por abas 
// por drawer (menu da esquerda pra direita com links)
// stack navigator: apenas botoes (o que vamos usar)
// npm install @react-navigation/stack

import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import React from 'react'; 

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents'; 
import Detail from './pages/Detail'; 

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}