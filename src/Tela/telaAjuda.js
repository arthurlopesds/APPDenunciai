import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'


export default class Ajuda extends Component{

    render(){
        return(
            <View style = {styles.container}>
                <View style={styles.cabecalho}>
                    <Text style = {styles.txtCabecalho}>
                        Ajuda
                    </Text>
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
                        Dúvidas ou problemas, entre em contato conosco clicando no botão
                    </Text>
                

                    <View style = {styles.viewBotao}>
                        <TouchableOpacity style = {styles.botao}>
                            <Text style = {styles.txtBotao}>Contate-nos por email</Text>
                        </TouchableOpacity>
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
        margin: 20,
        alignItems: 'center'
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
    viewBotao:{
        margin: 15,
        alignItems:'center'
    },
    botao:{
        backgroundColor: '#FF473A',
        alignItems: 'center',
        padding: 15,
        width: 300,
        marginBottom: 10,
    },
    txtBotao:{
        fontSize: 13,
        color: 'white'
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