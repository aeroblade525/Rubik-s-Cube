export const solveCube = async (cubeArray) => {
  const url = import.meta.env.VITE_BACKEND_API_URL;
  // console.log(url);

  const cube = JSON.stringify({ cube: cubeArray });
  console.log("Cube state: ", cube);
  const response = await fetch(`${url}/solve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: cube,
  });
  console.log(response);
  const data = await response.json();
  console.log("Response data:", data);
  const moves = await data.solution;
  console.log("Moves:", moves);
  return moves;
};
