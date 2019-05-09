import React, {Component} from 'react'
import MapView from 'react-native-maps'
import{
    View,
    StyleSheet
}from 'react-native'
import Pesquisa from '../Components/pesquisar'

export default class Mapas extends Component{

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

                <MapView style = {styles.mapa}
                    region={region}

                    showsUserLocation = {true}
                    loadingEnabled = {true}
                />
                <Pesquisa />

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

})