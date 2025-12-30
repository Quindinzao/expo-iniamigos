// src/constants/index.ts
// import valeTudo from "./valeTudo";
import conhecer from "./conhecer";
import galera from "./galera";
import euNunca from "./euNunca";
import mimica from "./mimica";

export const gameModes = {
  // valeTudo,
  mimica,
  conhecer,
  galera,
  euNunca,
};

export type GameModeKey = keyof typeof gameModes;
