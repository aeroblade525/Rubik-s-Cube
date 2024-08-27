export var timer = 0;
let StopTperm = false;

export function TPerm(object) {
  StopTperm = true;
  timer = 0;

  function rotate() {
    if (!StopTperm) return;
    console.log(timer);
    if (timer === 0) {
      if (object.xpos >= 6) {
        object.rotateCubeRCW = true;
        console.log("Rotating RCW");
      }
    }
    if (timer === 25) {
      if (object.ypos >= 6) {
        object.rotateCubeUCW = true;
        console.log("Rotating UCW");
      }
    }
    if (timer === 75) {
      if (object.xpos >= 6) {
        object.rotateCubeRCCW = true;
        console.log("Rotating RCCW");
      }
    }
    if (timer === 100) {
      if (object.ypos >= 6) {
        object.rotateCubeUCCW = true;
        console.log("Rotating UCCW");
        StopTperm = false; // Stop the rotation sequence
        return; // Exit the function
      }
    }
    while (timer <= 100) {
      timer += 1; // Increase the timer
      setTimeout(rotate, 1000); // Schedule the next call
    }
    if (timer > 100) {
      StopTperm = false;
    }
  }

  rotate(); // Start the rotation sequence
}
