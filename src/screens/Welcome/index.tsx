import { Button as ButtonTamagui, H1, Stack, Text, YStack } from "tamagui";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";

export function WelcomeScreen() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  // function handleUserToLoginScreen() {
  //   navigate("signIn");
  // }

  return (
    <YStack f={1} jc="space-around" ai="center">
      <Stack ai="center">
        <H1 fontWeight={"bold"} mt="$16">
          Cofre Social!
        </H1>
        <Text>Gerencie Suas Despesas </Text>
      </Stack>
      <YStack gap="$3">
        <ButtonTamagui
          w="$20"
          backgroundColor={"$green9Dark"}
          color="$background"
          fontWeight={"bold"}
          fontSize="$6"
        >
          Login
        </ButtonTamagui>
        <ButtonTamagui
          backgroundColor={"$red9Dark"}
          color="$background"
          fontWeight={"bold"}
          fontSize="$6"
        >
          Registrar
        </ButtonTamagui>
      </YStack>
    </YStack>
  );
}
