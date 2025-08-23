from ..Cube_Turning.Cube_Turning_CCW import CubeArrayRCCW, CubeArrayUCCW
from ..Cube_Turning.Cube_Turning_CW import CubeArrayFCW, CubeArrayRCW
from ..Cube_Algorithms.Common_Moves.Sexy_Move import SexyMoveAlgorithm
from ..Cube_Algorithms.Common_Moves.Sledge_Hammer import SledgeHammerAlgorithm
import copy

Tperm_notation = [
    SexyMoveAlgorithm,
    CubeArrayRCCW,
    CubeArrayFCW,
    CubeArrayRCW,
    CubeArrayRCW,
    CubeArrayUCCW,
    CubeArrayRCCW,
    CubeArrayUCCW,
    SledgeHammerAlgorithm
]

def Tperm_algorithm(cube):
    current_state = copy.deepcopy(cube)
    for move in Tperm_notation:
        current_state = move(current_state)
    return current_state
