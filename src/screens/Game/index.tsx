import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Game">;

export default function GameScreen({ route }: Props) {
  const { mode } = route.params;

  return (
    <View>
      <Text>Modo selecionado: {mode}</Text>
    </View>
  );
}
