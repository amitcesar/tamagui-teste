import { Button, Stack, Text, YStack, ButtonProps, H3, Avatar } from "tamagui";
import { User2, X } from "lucide-react-native";

export function MemberGroup() {
  return (
    <YStack>
      <Button icon={<User2 size={18} color="#F76808" />} circular />
      <Text fontWeight={"bold"} textAlign="center" fontSize={"$3"}>
        Erick R.
      </Text>
    </YStack>
  );
}
