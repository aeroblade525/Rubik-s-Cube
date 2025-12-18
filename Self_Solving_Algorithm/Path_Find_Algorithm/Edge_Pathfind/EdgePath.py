# Defining Paths
# the letter E stands for the edge peice while letter C stands for corner peice
# the 'AE' node is the endpoint for all nodes
edge_cube_path = {
    'AE': ['EE', 'SE'], #Yellow Face
    'BE': ['UE', 'OE'], #Yellow Face
    'CE': [], #Yellow Face
    'DE': ['WE', 'ME'], #Yellow Face
    'EE': ['FE', 'HE', 'AE', 'IE'], #Red Face
    'FE': ['EE', 'GE'], #Red Face
    'GE': ['FE', 'HE'], #Red Face
    'HE': ['EE', 'GE', 'PE', 'XE'], #Red Face
    'IE': ['JE', 'LE', 'EE', 'SE'], #White Face
    'JE': ['IE', 'KE', 'WE', 'ME'], #White Face
    'KE': ['JE', 'LE'], #White Face
    'LE': ['IE', 'KE', 'OE', 'UE'], #White Face
    'ME': ['DE', 'JE'], #Green Face
    'NE': [], #Green Face
    'OE': ['BE', 'LE'], #Green Face
    'PE': ['HE', 'TE'], #Green Face
    'QE': ['RE', 'TE'], #Orange Face
    'RE': ['QE', 'SE'], #Orange Face
    'SE': ['RE', 'TE', 'AE', 'IE'], #Orange Face
    'TE': ['QE', 'SE', 'PE', 'XE'], #Orange Face
    'UE': ['VE', 'XE', 'BE', 'LE'], #Blue/Purple Face
    'VE': ['UE', 'WE'], #Blue/Purple Face
    'WE': ['VE', 'XE', 'DE', 'JE'], #Blue/Purple Face
    'XE': ['UE', 'WE', 'HE', 'TE']  #Blue/Purple Face
}

# Since the 3D array is stored as Nums we need to convert them so we know where to pathfind to where
coordinate_to_label = {
    (0, 1, 0): 'AE',
    (0, 0, 1): 'BE',
    (0, 1, 2): 'CE',
    (0, 2, 1): 'DE',
    
    (3, 1, 0): 'EE',
    (3, 0, 1): 'FE',
    (3, 1, 2): 'GE',
    (3, 2, 1): 'HE',
    
    (2, 1, 0): 'IE',
    (2, 0, 1): 'JE',
    (2, 1, 2): 'KE',
    (2, 2, 1): 'LE',
    
    (4, 1, 0): 'ME',
    (4, 0, 1): 'NE',
    (4, 1, 2): 'OE',
    (4, 2, 1): 'PE',
    
    (5, 1, 0): 'QE',
    (5, 0, 1): 'RE',
    (5, 1, 2): 'SE',
    (5, 2, 1): 'TE',
    
    (1, 1, 0): 'UE',
    (1, 0, 1): 'VE',
    (1, 1, 2): 'WE',
    (1, 2, 1): 'XE',
}

label_to_coordinate = {
    'AE': (0, 1, 0),
    'BE': (0, 0, 1),
    'CE': (0, 1, 2),
    'DE': (0, 2, 1),
    'EE': (3, 1, 0),
    'FE': (3, 0, 1),
    'GE': (3, 1, 2),
    'HE': (3, 2, 1),
    'IE': (2, 1, 0),
    'JE': (2, 0, 1),
    'KE': (2, 1, 2),
    'LE': (2, 2, 1),
    'ME': (4, 1, 0),
    'NE': (4, 0, 1),
    'OE': (4, 1, 2),
    'PE': (4, 2, 1),
    'QE': (5, 1, 0),
    'RE': (5, 0, 1),
    'SE': (5, 1, 2),
    'TE': (5, 2, 1),
    'UE': (1, 1, 0),
    'VE': (1, 0, 1),
    'WE': (1, 1, 2),
    'XE': (1, 2, 1),
}