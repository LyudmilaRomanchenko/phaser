export class StartScene extends Phaser.Scene {
   constructor() {
       super();
   }
 
    preload() {
        this.load.image('room', 'img/room.png');
        // this.load.image('overlay', 'img/overlay.png');
   }
 
    create() {
        var bg = this.add.image(0, 0, 'room').setInteractive();
        // bg.once('pointerup', loadImage, this);
   }
}