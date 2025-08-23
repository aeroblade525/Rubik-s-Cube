import copy
from ..PythonCubeArray import cube_array_python
from .Pochmann_Method.Centers import center_solver

cube_sequence = []
cube_sequence.append(center_solver(cube_array_python))

def solve_algorithm(cube):
    current_state = copy.deepcopy(cube)
    states = [current_state]
    for sequence in cube_sequence:
        for move_func in sequence:
            if isinstance(move_func, list):
                move_func = move_func[0]
            current_state = move_func(current_state)
        states.append(current_state)
    return states