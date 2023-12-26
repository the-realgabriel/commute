import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Auth from './src/Nav/Auth'
import AppPage from './src/Nav/AppPage'

function App(){
    return(
        <NavigationContainer>
            <Auth/>

        </NavigationContainer>
    );
}
export default App;