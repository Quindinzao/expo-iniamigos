import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { gameModes } from "../../constants";
import Card from "../../components/Card";
import Typography from "../../components/Typography";
import { styles } from "./styles";
import { useEffect, useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "Game">;

export default function GameScreen({ route }: Props) {
  const { mode } = route.params;

  const cards = gameModes[mode];

  const [currentCard, setCurrentCard] = useState<{category?: string, text: string}>({
    text: "",
    category: ""
  });

  function getRandomCard(list: {category?: string, text: string}[]) {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
  }

  function handleSwipe() {
    setCurrentCard(getRandomCard(cards));
  }

  useEffect(() => {
    setCurrentCard(getRandomCard(cards));
  }, [mode]);

  if (!currentCard) return null;

  return (
    <View style={styles.container}>
      <Typography font="title" style={styles.title}>
        INIAMIGOS
      </Typography>

      <Card
        category={currentCard?.category}
        label={currentCard.text}
        value={currentCard.text}
        onSwipe={handleSwipe}
      />
    </View>
  );
}
