import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";
import { WelcomeScreen } from "@screens/Welcome";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { TamaguiProvider, Theme } from "tamagui";

import config from "./tamagui.config";

export default function App() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === "dark" ? "dark" : "light"}>
        {fontsLoaded ? <Routes /> : <Loading />}
        <StatusBar style="dark" translucent />
      </Theme>
    </TamaguiProvider>
  );
}
