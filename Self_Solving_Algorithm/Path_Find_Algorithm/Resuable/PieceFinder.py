def center_find_peice(color, cube):
    for i in range(len(cube)):
        if cube[i][1][1] == color:
            return i

# 0,1,1
# 1,1,1
# 2,1,1
# 3,1,1
# 4,1,1
# 5,1,1