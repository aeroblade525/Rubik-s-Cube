from Path_Find_Algorithm.Path_Find_Main import solve_algorithm
# from Path_Find_Algorithm.Pochmann_Method.Edges import edge_solver
from PythonCubeArray import cube_array_python



def main():
    # print(edge_solver(cube_array_python, (0, 1, 2)))

    print("this is the start", cube_array_python)
    print("this is the change", solve_algorithm(cube_array_python))


if __name__ == '__main__':
    main()

# python -m Self_Solving_Algorithm.PythonMain

# Overall Scamble partern F2 R' L2 D' B' R' F' B U' F (red front, yellow top)
