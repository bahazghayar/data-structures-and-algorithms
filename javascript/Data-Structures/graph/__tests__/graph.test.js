'use strict';

let {Graph} = require("../graph.js");

describe("Graph Implementation Tests", () => {

    it('The Node can be successfully added to the graph', () => {
        let graph = new Graph();

        graph.addNode(5);
        expect(graph.size()).toBe(1);
    });
    
    it('An edge can be successfully added to the graph', () => {
        let graph = new Graph();

        graph.addNode(2);
        graph.addNode(3);
        graph.addEdge(2, 3, 1);

        expect(graph.getNeighbours(2)[0].weight).toBe(1);
    });
 
    it('All appropriate neighbors can be retrieved from the graph', () => {
        let graph = new Graph();

        graph.addNode(2);
        graph.addNode(4);
        graph.addEdge(2, 4, 1);

        expect(graph.getNeighbours(2)[0].vertex).toBe(4);
    });
 
    it('Neighbors are returned with the weight between nodes included', () => {
        let graph = new Graph();

        graph.addNode(2);
        graph.addNode(4);
        graph.addEdge(2, 4, 8);

        expect(graph.getNeighbours(2)[0].weight).toBe(8);
    });

    it('The proper size is returned, representing the number of nodes in the graph', () => {
        let graph = new Graph();

        graph.addNode(10);
        graph.addNode(15);
        graph.addEdge(10, 15);

        expect(graph.size()).toEqual(2);
    });

    it('A graph with only one node and edge can be properly returned', () => {
        let graph = new Graph();

        graph.addNode(5);
        graph.addEdge(5, 5, 2);

        expect(graph.size()).toEqual(1);
    });
 
    it('An empty graph properly returns null', () => {
        let graph = new Graph();

        expect(graph.size()).toBe(0);
    });

});
