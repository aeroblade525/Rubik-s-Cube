// import { cubeArray } from "./AlgorithmMain";
import {
  CubeArrayBCCW,
  CubeArrayDCCW,
  CubeArrayECCW,
  CubeArrayFCCW,
  CubeArrayLCCW,
  CubeArrayMCCW,
  CubeArrayRCCW,
  CubeArraySCCW,
  CubeArrayUCCW,
} from "./CubeTurningCCW";
import {
  CubeArrayLCW,
  CubeArrayRCW,
  CubeArrayMCW,
  CubeArrayFCW,
  CubeArrayBCW,
  CubeArraySCW,
  CubeArrayUCW,
  CubeArrayECW,
  CubeArrayDCW,
} from "./CubeTurningCW";

export var cubeArray = [
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ],
  [
    [3, 3, 3],
    [3, 3, 3],
    [3, 3, 3],
  ],
  [
    [4, 4, 4],
    [4, 4, 4],
    [4, 4, 4],
  ],
  [
    [5, 5, 5],
    [5, 5, 5],
    [5, 5, 5],
  ],
];

window.addEventListener("keydown", (event) => {
  if (event.key === "1") {
    cubeArray = CubeArrayLCW(cubeArray);
    console.log(cubeArray);
  }
  if (event.key === "2") {
    cubeArray = CubeArrayMCW(cubeArray);
    console.log(cubeArray);
  }
  if (event.key === "3") {
    cubeArray = CubeArrayRCW(cubeArray);
    console.log(cubeArray);
  }
  if (event.key === "4") {
    cubeArray = CubeArrayFCW(cubeArray);
    console.log(cubeArray);
  }
  if (event.key === "5") {
    cubeArray = CubeArraySCW(cubeArray);
    console.log(cubeArray);
  }
  if (event.key === "6") {
    cubeArray = CubeArrayBCW(cubeArray);
    console.log(cubeArray);
  }
  if (event.key === "7") {
    cubeArray = CubeArrayUCW(cubeArray);
    console.log(cubeArray);
  }
  if (event.key === "8") {
    cubeArray = CubeArrayECW(cubeArray);
    console.log(cubeArray);
  }
  if (event.key === "9") {
    cubeArray = CubeArrayDCW(cubeArray);
    console.log(cubeArray);
  }
  if (event.key === "q") {
    cubeArray = CubeArrayLCCW(cubeArray);
    console.log(cubeArray);
  }
  if (event.key === "w") {
    cubeArray = CubeArrayMCCW(cubeArray);
    console.log(cubeArray);
  }
  if (event.key === "e") {
    cubeArray = CubeArrayRCCW(cubeArray);
    console.log(cubeArray);
  }
  if (event.key === "r") {
    cubeArray = CubeArrayFCCW(cubeArray);
    console.log(cubeArray);
  }
  if (event.key === "t") {
    cubeArray = CubeArraySCCW(cubeArray);
    console.log(cubeArray);
  }
  if (event.key === "y") {
    cubeArray = CubeArrayBCCW(cubeArray);
    console.log(cubeArray);
  }
  if (event.key === "u") {
    cubeArray = CubeArrayUCCW(cubeArray);
    console.log(cubeArray);
  }
  if (event.key === "i") {
    cubeArray = CubeArrayECCW(cubeArray);
    console.log(cubeArray);
  }
  if (event.key === "o") {
    cubeArray = CubeArrayDCCW(cubeArray);
    console.log(cubeArray);
  }
});
