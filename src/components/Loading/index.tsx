import { Spinner, YStack } from "tamagui";

export function Loading() {
  return (
    <YStack>
      <Spinner size="large" color="$orange10" />
    </YStack>
  );
}
