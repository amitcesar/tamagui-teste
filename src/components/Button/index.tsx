import { Button as TButton, ButtonProps } from "tamagui";

type Props = ButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <TButton
      backgroundColor={"$orange10"}
      size="$4"
      color={"$background"}
      borderRadius={"$8"}
      {...rest}
    >
      {title}
    </TButton>
  );
}
