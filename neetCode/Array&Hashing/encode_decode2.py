'''
https://neetcode.io/problems/string-encode-and-decode
String Encode and Decode
Design an algorithm to encode a list of strings to a single string.
The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

encode -- use a function to combine the elements into 1 string --> "neet code love you"
decode -- take "neet code love you" and return ["neet", "code", "love", "you"]


Output:["neet","code","love","you"]


Example 2:

Input: ["we","say",":","yes"]
Output: ["we","say",":","yes"]


Constraints:

0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.


'''


class Solution:

    def encode(strs):
        return

    def decode(s):
        return


# Example 1:
input1 = ["neet", "code", "love", "you"]
solution1 = Solution()
encoded1 = solution1.encode(input1)
print(encoded1)  # "neet code love you"
print(solution1.decode(encoded1))["neet", "code", "love", "you"]

# Example 2:
input2 = ["we", "say", ":", "yes"]
solution2 = Solution()
encoded2 = solution2.encode(input2)
print(encoded2)  # "we say : yes"#
print(solution2.decode(encoded2))["we", "say", ":", "yes"]

# Test case with an empty array:
input3 = []
solution3 = Solution()
encoded3 = solution3.encode(input3)
print(encoded3)  # ""
print(solution3.decode(encoded3))  # []

# Test case with an array containing an empty string:
input4 = [""]
solution4 = Solution()
encoded4 = solution4.encode(input4)
print(encoded4)  # ""
print(solution4.decode(encoded4))  # [""]

# Test case with an array containing an empty string:
input5 = ["The quick brown fox", "jumps over the",
          "lazy dog", "1234567890", "abcdefghijklmnopqrstuvwxyz"]
solution5 = Solution()
encoded5 = solution5.encode(input5)
print(encoded5)  # ""
# ["The quick brown fox", "jumps over the", "lazy dog", "1234567890", "abcdefghijklmnopqrstuvwxyz"];
print(solution5.decode(encoded5))
