var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 900,
    backgroundColor: '#cccccc',
    scene: {
        preload: preload,
        create: create,
        // update: update
    }
};
var textBlockBoy1;
var textBlockBoy2;
var boy1;


var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('room', 'img/room.png');
     
    // this.load.image('boy1', 'img/boy1.png');
    // this.load.spritesheet('boy1', 'img/boy1.png', { frameWidth: 600, frameHeight: 900 });
    this.load.spritesheet('textBlockBoy1', 'img/textBlock-boy1.png', { frameWidth: 507, frameHeight: 160 });
    this.load.spritesheet('textBlockBoy2', 'img/textBlock-boy2.png', { frameWidth: 507, frameHeight: 160 });
    
}

function create ()
{
    var bg = this.add.image(0, 0, 'room').setInteractive();
    var text = this.add.image(0, 0, 'textBlockBoy2');

    var container = this.add.container(300, 450, [ bg, text ]);

    bg.once('pointerup', loadImage, this);
}

function loadImage ()
{
    this.load.once('complete', addSprites, this);

    this.load.image('boy1', 'img/boy1.png');
    // this.load.image('boy2', 'img/boy2.psd');

    this.load.image('overlay', 'img/overlay.png');

    this.load.start();
}

function addSprites ()
{
    this.add.image(300, 450, 'overlay');
    this.add.image(300, 450, 'boy1');
    // this.add.image(300, 450, 'boy1').setScale(1.5);

    // this.anims.create({
    //         key: 'boy',
    //         frames: [
    //             { key: "boy1", duration: 500  },
    //             // { key: "boy2", duration: 200 },
    //         ],
    //     // frames: frames,
    //         duration: 3000,
    //         // frameRate: 8,
    //         repeat: 0
    // })
    
    // this.add.sprite(300, 470, "boy1")
    //     .play('boy');
    

    this.anims.create({
            key: 'snooze',
            frames: [
                { key: "textBlockBoy1", duration: 500  },
                { key: "textBlockBoy2", duration: 200 },
                 { key: "textBlockBoy1", duration: 500  },
                { key: "textBlockBoy2", duration: 200 }
            ],
        // frames: frames,
            duration: 3000,
            // frameRate: 8,
            repeat: 0
    })
    
    this.add.sprite(300, 470, "textBlockBoy1")
        .play('snooze');

    // this.add.image(400, 300, 'pic');
    // this.add.image(400, 300, 'titan');

    return 1;

    
}

// if
// console.log(addSprites)

///////////////////////////////////////////

// function preload ()
// {
//     this.load.image('room', 'img/room.png');
//     this.load.image('boy1', 'img/boy1.png');
//     // this.load.spritesheet('boy1', 'img/boy1.png', { frameWidth: 600, frameHeight: 900 });
//     this.load.spritesheet('textBlockBoy1', 'img/textBlock-boy1.png', { frameWidth: 507, frameHeight: 160 });
//     this.load.spritesheet('textBlockBoy2', 'img/textBlock-boy2.png', { frameWidth: 507, frameHeight: 160 });
    


// }

// function create ()
// {
//     this.add.image(300, 450, 'room');
//     this.add.image(300, 450, 'boy1');

//     // boy1 = this.physics.add.sprite(300, 450, 'boy1');

//     //  Player physics properties. Give the little guy a slight bounce.
//     // boy1.setBounce(0.2);
//     // boy1.setCollideWorldBounds(true);

//     // this.add.image(300, 470, 'textBlockBoy1');
//     // textBlockBoy1 = this.add.sprite(300, 470, 'textBlockBoy1')
//     //     // .setScale(1.2);
//     // textBlockBoy2 = this.add.sprite(300, 470, 'textBlockBoy2').setScale(1.2);

// //    this.add.sprite(300, 470, 'textBlockBoy1').setScale(1.5);
//     // this.add.sprite(300, 470, 'textBlockBoy2').setScale(1.2);
  

//     // this.anims.create({
//     //     key: 'left',
//     //     frames: this.anims.generateFrameNumbers('textBlockBoy1', { start: 0, end: 0 }),
//     //     frameRate: 10,
//     //     repeat: 0
//     // });

//     // var textBlockBoy3 = this.add.sprite(300, 470, 'textBlockBoy1').setScale(1.5);
//     // var textBlockBoy4 = this.add.sprite(300, 470, 'textBlockBoy1').setScale(1.3);
//     // var textBlockBoy5 = this.add.sprite(300, 470, 'textBlockBoy1').setScale(1.1);



//     // let array = [];

//     // for (let i = 0; i <= 10; i++)
//     //     {
            
//     //         array.push({ key: 'sao0', frame: i.toString() });
           
//     //     }
    
//     const frames = [
//         {
//             key: "textBlockBoy1",
//             // frame: this.add.sprite(300, 470, 'textBlockBoy1').setScale(1.2),
//             // frame: textBlockBoy3,

//             duration: 500
//         },
//         {
//             key: "textBlockBoy2",
//             // frame: this.add.sprite(300, 470, 'textBlockBoy2').setScale(0.5),
//             // frame: textBlockBoy4,
//             duration: 200,
//             // showOnStart: true,
//         }
//     ]
    
//     console.log(this.anims.create({
//             key: 'snooze',
//             frames: [
//                 { key: "textBlockBoy1", duration: 500  },
//                 { key: "textBlockBoy2", duration: 200 },
//                  { key: "textBlockBoy1", duration: 500  },
//                 { key: "textBlockBoy2", duration: 200 }
//             ],
//         // frames: frames,
//             duration: 3000,
//             // frameRate: 8,
//             repeat: 0
//         }))

//     this.add.sprite(300, 470, "textBlockBoy1")
//         .play('snooze');
    
//     // textBlockBoy1.anims.play('snooze', true);
    
// }

// // function update ()
// // {

// //     Phaser.Actions.Rotate('left', -20, 50);

// //     // if (cursors.left.isDown)
// //     // {
// //     //     player.setVelocityX(-160);

// //     //     player.anims.play('left', true);
// //     // }
    
// //     // textBlockBoy1.anims.play('swish', true);
// //     // Phaser.Actions.SetScale(children, this.data.sx, this.data.sx, this.data.s, this.data.s);
// // }