edge_adjacents = {
        (0, 1, 0): (1, 0, 1),
        (0, 0, 1): (5, 0, 1),
        (0, 1, 2): (4, 0, 1),
        (0, 2, 1): (3, 0, 1),
        (1, 1, 0): (5, 1, 2),
        (1, 0, 1): (0, 1, 0),
        (1, 1, 2): (3, 1, 0),
        (1, 2, 1): (2, 1, 0),
        (2, 1, 0): (1, 2, 1),
        (2, 0, 1): (3, 2, 1),
        (2, 1, 2): (4, 2, 1),
        (2, 2, 1): (5, 2, 1),
        (3, 1, 0): (1, 1, 2),
        (3, 0, 1): (0, 2, 1),
        (3, 1, 2): (4, 1, 0),
        (3, 2, 1): (2, 0, 1),
        (4, 1, 0): (3, 1, 2),
        (4, 0, 1): (0, 1, 2),
        (4, 1, 2): (5, 1, 0),
        (4, 2, 1): (2, 1, 2),
        (5, 1, 0): (4, 1, 2),
        (5, 0, 1): (0, 0, 1),
        (5, 1, 2): (1, 1, 0),
        (5, 2, 1): (2, 2, 1),
    }

def center_find_peice(color, cube):
    for i in range(len(cube)):
        if cube[i][1][1] == color:
            return i

def home_position_edge(edge_position, cube_array):

    if edge_position not in edge_adjacents:
        return f"Edge position {edge_position} not recognized."

    face1, row1, col1 = edge_position
    face2, row2, col2 = edge_adjacents[edge_position]

    color1 = cube_array[face1][row1][col1]
    color2 = cube_array[face2][row2][col2]

    for pos, adj in edge_adjacents.items():
        f1, r1, c1 = pos
        f2, r2, c2 = adj
        center1 = cube_array[f1][1][1]
        center2 = cube_array[f2][1][1]

        if set([color1, color2]) == set([center1, center2]):
            if center1 == color1:
                return pos
            elif center2 == color1:
                return adj
    return "Home position not found."