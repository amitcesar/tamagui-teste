import { Stack, Button, ButtonProps } from "tamagui";

import { CreditCard } from "lucide-react-native";
type NewGroupProps = ButtonProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: NewGroupProps) {
  return (
    <Stack mt={"$3"}>
      <Button size="$5" icon={<CreditCard size={36} />} {...rest}>
        {title}
      </Button>
    </Stack>
  );
}
