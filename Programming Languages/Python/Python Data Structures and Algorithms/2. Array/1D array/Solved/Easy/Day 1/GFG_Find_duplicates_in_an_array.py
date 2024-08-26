# ⭐⭐

""" https://www.geeksforgeeks.org/problems/find-duplicates-in-an-array/1? """

import collections


class Solution1:
    def duplicates(self, arr, n):
        counter = collections.Counter(arr)

        duplicates = [item for item in set(arr) if counter[item] > 1]

        return [-1] if not duplicates else sorted(duplicates)


class Solution2:
    def duplicates(self, arr, n):

        element_cnt = dict()
        duplicates = []

        for i, ele in enumerate(arr):
            if ele in element_cnt:
                element_cnt[ele] += 1
            else:
                element_cnt[ele] = 1

        for key, value in element_cnt.items():
            if value >= 2:
                duplicates.append(key)

        return [-1] if not duplicates else sorted(duplicates)
