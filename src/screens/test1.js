import React from 'react'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Button as btn,
} from 'react-native'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import Background from '../components/Background'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import { MapScreen } from '../map/map.screen.enlarge'

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

export default function Test1({ navigation }) {
  const [errorMsg, setErrorMsg] = React.useState('')
  const [location, setLocation] = React.useState(null)
  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)

    wait(2000).then(() => setRefreshing(true))
  }, [])

  React.useEffect(() => {
    setCurrentLocation()
  }, [])

  const setCurrentLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied')
      return
    }

    const loc = await Location.getCurrentPositionAsync({})
    setLocation(loc)
  }
  return (
    <>
      <Background>
        <TouchableOpacity
          onPress={() => navigation.navigate('Dashboard')}
          style={styles.container1}
        >
          <Image
            style={styles.image}
            source={require('../assets/arrow_back.png')}
          />
        </TouchableOpacity>
      </Background>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={setCurrentLocation}
          />
        }
      >
        {null}
      </ScrollView>
      <>{location ? <MapScreen location={location} /> : null}</>
      <Button mode="outlined" onPress={logoutUser}>
        Logout
      </Button>
    </>
  )
}

const styles = StyleSheet.create({
  container1: {
    position: 'absolute',
    top: 5 + getStatusBarHeight(),
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
