import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Stack, XStack, H3, H4, YStack, Text, Button } from "tamagui";
import { Plus } from "lucide-react-native";

export function GroupDetailsScreen() {
  return (
    <Stack f={1} bg="$background">
      <Header />
      <YStack f={1} jc="center" ai="center">
        <H4 fontWeight={"bold"}>Grupo 1</H4>
        <Text fontSize={"$4"} pb="$4" color="$gray11">
          e o pix?! nada ainda?
        </Text>

        <XStack borderWidth={1} borderColor={"$gray12"} borderRadius="$5">
          <Input
            borderBottomWidth={0}
            w="$18"
            placeholder="adcione um membro ao seu grupo"
            placeholderTextColor={"$gray8"}
            fontSize="$3"
          />
          <Button
            iconAfter={
              <Plus size={16} color="#F76808" fillOpacity={"#F76808"} />
            }
          />
        </XStack>
      </YStack>
    </Stack>
  );
}
