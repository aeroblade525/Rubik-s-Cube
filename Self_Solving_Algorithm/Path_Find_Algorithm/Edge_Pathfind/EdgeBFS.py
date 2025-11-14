from Path_Find_Algorithm.Resuable.BFSAlgorithm import shortest_path

def find_edge_path(cube_array, coord1, coord2, coord_to_label, edge_graph):
    label1 = coord_to_label.get(coord1)
    label2 = coord_to_label.get(coord2)

    if not label1 or not label2:
        return f"Invalid coordinates: {coord1} or {coord2} not mapped to edge labels."

    path = shortest_path(edge_graph, label1, label2)
    return path