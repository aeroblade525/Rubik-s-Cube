export function CubeArrayRCCW(cube) {
  let newCube = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];

  newCube[0] = [
    [cube[0][0][0], cube[0][0][1], cube[0][0][2]],
    [cube[0][1][0], cube[0][1][1], cube[0][1][2]],
    [cube[4][0][0], cube[4][1][0], cube[4][2][0]],
  ];

  newCube[1] = [
    [cube[1][0][0], cube[1][0][1], cube[0][2][2]],
    [cube[1][1][0], cube[1][1][1], cube[0][2][1]],
    [cube[1][2][0], cube[1][2][1], cube[0][2][0]],
  ];

  newCube[2] = [
    [cube[1][0][2], cube[1][1][2], cube[1][2][2]],
    [cube[2][1][0], cube[2][1][1], cube[2][1][2]],
    [cube[2][2][0], cube[2][2][1], cube[2][2][2]],
  ];

  newCube[3] = [
    [cube[3][0][2], cube[3][1][2], cube[3][2][2]],
    [cube[3][0][1], cube[3][1][1], cube[3][2][1]],
    [cube[3][0][0], cube[3][1][0], cube[3][2][0]],
  ];

  newCube[4] = [
    [cube[2][0][2], cube[4][0][1], cube[4][0][2]],
    [cube[2][0][1], cube[4][1][1], cube[4][1][2]],
    [cube[2][0][0], cube[4][2][1], cube[4][2][2]],
  ];

  newCube[5] = cube[5];

  return newCube;
}

export function CubeArrayLCCW(cube) {
  let newCube = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];

  newCube[0] = [
    [cube[1][2][0], cube[1][1][0], cube[1][0][0]],
    [cube[0][1][0], cube[0][1][1], cube[0][1][2]],
    [cube[0][2][0], cube[0][2][1], cube[0][2][2]],
  ];

  newCube[1] = [
    [cube[2][2][0], cube[1][0][1], cube[1][0][2]],
    [cube[2][2][1], cube[1][1][1], cube[1][1][2]],
    [cube[2][2][2], cube[1][2][1], cube[1][2][2]],
  ];

  newCube[2] = [
    [cube[2][0][0], cube[2][0][1], cube[2][0][2]],
    [cube[2][1][0], cube[2][1][1], cube[2][1][2]],
    [cube[4][2][2], cube[4][1][2], cube[4][0][2]],
  ];

  newCube[3] = cube[3];

  newCube[4] = [
    [cube[4][0][0], cube[4][0][1], cube[0][0][0]],
    [cube[4][1][0], cube[4][1][1], cube[0][0][1]],
    [cube[4][2][0], cube[4][2][1], cube[0][0][2]],
  ];

  newCube[5] = [
    [cube[5][0][2], cube[5][1][2], cube[5][2][2]],
    [cube[5][0][1], cube[5][1][1], cube[5][2][1]],
    [cube[5][0][0], cube[5][1][0], cube[5][2][0]],
  ];

  return newCube;
}

export function CubeArrayMCCW(cube) {
  let newCube = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];

  newCube[0] = [
    [cube[0][0][0], cube[0][0][1], cube[0][0][2]],
    [cube[1][2][1], cube[1][1][1], cube[1][0][1]],
    [cube[0][2][0], cube[0][2][1], cube[0][2][2]],
  ];

  newCube[1] = [
    [cube[1][0][0], cube[2][1][0], cube[1][0][2]],
    [cube[1][1][0], cube[2][1][1], cube[1][1][2]],
    [cube[1][2][0], cube[2][1][2], cube[1][2][2]],
  ];

  newCube[2] = [
    [cube[2][0][0], cube[2][0][1], cube[2][0][2]],
    [cube[4][2][1], cube[4][1][1], cube[4][0][1]],
    [cube[2][2][0], cube[2][2][1], cube[2][2][2]],
  ];

  newCube[3] = cube[3];

  newCube[4] = [
    [cube[4][0][0], cube[0][1][0], cube[4][0][2]],
    [cube[4][1][0], cube[0][1][1], cube[4][1][2]],
    [cube[4][2][0], cube[0][1][2], cube[4][2][2]],
  ];

  newCube[5] = cube[5];

  return newCube;
}

