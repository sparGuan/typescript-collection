export default class Graph {
    isDirected: boolean;
    edges: any;
    vertices: any;
    constructor(isDirected: boolean, edges: any, vertices: any);
    /**
     * @param {GraphVertex} newVertex
     * @returns {Graph}
     */
    addVertex(newVertex: any): this;
    /**
     * @param {string} vertexKey
     * @returns GraphVertex
     */
    getVertexByKey(vertexKey: string): any;
    /**
     * @param {GraphVertex} vertex
     * @returns {GraphVertex[]}
     */
    getNeighbors(vertex: any): any;
    /**
     * @return {GraphVertex[]}
     */
    getAllVertices(): {}[];
    /**
     * @return {GraphEdge[]}
     */
    getAllEdges(): {}[];
    /**
     * @param {GraphEdge} edge
     * @returns {Graph}
     */
    addEdge(edge: any): this;
    /**
     * @param {GraphEdge} edge
     */
    deleteEdge(edge: any): void;
    /**
     * @param {GraphVertex} startVertex
     * @param {GraphVertex} endVertex
     * @return {(GraphEdge|null)}
     */
    findEdge(startVertex: any, endVertex: any): any;
    /**
     * @return {number}
     */
    getWeight(): {};
    /**
     * Reverse all the edges in directed graph.
     * @return {Graph}
     */
    reverse(): this;
    /**
     * @return {object}
     */
    getVerticesIndices(): any;
    /**
     * @return {*[][]}
     */
    getAdjacencyMatrix(): any[][];
    /**
     * @return {string}
     */
    toString(): string;
}
