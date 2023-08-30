import { UserAvatar } from "@components/UserAvatar";
import { ChevronLeft } from "lucide-react-native";
import { Text, XStack, YStack } from "tamagui";

export function Header() {
  return (
    <YStack bg="$purple9Dark" pt="$4" p="$4" borderRadius={"$6"}>
      <XStack jc="space-between" ai="flex-start">
        <ChevronLeft size={32} color="#fff" />
        <UserAvatar />
      </XStack>
      <YStack mt="$4" p="$2">
        <Text fontSize="$5" fontWeight={"bold"} color="#fff">
          Bem vindo de volta
        </Text>
        <Text fontSize="$5" color="#fff">
          Erick Ray
        </Text>
      </YStack>
      <YStack ai="flex-end" mt="$4">
        <Text fontSize="$4" fontWeight={"bold"} color="#fff">
          Suas Reservas
        </Text>
        <Text fontSize="$4" fontWeight={"bold"} color="#fff">
          R$ 15.000
        </Text>
      </YStack>
    </YStack>
  );
}
