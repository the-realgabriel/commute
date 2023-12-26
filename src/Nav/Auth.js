import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import OnboardingScreen from '../screen/OnboardingScreen'
import Loginscreen from '../screen/Loginscreen'

const Stack = createNativeStackNavigator();

const Auth = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    );
};

export default Auth;