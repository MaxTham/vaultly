import { Text, Button, Image, Pressable, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { OnboardingStyle } from "../../styles/onboarding";
import { GlobalStyles } from "../../styles/global";

const Onboarding = () => {
  const router = useRouter();

  return (
    <>
      <Image
        source={require("../../assets/images/vaultly-icon-removebg.png")}
        style={[OnboardingStyle.icon, GlobalStyles.centered]}
      />
      <Text style={[GlobalStyles.centered, OnboardingStyle.h1]}>
        Welcome to Vaultly!
      </Text>
      <Text style={[GlobalStyles.centered, OnboardingStyle.p]}>
        Track your finance, get AI-powered insights and achieve your financial
        goals with ease
      </Text>
      <Pressable
        style={[OnboardingStyle.google]}
        onPress={() => router.push("/dashboard")}
      >
        <Text style={[GlobalStyles.centered, GlobalStyles.button_text]}>
          Continue with Gmail
        </Text>
      </Pressable>
      <Pressable
        style={[OnboardingStyle.email]}
        onPress={() => router.push("/dashboard")}
      >
        <Text style={[GlobalStyles.centered, GlobalStyles.button_text]}>
          Continue with Email
        </Text>
      </Pressable>
      <View style={OnboardingStyle.footer_container}>
        <Text style={OnboardingStyle.footer_text}>
          By continuing, you agree to our{" "}
          <Text
            onPress={() => router.push("/dashboard")}
            style={OnboardingStyle.policy_text}
          >
            Terms of Service
          </Text>{" "}
          and{" "}
          <Text
            onPress={() => router.push("/dashboard")}
            style={OnboardingStyle.policy_text}
          >
            Privacy Policy
          </Text>
          .
        </Text>
      </View>
    </>
  );
};

export default Onboarding;
