# Dividing into Chunks of Maximum Sum N

## Instructions

Write a function that takes in an array of integers and a maximum sum `n`, and returns a list of subarrays such that the sum of each subarray is less than or equal to `n`. The function should start from the left side of the array and move to the right, using a greedy approach to fit as many elements as possible into each subarray.

Examples

```
divide([1, 2, 3, 4, 1, 0, 2, 2], 5)
➞ [[1, 2], [3], [4, 1, 0], [2, 2]]

```

## Constraints

- The maximum value in the input array will be less than or equal to n.
- The value of n will be a positive integer.
- The input array may contain negative integers.

## Acceptance Criteria

The function should return a list of subarrays such that the sum of each subarray is less than or equal to `n`. The subarrays should be created by iterating over the input array from left to right and using a greedy approach to fit as many elements as possible into each subarray.
