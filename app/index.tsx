import { Text, View, Button, Image } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router';
import Onboarding from './onboarding';
const Home = () => {

  return (
      <Redirect href="/onboarding" />
  )
}

export default Home