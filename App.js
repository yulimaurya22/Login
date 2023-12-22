import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from"@react-navigation/native-stack"
import { Login } from "./screens"
import Home from './screens/Home';
import { menu } from './screens/menu';


const stack = createNativeStackNavigator()
export default function App() {
  return (

    <NavigationContainer>
      <stack.Navigator
        initialRouteName='Login'>

          <stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown:false
            }}       
            />
            
            <stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown:false
            }}   
          />

<stack.Screen
            name="Menu"
            component={menu}
            options={{
              headerShown:false
            }}          
          />

      </stack.Navigator>
    </NavigationContainer>
      );
    }
    
  
