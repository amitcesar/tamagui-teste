import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { GroupDetailsScreen } from "@screens/GroupDetails";
import { HomeScreen } from "@screens/Home";
import { NewGroupScreen } from "@screens/NewGroup";

import { SignInScreen } from "@screens/SignIn";

type AuthRoutes = {
  welcome: undefined;
  signIn: undefined;
  signUp: undefined;
  home: undefined;
  newGroup: undefined;
  groupDetails: undefined;
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
      <Screen name="newGroup" component={NewGroupScreen} />
      <Screen name="groupDetails" component={GroupDetailsScreen} />
    </Navigator>
  );
}
