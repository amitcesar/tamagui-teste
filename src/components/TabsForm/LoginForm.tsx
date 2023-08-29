import { YStack, Stack, Button as NNN } from "tamagui";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function LoginForm() {
  const navitagion = useNavigation<AuthNavigatorRoutesProps>();
  function handleUserToLogin() {
    navitagion.navigate("home");
  }

  return (
    <YStack bg="$background">
      <Stack gap="$3">
        <Input title="Email" keyboardType="email-address" />
        <Input title="Password" secureTextEntry />
      </Stack>

      <Button title="Login" mt="$4" onPress={handleUserToLogin} />
    </YStack>
  );
}
