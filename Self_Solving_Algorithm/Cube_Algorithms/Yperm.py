from ..Cube_Turning.Cube_Turning_CCW import CubeArrayFCCW, CubeArrayRCCW, CubeArrayUCCW
from ..Cube_Turning.Cube_Turning_CW import CubeArrayFCW, CubeArrayRCW
from ..Cube_Algorithms.Common_Moves.Sexy_Move import SexyMoveAlgorithm
from ..Cube_Algorithms.Common_Moves.Sledge_Hammer import SledgeHammerAlgorithm
import copy

YpermNotation = [
    CubeArrayFCW,
    CubeArrayRCW,
    CubeArrayUCCW,
    CubeArrayRCCW,
    CubeArrayUCCW,
    SledgeHammerAlgorithm,
    SexyMoveAlgorithm,
    CubeArrayRCCW,
    CubeArrayFCW,
    CubeArrayRCW,
    CubeArrayFCCW
]

def YpermAlgorithm(cube):
    current_state = copy.deepcopy(cube)
    for move in YpermNotation:
        current_state = move(current_state)
    return current_state
