import copy
from PythonCubeArray import cube_array_python
from Path_Find_Algorithm.Pochmann_Method.Centers import center_solver
from Path_Find_Algorithm.Resuable.PieceFinder import home_position_edge
from Path_Find_Algorithm.Pochmann_Method.Edges import edge_solver
from Cube_Turning.Cube_Turning_CCW import CubeArrayBCCW, CubeArrayDCCW, CubeArrayFCCW, CubeArrayLCCW, CubeArrayRCCW, CubeArrayUCCW
from Cube_Turning.Cube_Turning_CW import CubeArrayBCW, CubeArrayDCW, CubeArrayFCW, CubeArrayLCW, CubeArrayRCW, CubeArrayUCW

cube_sequence = []
cube_sequence.append(center_solver(cube_array_python))
cube_sequence.append(edge_solver(cube_array_python, (0, 1, 2)))

def flatten(lst):
    result = []
    for item in lst:
        if isinstance(item, list):
            result.extend(flatten(item))  # Recursively flatten sublists
        else:
            result.append(item)
    return result

sequence1d = flatten(cube_sequence)

def solve_algorithm(cube):
    CurrentState = copy.deepcopy(cube)
    for move in sequence1d:
        CurrentState = move(CurrentState)
    return CurrentState

# print(edge_solver(cube_array_python, (0, 1, 2)))