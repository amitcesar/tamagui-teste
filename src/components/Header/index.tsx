import { UserAvatar } from "@components/UserAvatar";
import { ChevronLeft } from "lucide-react-native";
import { Text, XStack, YStack } from "tamagui";

export function Header() {
  return (
    <YStack bg="$purple9Dark" pt="$4" p="$4" borderRadius={"$6"}>
      <XStack jc="space-between" ai="flex-start">
        <ChevronLeft size={36} color="#000" />
        <UserAvatar />
      </XStack>
      <YStack mt="$4">
        <Text fontSize="$5" fontWeight={"bold"}>
          Bem vindo de volta
        </Text>
        <Text fontSize="$5">Erick Ray</Text>
      </YStack>
      <YStack ai="flex-end">
        <Text fontSize="$4" fontWeight={"bold"}>
          Suas Reservas
        </Text>
        <Text fontSize="$4" fontWeight={"bold"}>
          R$ 15.000
        </Text>
      </YStack>
    </YStack>
  );
}
