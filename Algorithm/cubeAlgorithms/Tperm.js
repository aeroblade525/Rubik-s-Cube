// (R U R' U') R' F R2 U' R' U' (R U R' F')

import { CubeArrayRCCW, CubeArrayUCCW } from "../cubeTurningCCW";
import { CubeArrayFCW, CubeArrayRCW } from "../cubeTurningCW";
import { SexyMoveAlgorithm } from "./commonMoves/sexyMove";
import { SledgeHammerAlgorithm } from "./commonMoves/sledgeHammer";

var TpermNotaiton = [
  SexyMoveAlgorithm,
  CubeArrayRCCW,
  CubeArrayFCW,
  CubeArrayRCW,
  CubeArrayRCW,
  CubeArrayUCCW,
  CubeArrayRCCW,
  CubeArrayUCCW,
  SledgeHammerAlgorithm,
];

export function TpermAlgorithm(cube) {
  let CurrentState = JSON.parse(JSON.stringify(cube));
  for (let i = 0; i < TpermNotaiton.length; i++) {
    CurrentState = TpermNotaiton[i](CurrentState);
  }

  return CurrentState;
}
