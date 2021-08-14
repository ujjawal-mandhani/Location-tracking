import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import { captureScreen } from 'react-native-view-shot'

export const Screenshot = () => {
  const [imageURI, setImageURI] = useState('')
  const [savedImagePath, setSavedImagePath] = useState('')

  const takeScreenShot = () => {
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    }).then(
      (uri) => {
        setSavedImagePath(uri)
        setImageURI(uri)
      },
      (error) => console.error('Oops, Something Went Wrong', error)
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonStyle} onPress={takeScreenShot}>
        <Text style={styles.buttonTextStyle}>Take Screenshot 📸</Text>
      </TouchableOpacity>
      <Text style={styles.textStyle}>
        {savedImagePath ? `Saved Image Path\n ${savedImagePath}` : ''}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    padding: 10,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'red',
    padding: 3,
    minWidth: 165,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
})
