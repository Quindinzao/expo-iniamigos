import { Image, View, Animated, PanResponder, Dimensions } from "react-native";
import styles from "./styles";
import Typography from "../Typography";
import { useRef } from "react";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

interface GameCard {
  text: string;
  category?: string;
}

interface CardProps {
  currentCard: GameCard;
  nextCard: GameCard;
  onSwipe: () => void;
}

export default function Card({ currentCard, nextCard, onSwipe }: CardProps) {
  const position = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) =>
        Math.abs(gesture.dx) > 10,

      onPanResponderMove: Animated.event(
        [null, { dx: position.x, dy: position.y }],
        { useNativeDriver: false }
      ),

      onPanResponderRelease: (_, gesture) => {
        if (Math.abs(gesture.dx) > SWIPE_THRESHOLD) {
          const direction = gesture.dx > 0 ? 1 : -1;

          Animated.timing(position, {
            toValue: { 
              x: direction * SCREEN_WIDTH, 
              y: gesture.dy
            },
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            position.setValue({ x: 0, y: 0 });
            onSwipe();
          });
        } else {
          Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
    outputRange: ["-10deg", "0deg", "10deg"],
  });

  return (
    <View style={styles.wrapper}>
      <View style={[styles.aux, styles.card1]} />
      <View style={[styles.aux, styles.card2]}>
        <Image
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
          height={160}
          width={160}
        />
        {nextCard.category && (
          <Typography style={styles.category} font="caption">
            Categoria: {nextCard.category}
          </Typography>
        )}
        <Typography font="text" style={styles.text}>
          {nextCard.text}
        </Typography>
      </View>

      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.aux,
          styles.card3,
          {
            transform: [
              { translateX: position.x },
              { translateY: position.y },
              { rotate },
            ],
          },
        ]}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
          height={160}
          width={160}
        />

        {currentCard.category && (
          <Typography style={styles.category} font="caption">
            Categoria: {currentCard.category}
          </Typography>
        )}

        <Typography font="text" style={styles.text}>
          {currentCard.text}
        </Typography>
      </Animated.View>
    </View>
  );
}
