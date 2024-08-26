> # `Curated topics`

## Type conversion

```python
a = 10.5
print(a, type(a))

a = complex(a)
print(a, type(a))
```

## Generate a random number

```python
import random

print(random.randrange(0, 50))
```

## `global` keyword: to declare global variables from local scope

```python
def printSomething():
  global quote
  quote = "Fight till you won"

# printSomething()
# Can't use the global variable declared from function scope
# if you're not invoking the function in the first place

print(quote)
```

# Python string

> All string methods return new values. They do not change the original string.

## Check if a substring is present in another string

```python
text = "Bangladesh is no more an independent country"
substring = "Bangladeshi"

if substring in text:
  print(f"The substring {substring} appeared in the text")
else:
  print(f"Didn't appeared")
```

## String slicing

```python
text = "I love my parents"

substring_1 = text[10:]
print(substring_1)
```

## Python string immutability

```python
# python strings are immutable
# Any operations that seem to modify a string actually create a new string behind the seen

try:
  text[0] = "W"
except:
  print("something went wrong")
```

## Uppercase, lowercase, strip

```python
text = "  We're failed  "
print(text.upper())
print(text.lower())
print(text.strip()) # removes leading and trailing spaces
```

## Replace character with some other character

```python
a = "A B C D E F A A A"
print(a)
a = a.replace('A', 'Z')
print(a)
```

## Split a string

```python
a = "He is not aloof, he is an introvert"

separated = a.split(',')
separated[1] = separated[1].strip()

print(separated[0])
print(separated[1])
```

## Center of a string

