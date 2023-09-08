import { Avatar, Stack, Text, XStack, YStack } from "tamagui";

export const RecentActivities = () => {
  return (
    <XStack
      borderRadius={"$4"}
      p="$3"
      mt="$3"
      gap="$2"
      borderWidth={1}
      borderColor="blue"
    >
      <YStack>
        <XStack ai="center" jc="space-between" w="$20">
          <Text fontWeight={"bold"}>Erick Ray</Text>
          <Text fontWeight={"bold"} fontSize={"$5"}>
            R$ 7,00
          </Text>
        </XStack>

        <XStack ai="center" jc="space-between" w="$20">
          <Text fontSize={"$3"} color="$gray9">
            Uber
          </Text>

          <Text color="$gray11" fontSize={"$3"}>
            23/04/2023
          </Text>
        </XStack>

        <XStack mt="$4" ai="center" jc="space-between">
          <XStack gap="$1">
            <Avatar circular size="$1">
              <Avatar.Image src="http://placekitten.com/200/300" />
              <Avatar.Fallback bc="red" />
            </Avatar>

            <Avatar circular size="$1">
              <Avatar.Image src="http://placekitten.com/200/300" />
              <Avatar.Fallback bc="red" />
            </Avatar>

            <Avatar circular size="$1">
              <Avatar.Image src="http://placekitten.com/200/300" />
              <Avatar.Fallback bc="red" />
            </Avatar>
          </XStack>

          <Avatar circular size="$4">
            <Avatar.Image src="http://placekitten.com/200/300" />
            <Avatar.Fallback bc="red" />
          </Avatar>
        </XStack>
      </YStack>
    </XStack>
  );
};
