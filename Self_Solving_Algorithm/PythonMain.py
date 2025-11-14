from Path_Find_Algorithm.Path_Find_Main import solve_algorithm
from PythonCubeArray import cube_array_python



def main():
    print(cube_array_python, "cube")

    print("this is the start", solve_algorithm(cube_array_python)[0])
    print("this is the change", solve_algorithm(cube_array_python)[-1])


if __name__ == '__main__':
    main()

# python -m Self_Solving_Algorithm.PythonMain

# Overall Scamble partern F2 R' L2 D' B' R' F' B U' F (red front, yellow top)
