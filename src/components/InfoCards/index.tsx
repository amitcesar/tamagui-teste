import { Button } from "@components/Button";
import { DollarSignIcon } from "lucide-react-native";
import { H6, Stack, XStack } from "tamagui";

type CardProps = {
  title: string;
  quantity: string;
};

export function InfoCard({ title, quantity }: CardProps) {
  return (
    <Stack
      bw={"$0.25"}
      bc="$background"
      borderRadius={"$4"}
      p="$1.5"
      w="$12"
      ai="center"
    >
      <XStack ai="center" justifyContent="center">
        <DollarSignIcon size={15} color="#333333" />
        <H6 fontFamily={"$heading"} fontWeight="bold" color="#333333" p="$0.5">
          {title}
        </H6>
      </XStack>
      <XStack ai="center" justifyContent="center">
        <H6 fontFamily={"$heading"} fontWeight="bold" color="#333333">
          {`R$ ${quantity}`}
        </H6>
      </XStack>
    </Stack>
  );
}
