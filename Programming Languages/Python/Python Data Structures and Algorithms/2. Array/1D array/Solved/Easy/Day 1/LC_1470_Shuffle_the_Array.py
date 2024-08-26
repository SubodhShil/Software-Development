class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        result = []

        for i, j in zip(nums[:n], nums[n:]):
            result += [i, j]

        return result


class Solution1:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        result = []

        for i in range(n):
            # result.append(nums[i])
            # result.append(nums[i + n])
            result += [nums[i], nums[i + n]]

        return result