"""
has path
Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph 
and two nodes (src, dst). The function should return a boolean indicating whether 
or not there exists a directed path between the source and destination nodes.

Hey. This is our first graph problem, so you should be liberal with watching the Approach and Walkthrough. 
Be productive, not stubborn. -AZ
"""
graph = {
  'f': ["g", "i"],
  'g': ["h"],
  'h': [],
  'i': ["g", "k"],
  'j': ["i"],
  'k': [],
}
def hasPath(graph, src, dst):
    if src == dst:
        return True
    for neighbor in  graph[src]:
       if hasPath(graph, neighbor, dst) == True:
           return True
    return False


# print((hasPath(graph, "f", "k"))) # True
# print((hasPath(graph, "f", "j"))) # False

from collections import deque

def hasPathBreadthFirst(graph, src, dst):
    queue = deque([src])

    while queue:
        current = queue.popleft()

        if current == dst:
                return True
        for neighbor in graph[current]:
            queue.append(neighbor)

    return False


print((hasPathBreadthFirst(graph, "f", "k"))) # True
print((hasPathBreadthFirst(graph, "f", "j"))) # False