import { solveCube } from "../api/solve";
import { cubeArray, resetCubeArray } from "../../algorithm/rotatingCubeArray";
import { solveConverting } from "../../algorithm/solveConverter";
import { movelist } from "../../cubesAndTurns/moveManager";
import "./App.css";

export default function App() {
  const handleLeftTurn = (row) => {
    console.log("left turn");
  };

  const handleRightTurn = () => {};

  const handleReset = () => {};

  const handleSolve = async () => {
    const state = cubeArray;
    let newState = await solveCube(state);
    let solveResponse = solveConverting(newState);
    solveResponse.forEach((move) => {
      movelist.push(move);
    });
    resetCubeArray(cubeArray);
  };

  return (
    <div className="overlay">
      <div className="controls">
        <div className="turn-controls">
          <button className="button control" onClick={() => handleLeftTurn(2)}>
            R
          </button>
          <button className="button control" onClick={() => console.log("U")}>
            U
          </button>
          <button className="button control" onClick={() => console.log("F")}>
            F
          </button>
        </div>
        <div className="action-controls">
          <button className="button reset" onClick={handleReset}>
            Reset Cube
          </button>
          <button className="button solve" onClick={handleSolve}>
            Solve
          </button>
        </div>
      </div>
    </div>
  );
}
