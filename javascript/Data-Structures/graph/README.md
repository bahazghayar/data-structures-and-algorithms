# Hashtables

**A graph** is a common data structure that consists of a finite set of nodes (or vertices) and a set of edges connecting them.
A pair (x,y) is referred to as an edge, which communicates that the x vertex connects to the y vertex.

## Challenge
Implement your own Graph. The graph should be represented as an adjacency list.
and should include the following methods:
* AddNode()
* AddEdge()
* GetNodes()
* GetNeighbors()
* Size()
       
## Approach & Efficiency

### Big O
AddNode: 
time O(1)
space O(n)

AddEdge: 
time O(1)
space O(m)

GetNodes: 
time O(1) 
space O(1)

GetNeighbors:
time O(1)
space O(1)

Size:
time O(1)
space O(1)

## API

* AddNode()
        Adds a new node to the graph
        Takes in the value of that node
        Returns the added node
* AddEdge()
        Adds a new edge between two nodes in the graph
        Include the ability to have a “weight”
        Takes in the two nodes to be connected by the edge
        Both nodes should already be in the Graph
* GetNodes()
        Returns all of the nodes in the graph as a collection (set, list, or similar)
* GetNeighbors()
        Returns a collection of edges connected to the given node
        Takes in a given node
        Include the weight of the connection in the returned collection
* Size()
        Returns the total number of nodes in the graph
