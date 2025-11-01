# Defining Paths
# the letter E stands for the edge peice while letter C stands for corner peice
# the 'AE' node is the endpoint for all nodes
edge_cube_path = {
    'AE': ['BE', 'DE', 'EE', 'SE'], #Yellow Face
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
    
    (4, 1, 0): 'NE',
    (4, 0, 1): 'OE',
    (4, 1, 2): 'PE',
    (4, 2, 1): 'QE',
    
    (5, 1, 0): 'QE',
    (5, 0, 1): 'RE',
    (5, 1, 2): 'SE',
    (5, 2, 1): 'TE',
    
    (1, 1, 0): 'UE',
    (1, 0, 1): 'VE',
    (1, 1, 2): 'WE',
    (1, 2, 1): 'XE',
}