import { Stack } from "tamagui";

import PeopleLogo from "@assets/people-logo2x2.svg";
import { TabsForms } from "@components/TabsForm";

export function SignInScreen() {
  return (
    <Stack f={1} jc="center" ai="center" bg="$background">
      <Stack>
        <PeopleLogo width={"200 px"} height="200 px" />
      </Stack>

      <TabsForms />
    </Stack>
  );
}
