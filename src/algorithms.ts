export type Algorithm = {
    id: number,
    name: string,
    class: string,
    worstTime: string,
    worstTimeTip?: string,
    averageTime: string,
    averageTimeTip?: string,
    bestTime: string,
    bestTimeTip?: string,
    space: string,
    spaceTip?: string,
    dataStruct: Array<string>
}

export const algorithms : Array<Algorithm> = [{
    name: 'Binary Search',
    class: 'Search',
    worstTime: '$O(\\log{n})$',
    averageTime: '$O(\\log{n})$',
    bestTime: '$O(1)$',
    space: '$O(1)$',
    dataStruct: ['Array']
}, {
    name: 'Linear Search',
    class: 'Search',
    worstTime: '$O(n)$',
    averageTime: '$O(\\frac{n}{2})$',
    bestTime: '$O(1)$',
    space: '$O(1)$',
    dataStruct: ['Array', 'List']
}, {
    name: 'Bubble Sort',
    class: 'Sorting',
    worstTime: '$O(n^2)$',
    averageTime: '$O(n^2)$',
    bestTime: '$O(n^2)$',
    space: '$O(1)$',
    dataStruct: ['Array']
}, {
    name: 'Selection Sort',
    class: 'Sorting',
    worstTime: '$O(n^2)$',
    averageTime: '$O(n^2)$',
    bestTime: '$O(n)$',
    space: '$O(1)$',
    dataStruct: ['Array']
}, {
    name: 'Heap Sort',
    class: 'Sorting',
    worstTime: '$O(n\\log{n})$',
    averageTime: '$O(n\\log{n})$',
    bestTime: '$O(n)$',
    space: '$O(n)$',
    dataStruct: ['Heap', 'Array']
}, {
    name: 'Merge Sort',
    class: 'Sorting',
    worstTime: '$O(n\\log{n})$',
    averageTime: '$O(n\\log{n})$',
    bestTime: '$O(n\\log{n})$',
    space: '$O(n)$',
    dataStruct: ['Array']
}, {
    name: 'Quick Sort',
    class: 'Sorting',
    worstTime: '$O(n^2)$',
    averageTime: '$O(n\\log{n})$',
    bestTime: '$O(n\\log{n})$',
    space: '$O(\\log{n})$',
    dataStruct: ['Array']
}, {
    name: 'Counting Sort',
    class: 'Sorting',
    worstTime: '$O(n+k)$',
    averageTime: '$O(n+k)$',
    bestTime: '$O(n+k)$',
    space: '$O(n+k)$',
    dataStruct: ['Array']
}, {
    name: 'Radix Sort',
    class: 'Sorting',
    worstTime: '$O(d(n+k))$',
    averageTime: '$O(d(n+k))$',
    bestTime: '$O(d(n+k))$',
    space: '$O(n+b)$',
    dataStruct: ['Array']
}, {
    name: 'Bucket Sort',
    class: 'Sorting',
    worstTime: '$O(n^2)$',
    averageTime: '$O(n)$',
    bestTime: '$O(n+k)$',
    space: '$O(n+k)$',
    dataStruct: ['Array']
}, {
    name: 'Shell Sort',
    class: 'Sorting',
    worstTime: '$O(n^2)$',
    averageTime: '$O(n\\log{n})$',
    bestTime: '$O(n\\log{n})$',
    space: '$O(1)$',
    dataStruct: ['Array']
}, {
    name: 'Comb Sort',
    class: 'Sorting',
    worstTime: '$O(n^2)$',
    averageTime: '$O(\\frac{n^2}{2^p})$',
    bestTime: '$O(n\\log{n})$',
    space: '$O(1)$',
    dataStruct: ['Array']
}, {
    name: 'Pigeonhole Sort',
    class: 'Sorting',
    worstTime: '$O(n+N)$',
    averageTime: '$O(n+N)$',
    bestTime: '$O(n+N)$',
    space: '$O(n+N)$',
    dataStruct: ['Array']
}, {
    name: 'Cycle Sort',
    class: 'Sorting',
    worstTime: '$O(n^2)$',
    averageTime: '$O(n^2)$',
    bestTime: '$O(n^2)$',
    space: '$O(n)$',
    dataStruct: ['Array']
},{
    name: 'Breadth-first Search',
    class: 'Graph Search',
    worstTime: '$O(b^d)$',
    averageTime: '$O(b^d)$',
    bestTime: '$O(b^d)$',
    space: '$O(b^d)$',
    dataStruct: ['Graph']
}, {
    name: 'Depth-first Search',
    class: 'Graph Search',
    worstTime: '$O(b^d)$',
    averageTime: '$O(b^d)$',
    bestTime: '$O(b^d)$',
    space: '$O(bd)$',
    dataStruct: ['Graph']
}, {
    name: 'Bellman-Ford Algorithm',
    class: 'Shortest Path',
    worstTime: '$O(VE)$',
    averageTime: '$O(VE)$',
    bestTime: '$O(E)$',
    space: '$O(V)$',
    dataStruct: ['Directed Graph', 'Weighted Graph']
}, {
    name: "Djkstra's Algorithm (Naive)",
    class: 'Shortest Path',
    worstTime: '$O(V^2)$',
    averageTime: '$O(V^2)$',
    bestTime: '$O(V^2)$',
    space: '$O(V)$',
    dataStruct: ['Graph', 'Weighted Graph', 'List']
}, {
    name: "Djkstra's Algorithm (Priority Queue/Heap)",
    class: 'Shortest Path',
    worstTime: '$O(E+V\\log{V})$',
    averageTime: '$O(E+V\\log{V})$',
    bestTime: '$O(E+V\\log{V})$',
    space: '$O(V)$',
    dataStruct: ['Graph', 'Weighted Graph', 'Heap']
}, {
    name: 'Floyd-Warshall Algorithm',
    class: 'Shortest Path',
    worstTime: '$O(V^3)$',
    averageTime: '$O(V^3)$',
    bestTime: '$O(V^3)$',
    space: '$O(V^2)$',
    dataStruct: ['Directed Graph', 'Weighted Graph']
}, {
    name: "Kruskal's Algorithm",
    class: 'Minimum Spanning Tree',
    worstTime: '$O(E\\log{E)$',
    averageTime: '$O(E\\log{E)$',
    bestTime: '$O(E\\log{E)$',
    space: '$O(E+V)$',
    dataStruct: ['Weighted Graph']
}, {
    name: "Prim's Algorithm",
    class: 'Minimum Spanning Tree',
    worstTime: '$O(E\\log{V})$',
    averageTime: '$O(E\\log{V})$',
    bestTime: '$O(E\\log{V})$',
    space: '$O(V+E)$',
    dataStruct: ['Weighted Graph', 'Heap']
}, {
    name: "Kosaraju's Algorithm",
    class: 'Strongly connected components',
    worstTime: '$O(V+E)$',
    averageTime: '$O(V+E)$',
    bestTime: '$O(V+E)$',
    space: '$O(V)$',
    dataStruct: ['Directed Graph']
}, {
    name: "Tarjan's Algorithm",
    class: 'Strongly connected components',
    worstTime: '$O(V+E)$',
    averageTime: '$O(V+E)$',
    bestTime: '$O(V+E)$',
    space: '$O(V)$',
    dataStruct: ['Directed Graph']
}].map((algorithm, i) => ({...algorithm, id: i})) // Add id via iterator