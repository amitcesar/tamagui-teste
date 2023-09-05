import { Stack, XStack, H3, H4, YStack, Text, Button } from "tamagui";
import { Plus } from "lucide-react-native";

export function AddMember() {
  return (
    <YStack>
      <Button icon={<Plus size={14} />} circular />
      <Text textAlign="center" fontWeight={"bold"} fontSize="$3">
        Add
      </Text>
    </YStack>
  );
}
