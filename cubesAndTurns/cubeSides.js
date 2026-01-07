import * as THREE from "three";
export const scene = new THREE.Scene();

export function Cubesides(cubexpos, cubeypos, cubezpos) {
  const allSides = new THREE.Group();

  // Create a 12x12x12 cube with colored faces
  const cubeGeo = new THREE.BoxGeometry(12, 12, 12);

  // Create materials for each face
  const materials = [
    new THREE.MeshBasicMaterial({ color: 0x33f52c }), // Right - Red (positive X) 0xcf0606
    new THREE.MeshBasicMaterial({ color: 0x8a1fdb }), // Left - Orange (negative X) 0xcf5006
    new THREE.MeshBasicMaterial({ color: 0xefff3b }), // Top - Yellow (positive Y) 0xefff3b
    new THREE.MeshBasicMaterial({ color: 0xffffff }), // Bottom - White (negative Y) 0xffffff
    new THREE.MeshBasicMaterial({ color: 0xcf0606 }), // Front - Green (positive Z) 0x33f52c
    new THREE.MeshBasicMaterial({ color: 0xcf5006 }), // Back - Purple (negative Z) 0x8a1fdb
  ];

  const cube = new THREE.Mesh(cubeGeo, materials);
  cube.position.set(0, 0, 0);
  allSides.add(cube);

  // Create thick black edges using cylinders
  const edgeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const edgeRadius = 0.2; // Thickness of the edge lines
  const edgeLength = 12;

  // Helper function to create an edge
  const createEdge = (start, end) => {
    const direction = new THREE.Vector3().subVectors(end, start);
    const length = direction.length();
    const edgeGeo = new THREE.CylinderGeometry(
      edgeRadius,
      edgeRadius,
      length,
      8
    );
    const edge = new THREE.Mesh(edgeGeo, edgeMaterial);

    edge.position.copy(start).add(direction.multiplyScalar(0.5));
    edge.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      direction.normalize()
    );

    return edge;
  };

  // Define the 8 corners of the cube
  const s = 6; // Half size (12/2)
  const corners = [
    new THREE.Vector3(-s, -s, -s),
    new THREE.Vector3(s, -s, -s),
    new THREE.Vector3(s, s, -s),
    new THREE.Vector3(-s, s, -s),
    new THREE.Vector3(-s, -s, s),
    new THREE.Vector3(s, -s, s),
    new THREE.Vector3(s, s, s),
    new THREE.Vector3(-s, s, s),
  ];

  // Define the 12 edges (pairs of corner indices)
  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0], // Bottom face
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 4], // Top face
    [0, 4],
    [1, 5],
    [2, 6],
    [3, 7], // Vertical edges
  ];

  // Create all edges
  edges.forEach(([startIdx, endIdx]) => {
    const edge = createEdge(corners[startIdx], corners[endIdx]);
    allSides.add(edge);
  });

  // Position the entire group
  allSides.position.set(cubexpos, cubeypos, cubezpos);

  return allSides;
}
