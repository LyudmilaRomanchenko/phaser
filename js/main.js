// var config = {
//     type: Phaser.AUTO,
//     backgroundColor: '#2dab2d',
//     scale: {
//         mode: Phaser.Scale.FIT,
//         parent: 'phaser-example',
//         width: 800,
//         height: 600
//     },
//     scene: {
//         preload: preload,
//         create: create
//     }
// };

// var game = new Phaser.Game(config);

// function preload ()
// {
//     this.load.image('clickHereButton', '../img/clickHereButton.png');
// }

// function create ()
// {
//     // this.add.image(0, 0, 'pic').setOrigin(0);
//     const clickHereButton = this.add.image(300, 450, 'clickHereButton').setScale(0.5).setInteractive();
// }

var config = {
    type: Phaser.AUTO,
    backgroundColor: '#2dab2d',
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'phaser-example',
        width: '100%',
        height: '100%'
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    // this.load.image('rain', 'assets/pics/thalion-rain.png');
    // this.load.image('logo', 'assets/sprites/phaser3-logo-x2.png');
    this.load.image('clickHereButton', '../img/clickHereButton.png');
}

function create ()
{
    // this.bg = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'rain').setOrigin(0);
    // this.logo = this.add.sprite(this.scale.width / 2, this.scale.height / 2, 'logo');
    this.clickHereButton = this.add.image(this.scale.width / 2, this.scale.height / 2, 'clickHereButton').setScale(0.5).setInteractive();

    this.scale.on('resize', resize, this);
}

function resize (gameSize, baseSize, displaySize, resolution)
{
    var width = gameSize.width;
    var height = gameSize.height;

    this.cameras.resize(width, height);

    // this.bg.setSize(width, height);
    this.clickHereButton.setPosition(width / 2, height / 2);
}