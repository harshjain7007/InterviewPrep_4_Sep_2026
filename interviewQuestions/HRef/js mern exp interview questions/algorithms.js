// .
// .
// .
// .
// alogorithm :- https://www.geeksforgeeks.org/introduction-to-algorithms/
// --- types of algorithms :-
// ---------- 1. Brute Force Algorithm :- It is the simplest approach to a problem. A brute force algorithm is the first approach that comes to finding when we see a problem.
// GPT :- A brute force algorithm is a straightforward and simple approach to solving a problem, typically by exhaustively trying all possible solutions until the correct one is found or all options have been tested. It doesn't employ any advanced techniques or optimizations to improve efficiency; instead, it relies on raw computational power to search through the problem space.
// -- When to Use Brute Force Algorithms:-
// When the problem size is small, making the inefficiency manageable.
// When the simplicity of the algorithm is more important than its efficiency.
// When no better algorithms or heuristics are available.
// As a baseline to compare with more advanced algorithms.
// - Example :-  Problem: Find all substrings of a given string :
// function findAllSubstrings(str) {
//   let substrings = [];
//   let n = str.length;
//   for (let i = 0; i < n; i++) {
//       for (let j = i + 1; j <= n; j++) {
//           substrings.push(str.substring(i, j));
//       }
//   }
//   return substrings;
// }
// // Example usage:
// let inputString = "abc";
// let result = findAllSubstrings(inputString);
// console.log(result); // ["a", "ab", "abc", "b", "bc", "c"]

// --- This approach is brute force because it checks every possible substring of the string, resulting in a time complexity of O(n^2), where n is the length of the string.

// ----------- 2. Recursive Algorithm :- A recursive algorithm is based on recursion. In this case, a problem is broken into several sub-parts and called the same function again and again.
// GPT :- A recursive algorithm is a method of solving a problem where the solution involves solving smaller instances of the same problem. It typically consists of two main components: the base case and the recursive case. The base case is a condition under which the recursion stops, and the recursive case is where the function calls itself with a smaller or simpler input.
// Example :-
// function factorial(n) {
//     // Base case: 0! = 1
//     if (n === 0) {
//         return 1;
//     }
//     // Recursive case: n! = n * (n-1)!
//     return n * factorial(n - 1);
// }

// // Example usage:
// let number = 5;
// let result = factorial(number);
// console.log(result); // Output: 120

// Time complexicity :-  O(n): The algorithm makes a single recursive call for each decrement of n until it reaches 0. This results in n recursive calls, each performing a constant-time multiplication operation.
// Pros and Cons of Recursive Algorithms:
// Pros:
// Often simpler and more intuitive to implement than iterative solutions for certain problems.
// Can lead to elegant and concise code.
// Cons:
// Can lead to high memory usage and stack overflow issues if the recursion depth is too large.
// Often less efficient due to repeated calculations, as seen in the naive Fibonacci example.

// --- when we used recursive algorithm :-
// Recursive algorithms are often used in cases where the problem can be naturally divided into smaller subproblems of the same type. Here are some specific scenarios where using a recursive algorithm is advantageous:

// -- Note :- Recursive used more memory because of the call stack. as compare to solving a problem with loops (Iterative Approach), accrding to performance ittrative approche is better

// ----------  3. Backtracking Algorithm:
// The backtracking algorithm builds the solution by searching among all possible solutions. Using this algorithm, we keep on building the solution following criteria. Whenever a solution fails we trace back to the failure point build on the next solution and continue this process till we find the solution or all possible solutions are looked after.

// Example :-
// function generateSubsets(nums) {
//     let results = [];

//     function backtrack(start, currentSubset) {
//         results.push([...currentSubset]);

//         for (let i = start; i < nums.length; i++) {
//             // Include nums[i] in the current subset
//             currentSubset.push(nums[i]);
//             // Move on to the next element
//             backtrack(i + 1, currentSubset);
//             // Backtrack: remove the last element added
//             currentSubset.pop();
//         }
//     }

//     backtrack(0, []);
//     return results;
// }

// // Example usage:
// let inputSet = [1, 2, 3];
// let subsets = generateSubsets(inputSet);
// console.log(subsets);
// // Output:
// // [
// //   [], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]
// // ]

// When to Use Backtracking:
// Combinatorial Problems: Problems where you need to explore all combinations, such as generating permutations and combinations.
// Constraint Satisfaction Problems: Problems where the solution must meet certain constraints, such as the N-Queens problem, Sudoku, and crossword puzzles.
// Puzzle Solving: Problems where the solution requires exploring multiple paths, such as mazes, the knight's tour, and word searches.

