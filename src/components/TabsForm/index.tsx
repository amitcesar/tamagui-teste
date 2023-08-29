import { Tabs, H5, Text, YStack, Stack, Input, SizableText } from "tamagui";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export function TabsForms() {
  return (
    <Tabs
      defaultValue="login"
      orientation="horizontal"
      flexDirection="column"
      gap="$5"
      bg="$background"
    >
      <Tabs.List space>
        <Tabs.Tab value="login" w={143}>
          <SizableText fontFamily="$body">Login</SizableText>
        </Tabs.Tab>
        <Tabs.Tab value="tab2" w={143}>
          <SizableText fontFamily="$body">Registre-se</SizableText>
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Content value="login">
        <LoginForm />
      </Tabs.Content>

      <Tabs.Content value="tab2">
        <RegisterForm />
      </Tabs.Content>
    </Tabs>
  );
}
