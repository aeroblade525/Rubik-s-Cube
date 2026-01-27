import { worldAxisX, worldAxisY, worldAxisZ } from "./reuseable/WorldAxis";
// Import your array-logic functions
import {
  CubeArrayLCW,
  CubeArrayMCW,
  CubeArrayRCW,
  CubeArrayFCW,
  CubeArraySCW,
  CubeArrayBCW,
  CubeArrayUCW,
  CubeArrayECW,
  CubeArrayDCW,
} from "../algorithm/cubeTurningCW.js";

import {
  CubeArrayLCCW,
  CubeArrayMCCW,
  CubeArrayRCCW,
  CubeArrayFCCW,
  CubeArraySCCW,
  CubeArrayBCCW,
  CubeArrayUCCW,
  CubeArrayECCW,
  CubeArrayDCCW,
} from "../algorithm/cubeTurningCCW.js";
import { cubeArray, setCubeArray } from "../algorithm/rotatingCubeArray"; // Import these

export let movelist = [];
let isMoving = false;

// Map keys to the logic functions you provided
const stateMoveMap = {
  1: CubeArrayLCW,
  2: CubeArrayMCW,
  3: CubeArrayRCW,
  4: CubeArrayFCW,
  5: CubeArraySCW,
  6: CubeArrayBCW,
  7: CubeArrayUCW,
  8: CubeArrayECW,
  9: CubeArrayDCW,
  q: CubeArrayLCCW,
  w: CubeArrayMCCW,
  e: CubeArrayRCCW,
  r: CubeArrayFCCW,
  t: CubeArraySCCW,
  y: CubeArrayBCCW,
  u: CubeArrayUCCW,
  i: CubeArrayECCW,
  o: CubeArrayDCCW,
};

export const queueMove = (key) => {
  // Removed second param to avoid confusion
  // 1. Queue animation
  movelist.push(key);

  // 2. Update the internal array logic immediately
  if (stateMoveMap[key]) {
    // Calculate the new state
    const newState = stateMoveMap[key](cubeArray);
    // SAVE IT back to the central variable
    setCubeArray(newState);
    return newState;
  }
  return cubeArray;
};

export function resetMoveQueue() {
  movelist.length = 0;
}
export const moveDefinitions = {
  // Clockwise rotations
  1: { axis: worldAxisX, angle: Math.PI / 2, filter: (b) => b.xpos <= -6 }, // LCW
  2: { axis: worldAxisX, angle: Math.PI / 2, filter: (b) => b.xpos >= -6 && b.xpos <= 6 }, // MCW
  3: { axis: worldAxisX, angle: -Math.PI / 2, filter: (b) => b.xpos >= 6 }, // RCW
  4: { axis: worldAxisZ, angle: -Math.PI / 2, filter: (b) => b.zpos >= 6 }, // FCW
  5: { axis: worldAxisZ, angle: -Math.PI / 2, filter: (b) => b.zpos >= -6 && b.zpos <= 6 }, // SCW
  6: { axis: worldAxisZ, angle: Math.PI / 2, filter: (b) => b.zpos <= -6 }, // BCW
  7: { axis: worldAxisY, angle: -Math.PI / 2, filter: (b) => b.ypos >= 6 }, // UCW
  8: { axis: worldAxisY, angle: Math.PI / 2, filter: (b) => b.ypos >= -6 && b.ypos <= 6 }, // ECW
  9: { axis: worldAxisY, angle: Math.PI / 2, filter: (b) => b.ypos <= -6 }, // DCW

  // Counter-clockwise rotations
  q: { axis: worldAxisX, angle: -Math.PI / 2, filter: (b) => b.xpos <= -6 }, // LCCW
  w: { axis: worldAxisX, angle: -Math.PI / 2, filter: (b) => b.xpos >= -6 && b.xpos <= 6 }, // MCCW
  e: { axis: worldAxisX, angle: Math.PI / 2, filter: (b) => b.xpos >= 6 }, // RCCW
  r: { axis: worldAxisZ, angle: Math.PI / 2, filter: (b) => b.zpos >= 6 }, // FCCW
  t: { axis: worldAxisZ, angle: Math.PI / 2, filter: (b) => b.zpos >= -6 && b.zpos <= 6 }, // SCCW
  y: { axis: worldAxisZ, angle: -Math.PI / 2, filter: (b) => b.zpos <= -6 }, // BCCW
  u: { axis: worldAxisY, angle: Math.PI / 2, filter: (b) => b.ypos >= 6 }, // UCCW
  i: { axis: worldAxisY, angle: -Math.PI / 2, filter: (b) => b.ypos >= -6 && b.ypos <= 6 }, // ECCW
  o: { axis: worldAxisY, angle: -Math.PI / 2, filter: (b) => b.ypos <= -6 }, // DCCW
};

export function updateCube(allBlocks) {
  if (movelist.length > 0) {
    console.log("Moves waiting:", movelist.length, "Is Busy:", isMoving);
  }
  //   console.log(movelist);
  // If moving or empty, do nothing
  if (isMoving || movelist.length === 0) return;

  const key = movelist.shift(); // Get next key
  const move = moveDefinitions[key];

  console.log(key);

  if (!move) {
    console.error("MOVE NOT FOUND FOR KEY:", key); // Check if this triggers!
    return;
  }

  if (move) {
    isMoving = true; // Lock

    // Rotate the correct pieces
    allBlocks.forEach((block) => {
      if (move.filter(block)) {
        block.lineGroup.rotateOnWorldAxis(move.axis, move.angle);
        block.updatePosition();
      }
    });

    // Wait 500ms before unlocking for next move
    setTimeout(() => {
      isMoving = false;
    }, 50);
  }
}
