cube_array_python = [
  [
    [0, 0, 0],
    [0, 0, 1],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ],
  [
    [3, 3, 3],
    [3, 3, 3],
    [3, 3, 3],
  ],
  [
    [4, 2, 4],
    [4, 4, 4],
    [4, 4, 4],
  ],
  [
    [5, 5, 5],
    [5, 5, 5],
    [5, 5, 5],
  ],
]


def home_position_edge(edge_position, cube_array):
    edge_adjacents = {
        (0, 1, 0): (1, 0, 1),
        (0, 0, 1): (5, 0, 1),
        (0, 1, 2): (4, 0, 1),
        (0, 2, 1): (3, 0, 1),
        (1, 1, 0): (5, 1, 2),
        (1, 0, 1): (0, 1, 0),
        (1, 1, 2): (4, 1, 0),
        (1, 2, 1): (2, 1, 0),
        (2, 1, 0): (1, 2, 1),
        (2, 0, 1): (5, 2, 1),
        (2, 1, 2): (4, 2, 1),
        (2, 2, 1): (3, 2, 1),
        (3, 1, 0): (5, 1, 0),
        (3, 0, 1): (0, 2, 1),
        (3, 1, 2): (4, 1, 2),
        (3, 2, 1): (2, 2, 1),
        (4, 1, 0): (1, 1, 2),
        (4, 0, 1): (0, 1, 2),
        (4, 1, 2): (3, 1, 2),
        (4, 2, 1): (2, 1, 2),
        (5, 1, 0): (3, 1, 0),
        (5, 0, 1): (0, 0, 1),
        (5, 1, 2): (1, 1, 0),
        (5, 2, 1): (2, 0, 1),
    }

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

print(home_position_edge((0, 1, 2), cube_array_python))

def is_edge_solved(face):
    center = face[1][1]
    return (
        face[0][1] == center and
        face[2][1] == center and
        face[1][0] == center and
        face[1][2] == center      
    )

i = 0
while not all(is_edge_solved(face) for face in cube_array_python):
    print("Still solving...")
    i += 1
    if i > 10:
        break