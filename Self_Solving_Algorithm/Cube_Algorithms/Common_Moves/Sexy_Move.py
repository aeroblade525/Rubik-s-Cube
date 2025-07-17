from ...Cube_Turning.Cube_Turning_CCW import CubeArrayRCCW, CubeArrayUCCW
from ...Cube_Turning.Cube_Turning_CW import CubeArrayRCW, CubeArrayUCW
import copy

SexyMoveNotation = [
    CubeArrayRCW,
    CubeArrayUCW,
    CubeArrayRCCW,
    CubeArrayUCCW
]

def SexyMoveAlgorithm(cube):
    CurrentState = copy.deepcopy(cube)
    for move in SexyMoveNotation:
        CurrentState = move(CurrentState)
    return CurrentState
