import { Stack } from "tamagui";
import { MMKV } from "react-native-mmkv";
import { useState } from "react";
import PeopleLogo from "@assets/people-logo2x2.svg";
import { TabsForms } from "@components/TabsForm";

const storage = new MMKV({
  id: "myapp",
});

type User = {
  email: string;
  password: string;
};

export function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User>();

  return (
    <Stack f={1} jc="center" ai="center" bg="$background">
      <Stack>
        <PeopleLogo width={"200 px"} height="200 px" />
      </Stack>

      <TabsForms />
    </Stack>
  );
}
