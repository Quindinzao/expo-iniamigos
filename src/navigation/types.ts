import { GameModeKey } from "../constants";

export type RootStackParamList = {
  Home: undefined;
  Game: {
    mode: GameModeKey;
  };
};