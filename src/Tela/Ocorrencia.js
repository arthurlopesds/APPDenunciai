import React, {Component} from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native'



export default class Ocorrencia extends Component{
    
    state = {
        title:'Pichação Bancários',
        Rua:'Três ruas, 775',
        Data:'29 Outubro 2018',
        foto: require('../../imgs/transferir.png'),
        descricao:'Foi encotrado uma uma pichação nas três ruas no bancários',
        andamento: false
    }
    
    render(){
        return(
            <View style = {styles.principal}>
                <View style={styles.cabecalho}>
                    <Text style = {styles.txtCabecalho}>
                        Visualizar Ocorrência
                    </Text>
                </View>

                <View style = {styles.txtLocal}>
                    <View style = {styles.viewTitle}>
                        <Text style={styles.txtTitle}>{this.state.title}</Text>
                    </View>
                    <View>
                        <Text style = {styles.txtRuaLocal}>
                            {this.state.Rua}
                        </Text>
                        <Text style = {styles.txtRuaLocal}>
                            {this.state.Data}
                        </Text>
                    </View>
                </View>
                    
                <View style = {styles.viewImagem}>
                    <Image source = {this.state.foto} style= { styles.imagem}/>
                </View>

                <View style = {styles.TitleDesc} >
                    <Text style = {styles.textTitleDesc}>Descrição</Text>
                </View>

                <View style = {styles.viewDoScroll}> 
                    <ScrollView style = {styles.viewScroll}>
                        <Text style = {styles.textDesc}>{this.state.descricao}</Text>
                    </ScrollView>
                </View>

                <View>
                    { 
                        this.state.andamento === true ? 
                            <Text style = {{fontSize:18, color:'#3EC28F'}}>Processada</Text> :
                            <Text style = {{fontSize:18, color:'#3EC28F'}}>Em andamento</Text>
                    }
                </View>
                <View>
                    <Text style = {{fontSize:18, color:'#F2994A'}}>
                        Encaminhada para os orgãos responsáveis
                    </Text>
                </View>

                <View style = {styles.viewBotao}>
                    <TouchableOpacity style = {styles.botao}>
                        <View>
                            <Text style = {styles.txtBotao}>
                                Remover Denúncia
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    principal:{
        flex: 1,
        backgroundColor: '#FCFCFC',
        alignItems: 'center'
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
    viewImagem:{
        width: '90%',
        height: Dimensions.get('window').width /2,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    imgContainer:{
        alignContent: 'center',
        justifyContent: 'center'
    },
    txtLocal:{
        width:'90%'
    },
    txtTitle:{
        color: 'black',
        fontSize: 20,
        marginBottom: 10 
    },
    txtRuaLocal:{
        fontSize: 14
    },
    TitleDesc:{
        width: '90%',
        marginTop : 10
    },
    textTitleDesc:{
        color:'black',
        fontSize:15
    },
    viewDoScroll:{
        width: '90%',
        marginTop: 10,
        height: Dimensions.get('window').width/4
    },
    viewBotao:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
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
    imagem:{
        width: Dimensions.get('window').width * 8/9 ,
        height: Dimensions.get('window').width /2,
    }
    
})