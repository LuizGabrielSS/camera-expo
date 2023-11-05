import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Camera from '../camera'

const Stack = createNativeStackNavigator();

export default function RotasPrincipais(){

    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={({}) => ({
                headerShown: false,
                headerBackTitleVisible: false
            })}>
                <Stack.Screen
                name="Home" 
                component={Camera}
                // options={{
                // gestureEnabled: false,
                // swipeEnabled: false,
                // }}
            />
            </Stack.Navigator>
        </NavigationContainer>
    )

}