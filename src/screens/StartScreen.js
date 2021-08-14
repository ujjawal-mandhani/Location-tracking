import React from 'react'
import { StyleSheet, View } from 'react-native'
import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 35%;
  position: absolute;
  top: 30px;
  padding: 50px;
`

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require('../../assets/pin.json')}
        />
      </AnimationWrapper>
      <View style={styles.container}>
        <Header>Login</Header>
      </View>
      <Paragraph>Welcome</Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
})
