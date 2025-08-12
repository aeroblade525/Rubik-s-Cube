import copy
from ..Path_Find_Algorithm.Edge_Pathfind.EdgeBFS import moves_corresponder_bfs_edge, edge_shortest_path, cube_path
from ..Path_Find_Algorithm.Edge_Pathfind.EdgeBFSMoveCorresponder import edge_map

edge_move_sequences = []
path = edge_shortest_path(cube_path, 'WE', 'AE')
edge_move_sequences.append(moves_corresponder_bfs_edge(path, edge_map))
print(path, edge_move_sequences)

def edge_solve_algorithm(cube):
    current_state = copy.deepcopy(cube)
    states = [current_state]
    for sequence in edge_move_sequences:
        for move in sequence:
            current_state = move(current_state)
        states.append(current_state)
    return states