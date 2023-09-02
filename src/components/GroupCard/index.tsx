import { Stack, Button, ButtonProps } from "tamagui";

import { Users } from "lucide-react-native";
type NewGroupProps = ButtonProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: NewGroupProps) {
  return (
    <Stack mt={"$3"}>
      <Button
        size="$5"
        h="$6"
        color="#2B3A67"
        icon={<Users size={20} />}
        backgroundColor={"#F76808"}
        font-fontWeight={"bold"}
        {...rest}
      >
        {title}
      </Button>
    </Stack>
  );
}
