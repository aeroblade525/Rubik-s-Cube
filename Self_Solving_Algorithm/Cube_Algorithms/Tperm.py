from ..Cube_Turning.Cube_Turning_CCW import CubeArrayRCCW, CubeArrayUCCW
from ..Cube_Turning.Cube_Turning_CW import CubeArrayFCW, CubeArrayRCW
from ..Cube_Algorithms.Common_Moves.Sexy_Move import SexyMoveAlgorithm
from ..Cube_Algorithms.Common_Moves.Sledge_Hammer import SledgeHammerAlgorithm
import copy

TpermNotation = [
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

def TpermAlgorithm(cube):
    current_state = copy.deepcopy(cube)
    for move in TpermNotation:
        current_state = move(current_state)
    return current_state
