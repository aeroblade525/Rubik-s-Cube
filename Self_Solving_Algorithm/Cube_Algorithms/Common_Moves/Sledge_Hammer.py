from Cube_Turning.Cube_Turning_CW import CubeArrayRCW, CubeArrayUCW
from Cube_Turning.Cube_Turning_CCW import CubeArrayFCCW, CubeArrayRCCW
import copy

sledge_hammer_notation = [
    CubeArrayRCW,
    CubeArrayUCW,
    CubeArrayRCCW,
    CubeArrayFCCW
]

def sledge_hammer_algorithm(cube):
    CurrentState = copy.deepcopy(cube)
    for move in sledge_hammer_notation:
        CurrentState = move(CurrentState)
    return CurrentState
