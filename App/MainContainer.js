import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons'
import { User } from 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig"

import Home from './Pages/Home';
import HeatMap from './Pages/HeatMap';
import Profile from './Pages/Profile';
import Login from './Pages/Login';

const homeName = "Home";
const mapName = "Map";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();


export default function MainContainer() {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (currentUser) => {
            console.log('user', currentUser);
            setUser(currentUser);
        });

        // Cleanup on component unmount
        return () => unsubscribe();
    }, []);

    return (
        <NavigationContainer>
            {user ? (
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
                            return <IonIcons name={iconName} size={size} color={focused ? "#B70F00" : "black"} style={{ marginTop: 12 }} />;
                        },
                        tabBarLabel: () => null, 
                        tabBarStyle: { height: 72 }
                    })}
                >
                    <Tab.Screen name={homeName} component={Home} />
                    <Tab.Screen name={mapName} component={HeatMap} />
                    <Tab.Screen name={profileName} component={Profile} />
                </Tab.Navigator>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}