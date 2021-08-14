import React from 'react'
import { Text } from 'react-native'
import firebase from 'firebase/app'
import Background from '../components/Background'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'

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
      <Logo />
      <Header>User Details.</Header>
      {users ? (
        <Text>
          Name: {users.providerData[0].displayName} {'\n'}
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
