export function solveConverting(solve) {
  return solve.flatMap((move) => moveToTurn[move]);
}

let moveToTurn = {
  LCW: "1",
  MCW: "2",
  RCW: "3",
  FCW: "4",
  SCW: "5",
  BCW: "6",
  UCW: "7",
  ECW: "8",
  DCW: "9",
  LCCW: "q",
  MCCW: "w",
  RCCW: "e",
  FCCW: "r",
  SCCW: "t",
  BCCW: "y",
  UCCW: "u",
  ECCW: "i",
  DCCW: "o",
  Sexy_Move: ["3", "7", "e", "u"],
  Sledge_Hammer: ["3", "7", "e", "r"],
};
