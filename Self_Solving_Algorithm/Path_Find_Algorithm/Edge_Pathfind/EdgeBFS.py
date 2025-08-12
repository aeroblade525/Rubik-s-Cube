from collections import deque

# Defining Paths
# the letter E stands for the edge peice while letter C stands for corner peice
# the 'AE' node is the endpoint for all nodes
cube_path = {
    'AE': [], #Yellow Face
    'BE': ['AE', 'CE', 'UE', 'OE'], #Yellow Face
    'CE': ['BE', 'DE', 'GE', 'QE'], #Yellow Face
    'DE': ['AE', 'CE', 'WE', 'ME'], #Yellow Face
    'EE': ['FE', 'HE', 'AE', 'IE'], #Red Face
    'FE': ['EE', 'GE', 'NE', 'VE'], #Red Face
    'GE': ['FE', 'HE', 'CE', 'KE'], #Red Face
    'HE': ['EE', 'GE', 'PE', 'XE'], #Red Face
    'IE': ['JE', 'LE', 'EE', 'SE'], #White Face
    'JE': ['IE', 'KE', 'WE', 'ME'], #White Face
    'KE': ['JE', 'LE', 'GE', 'QE'], #White Face
    'LE': ['IE', 'KE', 'OE', 'UE'], #White Face
    'ME': ['NE', 'PE', 'DE', 'JE'], #Green Face
    'NE': ['ME', 'OE', 'FE', 'RE'], #Green Face
    'OE': ['NE', 'PE', 'BE', 'LE'], #Green Face
    'PE': ['OE', 'ME', 'HE', 'TE'], #Green Face
    'QE': ['RE', 'TE', 'CE', 'KE'], #Orange Face
    'RE': ['QE', 'SE', 'NE', 'VE'], #Orange Face
    'SE': ['RE', 'TE', 'AE', 'IE'], #Orange Face
    'TE': ['QE', 'SE', 'PE', 'XE'], #Orange Face
    'UE': ['VE', 'XE', 'BE', 'LE'], #Blue/Purple Face
    'VE': ['UE', 'WE', 'FE', 'RE'], #Blue/Purple Face
    'WE': ['VE', 'XE', 'DE', 'JE'], #Blue/Purple Face
    'XE': ['UE', 'WE', 'HE', 'TE']  #Blue/Purple Face
}

def edge_shortest_path(graph, start, goal):
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

def moves_corresponder_bfs_edge(path, move_map):
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