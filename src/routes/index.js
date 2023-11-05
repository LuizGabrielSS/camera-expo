import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
                component={Login}
                // options={{
                // gestureEnabled: false,
                // swipeEnabled: false,
                // }}
            />
            </Stack.Navigator>
        </NavigationContainer>
    )

}