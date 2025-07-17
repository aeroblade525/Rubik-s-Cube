from ...Cube_Turning.Cube_Turning_CW import CubeArrayRCW, CubeArrayUCW
from ...Cube_Turning.Cube_Turning_CCW import CubeArrayFCCW, CubeArrayRCCW
import copy

SledgeHammerNotation = [
    CubeArrayRCW,
    CubeArrayUCW,
    CubeArrayRCCW,
    CubeArrayFCCW
]

def SledgeHammerAlgorithm(cube):
    CurrentState = copy.deepcopy(cube)
    for move in SledgeHammerNotation:
        CurrentState = move(CurrentState)
    return CurrentState
