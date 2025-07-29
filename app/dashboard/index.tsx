import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Dashboard = () => {
  const router = useRouter()

  return (
    <View>
      <Text>this is the dashboard</Text>
      <Button title="Go to Onboarding" onPress={() => router.push('/')} />
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})