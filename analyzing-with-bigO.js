// Main algorithms we are learning about
// sorting and search algorithms

/*
Algorithms are evaluated based on their computational complexity, or the amount of resources it takes to run them. Those resources include:

Time: The maximum amount of time it would take the algorithm to solve a problem.
Space: The maximum amount of computer memory, or RAM, the algorithm needs to run.

Is it very large or very small?
Very structured or very unstructured?
What types of data does it contain?
*/

const sortingAlgorithm = [
    'bubble sort',
    'insertion sort',
    'merge sort',
    'quick sort',
    'bucket sort',
    'radix sort'
]

const searchAlgorithm = [
    'binary search',
    'brute force search'
]

const complexity = {
    "constant complexity": ["great!",
        'task will always take same amount of time',
        'no matter the amount of input',
        '0(1)'
    ],
    "logarithmic complexity": ["great!",
        'cuts the problem in half each time',
        'binary search',
        '0(log(N))'
    ],
    "linear complexity": ['ok',
        'as input increases, processing increases linearly',
        'iow, one extra input = one more step for execution',
        'this applies when searching an unsorted array',
        '0(N)'
    ],
    "quadratic complexity": ['bad',
        'a for loop within a for loop',
        'O(N^2)'
    ],
    "factorial complexity": ['avoid at all costs',
        'cringe',
        '0(N!)'
    ]
}

/*
Big O is a popular technical interview subject because of just how fundamental it is to the way that we talk about algorithms. Interviewers want to make sure that you understand the difference between efficiency and inefficiency so that you aren’t writing code that takes excessive memory or energy to run.
*/

// Does the function have to go through an entire list? If so, there’s an N in that Big O class somewhere.

// Are there nested loops? That might give you O(N^2) (or worse).

// Does the function break the list into smaller chunks? You could have O(log(N)).

// Is the amount of work the same, regardless of the size of the data set? You might have O(1).
