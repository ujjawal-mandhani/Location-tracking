import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import Logo from '../components/Logo'
import Background from '../components/Background'
import LocationSave from '../locationsave/LocationSave'

export default function Test({ navigation }) {
  return (
    <Background>
      <TouchableOpacity
        onPress={() => navigation.navigate('Dashboard')}
        style={styles.container}
      >
        <Image
          style={styles.image}
          source={require('../assets/arrow_back.png')}
        />
      </TouchableOpacity>
      <Logo style={{ marginTop: '10%' }} />
      <LocationSave />
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
  btn: {
    marginBottom: 20,
    marginTop: 0,
    position: 'absolute',
  },
})
