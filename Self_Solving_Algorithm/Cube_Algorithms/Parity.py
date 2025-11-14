import copy
from Cube_Algorithms.Common_Moves.Sledge_Hammer import sledge_hammer_algorithm
from Cube_Turning.Cube_Turning_CW import CubeArrayRCW, CubeArrayUCW, CubeArrayFCW
from Cube_Turning.Cube_Turning_CCW import CubeArrayRCCW, CubeArrayUCCW

parity_notation = [
    sledge_hammer_algorithm,
    CubeArrayRCW,
    CubeArrayUCW,
    CubeArrayUCW,
    CubeArrayRCCW,
    CubeArrayUCW,
    CubeArrayUCW,
    CubeArrayRCCW,
    CubeArrayFCW,
    CubeArrayRCW,
    CubeArrayUCW,
    CubeArrayRCW,
    CubeArrayUCW,
    CubeArrayUCW,
    CubeArrayRCCW,
    CubeArrayUCCW
]

def parity_algorithm(cube):
    current_state = copy.deepcopy(cube)
    for move in parity_notation:
        current_state = move(current_state)
    return current_state