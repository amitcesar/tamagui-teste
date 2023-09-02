import { Stack, Text, Input as TInput, InputProps } from "tamagui";

type Props = InputProps & {
  title?: string;
};

export function Input({ title, ...rest }: Props) {
  return (
    <Stack>
      {title ? (
        <Text color={"$gray11Light"} pb="$2">
          {title}
        </Text>
      ) : (
        <Stack />
      )}

      <TInput
        borderWidth={0}
        borderBottomWidth={"$0.75"}
        borderBottomColor="$gray10"
        {...rest}
      />
    </Stack>
  );
}
