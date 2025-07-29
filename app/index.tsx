import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Onboarding = () => {
  const router = useRouter()

  return (
    <View>
      <Text>this is the onboarding</Text>
      <Button title="Go to Dashboard" onPress={() => router.push('/dashboard')} />
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({})