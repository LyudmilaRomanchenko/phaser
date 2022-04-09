// import { StartScene } from "./StartScene.js";

var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 900,
    backgroundColor: '#fff3d5',
    // scene: [StartScene],
    scene: {
        preload: preload,
        create: create,
        // update: update
    }
};
var textBlockBoy1;
var textBlockGirl1;
var boy1;
var girl1;
var girl2;
var titleBlock;
var dress1;
var dress2;
var hand;




var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('overlay', '../img/overlay.png');
    this.load.image('room', '../img/room.png');
    this.load.image('clickHereButton', '../img/clickHereButton.png');
    this.load.spritesheet('girl1', '../img/girl1.png', { frameWidth: 600, frameHeight: 900 });
    this.load.spritesheet('textBlockGirl1', '../img/textBlock-boy2.png', { frameWidth: 507, frameHeight: 160 });
    this.load.spritesheet('boy1', '../img/boy1.png', { frameWidth: 600, frameHeight: 900 });
    this.load.spritesheet('textBlockBoy1', '../img/textBlock-boy1.png', { frameWidth: 507, frameHeight: 160 });
    this.load.spritesheet('girl2', '../img/girl2.png', { frameWidth: 600, frameHeight: 900 });
    this.load.spritesheet('titleBlock', '../img/titleBlock.png', { frameWidth: 490, frameHeight: 42 });
    this.load.spritesheet('dress1', '../img/dress1.png', { frameWidth: 500, frameHeight: 552 });
    this.load.spritesheet('dress2', '../img/dress2.png', { frameWidth: 500, frameHeight: 552 });
    
    //////////
    this.load.spritesheet('hand', '../img/hand.png', { frameWidth: 229, frameHeight: 289 });
    
}

function create ()
{

  
    // this.add.image(300, 450, 'room');
    // this.add.image(300, 450, 'overlay');

    var clickHereButton = this.add.image(300, 450, 'clickHereButton').setScale(0.5).setInteractive();
    // girl1 = this.add.sprite(-300, 450, 'girl1');
    // textBlockGirl1 = this.add.sprite(300, 450, 'textBlockGirl1').setScale(0.3);
    clickHereButton.once('pointerup', addSprites, this);

    // var destX = 300;

    // var tweenGirl1 = this.tweens.add({
    //     targets: girl1,
    //     duration: 1000,
    //     yoyo: false,
    //     // repeat: 8,
    //     ease: 'Linear',
    //     x: {
    //         getEnd: function (target, key, value)
    //         {
    //             destX -= 30;

    //             return destX;
    //         },

    //         getStart: function (target, key, value)
    //         {
    //             return value + 30;
    //         }
    //     }
    // });

    //  var tweenTextBlockGirl1 = this.tweens.add({
    //     targets: textBlockGirl1,
    //     duration: 1000,
    //     yoyo: false,
    //     // repeat: 8,
    //     ease: 'Linear',
    //     scaleX: 1,
    //     scaleY: 1,
    //     x: {

    //         getEnd: function (target, key, value)
    //         {
    //             destX -= 30;

    //             return destX;
    //         },

    //         getStart: function (target, key, value)
    //         {
    //             return value + 30;
    //         }
    //     }
    // });

}



