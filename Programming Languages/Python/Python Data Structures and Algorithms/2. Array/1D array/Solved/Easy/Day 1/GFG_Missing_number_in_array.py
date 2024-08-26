""" https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1? """

class Solution:
    def missingNumber(self, array, n):
        element_store = dict()

        for i, ele in enumerate(array):
            element_store[ele] = 1

        not_present = [i for i in range(1, n + 1) if i not in element_store]

        return not_present
