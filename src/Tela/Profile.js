import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions

} from 'react-native'


import {DrawerActions} from 'react-navigation'
import Icon from "react-native-vector-icons/FontAwesome";

import {connect} from 'react-redux'
import {logout} from '../store/actions/user'

class Perfil extends Component{

    logout = () => {
        this.props.onLogout()
        this.props.navigation.navigate('Login')
    }
    
    render(){
        return(
            <View style = {styles.principal}>
                <View style={styles.titulopageDenun}>
                    <View style = {styles.viewIcon}>
                        <TouchableOpacity onPress={ () => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                            <Icon name="bars" size={30} color="#999"/>
                        </TouchableOpacity>
                    </View>
                    <View style ={styles.viewTitle}>
                        <Text style = {styles.txtTitle}>
                            Perfil
                        </Text>
                    </View>

                </View>

                <View style = {styles.dados}>
                    <View style = {styles.campos}>
                        <Text style = {styles.txtCampos}>Nome:</Text>
                        <Text style = {styles.txtCampos}> {this.props.name} </Text>
                    </View>

                    <View style = {styles.campos}>
                        <Text style = {styles.txtCampos}>Sobrenome:</Text>
                        <Text style = {styles.txtCampos}>{this.props.sobrenome}</Text>
                    </View>

                    <View style = {styles.campos}>
                        <Text style = {styles.txtCampos}>Email:</Text>
                        <Text style = {styles.txtCampos}>{this.props.email}</Text>
                    </View>

                    
                </View>

                <View style = {styles.botaoSair}>
                    <TouchableOpacity
                        onPress = {this.logout}
                    >
                        <Icon name="power-off"  size= {30} color = "#000"/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({user}) => {
    return{
        name: user.name,
        email: user.email,
        sobrenome: user.sobrenome
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onLogout: () => dispatch(logout())
    }
}


const styles = StyleSheet.create({
    princial:{
        flex: 1,
        backgroundColor: '#FCFCFC'
    }, viewTitle:{ // View Denuncia
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
        width:'100%',
        marginBottom: 20
    },
    txtTitle:{  //txt Denuncia
        fontSize: 20,
        color: '#FF473A',
        fontWeight: 'bold'
    },
    dados:{
        width: '90%'
    },
    campos:{
        margin: 10
    },
    txtCampos:{
        color:'black',
        fontSize: 15
    },
    botaoSair:{
        alignItems:'center',
        margin: 30
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Perfil)