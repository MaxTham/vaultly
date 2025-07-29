import { Stack } from "expo-router";
import {OnboardingStyle} from "../../styles/onboarding";

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: OnboardingStyle.container,
      }}
    />
  );
}
