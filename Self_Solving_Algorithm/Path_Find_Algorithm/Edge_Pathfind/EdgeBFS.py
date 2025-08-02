from collections import deque

# Defining Paths
# the letter E stands for the edge peice while letter C stands for corner peice
# the 'AE' node is the endpoint for all nodes
cube_path = {
    'AE': [], #Yellow Face
    'BE': ['AE', 'CE', 'FE', 'TE', 'UE', 'OE'], #Yellow Face
    'CE': ['BE', 'DE', 'VE', 'PE', 'GE', 'QE'], #Yellow Face
    'DE': ['AE', 'CE', 'WE', 'ME', 'HE', 'RE'], #Yellow Face
    'EE': ['FE', 'HE', 'AE', 'IE', 'ME', 'UE'], #Red Face
    'FE': ['EE', 'GE', 'BE', 'JE', 'NE', 'VE'], #Red Face
    'GE': ['FE', 'HE', 'OE', 'WE', 'CE', 'KE'], #Red Face
    'HE': ['EE', 'GE', 'PE', 'XE', 'DE', 'LE'], #Red Face
    'IE': ['JE', 'LE', 'EE', 'SE', 'VE', 'PE'], #White Face
    'JE': ['IE', 'KE', 'WE', 'ME', 'FE', 'TE'], #White Face
    'KE': ['JE', 'LE', 'GE', 'QE', 'NE', 'XE'], #White Face
    'LE': ['IE', 'KE', 'HE', 'RE', 'OE', 'UE'], #White Face
    'ME': ['NE', 'PE', 'DE', 'JE', 'EE', 'QE'], #Green Face
    'NE': ['ME', 'OE', 'FE', 'RE', 'AE', 'KE'], #Green Face
    'OE': ['NE', 'PE', 'BE', 'LE', 'GE', 'SE'], #Green Face
    'PE': ['OE', 'ME', 'HE', 'TE', 'CE', 'IE'], #Green Face
    'QE': ['RE', 'TE', 'CE', 'KE', 'ME', 'UE'], #Orange Face
    'RE': ['QE', 'SE', 'NE', 'VE', 'DE', 'LE'], #Orange Face
    'SE': ['RE', 'TE', 'AE', 'IE', 'OE', 'WE'], #Orange Face
    'TE': ['QE', 'SE', 'PE', 'XE', 'BE', 'JE'], #Orange Face
    'UE': ['VE', 'XE', 'BE', 'LE', 'QE', 'EE'], #Blue/Purple Face
    'VE': ['UE', 'WE', 'FE', 'RE', 'CE', 'IE'], #Blue/Purple Face
    'WE': ['VE', 'XE', 'DE', 'JE', 'GE', 'SE'], #Blue/Purple Face
    'XE': ['UE', 'WE', 'HE', 'TE', 'AE', 'KE']  #Blue/Purple Face
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

path = edge_shortest_path(cube_path, 'UE', 'AE')
print("Shortest path from 'b' to 'a':", path)