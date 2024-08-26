a = 10
b = 10.5
c = -1000

print(a)
print(b)
print(c)

# পাশাপাশি print করতে হবে, মাঝখানে , থাকবে
print(f"{a}, {b}, {c}")

# one linear variable definition
# when we try to initialize same value to multiple variables
# x, y, z এর মান সমান
x = y = z = 20
print(f"{x}, {y}, {z}")

# Data types
# Data => unorganized values

"""

    10, 20, -100, 154.5 = > numeric data type(number)
        - numeric type = > 1) Integer: Natural number(-ve), 0, (+ve) -> পূর্ণসংখ্যা no fractions, 2) Float: fractional number
        - 10, 20, -100 (integer); 10.5, -33.55
    
    True, False= > boolean data type
    
    "Hello world!" = > string data type
"""

float_type = 100.5
int_type = 100
boolean_type = False
string_type = "Hello"

# Given a variable find out which type it belongs?
unknown_type = "Bangladesh"
print(type(float_type))

kichu_na_type = None
# print(type(kichu_na_type))
