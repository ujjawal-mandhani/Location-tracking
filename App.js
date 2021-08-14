import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import firebase from 'firebase/app'
import 'firebase/auth'
import { theme } from './src/core/theme'
import {
  AuthLoadingScreen,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  Test,
  Test1,
  Settings,
} from './src/screens'
import { FIREBASE_CONFIG } from './src/core/config'

const Stack = createStackNavigator()
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}

const Tab = createBottomTabNavigator()
function Home() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Settings" component={Test1} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AuthLoadingScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="AuthLoadingScreen"
            component={AuthLoadingScreen}
          />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Test" component={Test} />
          <Stack.Screen name="Test1" component={Test1} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

// // import React from 'react'
// import { Provider } from 'react-native-paper'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import firebase from 'firebase/app'
// import 'firebase/auth'
// import { theme } from './src/core/theme'
// import {
//   AuthLoadingScreen,
//   StartScreen,
//   LoginScreen,
//   RegisterScreen,
//   ResetPasswordScreen,
//   Dashboard,
//   Test,
//   Test1,
// } from './src/screens'
// import { FIREBASE_CONFIG } from './src/core/config'

// const Stack = createStackNavigator()
// if (!firebase.apps.length) {
//   firebase.initializeApp(FIREBASE_CONFIG)
// }

// export default function App() {
//   return (
//     <Provider theme={theme}>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="AuthLoadingScreen"
//           screenOptions={{
//             headerShown: false,
//           }}
//         >
//           <Stack.Screen
//             name="AuthLoadingScreen"
//             component={AuthLoadingScreen}
//           />
//           <Stack.Screen name="StartScreen" component={StartScreen} />
//           <Stack.Screen name="LoginScreen" component={LoginScreen} />
//           <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
//           <Stack.Screen name="Dashboard" component={Dashboard} />
//           <Stack.Screen name="Test" component={Test} />
//           <Stack.Screen name="Test1" component={Test1} />
//           <Stack.Screen
//             name="ResetPasswordScreen"
//             component={ResetPasswordScreen}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   )
// }
