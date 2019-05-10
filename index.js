/**
 * @format
 */

import React from 'react'
import Navigator from './src/Navigate'
import {name as appName} from './app.json';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux'

import storeConfig from './src/store/storeConfig'

const store = storeConfig()

const Redux = () => (
        <Provider store = {store}>
            <Navigator />
        </Provider>  
)

AppRegistry.registerComponent(appName, () => Redux);
