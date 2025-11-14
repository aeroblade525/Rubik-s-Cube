from Cube_Turning.Cube_Turning_CCW import CubeArrayRCCW, CubeArrayUCCW
from Cube_Turning.Cube_Turning_CW import CubeArrayFCW, CubeArrayRCW
from Cube_Algorithms.Common_Moves.Sexy_Move import sexy_move_algorithm
from Cube_Algorithms.Common_Moves.Sledge_Hammer import sledge_hammer_algorithm
import copy

Tperm_notation = [
    sexy_move_algorithm,
    CubeArrayRCCW,
    CubeArrayFCW,
    CubeArrayRCW,
    CubeArrayRCW,
    CubeArrayUCCW,
    CubeArrayRCCW,
    CubeArrayUCCW,
    sledge_hammer_algorithm
]

def Tperm_algorithm(cube):
    current_state = copy.deepcopy(cube)
    for move in Tperm_notation:
        current_state = move(current_state)
    return current_state
