"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Graph = /** @class */ (function () {
    function Graph(isDirected, edges, vertices) {
        if (isDirected === void 0) { isDirected = false; }
        this.isDirected = isDirected;
        this.edges = edges;
        this.vertices = vertices;
        this.vertices = {};
        this.edges = {};
        this.isDirected = isDirected;
    }
    /**
     * @param {GraphVertex} newVertex
     * @returns {Graph}
     */
    Graph.prototype.addVertex = function (newVertex) {
        this.vertices[newVertex.getKey()] = newVertex;
        return this;
    };
    /**
     * @param {string} vertexKey
     * @returns GraphVertex
     */
    Graph.prototype.getVertexByKey = function (vertexKey) {
        return this.vertices[vertexKey];
    };
    /**
     * @param {GraphVertex} vertex
     * @returns {GraphVertex[]}
     */
    Graph.prototype.getNeighbors = function (vertex) {
        return vertex.getNeighbors();
    };
    /**
     * @return {GraphVertex[]}
     */
    Graph.prototype.getAllVertices = function () {
        return Object.values(this.vertices);
    };
    /**
     * @return {GraphEdge[]}
     */
    Graph.prototype.getAllEdges = function () {
        return Object.values(this.edges);
    };
    /**
     * @param {GraphEdge} edge
     * @returns {Graph}
     */
    Graph.prototype.addEdge = function (edge) {
        // Try to find and end start vertices.
        var startVertex = this.getVertexByKey(edge.startVertex.getKey());
        var endVertex = this.getVertexByKey(edge.endVertex.getKey());
        // Insert start vertex if it wasn't inserted.
        if (!startVertex) {
            this.addVertex(edge.startVertex);
            startVertex = this.getVertexByKey(edge.startVertex.getKey());
        }
        // Insert end vertex if it wasn't inserted.
        if (!endVertex) {
            this.addVertex(edge.endVertex);
            endVertex = this.getVertexByKey(edge.endVertex.getKey());
        }
        // Check if edge has been already added.
        if (this.edges[edge.getKey()]) {
            throw new Error('Edge has already been added before');
        }
        else {
            this.edges[edge.getKey()] = edge;
        }
        // Add edge to the vertices.
        if (this.isDirected) {
            // If graph IS directed then add the edge only to start vertex.
            startVertex.addEdge(edge);
        }
        else {
            // If graph ISN'T directed then add the edge to both vertices.
            startVertex.addEdge(edge);
            endVertex.addEdge(edge);
        }
        return this;
    };
    /**
     * @param {GraphEdge} edge
     */
    Graph.prototype.deleteEdge = function (edge) {
        // Delete edge from the list of edges.
        if (this.edges[edge.getKey()]) {
            delete this.edges[edge.getKey()];
        }
        else {
            throw new Error('Edge not found in graph');
        }
        // Try to find and end start vertices and delete edge from them.
        var startVertex = this.getVertexByKey(edge.startVertex.getKey());
        var endVertex = this.getVertexByKey(edge.endVertex.getKey());
        startVertex.deleteEdge(edge);
        endVertex.deleteEdge(edge);
    };
    /**
     * @param {GraphVertex} startVertex
     * @param {GraphVertex} endVertex
     * @return {(GraphEdge|null)}
     */
    Graph.prototype.findEdge = function (startVertex, endVertex) {
        var vertex = this.getVertexByKey(startVertex.getKey());
        if (!vertex) {
            return null;
        }
        return vertex.findEdge(endVertex);
    };
    /**
     * @return {number}
     */
    Graph.prototype.getWeight = function () {
        return this.getAllEdges().reduce(function (weight, graphEdge) {
            return weight + graphEdge.weight;
        }, 0);
    };
    /**
     * Reverse all the edges in directed graph.
     * @return {Graph}
     */
    Graph.prototype.reverse = function () {
        var _this = this;
        /** @param {GraphEdge} edge */
        this.getAllEdges().forEach(function (edge) {
            // Delete straight edge from graph and from vertices.
            _this.deleteEdge(edge);
            // Reverse the edge.
            edge.reverse();
            // Add reversed edge back to the graph and its vertices.
            _this.addEdge(edge);
        });
        return this;
    };
    /**
     * @return {object}
     */
    Graph.prototype.getVerticesIndices = function () {
        var verticesIndices = {};
        this.getAllVertices().forEach(function (vertex, index) {
            verticesIndices[vertex.getKey()] = index;
        });
        return verticesIndices;
    };
    /**
     * @return {*[][]}
     */
    Graph.prototype.getAdjacencyMatrix = function () {
        var _this = this;
        var vertices = this.getAllVertices();
        var verticesIndices = this.getVerticesIndices();
        // Init matrix with infinities meaning that there is no ways of
        // getting from one vertex to another yet.
        var adjacencyMatrix = Array(vertices.length)
            .fill(null)
            .map(function () {
            return Array(vertices.length).fill(Infinity);
        });
        // Fill the columns.
        vertices.forEach(function (vertex, vertexIndex) {
            vertex.getNeighbors().forEach(function (neighbor) {
                var neighborIndex = verticesIndices[neighbor.getKey()];
                adjacencyMatrix[vertexIndex][neighborIndex] = _this.findEdge(vertex, neighbor).weight;
            });
        });
        return adjacencyMatrix;
    };
    /**
     * @return {string}
     */
    Graph.prototype.toString = function () {
        return Object.keys(this.vertices).toString();
    };
    return Graph;
}());
exports.default = Graph;
