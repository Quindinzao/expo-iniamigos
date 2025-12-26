import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Typography from "../Typography";

interface CardOptionProps {
  label: string;
  icon: string;
  value: string;
  onPress: () => void;
}

export default function CardOption(props: CardOptionProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8} 
      onPress={props.onPress}
      style={styles.wrapper}
      key={props.value}
    >
      <View style={styles.aux} />
      <View style={styles.item}>
        <Text style={styles.optionEmoji}>{props.icon}</Text>
        <Typography font="option" style={styles.optionText}>{props.label}</Typography>
      </View>

    </TouchableOpacity>
  );
}