import { UserAvatar } from "@components/UserAvatar";
import { useState } from "react";
import { FlatList } from "react-native";
import { Avatar, H1, H5, Stack, XStack, YStack } from "tamagui";

export function HomeScreen() {
  const [groups, setGroups] = useState<string[]>(["Grupo 1", "Grupo 2"]);
  return (
    <YStack bg="$background" f={1} p="$6" pt="$8">
      <XStack jc="space-between" ai="center">
        <H5>Cofre Social</H5>
        <UserAvatar />
      </XStack>

      {/* <FlatList 
      data={groups}
      keyExtractor={(item)=> item}
      renderItem={({item}) => (

      )}  
      /> */}
    </YStack>
  );
}
