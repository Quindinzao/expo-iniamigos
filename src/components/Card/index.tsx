import { Image, View, Animated, PanResponder, Dimensions } from "react-native";
import styles from "./styles";
import Typography from "../Typography";
import { useRef } from "react";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

interface CardProps {
  label: string;
  value: string;
  onSwipe: () => void;
}

export default function Card({ label, value, onSwipe }: CardProps) {
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
              y: gesture.dy,
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
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.wrapper,
        {
          transform: [
            { translateX: position.x },
            { translateY: position.y },
            { rotate },
          ],
        },
      ]}
    >
      <View style={[styles.aux, styles.card1]} />
      <View style={[styles.aux, styles.card2]} />

      <View style={[styles.aux, styles.card3]}>
        <Image
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
        />
        <Typography font="option" style={styles.text}>
          {label}
        </Typography>
      </View>
    </Animated.View>
  );
}
