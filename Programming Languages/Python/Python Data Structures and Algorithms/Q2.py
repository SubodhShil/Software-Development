import Q1

# 1. Method: copy() 👉 Copy dictionary imported form Q1

macbook = Q1.macbook.copy()

model = macbook['fourteenInch']['processor']['M3 Pro']
Q1.checkSpecification(model)

# 2. Method clear() 👉 To empty the dictionary
dummy = macbook
dummy.clear()
print(dummy)


# 3.  Method fromkeys() 👉 returns a dictionary with the specified keys and the specified value.
keys = ('a', 'b', 'c', 'd')
newDict = dict.fromkeys(keys, 0)
print(newDict)


# 4. Method get() 👉 returns the value of the item with the specified key
print(newDict.get('c'))


# 5. Method items()
allDictItems = newDict.items()
print(allDictItems)

# 6. Method keys()
allDictKeys = newDict.keys()
print(allDictKeys)


# 7. Method setdefault()
newDict2 = {"age": 10}
newDict2.setdefault("name", "Subodh")
print(newDict2['name'])


# 8. Method update()
newDict2.update({"name": "Antu"})
print(newDict2)


# 9. Method values()
allValues = newDict2.values()
print(allValues)


# 10. Method pop()
newDict.pop('d')
print(f"After popping: {newDict}")


# 11. Method popitem()
newDict.popitem()
print(newDict)
