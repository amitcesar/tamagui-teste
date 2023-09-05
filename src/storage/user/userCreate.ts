import { useState } from "react";
import { MMKV, useMMKVObject } from "react-native-mmkv";

type User = {
  name: string;
  email: string;
  password: string;
};

export async function createUser(newUser: User){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");

  const [user, setUser] = useMMKVObject<User>("user");
}