from Cube_Turning.Cube_Turning_CCW import CubeArrayMCCW, CubeArrayECCW, CubeArraySCCW
from Cube_Turning.Cube_Turning_CW import CubeArrayMCW, CubeArrayECW, CubeArraySCW

center_map = {
    (0, 1): CubeArrayMCW,
    (0, 3): CubeArraySCW,
    (0, 4): CubeArrayMCCW,
    (0, 5): CubeArraySCCW,
    (1, 0): CubeArrayMCCW,
    (1, 2): CubeArrayMCW,
    (1, 3): CubeArrayECW,
    (1, 5): CubeArrayECCW,
    (2, 1): CubeArrayMCCW,
    (2, 3): CubeArraySCCW,
    (2, 4): CubeArrayMCW,
    (2, 5): CubeArraySCW,
    (3, 0): CubeArraySCCW,
    (3, 1): CubeArrayECCW,
    (3, 2): CubeArraySCW,
    (3, 4): CubeArrayECW,
    (4, 0): CubeArrayMCW,
    (4, 2): CubeArrayMCCW,
    (4, 3): CubeArrayECCW,
    (4, 5): CubeArrayECW,
    (5, 0): CubeArraySCW,
    (5, 1): CubeArrayECW,
    (5, 2): CubeArraySCCW,
    (5, 4): CubeArrayECCW
}
