import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { gameModes } from "../../constants";
import Card from "../../components/Card";
import Typography from "../../components/Typography";
import { styles } from "./styles";
import { useEffect, useState } from "react";

interface GameCard {
  text: string;
  category?: string;
}

type Props = NativeStackScreenProps<RootStackParamList, "Game">;

export default function GameScreen({ route }: Props) {
  const { mode } = route.params;
  const cards = gameModes[mode];

  function getRandomCard(list: GameCard[]) {
    return list[Math.floor(Math.random() * list.length)];
  }

  const [currentCard, setCurrentCard] = useState<GameCard | null>(null);
  const [nextCard, setNextCard] = useState<GameCard | null>(null);

  function handleSwipe() {
    setCurrentCard(nextCard);
    setNextCard(() => getRandomCard(cards));
  }

  useEffect(() => {
    const first = getRandomCard(cards);
    const second = getRandomCard(cards);
  
    setCurrentCard(first);
    setNextCard(second);
  }, [mode]);


  return (
    <View style={styles.container}>
      <Typography font="title" style={styles.title}>
        INIAMIGOS
      </Typography>

      {currentCard && nextCard && (
        <Card
          key={currentCard.text}
          currentCard={currentCard}
          nextCard={nextCard}
          onSwipe={handleSwipe}
        />
      )}
    </View>
  );
}