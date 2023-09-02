import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";

import { useState } from "react";
import { FlatList } from "react-native";
import { XStack, YStack, ScrollView } from "tamagui";
import { GreetingsHeader } from "@components/GreetingsHeader";

import { InfoCard } from "@components/InfoCards";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function HomeScreen() {
  const [groups, setGroups] = useState<string[]>(["Grupo 1", "Grupo 2"]);
  const navitagion = useNavigation<AuthNavigatorRoutesProps>();

  function handleUserToCreateNewGroup() {
    navitagion.navigate("newGroup");
  }

  function handleUserToGroupDetails() {
    navitagion.navigate("groupDetails");
  }

  return (
    <YStack bg="$background" f={1} p="$6" pt="$8">
      <GreetingsHeader />
      <XStack>
        <ScrollView
          horizontal
          maxHeight={120}
          width="70%"
          backgroundColor="$background"
          borderRadius="$4"
          showsHorizontalScrollIndicator={false}
        >
          <YStack
            gap="$2.5"
            p="$1"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
          >
            <InfoCard title="A Receber" quantity="1.400" />
            <InfoCard title="Gastos" quantity="800" />
            <InfoCard title="Transações" quantity="800" />
          </YStack>
        </ScrollView>
      </XStack>
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <>
            <GroupCard title="Group 2" onPress={handleUserToGroupDetails} />
          </>
        )}
      />

      <Button
        title="Criar novo grupo"
        borderRadius={"$5"}
        onPress={handleUserToCreateNewGroup}
      />
    </YStack>
  );
}