export function CubeArrayFCCW(cube) {
  let newCube = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];

  newCube[0] = [
    [cube[3][0][0], cube[0][0][1], cube[0][0][2]],
    [cube[3][1][0], cube[0][1][1], cube[0][1][2]],
    [cube[3][2][0], cube[0][2][1], cube[0][2][2]],
  ];

  newCube[1] = [
    [cube[1][0][2], cube[1][1][2], cube[1][2][2]],
    [cube[1][0][1], cube[1][1][1], cube[1][2][1]],
    [cube[1][0][0], cube[1][1][0], cube[1][2][0]],
  ];

  newCube[2] = [
    [cube[5][2][2], cube[2][0][1], cube[2][0][2]],
    [cube[5][1][2], cube[2][1][1], cube[2][1][2]],
    [cube[5][0][2], cube[2][2][1], cube[2][2][2]],
  ];

  newCube[3] = [
    [cube[2][0][0], cube[3][0][1], cube[3][0][2]],
    [cube[2][1][0], cube[3][1][1], cube[3][1][2]],
    [cube[2][2][0], cube[3][2][1], cube[3][2][2]],
  ];

  newCube[4] = cube[4];

  newCube[5] = [
    [cube[5][0][0], cube[5][0][1], cube[0][2][0]],
    [cube[5][1][0], cube[5][1][1], cube[0][1][0]],
    [cube[5][2][0], cube[5][2][1], cube[0][0][0]],
  ];

  return newCube;
}

export function CubeArraySCCW(cube) {
  let newCube = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];

  newCube[0] = [
    [cube[0][0][0], cube[3][0][1], cube[0][0][2]],
    [cube[0][1][0], cube[3][1][1], cube[0][1][2]],
    [cube[0][2][0], cube[3][2][1], cube[0][2][2]],
  ];

  newCube[1] = cube[1];

  newCube[2] = [
    [cube[2][0][0], cube[5][2][1], cube[2][0][2]],
    [cube[2][1][0], cube[5][1][1], cube[2][1][2]],
    [cube[2][2][0], cube[5][0][1], cube[2][2][2]],
  ];

  newCube[3] = [
    [cube[3][0][0], cube[2][0][1], cube[3][0][2]],
    [cube[3][1][0], cube[2][1][1], cube[3][1][2]],
    [cube[3][2][0], cube[2][2][1], cube[3][2][2]],
  ];

  newCube[4] = cube[4];

  newCube[5] = [
    [cube[5][0][0], cube[0][2][1], cube[5][0][2]],
    [cube[5][1][0], cube[0][1][1], cube[5][1][2]],
    [cube[5][2][0], cube[0][0][1], cube[5][2][2]],
  ];

  return newCube;
}

export function CubeArrayBCCW(cube) {
  let newCube = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];

  newCube[0] = [
    [cube[0][0][0], cube[0][0][1], cube[5][2][0]],
    [cube[0][1][0], cube[0][1][1], cube[5][1][0]],
    [cube[0][2][0], cube[0][2][1], cube[5][0][0]],
  ];

  newCube[1] = cube[1];

  newCube[2] = [
    [cube[2][0][0], cube[2][0][1], cube[3][0][2]],
    [cube[2][1][0], cube[2][1][1], cube[3][1][2]],
    [cube[2][2][0], cube[2][2][1], cube[3][2][2]],
  ];

  newCube[3] = [
    [cube[3][0][0], cube[3][0][1], cube[0][0][2]],
    [cube[3][1][0], cube[3][1][1], cube[0][1][2]],
    [cube[3][2][0], cube[3][2][1], cube[0][2][2]],
  ];

  newCube[4] = [
    [cube[4][0][2], cube[4][1][2], cube[4][2][2]],
    [cube[4][0][1], cube[4][1][1], cube[4][2][1]],
    [cube[4][0][0], cube[4][1][0], cube[4][2][0]],
  ];

  newCube[5] = [
    [cube[2][2][2], cube[5][0][1], cube[5][0][2]],
    [cube[2][1][2], cube[5][1][1], cube[5][1][2]],
    [cube[2][0][2], cube[5][2][1], cube[5][2][2]],
  ];

  return newCube;
}

