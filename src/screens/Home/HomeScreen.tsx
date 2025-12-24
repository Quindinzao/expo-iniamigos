import { View, Text, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const modes = [
  { label: "Vale tudo", value: "valeTudo" },
  { label: "Para se conhecer", value: "conhecer" },
  { label: "Para a galera", value: "galera" },
  { label: "Eu nunca", value: "euNunca" },
];

export default function HomeScreen({ navigation }: Props) {
  function goToGame(mode: string) {
    navigation.navigate("Game", { mode });
  }

  return (
    <View>
      {modes.map((mode) => (
        <Pressable key={mode.value} onPress={() => goToGame(mode.value)}>
          <Text>{mode.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}
