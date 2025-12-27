// src/constants/index.ts
import valeTudo from "./valeTudo";
import conhecer from "./conhecer";
import galera from "./galera";
import euNunca from "./euNunca";

export const gameModes = {
  valeTudo,
  conhecer,
  galera,
  euNunca,
};

export type GameModeKey = keyof typeof gameModes;
