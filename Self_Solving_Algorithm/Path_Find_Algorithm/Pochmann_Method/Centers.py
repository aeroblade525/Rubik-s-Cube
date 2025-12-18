import copy
from Path_Find_Algorithm.Resuable.BFSAlgorithm import moves_corresponder_bfs, shortest_path
from Path_Find_Algorithm.Resuable.PieceFinder import center_find_peice
from Path_Find_Algorithm.Centers_Pathfind.CentersBFS import centers_cube_path
from Path_Find_Algorithm.Centers_Pathfind.CentersBFSMoveCorresponder import center_map

# function that places the center cubes in the desired home possible (not that important bc the edge function works eitherway)
def center_solver(cube):
    CurrentState = copy.deepcopy(cube)
    center_moves = []

    for i in range(len(cube)):
        expected_color = i
        actual_color = CurrentState[i][1][1]

        if actual_color != expected_color:
            center_path = shortest_path(
                centers_cube_path,
                center_find_peice(expected_color, CurrentState),
                expected_color
            )

            if center_path:
                move_sequence = moves_corresponder_bfs(center_path, center_map)
                center_moves.append(move_sequence)

                for move in move_sequence:
                    CurrentState = move(CurrentState)

    return center_moves