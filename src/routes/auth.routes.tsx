import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { HomeScreen } from "@screens/Home";
import { SignInScreen } from "@screens/SignIn";

import { WelcomeScreen } from "@screens/Welcome";

type AuthRoutes = {
  welcome: undefined;
  signIn: undefined;
  signUp: undefined;
  home: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;
const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="signIn" component={SignInScreen} />
      <Screen name="home" component={HomeScreen} />
    </Navigator>
  );
}
