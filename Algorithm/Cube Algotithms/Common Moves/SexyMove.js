// Sexy move is the commonly seen sequence (R U R' U')

import { CubeArrayRCCW, CubeArrayUCCW } from "../../CubeTurningCCW";
import { CubeArrayRCW, CubeArrayUCW } from "../../CubeTurningCW";

var SexyMoveNotation = [CubeArrayRCW, CubeArrayUCW, CubeArrayRCCW, CubeArrayUCCW]

export function SexyMoveAlgorithm(cube) {
    let CurrentState = JSON.parse(JSON.stringify(cube));
    for (let i = 0; i < SexyMoveNotation.length; i++) {
        CurrentState = SexyMoveNotation[i](CurrentState)
    }

    return CurrentState;
}