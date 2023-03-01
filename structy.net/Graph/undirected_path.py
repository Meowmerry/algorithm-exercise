"""
undirected path
Write a function, undirected_path, that takes in a list of edges for an undirected graph 
and two nodes (node_A, node_B). The function should return a boolean 
indicating whether or not there exists a path between node_A and node_B.
"""
edges = [
  ('i', 'j'),
  ('k', 'i'),
  ('m', 'k'),
  ('k', 'l'),
  ('o', 'n')
]
edges1 = [
  ('i', 'j'),
  ('k', 'i'),
  ('m', 'k'),
  ('k', 'l'),
  ('o', 'n')
]
def undirected_path(edges, node_A, node_B):
    pass


print(undirected_path(edges, 'j', 'm')) # -> True
print(undirected_path(edges, 'i', 'o')) # -> False