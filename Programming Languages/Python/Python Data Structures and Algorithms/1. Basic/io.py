
def multivariable_input():
    t = int(input())

    for i in range(0, t):
        a, b, c = map(int, input().split())
        print(f"Testcase {i + 1}: {a * 10}, {b * 10}, {c * 10}")

# multivariable_input()


""" Multiline array input"""


def array_input():
    # array size based input
    n = int(input())

    # initialize with default value
    # arr = [0 for _ in range(n)]
    arr = [0] * n

    # array input
    for i in range(n):
        arr[i] = int(input())

    for index, value in enumerate(arr):
        print(f"Index {index}: {value}")

# array_input()


""" Single array input """


def array_input2():
    arr = list(map(int, input().split()))

    for index, value in enumerate(arr):
        print(f"Index {index}: {value}")

# array_input2()


def array_of_string_input():
    arr_str = []
    n = int(input())

    for _ in range(n):
        arr_str.append(input())

    # list comprehension to print array elements
    [print(f"Index {index}: {value}") for index, value in enumerate(arr_str)]

# array_of_string_input()


def matrix_input():
    rows = int(input("Row: "))
    cols = int(input("Column: "))

    matrix = []

    # initialize the matrix
    # matrix = [[0 for _ in range(cols)] for _ in range(rows)]

    """ Taking input """
    for i in range(rows):
        row = []
        for j in range(cols):
            element = int(input())
            row.append(element)
        matrix.append(row)

    """ How to print the matrix """
    for i, row in enumerate(matrix):
        for _, ele in enumerate(row):
            print(ele, end=" ")
        print()

    # [print(row) for row in matrix]

    # [[print(ele, end=" ") for i, ele in enumerate(row)] and print() for row in matrix]


matrix_input()
