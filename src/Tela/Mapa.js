import React, {Component} from 'react'
import MapView from 'react-native-maps'
import{
    View,
    StyleSheet,
    TouchableOpacity,
    Text
}from 'react-native'
import Pesquisa from '../Components/pesquisar'

export default class Mapas extends Component{

    voltar = () => {
        this.props.navigation.navigate('Denunciar')
    }

    state = {
        region: null,
    }

    async componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            ({coords: {latitude, longitude} }) => {
                this.setState({
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134
                    }})
            },
            () => {},
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000,
            }
        )
    }

    render(){
        const {region} = this.state;
        return(
            <View style = {styles.principal}>
                <View style = {styles.telaMapa}>

                    <MapView style = {styles.mapa}
                        region={region}
                        
                        showsUserLocation = {true}
                        loadingEnabled = {true}
                        />
                    <Pesquisa />

                </View>
                
                <View style = {styles.viewBotao}>
                    <TouchableOpacity style = {styles.botao}
                        onPress = {this.voltar}
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
        flex: 1
    },
    mapa:{
        flex: 1
    },
    telaMapa:{
        flex: 0.9
    },
    viewBotao:{
        flex: 0.1
    },
    botao:{
        backgroundColor: '#FF473A',
        alignItems: 'center',
        padding: 20,
        width:'100%',
        flex: 1
    },
    txtBotao:{
        fontSize: 15,
        color: 'white'
    },

})