from Cube_Turning.Cube_Turning_CCW import CubeArrayFCCW, CubeArrayRCCW, CubeArrayUCCW
from Cube_Turning.Cube_Turning_CW import CubeArrayFCW, CubeArrayRCW
from Cube_Algorithms.Common_Moves.Sexy_Move import sexy_move_algorithm
from Cube_Algorithms.Common_Moves.Sledge_Hammer import sledge_hammer_algorithm
import copy

Yperm_notation = [
    CubeArrayFCW,
    CubeArrayRCW,
    CubeArrayUCCW,
    CubeArrayRCCW,
    CubeArrayUCCW,
    sledge_hammer_algorithm,
    sexy_move_algorithm,
    CubeArrayRCCW,
    CubeArrayFCW,
    CubeArrayRCW,
    CubeArrayFCCW
]

def Yperm_algorithm(cube):
    current_state = copy.deepcopy(cube)
    for move in Yperm_notation:
        current_state = move(current_state)
    return current_state
