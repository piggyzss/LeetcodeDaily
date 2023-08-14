# 题目地址
https://leetcode.cn/problems/longest-palindromic-substring/

# 题目描述
4. 5. 最长回文子串
给你一个字符串 s，找到 s 中最长的回文子串。
如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。


 
# 示例
示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

示例 2：

输入：s = "cbbd"
输出："bb"
 

# 复杂度分析

时间复杂度：O(n2)O(n^2)O(n2)，其中 nnn 是字符串的长度。动态规划的状态总数为 O(n2)O(n^2)O(n2)
对于每个状态，我们需要转移的时间为 O(1)O(1)O(1)。

空间复杂度：O(n2)O(n^2)O(n2)，即存储动态规划状态需要的空间。