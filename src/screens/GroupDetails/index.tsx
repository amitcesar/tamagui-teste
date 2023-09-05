import { Header } from "@components/Header";
import { Stack, XStack, YStack, Text, H2, ScrollView } from "tamagui";
import { ArrowUpRightFromCircle } from "lucide-react-native";
import { MemberGroup } from "@components/MemberGroup";
import { AddMember } from "./AddMember";

export function GroupDetailsScreen() {
  return (
    <Stack f={1} bg="$background">
      <Header />
      <YStack p="$6">
        <Stack>
          <Text color="$gray9" fontSize={"$3"} fontWeight="bold">
            Olá Erick Ray,
          </Text>
          <H2 fontWeight="bold">Grupo 1</H2>
        </Stack>

        <Stack pt="$2.5" gap="$3">
          <Text color="$gray9" fontSize={"$3"} fontWeight="bold">
            participantes do grupo
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <XStack jc="center" gap="$2">
              <AddMember />
              <MemberGroup />
              <MemberGroup />
              <MemberGroup />
              <MemberGroup />
              <MemberGroup />
            </XStack>
          </ScrollView>
        </Stack>
        <Stack>
          <Text
            pt="$4"
            pb={"$3"}
            color="$gray9"
            fontSize={"$3"}
            fontWeight="bold"
          >
            Here are some things you can do
          </Text>
          <XStack jc="space-between" ai="center">
            <YStack
              backgroundColor={"$blue7"}
              borderRadius="$4"
              h="$10"
              w="$12"
              p="$3"
            >
              <ArrowUpRightFromCircle size={24} color="#000" />
              <Text color="$gray11" fontSize={"$4"} fontWeight="bold">
                To wallet, bank or mobile number
              </Text>
            </YStack>
            <YStack
              backgroundColor={"$green5"}
              borderRadius="$4"
              h="$10"
              w="$12"
              p="$3"
            >
              <ArrowUpRightFromCircle size={32} color="orange" />
              <Text color="$gray11" fontSize={"$4"} fontWeight="bold">
                Here are some things you can do
              </Text>
            </YStack>
          </XStack>
        </Stack>
      </YStack>
    </Stack>
  );
}
