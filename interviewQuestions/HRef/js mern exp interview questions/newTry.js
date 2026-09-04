// --------  Link
// Implement a Linked List: Write JavaScript classes/functions to implement a singly linked list with basic operations like insertion, deletion, and traversal.
// Binary Search: Write a function that implements the binary search algorithm to find a target element in a sorted array.

// -------------   understand this program  --
function fun(nums) {
  var permute = function (nums) {
    let result = [];

    permuteRec(nums, 0, result);

    return result;
  };

  // This function will swap characters for every
  // permutation
  function swapNums(nums, i, j) {
    let swapIndex = [...nums];

    let temp = swapIndex[j];
    swapIndex[j] = swapIndex[i];

    swapIndex[i] = temp;

    return swapIndex;
  }

  function permuteRec(nums, currentIndex, result) {
    var swappedNums;

    if (currentIndex === nums.length - 1) {
      result.push(nums);
      return;
    }

    for (var index = currentIndex; index < nums.length; index++) {
      swappedNums = swapNums(nums, currentIndex, index);
      permuteRec(swappedNums, currentIndex + 1, result);
    }
  }

  return permute(nums);
}
let nums = [1, 2, 3];
console.log(fun(nums));

// const isEmptyDeep = (element) => {
//     if (element === null) {
//       return true;
//     }
//     if (Array.isArray(element)) {
//       if (element.length === 0) {
//         return true;
//       }

//       let result;
//       for (let i = 0; i < element.length; i += 1) {
//         if (typeof element[i] === 'boolean' || (typeof element[i] === 'number' && !Number.isNaN(element[i]))
//           || (typeof element[i] === 'string' && element[i] !== '')) {
//           result = false;
//           break;
//         }
//         if (Array.isArray(element[i]) || (typeof element[i] === 'object' && element[i] !== null)) {
//           result = isEmptyDeep(element[i]);
//           break;
//         }

//         result = true;
//       }

//       return result;
//     }
//     if (typeof element === 'object') {
//       const objectKeys = Object.keys(element);
//       if (objectKeys.length === 0) {
//         return true;
//       }

//       let result;
//       for (let i = 0; i < objectKeys.length; i += 1) {
//         const value = element[objectKeys[i]];

//         if (typeof value === 'boolean' || (typeof value === 'number' && !Number.isNaN(value))
//           || (typeof value === 'string' && value !== '')) {
//           result = false;
//           break;
//         }
//         if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
//           result = isEmptyDeep(value);
//           break;
//         }

//         result = true;
//       }

//       return result;
//     }
//   };
// console.log(isEmptyDeep({})); // true
// console.log(isEmptyDeep({ a: { b: undefined }, d : 2 })); //  expected  false but which give true
// console.log(isEmptyDeep({ a: { b: [] }  })); //  true

// add two variable without using plus operator  // Done
// write custom program for convert desimal to binary
// try  Custom hook
