import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text
} from 'react-native'

imgOcorrenciaSucesso = require('../../imgs/imgDenRealizada.png')

export default class OcorrenciaSucesso extends Component{

    sair = () =>{
        this.props.navigation.navigate('Denunciar')
    }

    render(){
        return(
            <View style = {styles.principal}>
                <View>
                    <Image source = {imgOcorrenciaSucesso}/>
                </View>

                <View>
                    <TouchableOpacity style = {styles.botao}
                        onPress = {this.sair}>
                        <View>
                            <Text style = {styles.txtBotao}>
                                Sair
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.viewTXT}>
                    <Text style = {styles.txt}>
                        Para acompanhar a situação da sua denúncia, acesse 
                    </Text>
                    <Text style = {styles.txt}>
                        a opção "Visualizar denúncia" no menu.
                    </Text>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    principal:{
        alignItems: 'center'
    },
    botao:{
        backgroundColor: '#FF473A',
        alignItems: 'center',
        padding: 15,
        width: 300,
        marginBottom: 30,
        marginTop: 50
    },
    txtBotao:{
        fontSize: 13,
        color: 'white',
    },
    txt:{
        fontWeight: 'bold',
        color: 'black',
    },
    viewTXT:{
        alignItems:'center'
    }
})