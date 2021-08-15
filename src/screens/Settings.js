import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'
import firebase from 'firebase/app'
import Background from '../components/Background'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import BackButton from '../components/BackButton'
import Header from '../components/Header'
import { theme } from '../core/theme'

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 45%;
  position: absolute;
  top: 30px;
  padding: 50px;
`

export default function Settings({ navigation }) {
  const [users, setUser] = React.useState(null)
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user)
    }
  })

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require('../../assets/settings.json')}
        />
      </AnimationWrapper>
      <Header style={styles.container}>User Details.</Header>
      {users ? (
        <Text style={styles.container2}>
          Logged in as: {users.providerData[0].displayName} {'\n'}
          Email: {users.providerData[0].email} {'\n'}
        </Text>
      ) : (
        <Text>Internet Not Working</Text>
      )}
      <Button mode="outlined" onPress={logoutUser}>
        Logout
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  container2: {
    fontSize: 15,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
})
