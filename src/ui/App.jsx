import { solveCube } from "../api/solve";
import { cubeArray } from "../../algorithm/rotatingCubeArray";
import { solveConverting } from "../../algorithm/solveConverter";
import { queueMove, resetMoveQueue } from "../../cubesAndTurns/moveManager";
import "./App.css";

export default function App() {
  const handleMoveClick = (key) => {
    // Updates internal logic and queues 3D animation
    queueMove(key);
  };

  const handleReset = () => {
    resetMoveQueue();
    // Refresh to snap 3D pieces back to origin
    window.location.reload();
  };

  const handleSolve = async () => {
    const state = cubeArray;
    let newState = await solveCube(state);
    let solveResponse = solveConverting(newState);

    solveResponse.forEach((move) => {
      // Logic update and animation queue
      queueMove(move);
    });
  };

  const clockwiseMoves = [
    { label: "L", key: "1" },
    { label: "M", key: "2" },
    { label: "R", key: "3" },
    { label: "U", key: "7" },
    { label: "E", key: "8" },
    { label: "D", key: "9" },
    { label: "F", key: "4" },
    { label: "S", key: "5" },
    { label: "B", key: "6" },
  ];

  const counterClockwiseMoves = [
    { label: "L'", key: "q" },
    { label: "M'", key: "w" },
    { label: "R'", key: "e" },
    { label: "U'", key: "u" },
    { label: "E'", key: "i" },
    { label: "D'", key: "o" },
    { label: "F'", key: "r" },
    { label: "S'", key: "t" },
    { label: "B'", key: "y" },
  ];

  return (
    <div id="ui-root">
      <div className="controls-container">
        <div className="action-controls">
          <button className="button reset" onClick={handleReset}>
            Reset Cube
          </button>
          <button className="button solve" onClick={handleSolve}>
            Solve
          </button>
        </div>

        <hr className="divider" />

        <div className="button-row">
          <span className="row-type">CW</span>
          {clockwiseMoves.map((m) => (
            <button key={m.key} className="button control" onClick={() => handleMoveClick(m.key)}>
              {m.label}
            </button>
          ))}
        </div>

        <div className="button-row">
          <span className="row-type">CCW</span>
          {counterClockwiseMoves.map((m) => (
            <button key={m.key} className="button control" onClick={() => handleMoveClick(m.key)}>
              {m.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
