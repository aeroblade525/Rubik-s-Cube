// Sexy move is the commonly seen sequence (R U R' U')

import { CubeArrayRCCW, CubeArrayUCCW } from "../../cubeTurningCCW";
import { CubeArrayRCW, CubeArrayUCW } from "../../cubeTurningCW";

var SexyMoveNotation = [
  CubeArrayRCW,
  CubeArrayUCW,
  CubeArrayRCCW,
  CubeArrayUCCW,
];

export function SexyMoveAlgorithm(cube) {
  let CurrentState = JSON.parse(JSON.stringify(cube));
  for (let i = 0; i < SexyMoveNotation.length; i++) {
    CurrentState = SexyMoveNotation[i](CurrentState);
  }

  return CurrentState;
}
