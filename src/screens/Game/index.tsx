import { Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { gameModes } from "../../constants";
import Card from "../../components/Card";
import Typography from "../../components/Typography";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

interface GameCard {
  text: string;
  category?: string;
}

type Props = NativeStackScreenProps<RootStackParamList, "Game">;

export default function GameScreen({ route }: Props) {
  const { mode } = route.params;
  const cards = gameModes[mode];
  const navigation = useNavigation();

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
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>➜</Text>
      </TouchableOpacity>
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