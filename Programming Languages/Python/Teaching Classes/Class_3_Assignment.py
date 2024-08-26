
my_name = "Subodh"
father_name = "Shibu"
mother_name = "Pinu"
brother_name = "Rajmohan"
sister_name = "Araddha"
wife_name = "N/A"
my_address = "Tongi, Gazipur"
university_name = "SMUCT"
department = "CSE"
CGPA = 3.7
reference_name = "Sazzad Hossain Bhuiyan"

have_sister = False
have_brother = True

print("---------------------------------------------------------------")
print("|                     CV                                     |")
print("|                    ----                                    |")
print(f"| Name: {my_name}                                           |")
print(f"| Father name: {father_name}                             |")
print(f"| Mother name: {mother_name}                                |")

# যদি বোন থাকে তাহলে দেখাও
if have_sister is True:
    print(f"| Sister name: {sister_name}                            |")

# যদি ভাই থাকে তাহলে দেখাও, আর না হয় দেখানোর দরকার নাই
if have_brother is True:
    print(f"| Brother name: {brother_name}                          |")

print(f"| Wife_name: {wife_name}                                    |")
print(f"| Address: {my_address}    |")
print("| Orcid_ID:0000-0002-5665-4033                               |")
print("| Education qualification:                                   |")
print("|  _____________________________________________             |")
print("|  |University       | Department    | CGPA    |             |")
print(f"|  |{university_name} | {department}           |   {CGPA}  ||")
print("|  _____________________________________________             |")
print("|                                                            |")
print("|                                                            |")
print("|    Reference,                                              |")
print(f"|    {reference_name}                                       |")
print(f"|    {university_name}                                      |")
print("--------------------------------------------------------------")


# My name is Subodh and he is studying in CSE, SMUCT
# traditional
# print("My name is", my_name, "and he is studying in" , department, ",", university_name)

# f-string
print(
    f"My name is {my_name} and he is studying in {department}, {university_name}")
