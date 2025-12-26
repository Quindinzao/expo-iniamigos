import { Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Typography from "../Typography";

interface CardProps {
  label: string;
  value: string;
}

export default function Card(props: CardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8} 
      style={styles.wrapper}
      key={props.value}
    >
      <View style={[styles.aux, styles.card1]} />
      <View style={[styles.aux, styles.card2]} />
      <View style={[styles.aux, styles.card3]}>
        <Image
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
        />
        <Typography font="option" style={styles.text}>{props.label}</Typography>
      </View>

    </TouchableOpacity>
  );
}