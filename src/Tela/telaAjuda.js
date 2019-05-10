import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import {DrawerActions} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Ajuda extends Component{

    render(){
        return(
            <View style = {styles.container}>
                <View style={styles.cabecalho}>
                    <View style = {styles.viewIcon}>
                        <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                            <Icon name="bars" size={30} color="#999"/>
                        </TouchableOpacity>
                    </View>
                    <View style ={styles.viewTitle}>
                        <Text style = {styles.txtCabecalho}>
                            Ajuda
                        </Text>
                    </View>
                </View>

                <View>
                    <Text style = {styles.titleDenuncia}>
                        Como efetuar uma denúncia
                    </Text>
                </View>

                <View style={styles.passosDenuncia}>

                    <Text style = {styles.txtBold}>
                        Passo 1: 
                    </Text>

                    <Text style = {styles.txtTam}>Deve-se digitar o título da denúncia;</Text>

                    <Text style = {styles.txtBold}>
                        Passo 2: 
                    </Text>

                    <Text style = {styles.txtTam}>Deve-se digitar a descrição da denúncia;</Text>

                    <Text style = {styles.txtBold}>
                        Passo 3: 
                    </Text>

                    <Text style = {styles.txtTam}>Deve-se escolher entre se identificar ou não;</Text>

                    <Text style = {styles.txtBold}>
                        Passo 4: 
                    </Text> 

                    <Text style = {styles.txtTam}>Pode-se escolher tirar uma foto ou não;</Text>

                </View>

                <View style = {styles.infoDuvidas}>

                    <Text style = {styles.txtInfo}>
                        Dúvidas ou problemas, entre em contato conosco pelo email abaixo:
                    </Text>
                

                    <View style = {styles.viewEmail}>
                        <Text style = {styles.Email}>faleconosco@denunciai.com.br</Text>
                    </View>
               
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
    },
    cabecalho:{
        // margin: 20,
        // alignItems: 'center'
        flexDirection:'row',
        alignItems:'stretch',
        width:'100%'
    },
    viewIcon:{
        flex:1,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        width: Dimensions.get('window').width/3
    },
    viewTitle:{
        flex:8,
        alignItems:'center',
        justifyContent:'center',
        width: Dimensions.get('window').width/3
    },
    txtCabecalho:{
        fontSize: 20,
        color: '#FF473A',
        fontWeight: 'bold'
        
    },
    titleDenuncia:{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10
    },
    passosDenuncia:{
        width: '90%'
    },
    txtBold:{
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black'
    },
    txtTam:{
        fontSize: 15,
        color: 'black'
    },
    viewEmail:{
        margin: 15,
        alignItems:'center'
    },
    
    Email:{
        fontSize: 15,
        color: '#FF473A'
    },
    infoDuvidas:{
        margin: 10,
        flex: 1,
        justifyContent: 'flex-end'
    },
    txtInfo:{
        textAlign: 'center',
        fontSize: 17,
        color: 'black'
    }

})