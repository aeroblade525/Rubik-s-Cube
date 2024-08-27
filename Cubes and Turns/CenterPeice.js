import { Cubical } from "./CubicalBase";
import { worldAxisX, worldAxisY, worldAxisZ } from "./Reuseable/WorldAxis";

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

  rotation() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "2" && this.xpos >= -6 && this.xpos <= 6)
        this.rotateCubeMCW = true;
      if (event.key === "5" && this.zpos >= -6 && this.zpos <= 6)
        this.rotateCubeSCW = true;
      if (event.key === "8" && this.ypos >= -6 && this.ypos <= 6)
        this.rotateCubeECW = true;
      if (event.key === "w" && this.xpos >= -6 && this.xpos <= 6)
        this.rotateCubeMCCW = true;
      if (event.key === "t" && this.zpos >= -6 && this.zpos <= 6)
        this.rotateCubeSCCW = true;
      if (event.key === "i" && this.ypos >= -6 && this.ypos <= 6)
        this.rotateCubeECCW = true;
    });

    if (this.rotateCubeMCW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisX, Math.PI / 2);
      this.rotateCubeMCW = false;
      this.updatePosition();
    }
    if (this.rotateCubeECW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisY, Math.PI / 2);
      this.rotateCubeECW = false;
      this.updatePosition();
    }
    if (this.rotateCubeSCW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisZ, -Math.PI / 2);
      this.rotateCubeSCW = false;
      this.updatePosition();
    }
    if (this.rotateCubeMCCW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisX, -Math.PI / 2);
      this.rotateCubeMCCW = false;
      this.updatePosition();
    }
    if (this.rotateCubeECCW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisY, -Math.PI / 2);
      this.rotateCubeECCW = false;
      this.updatePosition();
    }
    if (this.rotateCubeSCCW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisZ, Math.PI / 2);
      this.rotateCubeSCCW = false;
      this.updatePosition();
    }
  }
}
