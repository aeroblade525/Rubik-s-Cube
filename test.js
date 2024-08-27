function CubeArrayBCW(cube) {
  console.log("this function is working");

  let newCube = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];

  newCube[0] = [
    [cube[0][0][0], cube[0][0][1], cube[3][0][2]],
    [cube[0][1][0], cube[0][1][1], cube[3][1][2]],
    [cube[0][2][0], cube[0][2][1], cube[3][2][2]],
  ];

  newCube[1] = cube[1];

  newCube[2] = [
    [cube[2][0][0], cube[2][0][1], cube[5][2][0]],
    [cube[2][1][0], cube[2][1][1], cube[5][1][0]],
    [cube[2][2][0], cube[2][2][1], cube[5][0][0]],
  ];

  newCube[3] = [
    [cube[3][0][0], cube[3][0][1], cube[2][0][2]],
    [cube[3][1][0], cube[3][1][1], cube[2][1][2]],
    [cube[3][2][0], cube[3][2][1], cube[2][2][2]],
  ];

  newCube[4] = [
    [cube[4][2][0], cube[4][1][0], cube[4][0][0]],
    [cube[4][2][1], cube[4][1][1], cube[4][0][1]],
    [cube[4][2][2], cube[4][1][2], cube[4][0][2]],
  ];

  newCube[5] = [
    [cube[0][2][2], cube[5][0][1], cube[5][0][2]],
    [cube[0][1][2], cube[5][1][1], cube[5][1][2]],
    [cube[0][0][2], cube[5][2][1], cube[5][2][2]],
  ];

  return newCube;
}
// Example usage:
let cubeArray = [
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

// console.log(cubeArray[1][0][0])
let trotateCubeRCW = false;

window.addEventListener("keydown", (event) => {
  if (event.key === "2") {
    cubeArray = CubeArrayBCW(cubeArray);
    console.log(cubeArray);
    trotateCubeRCW = false;
  }
  console.log(event);
  console.log(trotateCubeRCW);
});

if (trotateCubeRCW == true) {
}
