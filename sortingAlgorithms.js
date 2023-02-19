/* 
Explain how bucket and radix sorts work.
Identify scenarios in which bucket and radix sorts should be used.
Describe the time complexity of bucket sort.
Implement bucket sort.
*/

// distribution vs comparison
// distribution -- categorize data,, like grade letters
// comparison -- compare one thing to another

const distribution = {
    "bucket sort": [
        'essay grading sscenario',
        'sorts elements based on value',
        'used for strings and integers',
        'best used of data is dense'
    ],
    "radix sort": [
        'same ad bucket but only used for integers',
        'looking at individual digits in set of numbers'
    ]
}

/* ======================
Describe how merge sort and quick sort work.
Explain the space and time complexities of merge sort and quick sort.
Identify when to use merge sort or quick sort in a given scenario.
*/

const mergeSort = [
    'extremely efficient divide and conquer',
    'easiest to sort a single-item list',
    'divide until you cant,, then merge together',
    'useful in database scenerios, additional data may arrive',
    '0(N)'
]

const quickSort = [
    'has a different divide phase',
    'chooses a single element as a "pivot" or anchor,, then compares it and moves it to left or right',
    'better in virtual memory, works better for caching environments',
    '0(N^2)'
]


/* ===================
Understand the Big O complexities of brute force and binary search approaches.
Describe how binary search works.
Write a binary search algorithm to find a value in an array.
 */