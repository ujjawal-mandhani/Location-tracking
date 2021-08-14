import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Button as Btn,
  TouchableOpacity,
  Image,
} from 'react-native'
import Constants from 'expo-constants'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import Background from '../components/Background'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import { MapScreen } from '../map/map.screen'
import { Screenshot } from '../screenshot/screenshot'
import { ShareExample } from '../share/share'

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

export default function Dashboard({ navigation }) {
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
    <Background>
      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        style={styles.container1}
      >
        <Image
          style={styles.image1}
          source={require('../assets/settings.png')}
        />
      </TouchableOpacity>
      <Header>Location Tracking</Header>
      <Paragraph>Your Location Is</Paragraph>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={setCurrentLocation}
          />
        }
      >
        <View style={styles.container}>
          {location ? (
            <Text style={styles.text}>
              Latitude = {location.coords.latitude} {'\n'}
              Longitude ={location.coords.longitude} {'\n'}
              Accuracy = {location.coords.accuracy} {'\n'}
              Altitude ={location.coords.altitude} {'\n'}
              AltitudeAccuracy = {location.coords.altitudeAccuracy} {'\n'}
              Heading ={location.coords.heading} {'\n'}
              Speed = {location.coords.speed} {'\n'}
              Timestamp ={Date(location.timestamp)} {'\n'}
            </Text>
          ) : null}
          {location ? <ShareExample location={location} /> : null}
          <Btn
            style={styles.button}
            onPress={() => navigation.navigate('Test')}
            title="Save Location 📍"
          />
          <Screenshot />
        </View>
      </ScrollView>
      <>
        {location ? (
          <MapScreen location={location}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Test1')}
              style={styles.container2}
            >
              <Image
                style={styles.image}
                source={require('../assets/expand.png')}
              />
            </TouchableOpacity>
          </MapScreen>
        ) : null}
      </>
      <Button mode="outlined" onPress={logoutUser}>
        Logout
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 5,
    alignItems: 'center',
  },
  text: {
    textAlign: 'left',
    fontFamily: 'sans-serif',
    fontSize: 14,
  },
  button: {
    paddingTop: 0,
  },
  image: {
    width: 24,
    height: 24,
  },
  container1: {
    position: 'absolute',
    top: 30 + getStatusBarHeight(),
    left: 300,
  },
  container2: {
    position: 'absolute',
    top: 600 + getStatusBarHeight(),
    left: 285,
  },
  image1: {
    width: 24,
    height: 24,
  },
})

/**
 * 
 *  {location ? (
            <Text style={styles.text}>
              Latitude = {location.coords.latitude} {'\n'}
              Longitude ={location.coords.longitude} {'\n'}
              Accuracy = {location.coords.accuracy} {'\n'}
              Altitude ={location.coords.altitude} {'\n'}
              AltitudeAccuracy = {location.coords.altitudeAccuracy} {'\n'}
              Heading ={location.coords.heading} {'\n'}
              Speed =  {location.coords.speed}{'\n'}
              Timestamp ={Date(location.timestamp)} {'\n'}
            </Text>
          ) : null}
          <TouchableOpacity onPress={() => navigation.replace('Test1')}>
        <Text>View On Large Map</Text>
      </TouchableOpacity>

          <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={setCurrentLocation}
          />
        }
      >
      {location ? <MapScreen location={location} /> : null}
        {location ? (
          <Text style={styles.text}>
            Latitude = {location.coords.latitude} {'\n'}
            Longitude ={location.coords.longitude} {'\n'}
            Accuracy = {location.coords.accuracy} {'\n'}
            Altitude ={location.coords.altitude} {'\n'}
            AltitudeAccuracy = {location.coords.altitudeAccuracy} {'\n'}
            Heading ={location.coords.heading} {'\n'}
            Speed = {location.coords.speed} {'\n'}
            Timestamp ={Date(location.timestamp)} {'\n'}
          </Text>
        ) : null}
        <View style={styles.container}>
          {location ? <ShareExample location={location} /> : null}
          <Screenshot />
        </View>
      </ScrollView>
      {location ? <MapScreen location={location} /> : null}



 * import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native'
import Constants from 'expo-constants'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import Background from '../components/Background'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import { MapScreen } from '../map/map.screen'
import { Screenshot } from '../screenshot/screenshot'
import { ShareExample } from '../share/share'
import { Toggle } from '../toggle/toggle'

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}


{location ? (
            <Text style={styles.text}>
              Latitude = {location.coords.latitude} {'\n'}
              Longitude ={location.coords.longitude} {'\n'}
              Accuracy = {location.coords.accuracy} {'\n'}
              Altitude ={location.coords.altitude} {'\n'}
              AltitudeAccuracy = {location.coords.altitudeAccuracy} {'\n'}
              Heading ={location.coords.heading} {'\n'}
              Speed = {location.coords.speed} {'\n'}
              Timestamp ={Date(location.timestamp)} {'\n'}
            </Text>
          ) : null}


export default function Dashboard() {
  const [errorMsg, setErrorMsg] = React.useState('')
  const [location, setLocation] = React.useState(null)
  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)

    wait(2000).then(() => setRefreshing(false))
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
    <Background>
      <Header>Location Tracking</Header>
      <Paragraph>Your Location Is</Paragraph>
      <ScrollView
        style={styles.scroll}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={setCurrentLocation}
          />
        }
      >
        <View style={styles.container}>
          {location ? (
            <Text style={styles.text}>
              Latitude = {location.coords.latitude} {'\n'}
              Longitude ={location.coords.longitude} {'\n'}
              Accuracy = {location.coords.accuracy} {'\n'}
              Altitude ={location.coords.altitude} {'\n'}
              AltitudeAccuracy = {location.coords.altitudeAccuracy} {'\n'}
              Heading ={location.coords.heading} {'\n'}
              Speed = {location.coords.speed} {'\n'}
              Timestamp ={Date(location.timestamp)} {'\n'}
            </Text>
          ) : null}
          {location ? <ShareExample location={location} /> : null}
        </View>
        {location ? <Toggle location={location} /> : null}
        <Screenshot />
      </ScrollView>
      <Button mode="outlined" onPress={logoutUser}>
        Logout
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 0,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text: {
    textAlign: 'left',
    fontFamily: 'sans-serif',
    fontSize: 14,
  },
  scroll: {
    flex: 1,
  },
})

/** 
 *
 * 
{location ? <MapScreen location={location} /> : null}
const onRefresh = React.useCallback(() => {
    setRefreshing(true)

    wait(2000).then(() => setRefreshing(true))
  }, [])
import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'

export default function Dashboard() {
  return (
    <MapScreen
          lat={location.coords.latitude}
          lon={location.coords.longitude}
      />
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button mode="outlined" onPress={logoutUser}>
        Logout
      </Button>
    </Background>
  )
}

* */
