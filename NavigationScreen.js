import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './src/screens/Dashboard'
import Browse from './src/screens/test'
import Library from './src/screens/test1'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  )
}

export default TabNavigator
