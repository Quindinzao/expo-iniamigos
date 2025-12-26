import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import Card from "../../components/Card";
import { styles } from "./styles";
import Typography from "../../components/Typography";

type Props = NativeStackScreenProps<RootStackParamList, "Game">;

export default function GameScreen({ route }: Props) {
  const { mode } = route.params;

  return (
    <View style={styles.container}>
      <Typography 
        font="title"
        style={styles.title}
      >
        INIAMIGOS
      </Typography>
      <Card label={"Sim"} value={"Sim"} />
    </View>
  );
}
