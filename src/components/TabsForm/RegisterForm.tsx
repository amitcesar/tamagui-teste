import { YStack, Stack } from "tamagui";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
export function RegisterForm() {
  return (
    <YStack bg="$background">
      <Stack gap="$3">
        <Input title="Email" />
        <Input title="Password" />
      </Stack>

      <Button title="Registrar-se" mt="$4" />
    </YStack>
  );
}
