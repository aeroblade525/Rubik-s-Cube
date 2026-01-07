// Sledge hammer is the commonly seen sequence (R U R' F')

import { CubeArrayFCCW, CubeArrayRCCW } from "../../cubeTurningCCW";
import { CubeArrayRCW, CubeArrayUCW } from "../../cubeTurningCW";

var SledgeHammerNotation = [
  CubeArrayRCW,
  CubeArrayUCW,
  CubeArrayRCCW,
  CubeArrayFCCW,
];

export function SledgeHammerAlgorithm(cube) {
  let CurrentState = JSON.parse(JSON.stringify(cube));
  for (let i = 0; i < SledgeHammerNotation.length; i++) {
    CurrentState = SledgeHammerNotation[i](CurrentState);
  }

  return CurrentState;
}
