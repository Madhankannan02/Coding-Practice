function adjacencyListToMatrix(adjList) {
  const nodes = Object.keys(adjList);
  const numNodes = nodes.length;

  const matrix = [];
  for (let i = 0; i < numNodes; i++) {
    matrix.push(new Array(numNodes).fill(0));
  }

  for (let node in adjList) {
    const neighbors = adjList[node];
    neighbors.forEach(neighbor => {
      matrix[node][neighbor] = 1;
    });
  }

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }

  return matrix;
}