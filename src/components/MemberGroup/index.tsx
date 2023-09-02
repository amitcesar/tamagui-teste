import { H6, Stack, Text, XStack, YStack } from "tamagui";
import { UserSquare2 } from "lucide-react-native";
export function MemberGroup() {
  return (
    // color="#F76808"
    <Stack>
      <XStack>
        <UserSquare2 fill="#F76808" />
      </XStack>
      <YStack>
        <Text fontWeight={"bold"}>CarolineSmith</Text>
      </YStack>
    </Stack>
  );
}