// Advantages of Backtracking:-
// Systematic Search: It systematically explores all potential solutions.
// Simplicity: It can be easier to implement than other complex algorithms for some problems.
// Flexibility: It can be adapted to various problems with different constraints.

// Disadvantage of Backtracking:-
// Exponential Time Complexity: It can be very slow for large inputs, as it may need to explore an exponential number of possibilities.
// Memory Usage: Recursive implementations can use a significant amount of memory due to the call stack.
// Inefficiency: For some problems, more efficient algorithms (like dynamic programming or greedy algorithms) may exist.

// ------------ 4. Searching Algorithm:- Searching algorithms are the ones that are used for searching elements or groups of elements from a particular data structure. They can be of different types based on their approach or the data structure in which the element should be found.

// A searching algorithm is a method used to find a specific element or set of elements within a data structure or dataset. The goal is to determine whether an element exists and, if so, to locate its position. Searching algorithms are fundamental in computer science and are used in a wide range of applications, from databases to search engines.

// Types of Searching Algorithms
// Linear Search (Sequential Search) :-
// Description:-  Linear search is the simplest searching algorithm. It checks each element of the list sequentially until the desired element is found or the list is exhausted.
// Time Complexity :-  O(n)
// Example :-
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Target found at index i
    }
  }
  return -1; // Target not found
}
// Example usage:
let numbers = [3, 5, 7, 9, 11];
let target = 7;
let result = linearSearch(numbers, target);
console.log(result); // Output: 2

// Binary Search :-
// Description: Binary search is an efficient algorithm for finding an element in a sorted list. It repeatedly divides the search interval in half. If the target value is less than the middle element, the search continues in the lower half; otherwise, it continues in the upper half.
// Time Complexity: O(log n)
// Example :-
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found at index mid
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }
  return -1; // Target not found
}
// Example usage:
let sortedNumbers = [1, 3, 5, 7, 9, 11];
let target2 = 7;
let result2 = binarySearch(sortedNumbers, target2);
console.log(result2); // Output: 3

// Hashing :-
// Description: Hashing involves using a hash function to map elements to a specific location in a hash table. This allows for constant-time average complexity for searches, insertions, and deletions.
// Time Complexity: O(1) average case
// Example :-
class HashTable {
  constructor(size) {
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.table.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    let index = this.hash(key);
    return this.table[index];
  }
}

// Example usage:
let hashTable = new HashTable(10);
hashTable.set("name", "John");
let result3 = hashTable.get("name");
console.log(result3); // Output: John

// Jump Search :-
// Description: Jump search is an improvement over linear search. It works by jumping ahead by a fixed number of steps (called the jump size) and then performing a linear search within the block where the target might be.
// Time Complexity: O(√n)
function jumpSearch(arr, target) {
  let n = arr.length;
  let step = Math.floor(Math.sqrt(n));
  let prev = 0;

  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) {
      return -1; // Target not found
    }
  }

  for (let i = prev; i < Math.min(step, n); i++) {
    if (arr[i] === target) {
      return i; // Target found at index i
    }
  }
  return -1; // Target not found
}

// Example usage:
let jumpSortedNumbers = [1, 3, 5, 7, 9, 11];
let target4 = 7;
let result4 = jumpSearch(jumpSortedNumbers, target4);
console.log(result4); // Output: 3

// Interpolation Search :-
// Description: Interpolation search is an improvement over binary search for uniformly distributed data. It estimates the position of the target value based on the values at the endpoints of the array segment.
// Time Complexity: O(log log n) in ideal conditions
// Example :-
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    let pos =
      low +
      Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

    if (arr[pos] === target) {
      return pos; // Target found at index pos
    } else if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }
  return -1; // Target not found
}

// Example usage:
let interpolationSortedNumbers = [1, 3, 5, 7, 9, 11];
let target5 = 7;
let result5 = interpolationSearch(interpolationSortedNumbers, target5);
console.log(result5); // Output: 3

// Summary
// Linear Search: Simple and works on unsorted data. Time complexity is O(n).
// Binary Search: Efficient for sorted data with time complexity O(log n).
// Hashing: Provides average-case O(1) time complexity but requires extra space and a good hash function.
// Jump Search: Suitable for sorted data, with time complexity O(√n).
// Interpolation Search: Ideal for uniformly distributed sorted data, with time complexity O(log log n) in ideal conditions.

// The choice of algorithm depends on the nature of the dataset (sorted or unsorted) and the requirements of the application (e.g., speed vs. space).

