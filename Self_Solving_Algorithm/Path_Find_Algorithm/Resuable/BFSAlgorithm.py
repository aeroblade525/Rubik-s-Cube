from collections import deque

def shortest_path(graph, start, goal):
    queue = deque([[start]])
    visited = set()

    while queue:
        path = queue.popleft()
        node = path[-1]

        if node == goal:
            return path 

        if node not in visited:
            visited.add(node)
            for neighbor in graph.get(node, []):
                new_path = list(path) 
                new_path.append(neighbor)
                queue.append(new_path)

    return None 

def moves_corresponder_bfs(path, move_map):
    edge_turns = []
    for i in range(len(path) - 1):
        edge = (path[i], path[i + 1])
        reverse_edge = (path[i + 1], path[i])
        
        if edge in move_map:
            edge_turns.append(move_map[edge])
        elif reverse_edge in move_map:
            edge_turns.append(move_map[reverse_edge])
        else:
            edge_turns.append(f"Unknown move for {edge}")
    return edge_turns