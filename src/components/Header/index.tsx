import { Button, XStack } from "tamagui";
import { ChevronLeft, Coins } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function Header() {
  const navitagion = useNavigation<AuthNavigatorRoutesProps>();
  function BackButton() {
    navitagion.goBack();
  }

  return (
    <XStack mt="$8" jc="space-between" ai="center" pr="$6">
      <Button onPress={BackButton} transparent>
        <ChevronLeft size={32} color="#F76808" />
      </Button>

      <Coins size={24} color="#F76808" />
    </XStack>
  );
}