// ---------------   5. Sorting Algorithm:-
// Sorting is arranging a group of data in a particular manner according to the requirement. The algorithms which help in performing this function are called sorting algorithms. Generally sorting algorithms are used to sort groups of data in an increasing or decreasing manner.
// GPT :-  A sorting algorithm is a method used to arrange the elements of a list or array in a specific order, typically in ascending or descending order. Sorting algorithms are fundamental in computer science and are used in various applications, including data processing, searching, and organizing data for efficient retrieval.

// Types of Sorting Algorithms
// Bubble Sort
// Selection Sort
// Insertion Sort
// Merge Sort
// Quick Sort
// Heap Sort
// Counting Sort
// Radix Sort
// Bucket Sort

// 1. Bubble Sort
// Description: Bubble sort is a simple comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.

// Time Complexity: O(n^2)

// Example :-
// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
//             }
//         }
//     }
//     return arr;
// }

// // Example usage:
// let numbers = [64, 34, 25, 12, 22, 11, 90];
// let sortedNumbers = bubbleSort(numbers);
// console.log(sortedNumbers); // Output: [11, 12, 22, 25, 34, 64, 90]

// 2. Selection Sort
// Description: Selection sort works by repeatedly finding the minimum (or maximum) element from the unsorted portion of the list and placing it at the beginning (or end) of the sorted portion.

// Time Complexity: O(n^2)
// Example :-
// function selectionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
//     }
//     return arr;
// }

// // Example usage:
// let numbers = [64, 34, 25, 12, 22, 11, 90];
// let sortedNumbers = selectionSort(numbers);
// console.log(sortedNumbers); // Output: [11, 12, 22, 25, 34, 64, 90]

// 3. Insertion Sort
// Description: Insertion sort builds the final sorted array one item at a time by repeatedly picking the next item and inserting it into the correct position in the already sorted portion.

// Time Complexity: O(n^2)
// Example :-
// function insertionSort(arr) {
//     let n = arr.length;
//     for (let i = 1; i < n; i++) {
//         let key = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = key;
//     }
//     return arr;
// }

// // Example usage:
// let numbers = [64, 34, 25, 12, 22, 11, 90];
// let sortedNumbers = insertionSort(numbers);
// console.log(sortedNumbers); // Output: [11, 12, 22, 25, 34, 64, 90]

// 4. Merge Sort
// Description: Merge sort is a divide-and-conquer algorithm that divides the list into halves, recursively sorts each half, and then merges the sorted halves.

// Time Complexity: O(n log n)
// Example :-
// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;

//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));

//     return merge(left, right);
// }

// function merge(left, right) {
//     let result = [];
//     let i = 0, j = 0;

//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i++]);
//         } else {
//             result.push(right[j++]);
//         }
//     }

//     return result.concat(left.slice(i)).concat(right.slice(j));
// }

// // Example usage:
// let numbers = [64, 34, 25, 12, 22, 11, 90];
// let sortedNumbers = mergeSort(numbers);
// console.log(sortedNumbers); // Output: [11, 12, 22, 25, 34, 64, 90]

// 5. Quick Sort
// Description: Quick sort is another divide-and-conquer algorithm that selects a pivot element, partitions the array into elements less than and greater than the pivot, and recursively sorts the partitions.

// Time Complexity: O(n log n) on average; O(n^2) in the worst case

// Example :-
// function quickSort(arr) {
//     if (arr.length <= 1) return arr;

//     let pivot = arr[Math.floor(arr.length / 2)];
//     let left = arr.filter(x => x < pivot);
//     let right = arr.filter(x => x > pivot);
//     let middle = arr.filter(x => x === pivot);

//     return [...quickSort(left), ...middle, ...quickSort(right)];
// }

// // Example usage:
// let numbers = [64, 34, 25, 12, 22, 11, 90];
// let sortedNumbers = quickSort(numbers);
// console.log(sortedNumbers); // Output: [11, 12, 22, 25, 34, 64, 90]

// 6. Heap Sort
// Description: Heap sort converts the array into a binary heap structure and then sorts it by repeatedly extracting the maximum (or minimum) element from the heap.

// Time Complexity: O(n log n)

// function heapSort(arr) {
//     let n = arr.length;

//     // Build heap
//     for (let i = Math.floor(n / 2); i >= 0; i--) {
//         heapify(arr, n, i);
//     }

//     // Extract elements from heap
//     for (let i = n - 1; i > 0; i--) {
//         [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap
//         heapify(arr, i, 0);
//     }
//     return arr;
// }

