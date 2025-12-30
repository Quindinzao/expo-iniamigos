import { Text, TextProps } from "react-native";
import { styles } from "./styles";

type TypographyProps = TextProps & {
  font: "title" | "option" | "text" | "button" | "caption";
};

export default function Typography({
  font,
  style,
  children,
  ...rest
}: TypographyProps) {
  return (
    <Text
      {...rest}
      style={[styles[font], style]}
    >
      {children}
    </Text>
  );
}