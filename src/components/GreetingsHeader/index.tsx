import { UserAvatar } from "@components/UserAvatar";
import { ChevronLeft } from "lucide-react-native";
import { Text, XStack, YStack } from "tamagui";

export function GreetingsHeader() {
  return (
    <YStack bg="$orange9" pt="$4" p="$3.5" borderRadius={"$6"}>
      <XStack jc="space-between" ai="flex-start">
        <ChevronLeft size={24} color="#333333" />
        <UserAvatar />
      </XStack>
      <YStack mt="$4" p="$2">
        <Text fontSize="$5" fontWeight={"bold"} color="#333333">
          Bem vindo de volta ,
        </Text>
        <Text fontSize="$5" color="#333333">
          Erick Ray
        </Text>
      </YStack>
      <YStack ai="flex-end" mt="$4" p="$1">
        <Text fontSize="$4" fontWeight={"bold"} color="#333333">
          Suas Reservas
        </Text>
        <Text fontSize="$4" fontWeight={"bold"} color="#333333">
          R$ 15.000
        </Text>
      </YStack>
    </YStack>
  );
}
