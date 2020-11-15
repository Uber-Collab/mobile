import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './pages/Landing/index';
import LoginUberCollab from './pages/LoginUberCollab/index';
import Loading from './pages/Loading/index';

const { Navigator, Screen } = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen 
                    name="Landing"
                    component={Landing}
                />
                <Screen 
                    name="LoginUberCollab"
                    component={LoginUberCollab}
                />
                <Screen 
                    name="Loading"
                    component={Loading}
                />
            </Navigator>
        </NavigationContainer>
    )
}