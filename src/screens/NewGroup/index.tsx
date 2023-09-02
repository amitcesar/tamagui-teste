import { Stack, YStack, H3, Text, Input, XStack } from "tamagui";
import { Boxes } from "lucide-react-native";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Header } from "@components/Header";

export function NewGroupScreen() {
  const navitagion = useNavigation<AuthNavigatorRoutesProps>();
  function handleBackToHomeScreen() {
    navitagion.navigate("home");
  }

  return (
    <Stack f={1} bg="$background">
      <Header />
      <Stack bg="$background" f={1} jc="center" ai="center">
        <YStack ai="center">
          <Boxes size={40} color="#465362" />
          <H3>Novo Grupo</H3>
          <Text fontSize={"$4"} pb="$4">
            crie um grupo para adcionar pessoas
          </Text>
          <Input
            borderRadius={"$2"}
            borderWidth={"$1"}
            borderColor="$gray11"
            width={"$18"}
            placeholder="Nome do grupo"
            placeholderTextColor={"$gray10"}
          />
          <Button
            title="Criar grupo"
            w="$18"
            borderRadius={"$4"}
            mt="$3"
            onPress={handleBackToHomeScreen}
          />
        </YStack>
      </Stack>
    </Stack>
  );
}
