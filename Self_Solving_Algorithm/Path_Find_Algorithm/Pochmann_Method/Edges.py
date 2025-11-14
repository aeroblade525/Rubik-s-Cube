from Path_Find_Algorithm.Resuable.PieceFinder import home_position_edge
from Path_Find_Algorithm.Resuable.BFSAlgorithm import shortest_path, moves_corresponder_bfs
from Path_Find_Algorithm.Edge_Pathfind.EdgeBFSMoveCorresponder import edge_map
from PythonCubeArray import cube_array_python
from Path_Find_Algorithm.Edge_Pathfind.EdgePath import edge_cube_path, coordinate_to_label
from Cube_Algorithms.Tperm import Tperm_algorithm

def is_edge_solved(face):
    center = face[1][1]
    return (
        face[0][1] == center and
        face[2][1] == center and
        face[1][0] == center and
        face[1][2] == center      
    )

# def edge_solver(cube):
#     i = 0
#     while not all(is_edge_solved(face) for face in cube):
#       i += 1
#       if i > 4:
#         break
#       else:
#         return shortest_path(edge_cube_path, coordinate_to_label[(0, 1, 2)], home_position_edge((0, 1, 2), cube))

def edge_solver(cube, start_pos):
    original_pos = start_pos
    current_pos = start_pos
    edge_cube_path = []
    paths = []
    i = 0
    while True:
        start_label = coordinate_to_label.get(current_pos)
        goal_coord = home_position_edge(current_pos, cube)
        goal_label = coordinate_to_label.get(goal_coord)

        print(f"Solving edge at {current_pos}: {start_label} → {goal_label}")

        if start_label is None or goal_label is None:
            print(f"Invalid label for {current_pos} or {goal_coord}")
            break

        path = shortest_path(edge_cube_path, start_label, goal_label)
        print(f"Path: {path}")
        edge_cube_path.append(path)
        paths.append(moves_corresponder_bfs(path, edge_map))
        paths.append(Tperm_algorithm)
        path_back = shortest_path(edge_cube_path, goal_label, start_label)
        edge_cube_path.append(path_back)
        paths.append(moves_corresponder_bfs(path_back, edge_map))

        # Stop if the edge is already at its home
        if current_pos == goal_coord:
            print("Edge is in its home position.")
            break

        # Move to the next edge position (simulate the move)
        current_pos = goal_coord

        if current_pos == original_pos:
            break

    return paths, edge_cube_path

# def edge_solver(cube):
#     for i in range(4):
#         path = shortest_path(
#             edge_cube_path,
#             'CE',
#             'XE'
#         )
#         print(f"Iteration {i + 1}: {path}")
#     return "Done"
# def edge_solver(cube):
#     i = 0
#     while not all(is_edge_solved(face) for face in cube):
#       if i > 4:
#         break

# print(edge_solver(cube_array_python))
    