import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import styles from "./styles";
import CardOption from "../../components/CardOption";
import Typography from "../../components/Typography";
import { modes } from "../../constants/modes";
import { GameModeKey } from "../../constants";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  function goToGame(mode: GameModeKey) {
    navigation.navigate("Game", { mode });
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Typography 
          font="title"
          style={styles.title}
        >
          INIAMIGOS
        </Typography>
        {modes.map((mode) => (
          <CardOption
            key={mode.value}
            label={mode.label}
            icon={mode.icon}
            value={mode.value}
            onPress={() => goToGame(mode.value as GameModeKey)}
          />
        ))}
      </View>
    </View>
  );
}
