import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";

import { UserAvatar } from "@components/UserAvatar";
import { useState } from "react";
import { FlatList } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import {
  Avatar,
  Text,
  Group,
  H1,
  H4,
  H5,
  H6,
  Stack,
  XStack,
  YStack,
} from "tamagui";
import { Header } from "@components/Header";

export function HomeScreen() {
  const [groups, setGroups] = useState<string[]>(["Grupo 1", "Grupo 2"]);
  return (
    <YStack bg="$background" f={1} p="$6" pt="$8">
      <Header />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <>
            <GroupCard title="Group 2" />
          </>
        )}
      />

      <Button title="Criar novo grupo" borderRadius={"$5"} />
    </YStack>
  );
}
