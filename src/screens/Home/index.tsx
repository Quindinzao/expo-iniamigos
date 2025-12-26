import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import styles from "./styles";
import CardOption from "../../components/CardOption";
import Typography from "../../components/Typography";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const modes = [
  { label: "Vale tudo", icon: "🔥", value: "valeTudo" },
  { label: "Para se conhecer", icon: "👥", value: "conhecer" },
  { label: "Para a\ngalera", icon: "🍿", value: "galera" },
  { label: "Eu nunca", icon: "❌", value: "euNunca" },
];

export default function HomeScreen({ navigation }: Props) {
  function goToGame(mode: string) {
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
            onPress={() => goToGame(mode.value)}
          />
        ))}
      </View>
    </View>
  );
}