export function CubeArrayUCCW(cube) {
  let newCube = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];

  newCube[0] = [
    [cube[0][0][2], cube[0][1][2], cube[0][2][2]],
    [cube[0][0][1], cube[0][1][1], cube[0][2][1]],
    [cube[0][0][0], cube[0][1][0], cube[0][2][0]],
  ];

  newCube[1] = [
    [cube[5][0][0], cube[5][0][1], cube[5][0][2]],
    [cube[1][1][0], cube[1][1][1], cube[1][1][2]],
    [cube[1][2][0], cube[1][2][1], cube[1][2][2]],
  ];

  newCube[2] = cube[2];

  newCube[3] = [
    [cube[1][0][0], cube[1][0][1], cube[1][0][2]],
    [cube[3][1][0], cube[3][1][1], cube[3][1][2]],
    [cube[3][2][0], cube[3][2][1], cube[3][2][2]],
  ];

  newCube[4] = [
    [cube[3][0][0], cube[3][0][1], cube[3][0][2]],
    [cube[4][1][0], cube[4][1][1], cube[4][1][2]],
    [cube[4][2][0], cube[4][2][1], cube[4][2][2]],
  ];

  newCube[5] = [
    [cube[4][0][0], cube[4][0][1], cube[4][0][2]],
    [cube[5][1][0], cube[5][1][1], cube[5][1][2]],
    [cube[5][2][0], cube[5][2][1], cube[5][2][2]],
  ];

  return newCube;
}

export function CubeArrayECCW(cube) {
  let newCube = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];

  newCube[0] = cube[0];

  newCube[1] = [
    [cube[1][0][0], cube[1][0][1], cube[1][0][2]],
    [cube[3][1][0], cube[3][1][1], cube[3][1][2]],
    [cube[1][2][0], cube[1][2][1], cube[1][2][2]],
  ];

  newCube[2] = cube[2];

  newCube[3] = [
    [cube[3][0][0], cube[3][0][1], cube[3][0][2]],
    [cube[4][1][0], cube[4][1][1], cube[4][1][2]],
    [cube[3][2][0], cube[3][2][1], cube[3][2][2]],
  ];

  newCube[4] = [
    [cube[4][0][0], cube[4][0][1], cube[4][0][2]],
    [cube[5][1][0], cube[5][1][1], cube[5][1][2]],
    [cube[4][2][0], cube[4][2][1], cube[4][2][2]],
  ];

  newCube[5] = [
    [cube[5][0][0], cube[5][0][1], cube[5][0][2]],
    [cube[1][1][0], cube[1][1][1], cube[1][1][2]],
    [cube[5][2][0], cube[5][2][1], cube[5][2][2]],
  ];

  return newCube;
}

export function CubeArrayDCCW(cube) {
  let newCube = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];

  newCube[0] = cube[0];

  newCube[1] = [
    [cube[1][0][0], cube[1][0][1], cube[1][0][2]],
    [cube[1][1][0], cube[1][1][1], cube[1][1][2]],
    [cube[3][2][0], cube[3][2][1], cube[3][2][2]],
  ];

  newCube[2] = [
    [cube[2][0][2], cube[2][1][2], cube[2][2][2]],
    [cube[2][0][1], cube[2][1][1], cube[2][2][1]],
    [cube[2][0][0], cube[2][1][0], cube[2][2][0]],
  ];

  newCube[3] = [
    [cube[3][0][0], cube[3][0][1], cube[3][0][2]],
    [cube[3][1][0], cube[3][1][1], cube[3][1][2]],
    [cube[4][2][0], cube[4][2][1], cube[4][2][2]],
  ];

  newCube[4] = [
    [cube[4][0][0], cube[4][0][1], cube[4][0][2]],
    [cube[4][1][0], cube[4][1][1], cube[4][1][2]],
    [cube[5][2][0], cube[5][2][1], cube[5][2][2]],
  ];

  newCube[5] = [
    [cube[5][0][0], cube[5][0][1], cube[5][0][2]],
    [cube[5][1][0], cube[5][1][1], cube[5][1][2]],
    [cube[1][2][0], cube[1][2][1], cube[1][2][2]],
  ];

  return newCube;
}
