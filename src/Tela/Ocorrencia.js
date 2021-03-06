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
import {DrawerActions} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Ocorrencia extends Component{

    Voltar = () =>{
        this.props.navigation.navigate('Denunciar')
    }
    
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
                    <View style = {styles.viewIcon}>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <Icon name="arrow-left" size={30} color="#999"/>
                        </TouchableOpacity>
                    </View>
                    <View style ={styles.viewTitle}>
                        <Text style = {styles.txtCabecalho}>
                            Visualizar Denúncia
                        </Text>
                    </View>
                </View>

                <View style = {styles.txtLocal}>
                    <View style = {styles.viewLocal}>
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
                    <TouchableOpacity style = {styles.botao}
                        onPress = {this.Voltar}
                    >
                        <View>
                            <Text style = {styles.txtBotao}>
                                Voltar
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
        flex:1,
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
    },
    cabecalho:{
        flexDirection:'row',
        alignItems:'stretch',
        width:'100%',
        marginBottom: Dimensions.get('window').height/9
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
    imgContainer:{
        alignContent: 'center',
        justifyContent: 'center'
    },
    txtLocal:{
        width:'90%',
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
    },
    viewTitle:{ // View Denuncia
        flex:8,
        alignItems:'center',
        justifyContent:'center',
        width: Dimensions.get('window').width/3
    },
    viewIcon:{
        flex:1,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        width: Dimensions.get('window').width/3
    },
    titulopageDenun:{
        flexDirection:'row',
        alignItems:'stretch',
        width:'100%'
    }
    
})