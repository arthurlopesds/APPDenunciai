import React from 'react'
import {
    View,
    ScrollView,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native'

import moment from 'moment'
import 'moment/locale/pt-br'


const  denuncias = [
    {
        id: Math.random(),
        titleDenuncia: 'Pichação Bancários',
        Date: moment().locale('pt-br').format('D MMMM [de] YYYY'),
        descricao: 'Foi encotrado uma uma pichação nas três ruas no bancários',
        Rua: 'Três ruas, 775',
        foto: require('../../imgs/transferir.png'),
        andamento: false
    },
    {
        id: Math.random(),
        titleDenuncia: 'Pichação Mangabeira',
        Date: moment().locale('pt-br').format('D MMMM [de] YYYY'),
        descricao: 'Foi encotrado uma uma pichação nas três ruas no bancários',
        Rua: 'Três ruas, 775',
        foto: require('../../imgs/transferir.png'),
        andamento: false
    },
    {
        id: Math.random(),
        titleDenuncia: 'Pichação Cruz das Armas',
        Date: moment().locale('pt-br').format('D MMMM [de] YYYY'),
        descricao: 'Foi encotrado uma uma pichação nas três ruas no bancários',
        Rua: 'Três ruas, 775',
        foto: require('../../imgs/transferir.png'),
        andamento: false
    }
]

const itemEstilo = { 
    paddingHorizontal: 15,
    height: Dimensions.get('window').height/ 9,
    backgroundColor: '#FCFCFC',
    borderBottomWidth: 1,
    borderColor:  '#222',
    justifyContent: 'center',
    
}



export const Post = props=>

    <TouchableOpacity
        onPress = { () => this.props.navigation.navigate('Ocorrencia')} 
    >
        <View style = {itemEstilo}> 
            <Text style = {styles.title}>{props.titleDenuncia}</Text>
            <Text style = {styles.dataOcorrencia}>{props.Date}</Text>
        </View>
    </TouchableOpacity>

export default props =>{
    const renderItem = ({item})=>{
        return <Post {...item}/>
    }

    return(
        <ScrollView>
            <FlatList data={denuncias} renderItem ={renderItem}
                keyExtractor={(_,index) => index.toString()} />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 17,
        color: '#000'
    },
    dataOcorrencia:{
        fontSize: 15
    }
})

