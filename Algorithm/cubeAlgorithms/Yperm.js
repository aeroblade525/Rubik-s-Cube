// F R U' R' U' (R U R' F') (R U R' U') R' F R F'

import { CubeArrayFCCW, CubeArrayRCCW, CubeArrayUCCW } from "../cubeTurningCCW";
import { CubeArrayFCW, CubeArrayRCW } from "../cubeTurningCW";
import { SexyMoveAlgorithm } from "./commonMoves/sexyMove";
import { SledgeHammerAlgorithm } from "./commonMoves/sledgeHammer";

var YpermNotation = [
  CubeArrayFCW,
  CubeArrayRCW,
  CubeArrayUCCW,
  CubeArrayRCCW,
  CubeArrayUCCW,
  SledgeHammerAlgorithm,
  SexyMoveAlgorithm,
  CubeArrayRCCW,
  CubeArrayFCW,
  CubeArrayRCW,
  CubeArrayFCCW,
];

export function YpermAlgorithm(cube) {
  let CurrentState = JSON.parse(JSON.stringify(cube));
  for (let i = 0; i < YpermNotation.length; i++) {
    CurrentState = YpermNotation[i](CurrentState);
  }

  return CurrentState;
}
