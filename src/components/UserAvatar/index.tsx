import { Avatar, AvatarProps } from "tamagui";

const URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6e--9n5JtvUy48wXdtfyv5ciieni2TXXqcNH3SylZA&s";
export function UserAvatar() {
  return (
    <Avatar circular size="$3">
      <Avatar.Image src={URL} />
      <Avatar.Fallback bc="gray" />
    </Avatar>
  );
}
