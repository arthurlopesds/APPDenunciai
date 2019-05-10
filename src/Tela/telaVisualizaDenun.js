import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'

import { DrawerActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import Denuncias from '../Components/visualizarOcorrencias'

export default class VerDenuncias extends Component{

    render(){
        return(
            <View style = {styles.principal}>
                <View style={styles.titulopageDenun}>
                    <View style = {styles.viewIcon}>
                        <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                            <Icon name="bars" size={35} color="#999"/>
                        </TouchableOpacity>
                    </View>
                    <View style ={styles.viewTitle}>
                        <Text style = {styles.txtTitle}>
                            Visualizar Denúncia
                        </Text>
                    </View>

                </View>
                    <Denuncias navigation = {this.props.navigation} />
                <View>
                
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    principal:{
        flex: 1
    },
    viewTitle:{ // View Denuncia
        flex:10,
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
        marginBottom: Dimensions.get('window').width /10,
        
    },
    txtTitle:{  //txt Denuncia
        fontSize: 20,
        color: '#FF473A',
        fontWeight: 'bold'
    },
    
})