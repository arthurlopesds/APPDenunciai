/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigator from './src/Navigate'
import telaDenun from './src/Tela/telaVisualizaDenun'


AppRegistry.registerComponent(appName, () => Navigator);
