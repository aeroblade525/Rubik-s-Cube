import { Cubical } from "./cubicalBase";
import { worldAxisX, worldAxisY, worldAxisZ } from "./reuseable/WorldAxis";

export class CenterPiece extends Cubical {
  constructor(xpos, ypos, zpos) {
    super(xpos, ypos, zpos);
    this.rotateCubeMCW = false;
    this.rotateCubeMCCW = false;
    this.rotateCubeECW = false;
    this.rotateCubeECCW = false;
    this.rotateCubeSCW = false;
    this.rotateCubeSCCW = false;
  }

  // rotation() {
  //   window.addEventListener("keydown", (event) => {
  //     // Clockwise rotations
  //     if (event.key === "2") this.rotateCubeMCW = true;
  //     if (event.key === "5") this.rotateCubeSCW = true;
  //     if (event.key === "8") this.rotateCubeECW = true;

  //     // Counter-clockwise rotations
  //     if (event.key === "w") this.rotateCubeMCCW = true;
  //     if (event.key === "t") this.rotateCubeSCCW = true;
  //     if (event.key === "i") this.rotateCubeECCW = true;
  //   });

  //   // Clockwise rotations
  //   if (this.rotateCubeMCW && this.xpos >= -6 && this.xpos <= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisX, Math.PI / 2);
  //     this.rotateCubeMCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeMCW = false;
  //   }

  //   if (this.rotateCubeSCW && this.zpos >= -6 && this.zpos <= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisZ, -Math.PI / 2);
  //     this.rotateCubeSCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeSCW = false;
  //   }

  //   if (this.rotateCubeECW && this.ypos >= -6 && this.ypos <= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisY, Math.PI / 2);
  //     this.rotateCubeECW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeECW = false;
  //   }

  //   // Counter-clockwise rotations
  //   if (this.rotateCubeMCCW && this.xpos >= -6 && this.xpos <= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisX, -Math.PI / 2);
  //     this.rotateCubeMCCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeMCCW = false;
  //   }

  //   if (this.rotateCubeSCCW && this.zpos >= -6 && this.zpos <= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisZ, Math.PI / 2);
  //     this.rotateCubeSCCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeSCCW = false;
  //   }

  //   if (this.rotateCubeECCW && this.ypos >= -6 && this.ypos <= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisY, -Math.PI / 2);
  //     this.rotateCubeECCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeECCW = false;
  //   }
  // }
}