// function heapify(arr, n, i) {
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     if (left < n && arr[left] > arr[largest]) {
//         largest = left;
//     }
//     if (right < n && arr[right] > arr[largest]) {
//         largest = right;
//     }
//     if (largest !== i) {
//         [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
//         heapify(arr, n, largest);
//     }
// }

// // Example usage:
// let numbers = [64, 34, 25, 12, 22, 11, 90];
// let sortedNumbers = heapSort(numbers);
// console.log(sortedNumbers); // Output: [11, 12, 22, 25, 34, 64, 90]

// 7. Counting Sort
// Description: Counting sort is a non-comparison-based sorting algorithm that works by counting the number of occurrences of each distinct element and using this count to determine the positions of each element in the sorted output.

// Time Complexity: O(n + k), where k is the range of the input values

// Example :-
// function countingSort(arr) {
//     let max = Math.max(...arr);
//     let count = new Array(max + 1).fill(0);
//     let output = new Array(arr.length);

//     for (let num of arr) {
//         count[num]++;
//     }

//     for (let i = 1; i <= max; i++) {
//         count[i] += count[i - 1];
//     }

//     for (let i = arr.length - 1; i >= 0; i--) {
//         output[count[arr[i]] - 1] = arr[i];
//         count[arr[i]]--;
//     }

//     return output;
// }

// // Example usage:
// let numbers = [4, 2, 2, 8, 3, 3, 1];
// let sortedNumbers = countingSort(numbers);
// console.log(sortedNumbers); // Output: [1, 2, 2, 3, 3, 4, 8]

// 8. Radix Sort
// Description: Radix sort is a non-comparison-based sorting algorithm that processes numbers digit by digit, starting from the least significant digit to the most significant digit.

// Time Complexity: O(n * k), where k is the number of digits in the largest number
// Example :-
// function radixSort(arr) {
//     let max = Math.max(...arr);
//     let exp = 1;
//     let output = new Array(arr.length);

//     while (Math.floor(max / exp) > 0) {
//         countingSortByDigit(arr, exp, output);
//         arr = [...output];
//         exp *= 10;
//     }

//     return arr;
// }

// function countingSortByDigit(arr, exp, output) {
//     let count = new Array(10).fill(0);

//     for (let num of arr) {
//         count[Math.floor(num / exp) % 10]++;
//     }

//     for (let i = 1; i < 10; i++) {
//         count[i] += count[i - 1];
//     }

//     for (let i = arr.length - 1; i >= 0; i--) {
//         let digit = Math.floor(arr[i] / exp) % 10;
//         output[count[digit] - 1] = arr[i];
//         count[digit]--;
//     }
// }

// // Example usage:
// let numbers = [170, 45, 75, 90, 802, 24, 2, 66];
// let sortedNumbers = radixSort(numbers);
// console.log(sortedNumbers); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

// 9. Bucket Sort
// Description: Bucket sort divides the range of the data into a number of buckets and then sorts each bucket individually, usually using another sorting algorithm or recursively.

// Time Complexity: O(n + k), where k is the number of buckets
// Example :-
// function bucketSort(arr) {
//     if (arr.length <= 1) return arr;

//     let max = Math.max(...arr);
//     let min = Math.min(...arr);
//     let bucketCount = Math.floor(max - min) + 1;
//     let buckets = Array.from({ length: bucketCount }, () => []);

//     for (let num of arr) {
//         buckets[num - min].push(num);
//     }

//     return buckets.flat().sort((a, b) => a - b);
// }

// // Example usage:
// let numbers = [4, 2, 2, 8, 3, 3, 1];
// let sortedNumbers = bucketSort(numbers);
// console.log(sortedNumbers); // Output: [1, 2, 2, 3, 3, 4, 8]

// Summary
// Bubble Sort: Simple but inefficient for large datasets. Time complexity is O(n^2).
// Selection Sort: Also simple but performs fewer swaps. Time complexity is O(n^2).
// Insertion Sort: Efficient for small or partially sorted datasets. Time complexity is O(n^2).
// Merge Sort: Efficient and stable. Time complexity is O(n log n).
// Quick Sort: Efficient on average but can degrade to O(n^2) in the worst case. Time complexity is O(n log n) on average.
// Heap Sort: Efficient with a guaranteed O(n log n) time complexity.
// Counting Sort: Efficient for small ranges of integers. Time complexity is O(n + k).
// Radix Sort: Efficient for integers with a small number of digits. Time complexity is O(n * k).
// Bucket Sort: Efficient for uniformly distributed data. Time complexity is O(n + k).

// The choice of sorting algorithm depends on factors such as the size of the dataset, the nature of the data, and performance requirements.
