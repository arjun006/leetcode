# 118. Pascal's Triangle
# Given an integer numRows, return the first numRows of Pascal's triangle.

# In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

# Example 1:

# Input: numRows = 5
# Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
# Example 2:

# Input: numRows = 1
# Output: [[1]]

from typing import List


class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        # 0[1]0
        # [1,1]
        # create temp array with leading and ending 0
        # new row should start by adding first 2 indexes, the pointer moves 1 space
        # when new row is created, append to result array
        if numRows <= 0: return []
        result = [[1]]

        for i in range(numRows - 1):
            tmp =[0] + result[-1] + [0]
            row = []
            for j in range(len(result[-1]) +1):
                row.append(tmp[j] + tmp[j+1])
            result.append(row)
        
        return result
# TEST CASES

    def testing(self, testNum: int, input: int, answer:List):
        print("\nTest Case: ",testNum )
        output = self.generate(input)
        if (output == answer):
            print("Correct")
            print("Output: ",output," Expected: ", answer)
            
        else:
            print("\nOutput:",self.generate())
            print("\nExpected Output:", answer)
    
    def test(self):
        test_cases = [
            (1, [[1]]),
            (2, [[1], [1, 1]]),
            (3, [[1], [1, 1], [1, 2, 1]]),
            (4, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]),
            (5, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]])
        ]
        for i, (numRows, expected) in enumerate(test_cases, 1):
            self.testing(i, numRows, expected)

Solution().test()
        
