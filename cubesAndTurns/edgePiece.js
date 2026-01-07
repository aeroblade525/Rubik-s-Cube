import { Cubical } from "./cubicalBase";
import { worldAxisX, worldAxisY, worldAxisZ } from "./reuseable/WorldAxis";
// import { TPerm } from "../Algorithm/Cube Algotithms/Tperm";

export class EdgePiece extends Cubical {
  constructor(xpos, ypos, zpos) {
    super(xpos, ypos, zpos);
    this.rotateCubeLCW = false;
    this.rotateCubeLCCW = false;
    this.rotateCubeRCW = false;
    this.rotateCubeRCCW = false;
    this.rotateCubeFCW = false;
    this.rotateCubeFCCW = false;
    this.rotateCubeBCW = false;
    this.rotateCubeBCCW = false;
    this.rotateCubeUCW = false;
    this.rotateCubeUCCW = false;
    this.rotateCubeDCW = false;
    this.rotateCubeDCCW = false;
  }

  // rotation() {
  //   window.addEventListener("keydown", (event) => {
  //     // Clockwise rotations
  //     if (event.key === "1") this.rotateCubeLCW = true;
  //     if (event.key === "2") this.rotateCubeMCW = true;
  //     if (event.key === "3") this.rotateCubeRCW = true;
  //     if (event.key === "4") this.rotateCubeFCW = true;
  //     if (event.key === "5") this.rotateCubeSCW = true;
  //     if (event.key === "6") this.rotateCubeBCW = true;
  //     if (event.key === "7") this.rotateCubeUCW = true;
  //     if (event.key === "8") this.rotateCubeECW = true;
  //     if (event.key === "9") this.rotateCubeDCW = true;

  //     // Counter-clockwise rotations
  //     if (event.key === "q") this.rotateCubeLCCW = true;
  //     if (event.key === "w") this.rotateCubeMCCW = true;
  //     if (event.key === "e") this.rotateCubeRCCW = true;
  //     if (event.key === "r") this.rotateCubeFCCW = true;
  //     if (event.key === "t") this.rotateCubeSCCW = true;
  //     if (event.key === "y") this.rotateCubeBCCW = true;
  //     if (event.key === "u") this.rotateCubeUCCW = true;
  //     if (event.key === "i") this.rotateCubeECCW = true;
  //     if (event.key === "o") this.rotateCubeDCCW = true;
  //   });

  //   // Clockwise rotations
  //   if (this.rotateCubeLCW && this.xpos <= -6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisX, Math.PI / 2);
  //     this.rotateCubeLCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeLCW = false;
  //   }

  //   if (this.rotateCubeMCW && this.xpos >= -6 && this.xpos <= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisX, Math.PI / 2);
  //     this.rotateCubeMCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeMCW = false;
  //   }

  //   if (this.rotateCubeRCW && this.xpos >= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisX, -Math.PI / 2);
  //     this.rotateCubeRCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeRCW = false;
  //   }

  //   if (this.rotateCubeFCW && this.zpos >= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisZ, -Math.PI / 2);
  //     this.rotateCubeFCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeFCW = false;
  //   }

  //   if (this.rotateCubeSCW && this.zpos >= -6 && this.zpos <= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisZ, -Math.PI / 2);
  //     this.rotateCubeSCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeSCW = false;
  //   }

  //   if (this.rotateCubeBCW && this.zpos <= -6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisZ, Math.PI / 2);
  //     this.rotateCubeBCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeBCW = false;
  //   }

  //   if (this.rotateCubeUCW && this.ypos >= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisY, -Math.PI / 2);
  //     this.rotateCubeUCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeUCW = false;
  //   }

  //   if (this.rotateCubeECW && this.ypos >= -6 && this.ypos <= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisY, Math.PI / 2);
  //     this.rotateCubeECW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeECW = false;
  //   }

  //   if (this.rotateCubeDCW && this.ypos <= -6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisY, Math.PI / 2);
  //     this.rotateCubeDCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeDCW = false;
  //   }

  //   // Counter-clockwise rotations
  //   if (this.rotateCubeLCCW && this.xpos <= -6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisX, -Math.PI / 2);
  //     this.rotateCubeLCCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeLCCW = false;
  //   }

  //   if (this.rotateCubeMCCW && this.xpos >= -6 && this.xpos <= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisX, -Math.PI / 2);
  //     this.rotateCubeMCCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeMCCW = false;
  //   }

  //   if (this.rotateCubeRCCW && this.xpos >= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisX, Math.PI / 2);
  //     this.rotateCubeRCCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeRCCW = false;
  //   }

  //   if (this.rotateCubeFCCW && this.zpos >= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisZ, Math.PI / 2);
  //     this.rotateCubeFCCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeFCCW = false;
  //   }

  //   if (this.rotateCubeSCCW && this.zpos >= -6 && this.zpos <= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisZ, Math.PI / 2);
  //     this.rotateCubeSCCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeSCCW = false;
  //   }

  //   if (this.rotateCubeBCCW && this.zpos <= -6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisZ, -Math.PI / 2);
  //     this.rotateCubeBCCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeBCCW = false;
  //   }

  //   if (this.rotateCubeUCCW && this.ypos >= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisY, Math.PI / 2);
  //     this.rotateCubeUCCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeUCCW = false;
  //   }

  //   if (this.rotateCubeECCW && this.ypos >= -6 && this.ypos <= 6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisY, -Math.PI / 2);
  //     this.rotateCubeECCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeECCW = false;
  //   }

  //   if (this.rotateCubeDCCW && this.ypos <= -6) {
  //     this.lineGroup.rotateOnWorldAxis(worldAxisY, -Math.PI / 2);
  //     this.rotateCubeDCCW = false;
  //     this.updatePosition();
  //   } else {
  //     this.rotateCubeDCCW = false;
  //   }
  // }
}
