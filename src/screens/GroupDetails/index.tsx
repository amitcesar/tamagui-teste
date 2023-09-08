import { Header } from "@components/Header";
import {
  Stack,
  XStack,
  YStack,
  Text,
  H2,
  ScrollView,
  H6,
  H5,
  H4,
  Avatar,
} from "tamagui";
import {
  ArrowUpRightFromCircle,
  ArrowDownLeftFromCircle,
  Search,
  Bookmark,
} from "lucide-react-native";
import { MemberGroup } from "@components/MemberGroup";
import { AddMember } from "./AddMember";
import { Button } from "@components/Button";
import { RecentActivities } from "@components/RecentActivities";

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
            Aqui estão algumas coisas que você pode fazer
          </Text>
          <XStack jc="space-evenly">
            <YStack
              backgroundColor={"$purple4"}
              borderRadius="$4"
              w="$12"
              p="$4"
            >
              <ArrowUpRightFromCircle size={24} color="#000" />
              <Text color="#000" fontSize={"$4"} fontWeight="bold">
                Pagar alguém
              </Text>
              <Text color="$gray11" fontSize={"$3"} fontWeight="bold">
                Para carteira, banco ou numero de telefone
              </Text>
            </YStack>
            <YStack
              backgroundColor={"$gray5"}
              borderRadius="$4"
              w="$12"
              jc="space-evenly"
              p="$4"
            >
              <ArrowDownLeftFromCircle size={24} color="#000" />

              <Text color="#000" fontSize={"$4"} fontWeight="bold">
                Cobrar alguém
              </Text>
              <Text color="$gray11" fontSize={"$3"} fontWeight="bold">
                solicitar dinheiro de qualquer pessoa do grupo
              </Text>
            </YStack>
          </XStack>
        </Stack>

        <Stack mt="$3">
          <H5>Atividades recentes</H5>
          <RecentActivities />
        </Stack>
      </YStack>
      <Button title="Adicionar Transação" borderRadius={"$2"} m="$4" />
    </Stack>
  );
}
