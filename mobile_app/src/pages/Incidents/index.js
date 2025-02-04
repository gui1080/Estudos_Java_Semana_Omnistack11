import React, { useEffect, useState } from 'react';
import { View,FlatList, Image, Text, TouchableOpacity } from 'react-native'
//flatlist permite o scroll

//npm install intl (para formatacao de preco que n tem no android aparentemente)
import { Feather } from '@expo/vector-icons'; 
import logoImg from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native'; 

import styles from './styles'; 

import api from '../../services/api'

export default function Incidents(){

    const [incidents, setIncidents] = useState([]); 
    const [total, setTotal] = useState(0); 
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);  

    const navigation = useNavigation(); //useHistory

    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident }); 
    }


    async function loadIncidents(){

        if(loading){
            return; 
        }

        if(total > 0 && incidents.length == total){
            return; 
        }

        setLoading(true); 

        const response = await api.get('incidents', {
            params: { page }
        });

        
        setIncidents([...incidents, ...response.data]); 
        setTotal(response.headers['x-total-count']); // o total que a gente mandava no headers
        setPage(page + 1); 
        setLoading(false); 
    }

    useEffect(() => {
        loadIncidents(); 
    }, []); 

    return(
        <View style={ styles.container }>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>. 
                </Text>  
            </View>

            <Text style={styles.title}>
                Bem Vindo!
            </Text>    

            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve o dia!  
            </Text>

            <FlatList style={styles.incidentList}
            
            data={incidents}

            keyExtractor={incident => String(incident.id)}

            showsVerticalScrollIndicator={false}
            onEndReached={loadIncidents}
            onEndReachedThreshold={0.3}
            renderItem={( { item: incident  } ) => (

                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentProperty}>{incident.name}}</Text>

                    <Text style={styles.incidentProperty}>Caso:</Text>
                    <Text style={styles.incidentProperty}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>Valor:</Text>
                    <Text style={styles.incidentProperty}>{Intl.NumberFormat('pt-BR', {
                        style:'currency', 
                        currency: 'BRL'
                    }).format(incident.value)}</Text>
                
                    <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(incident)}>

                        <Text style={styles.detailsButtonText}>Ver Mais Detalhes</Text>

                        <Feather name="arrow-right" size={16} color="#E02041" />

                    </TouchableOpacity>
                
                </View> 


            )}


            />
            

        </View>
    );
}