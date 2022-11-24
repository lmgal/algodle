export type Algorithm = {
    id: number,
    name: string,
    class: string,
    worstTime: string,
    averageTime: string,
    bestTime: string,
    space: string,
    dataStruct: Array<string>
}

export const algorithms = [{
    id: 0,
    name: 'Binary Search',
    class: 'Search',
    worstTime: '$O(log $ $n)$',
    averageTime: '$O(log $ $n)$',
    bestTime: '$O(1)$',
    space: '$O(1)$',
    dataStruct: ['Array']
}, {
    id: 1,
    name: 'Linear Search',
    class: 'Search',
    worstTime: '$O(n)$',
    averageTime: '$O(n/2)$',
    bestTime: '$O(1)$',
    space: '$O(1)$',
    dataStruct: ['Array', 'List']
}, {
    id: 2,
    name: 'Bubble Sort',
    class: 'Sorting',
    worstTime: '$O(n^2)$',
    averageTime: '$O(n^2)$',
    bestTime: '$O(n)$',
    space: '$O(1)$',
    dataStruct: ['Array']
}, {
    id: 3,
    name: 'Selection Sort',
    class: 'Sorting',
    worstTime: '$O(n^2)$',
    averageTime: '$O(n^2)$',
    bestTime: '$O(n)$',
    space: '$O(1)$',
    dataStruct: ['Array']
}, {
    id: 4,
    name: 'Heap Sort',
    class: 'Sorting',
    worstTime: '$O(nlog$ $n)$',
    averageTime: '$O(nlog$ $n)$',
    bestTime: '$O(n)$',
    space: '$O(n)',
    dataStruct: ['Heap', 'Array']
}, {
    id: 5,
    name: 'Merge Sort',
    class: 'Sorting',
    worstTime: '$O(nlog$ $n)$',
    averageTime: '$O(nlog$ $n)$',
    bestTime: '$O(nlog$ $n)$',
    space: '$O(n)$',
    dataStruct: ['Array']
}, {
    id: 6,
    name: 'Quick Sort',
    class: 'Sorting',
    worstTime: '$O(n^2)$',
    averageTime: '$O(nlog$ $n)$',
    bestTime: '$O(nlog$ $n)$',
    space: '$O(log$ $n)$',
    dataStruct: ['Array']
}, {
    id: 7,
    name: 'Breadth-first Search',
    class: 'Graph Search',
    worstTime: '$O(b^d)$',
    averageTime: '$O(b^d)$',
    bestTime: '$O(b^d)$',
    space: '$O(b^d)$',
    dataStruct: ['Graph']
}, {
    id: 8,
    name: 'Depth-first Search',
    class: 'Graph Search',
    worstTime: '$O(b^d)$',
    averageTime: '$O(b^d)$',
    bestTime: '$O(b^d)$',
    space: '$O(bd)$',
    dataStruct: ['Graph']
}, {
    id: 9,
    name: 'Bellman-Ford Algorithm',
    class: 'Shortest Path',
    worstTime: '$O(VE)$',
    averageTime: '$O(VE)$',
    bestTime: '$O(E)$',
    space: '$O(V)$',
    dataStruct: ['Directed Graph', 'Weighted Graph']
}, {
    id: 10,
    name: "Djkstra's Algorithm (Naive)",
    class: 'Shortest Path',
    worstTime: '$O(V^2)$',
    averageTime: '$O(V^2)$',
    bestTime: '$O(V^2)$',
    space: '$O(V)$',
    dataStruct: ['Graph', 'Weighted Graph', 'List']
}, {
    id: 11,
    name: "Djkstra's Algorithm (Priority Queue/Heap)",
    class: 'Shortest Path',
    worstTime: '$O(E+Vlog$ $V)$',
    averageTime: '$O(E+Vlog$ $V)$',
    bestTime: '$O(E+Vlog$ $V)$',
    space: '$O(V)$',
    dataStruct: ['Graph', 'Weighted Graph', 'Heap']
}, {
    id: 12,
    name: 'Floyd-Warshall Algorithm',
    class: 'Shortest Path',
    worstTime: '$O(V^3)$',
    averageTime: '$O(V^3)$',
    bestTime: '$O(V^3)$',
    space: '$O(V^2)$',
    dataStruct: ['Directed Graph', 'Weighted Graph']
}]