import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons'

import Home from './Pages/Home';
import HeatMap from './Pages/HeatMap';
import Profile from './Pages/Profile';

const homeName = "Home";
const mapName = "Map";
const profileName = "Profile";

const Tab = createBottomTabNavigator();



export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === homeName) {
                        iconName = "home-sharp";
                    } else if (route.name === mapName) {
                        iconName = "location-sharp";
                    } else if (route.name === profileName) {
                        iconName = "person-sharp";
                    }
                    return (
                        <IonIcons
                            name={iconName}
                            size={size}
                            color={focused ? "#B70F00" : "black"}
                            style={{ marginTop: 12 }} 
                        />
                    );
                },
                tabBarLabel: () => null, 
                tabBarStyle: {
                    height: 72
                }
            })}>

            <Tab.Screen name={homeName} component={Home}/>
            <Tab.Screen name={mapName} component={HeatMap}/>
            <Tab.Screen name={profileName} component={Profile}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}