function addSprites ()
{
    
    setTimeout(() => {
   
         
       
        girl2 = this.add.sprite(300, 500, 'girl2');
        titleBlock = this.add.sprite(300, 31, 'titleBlock');
        dress1 = this.add.sprite(155, 730, 'dress1').setScale(0.5).setInteractive({ cursor: 'url(../img/hand.png), pointer' });
        dress2 = this.add.sprite(445, 730, 'dress2').setScale(0.5).setInteractive();
        //  hand = this.add.sprite(300, 500, 'hand'); 
               // cursor
    this.input.setDefaultCursor('url(../img/hand.png), pointer');

    // var sprite = this.add.sprite(400, 300, 'eye').setInteractive({ cursor: 'url(assets/input/cursors/pen.cur), pointer' });

     dress1.on('pointerover', function (event) {

         this.setTint(0xff00);
         this.setScale(0.55);
        //  this.setShadow();

    });

     dress1.on('pointerout', function (event) {

         this.clearTint();
         this.setScale(0.5);

     });
        
        dress2.on('pointerover', function (event) {

         this.setTint(0xff00);
         this.setScale(0.55);
        //  this.setShadow();

    });

     dress2.on('pointerout', function (event) {

         this.clearTint();
         this.setScale(0.5);

    });
    /////////////////
    }, 0)
    
    this.add.image(300, 450, 'room');
    this.add.image(300, 450, 'overlay');
    boy1 =  this.add.sprite(300, 450, 'boy1');
    girl1 = this.add.sprite(-300, 450, 'girl1');
    textBlockGirl1 = this.add.sprite(300, 450, 'textBlockGirl1').setScale(0);
    textBlockBoy1 = this.add.sprite(300, 450, 'textBlockBoy1').setScale(0);

    var destX = 300;
    var destBoyX = 900;

    var tweenBoy1 = this.tweens.add({
        targets: boy1,
        delay: 1000,
        duration: 300,
        yoyo: false,
        // repeat: 8,
        ease: 'Linear',
        x: {
            getEnd: function (target, key, value)
            {
                destBoyX -= 30;

                return destBoyX;
            },

            getStart: function (target, key, value)
            {
                return value + 30;
            }
        }
    });

    var tweenTextBlockBoy1 = this.tweens.add({
         targets: textBlockBoy1,
        //  delay: 1000,
        duration: 300,
        hold: 700,
        yoyo: false,
        // repeat: 8,
        ease: 'Linear',
        scaleX: 1,
        scaleY: 1,
        onComplete: onCompleteHandler,
        onCompleteParams: [ textBlockBoy1 ]
    });

    var tweenGirl1 = this.tweens.add({
        targets: girl1,
        delay: 1000,
        duration: 300,
        hold: 1000,
        yoyo: false,
        // repeat: 8,
        ease: 'Linear',
        x: {
            getEnd: function (target, key, value)
            {
                destX -= 30;

                return destX;
            },

            getStart: function (target, key, value)
            {
                return value + 30;
            }
        },
        onComplete: onCompleteHandlerGirl,
        onCompleteParams: [ girl1 ]
    });

     var tweenTextBlockGirl1 = this.tweens.add({
         targets: textBlockGirl1,
         delay: 1000,
         duration: 300,
        hold: 1000,
        yoyo: false,
        // repeat: 8,
        ease: 'Linear',
        scaleX: 1,
         scaleY: 1,
        onComplete: onCompleteHandler,
        onCompleteParams: [ textBlockGirl1 ]
     });
    
    
}

function onCompleteHandler (tween, targets, myImage)
{

    myImage.setScale(0);
}

function onCompleteHandlerGirl (tween, targets, myImage)
{

    myImage.setScale(0);
    // console.log(targets)
}

// function chooseWear() {
//     girl2 = this.add.sprite(300, 450, 'girl2');
//     titleBlock = this.add.sprite(300, 100, 'titleBlock');
// }



// function loadImage ()
// {
    
     
//     this.load.once('complete', addSprites, this);

//     this.load.spritesheet('girl1', '../img/girl1.png', { frameWidth: 600, frameHeight: 900 });
//     this.load.spritesheet('textBlockGirl1', '../img/textBlock-boy2.png', { frameWidth: 507, frameHeight: 160 });
//     this.load.spritesheet('boy1', '../img/boy1.png', { frameWidth: 600, frameHeight: 900 });
//     this.load.spritesheet('textBlockBoy1', 'img/textBlock-boy1.png', { frameWidth: 507, frameHeight: 160 });

//     this.load.start();
// }