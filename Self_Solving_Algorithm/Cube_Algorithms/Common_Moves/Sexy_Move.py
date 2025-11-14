from Cube_Turning.Cube_Turning_CCW import CubeArrayRCCW, CubeArrayUCCW
from Cube_Turning.Cube_Turning_CW import CubeArrayRCW, CubeArrayUCW
import copy

sexy_move_notation = [
    CubeArrayRCW,
    CubeArrayUCW,
    CubeArrayRCCW,
    CubeArrayUCCW
]

def sexy_move_algorithm(cube):
    CurrentState = copy.deepcopy(cube)
    for move in sexy_move_notation:
        CurrentState = move(CurrentState)
    return CurrentState
