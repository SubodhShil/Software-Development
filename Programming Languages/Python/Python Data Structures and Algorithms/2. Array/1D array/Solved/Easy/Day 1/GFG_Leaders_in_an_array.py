# ⭐⭐

""" https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1? """

class Solution:
    
    def leaders(self, A, N):
        leader_elements = []
        # max_num = float("-INF")
        max_num = A[-1]

        for num in reversed(A):
            if num >= max_num:
                leader_elements.append(num)
                max_num = num
        
        return leader_elements[::-1]
