import React from 'react'
import { createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import Login from './Tela/telaAuthLogCad'
import telaDenunciar from './Tela/telaDenuncia'
import ocorrenciaSucesso from './Tela/ocorrenciaSucesso'
import telaAjuda from './Tela/telaAjuda'
import Mapa from './Tela/Mapa'
import telaDenuncias from './Tela/telaVisualizaDenun'
import Ocorrencia from './Tela/Ocorrencia'
import CameraRoute from './camera'
import Icon from 'react-native-vector-icons/FontAwesome'
import Perfil from './Tela/Profile'

const MenuRoutes = {
    Denunciar: {
        name: 'Denunciar',
        screen: telaDenunciar,
        navigationOptions:{
            title: 'Denunciar',
            drawerIcon:(
                <Icon name="exclamation-circle" size={28} color="#000000" />
            )
        }
    },
    Denuncias:{
        name: 'Visualizar Denúncias',
        screen: telaDenuncias,
        navigationOptions:{
            title: 'Visualizar Denúncias',
            drawerIcon:(
                <Icon name="file-text-o" size={28} color="#000000" />
            )
        }
    },
    Ajuda:{
        name: 'Ajuda',
        screen: telaAjuda,
        navigationOptions:{
            title: 'Ajuda',
            drawerIcon:(
                <Icon name="question-circle-o" size={28} color="#000000" />
            )
        }
    },
    Perfil:{
        name: 'Perfil',
        screen: Perfil,
        navigationOptions: {
            title: 'Perfil'
        }
    }

}

const MenuConfig = {
    initialRouteName:'Denunciar',
    drawerWidth:300,
    drawerBackgroundColor:'#FF473A',
    contentOptions: {
        labelStyle:{
            fontWeight: 'bold',
            fontSize: 20 ,
            color:'white'
        }
    }
    
}
const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

const MainRoutes = {
    Login: {
        name: 'Login',
        screen: Login
    },
    Denunciar:{
        name: 'Denunciar',
        screen: MenuNavigator
    },
    OcorreSuc:{
        name: 'OcorreSuc',
        screen: ocorrenciaSucesso
    },
    Mapa: {
        name: 'Mapa',
        screen: Mapa
    },
    Ocorrencia: {
        name: 'Ocorrencia',
        screen: Ocorrencia
    },
    Camera:{
        name:'Camera',
        screen: CameraRoute
    }
}

const MainNavigator =
    createSwitchNavigator(MainRoutes, {initialRouteName: 'Login'}) 

const App = createAppContainer(MainNavigator)

export default App