import { useState } from "react";
import { YStack, Stack, Text } from "tamagui";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { MMKV, useMMKVObject } from "react-native-mmkv";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { storage } from "@storage/index";

type User = {
  name: string;
  email: string;
  password: string;
};

export function RegisterForm() {
  const navitagion = useNavigation<AuthNavigatorRoutesProps>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [user, setUser] = useMMKVObject<User>("user");

  function handleSave() {
    setUser({ name, email, password });
    fetchUser();
  }

  function fetchUser() {
    const data = storage.getString("user");
    // const users: string[] = data ? JSON.parse(data) : {};
    // data ? JSON.parse(data) : {}
    setUser(data ? JSON.parse(data) : {});
  }

  return (
    <YStack bg="$background">
      <Stack gap="$2">
        <Input title="Nome" placeholder="Erick ray" onChangeText={setEmail} />

        <Input
          title="Email"
          placeholder="zezinho@email.com"
          keyboardType="email-address"
          onChangeText={setEmail}
        />
        <Input
          title="Password"
          secureTextEntry
          placeholder="Sua senha"
          onChangeText={setPassword}
        />
      </Stack>

      <Button title="Registrar-se" mt="$4" onPress={handleSave} />
    </YStack>
  );
}
