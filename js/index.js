import eventsCenter from './EventsCenter.js';


// обьявляем переменные 
let textBlockBoy1;
let textBlockGirl1;
let textBlockBoyEnd;
let boy1;
let girl1;
let girl2;
let titleBlock;
let room;
let optionsGroup;
let option;
let playNow;
let hand;
let left;
let right;
let selectOption;
let destX = 300;
let destBoyX = 900;

let leftIndex = 0;
let rightIndex = 1;

let keyObj = '';
let a = 'girl1';
let b;

const optionsObjects = [
    {
        leftOption: 'dress',
        rightOption: 'suit',
    },
    {
        leftOption: 'bag1',
        rightOption: 'bag2',
    },
    {
        leftOption: 'glasses',
        rightOption: 'necklace1',
    },
    {
        leftOption: 'glasses',
        rightOption: 'necklace2',
    },
    {
        leftOption: 'place1',
        rightOption: 'place2',
    },

]

// var config = {
//     type: Phaser.AUTO,
//     width: 600,
//     height: 900,
//     backgroundColor: '#fff3d5',
//     scene: [SceneIntro, SceneGame, SceneUI],
// };



// var game = new Phaser.Game(config);

// console.log(game.scale)

// создаем сцену интро
class SceneIntro extends Phaser.Scene {

    constructor ()
    {
        super('SceneIntro');
    }

    preload ()
    {
        // game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // game.scale.pageAlignHorizontally = true;
    // game.scale.pageAlignVertically = true;
    //     game.stage.backgroundColor = '#eee';
        
        this.load.image('room', '../img/room.png');
        this.load.image('clickHereButton', '../img/clickHereButton.png');
        this.load.spritesheet('girl1', '../img/girl1.png', { frameWidth: 600, frameHeight: 900 });
        this.load.spritesheet('textBlockGirl1', '../img/textBlock-boy2.png', { frameWidth: 507, frameHeight: 160 });
        this.load.spritesheet('boy1', '../img/boy1.png', { frameWidth: 600, frameHeight: 900 });
        this.load.spritesheet('textBlockBoy1', '../img/textBlock-boy1.png', { frameWidth: 507, frameHeight: 160 });
        this.load.spritesheet('girl2', '../img/girl2.png', { frameWidth: 600, frameHeight: 900 });
    }

    create ()
    {
        const clickHereButton = this.add.image(300, 450, 'clickHereButton').setScale(0.5).setInteractive();
        clickHereButton.once('pointerup', addIntro, this);
    }
}

function addIntro() {
        
    const onCompleteTextBlockGirl1 = () => {
        this.scene.run('SceneGame');
    }
    
    room = this.add.image(300, 450, 'room');
    room.setTint(0x3B3B3B);
    boy1 =  this.add.sprite(280, 500, 'boy1').setScale(1.2);
    girl1 = this.add.sprite(-300, 450, 'girl1');
    textBlockGirl1 = this.add.sprite(300, 450, 'textBlockGirl1').setScale(0);
    textBlockBoy1 = this.add.sprite(300, 450, 'textBlockBoy1').setScale(0);
    
    const tweenBoy1 = this.tweens.add({
        targets: boy1,
        delay: 1000,
        duration: 300,
        yoyo: false,
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

    const tweenTextBlockBoy1 = this.tweens.add({
        targets: textBlockBoy1,
        duration: 300,
        hold: 700,
        yoyo: false,
        ease: 'Linear',
        scaleX: 1,
        scaleY: 1,
        onComplete: onCompleteHandler,
        onCompleteParams: [ textBlockBoy1 ]
    });

    const tweenGirl1 = this.tweens.add({
        targets: girl1,
        delay: 1000,
        duration: 300,
        hold: 1000,
        yoyo: false,
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
    });

    const tweenTextBlockGirl1 = this.tweens.add({
        targets: textBlockGirl1,
        delay: 1000,
        duration: 300,
        hold: 1000,
        yoyo: false,
        ease: 'Linear',
        scaleX: 1,
        scaleY: 1,
        onComplete: onCompleteTextBlockGirl1,
        onCompleteParams: [ textBlockGirl1 ]
    });
}
    
// создаем сцену игры
class SceneGame extends Phaser.Scene {

    constructor ()
    {
        super('SceneGame');
    }

    init(data) {
        // console.log('init', data.selectOption);
        this.selectOption = data.selectOption;
    }

    preload ()
    {
        this.load.image('room', '../img/room.png');
        this.load.image('place1-big', '../img/place1-big.png');
        this.load.image('place2-big', '../img/place2-big.png');
        this.load.spritesheet('boy1', '../img/boy1.png', { frameWidth: 600, frameHeight: 900 });
        this.load.spritesheet('textBlockBoyEnd', '../img/textBlock-boy-end.png', { frameWidth: 507, frameHeight: 160 });
        this.load.spritesheet('play-now', '../img/play-now.png', { frameWidth: 371, frameHeight: 76 });

        // загрузка заголовка
        this.load.spritesheet('titleBlock', '../img/titleBlock.png', { frameWidth: 490, frameHeight: 42 });

        //загрузка изображений в платье
        this.load.image('girl1-dress', '../img/girl1-dress.png');
        this.load.image('girl1-dress-bag1', '../img/girl1-dress-bag1.png');
        this.load.image('girl1-dress-bag1-glasses', '../img/girl1-dress-bag1-glasses.png');
        this.load.image('girl1-dress-bag1-necklace1', '../img/girl1-dress-bag1-necklace1.png');
        this.load.image('girl1-dress-bag2', '../img/girl1-dress-bag2.png');
        this.load.image('girl1-dress-bag2-glasses', '../img/girl1-dress-bag2-glasses.png');
        this.load.image('girl1-dress-bag2-necklace1', '../img/girl1-dress-bag2-necklace1.png');

        //загрузка изображений в костюме
        this.load.image('girl1-suit', '../img/girl1-suit.png');
        this.load.image('girl1-suit-bag1', '../img/girl1-suit-bag1.png');
        this.load.image('girl1-suit-bag1-necklace2', '../img/girl1-suit-bag1-necklace2.png');
        this.load.image('girl1-suit-bag1-glasses', '../img/girl1-suit-bag1-glasses.png');
        this.load.image('girl1-suit-bag2', '../img/girl1-suit-bag2.png');
        this.load.image('girl1-suit-bag2-glasses', '../img/girl1-suit-bag2-glasses.png');
        this.load.image('girl1-suit-bag2-necklace2', '../img/girl1-suit-bag2-necklace2.png');
    }

    create ()
    {
        room = this.add.image(300, 450, 'room');

        // создаем персонаж girl2 
        girl2 = this.add.sprite(300, 500, 'girl2').setScale(1.2);
        const tweenGirl2 = this.tweens.add({
            targets: girl2,
            //  delay: 1000,
            duration: 300,
            hold: 700,
            yoyo: false,
            ease: 'Linear',
            scaleX: 1,
            scaleY: 1,
            // onComplete: onCompleteHandler,
            // onCompleteParams: [ textBlockBoy1 ]
        });

        // выводим заголовок
        titleBlock = this.add.sprite(300, -31, 'titleBlock');
        const tweenTitleBlock = this.tweens.add({
            targets: titleBlock,
            //  delay: 1000,
            duration: 500,
            hold: 700,
            yoyo: false,
            ease: 'Linear',
            y: 31,
            // onComplete: onCompleteHandler,
            // onCompleteParams: [ textBlockBoy1 ]
        });  

        const updateSelectOption = () => {
            if (selectOption === 'place1' || selectOption === 'place2') {
                if (selectOption === 'place1') {
                    room.setScale(0);
                    room = this.add.image(300, 450, `${selectOption}-big`).setScale(1.8);
                }

                if (selectOption === 'place2') {
                    room.setScale(0);
                    room = this.add.image(300, 450, `${selectOption}-big`).setScale(1.8);
                }

                this.tweens.add({
                    targets: room,
                    // delay: 200,
                    duration: 300,
                    hold: 700,
                    yoyo: false,
                    ease: 'Linear',
                    scaleX: 1.05,
                    scaleY: 1.05,
                });

                boy1 = this.add.sprite(900, 450, 'boy1').setScale(1);
                this.tweens.add({
                    targets: boy1,
                    // delay: 1000,
                    duration: 500,
                    // hold: 1000,
                    yoyo: false,
                    ease: 'Linear',
                    x: 400,
                });

                girl2 = this.add.sprite(-300, 500, keyObj).setScale(1);
                this.tweens.add({
                    targets: girl2,
                    // delay: 1000,
                    duration: 500,
                    // hold: 1000,
                    yoyo: false,
                    ease: 'Linear',
                    x: 200,
                });

                textBlockBoyEnd = this.add.sprite(700, 300, 'textBlockBoyEnd').setScale(0);
                this.tweens.add({
                    targets: textBlockBoyEnd,
                    delay: 300,
                    duration: 500,
                    hold: 2500,
                    yoyo: false,
                    ease: 'Linear',
                    scaleX: 1,
                    scaleY: 1,
                    x: 300,
                    y: 450,
                });

                this.tweens.add({
                    targets: textBlockBoyEnd,
                    delay: 2800,
                    duration: 500,
                    // hold: 2500,
                    yoyo: false,
                    ease: 'Linear',
                    scaleX: 0,
                    scaleY: 0,
                    x: 300,
                    y: 450,
                    onComplete: onCompleteHandler,
                    onCompleteParams: [textBlockBoyEnd]
                });

                playNow = this.add.sprite(300, 950, 'play-now').setInteractive();
                this.tweens.add({
                    targets: playNow,
                    delay: 3500,
                    duration: 500,
                    // hold: 1000,
                    yoyo: false,
                    ease: 'Linear',
                    y: 800,
                });
                
                playNow.once('pointerup', openExternalLink, this);

                // playNow.once('pointerup', restart, this);
            }
            else {
                b ? keyObj = b.concat(`-${selectOption}`) : keyObj = a.concat(`-${selectOption}`);
                b = keyObj;

                girl2.setScale(0);
                girl2 = this.add.sprite(300, 500, keyObj).setScale(1);
            }
        }
        
        eventsCenter.on('update-selectOption', updateSelectOption, this);

        this.scene.launch('SceneUI');

        function openExternalLink ()
        {
            var url = 'https://apps.apple.com/us/app/id1491717191';

            var s = window.open(url, '_blank');

            if (s && s.focus)
            {
                s.focus();
            }
            else if (!s)
            {
                window.location.href = url;
            }
        }
    } 
}

// создаем сцену UI
class SceneUI extends Phaser.Scene {

    constructor() {
        super('SceneUI');
    }

    preload ()
    {
        //загрузка изображений выбора элемента
        this.load.spritesheet('dress', '../img/dress.png', { frameWidth: 500, frameHeight: 552 });
        this.load.spritesheet('suit', '../img/suit.png', { frameWidth: 500, frameHeight: 552 });
        this.load.spritesheet('bag1', '../img/bag1.png', { frameWidth: 500, frameHeight: 552 });
        this.load.spritesheet('bag2', '../img/bag2.png', { frameWidth: 500, frameHeight: 552 });
        this.load.spritesheet('glasses', '../img/glasses.png', { frameWidth: 500, frameHeight: 552 });
        this.load.spritesheet('necklace1', '../img/necklace1.png', { frameWidth: 500, frameHeight: 552 });
        this.load.spritesheet('necklace2', '../img/necklace2.png', { frameWidth: 500, frameHeight: 552 });
        this.load.spritesheet('place1', '../img/place1.png', { frameWidth: 500, frameHeight: 552 });
        this.load.spritesheet('place2', '../img/place2.png', { frameWidth: 500, frameHeight: 552 });

        // загрузка руки-указателя
        this.load.spritesheet('hand', '../img/hand.png', { frameWidth: 229, frameHeight: 289 });
    }

    create ()
    {
        // создаем группу для опций выбора
        optionsGroup = this.add.group();

        // заполняем группу элементами
        optionsObjects.forEach(({leftOption, rightOption}) => {
            optionsGroup.createMultiple([
                { key: leftOption, setXY: { x: 155, y: 730 }, visible: false, setScale: { x: 0, y: 0 } },
                { key: rightOption, setXY: { x: 455, y: 730 }, visible: false, setScale: { x: 0, y: 0 } }
            ]);
        }); 

        option = optionsGroup.getChildren();

        // вешаем слушатель событий на каждый элемент группы
        option.forEach(element => {
            element.setInteractive();

            //наведение курсора
            element.on('pointerover', function (event) {
                this.setScale(1.05);
            });

            // снятие курсора
            element.on('pointerout', function (event) {
                this.setScale(1);
            });

            // клик
            element.on('pointerup', () => onClikOption(element));
        });

        //callback для события клика
        const onClikOption = (element) => {
            hand.setScale(0)
            setTimeout(() => {
                hand.setScale(1);
                hand.setX(300);
                hand.setY(1000);
                this.tweens.add({
                    targets: hand,
                    // delay: 1000,
                    duration: 500,
                    // hold: 300,
                    // yoyo: true,
                    // repeat: 100,
                    ease: 'Linear',
                    x: 150,
                    y: 800,
                });
            }, 2000);

            selectOption = element.texture.key;

            eventsCenter.emit('update-selectOption', selectOption);

            // показываем следующий набор опций для выбора
            left.visible = false;
            right.visible = false;

            if (b && b.includes('suit-bag') && (b.includes('glasses') || b.includes('necklace2'))) {
                leftIndex += 2;
                rightIndex += 2;
            }
            else if (b && b.includes('suit-bag') || ( b.includes('dress-bag') && b.includes('glasses') || b.includes('necklace1'))) {
                leftIndex += 4;
                rightIndex += 4;
            }
             else {
                leftIndex += 2;
                rightIndex += 2;
            }

            if (rightIndex >= option.length) {

                this.scene.stop('SceneUI');
                hand.setScale(0);;
                return;
            } else {
                // вызываем следующую группу
                left = option[leftIndex];
                left.visible = true;
                
                right = option[rightIndex];
                right.visible = true;

                this.tweens.add({
                    targets: left,
                    duration: 300,
                    hold: 700,
                    yoyo: false,
                    ease: 'Linear',
                    scaleX: 1,
                    scaleY: 1,
                });
                    
                this.tweens.add({
                    targets: right,
                    delay: 200,
                    duration: 300,
                    hold: 700,
                    yoyo: false,
                    ease: 'Linear',
                    scaleX: 1,
                    scaleY: 1,
                });
            }
        }

        // функция показа опций выбора
        const showOptions = (option, leftIndex, rightIndex) => {
            left = option[leftIndex];
            left.visible = true;
                
            right = option[rightIndex];
            right.visible = true;
            
            const tweenLeft = this.tweens.add({
                targets: left,
                duration: 300,
                hold: 700,
                yoyo: false,
                ease: 'Linear',
                scaleX: 1,
                scaleY: 1,
            });
                
            const tweenRight = this.tweens.add({
                targets: right,
                delay: 200,
                duration: 300,
                hold: 700,
                yoyo: false,
                ease: 'Linear',
                scaleX: 1,
                scaleY: 1,
            });  
        }
        
        // показываем набор опций для выбора
        if (leftIndex === 0) {
            showOptions(option, leftIndex, rightIndex);
        }
        
        // курсорпоинтер
        hand = this.add.sprite(300, 1000, 'hand');
        this.tweens.add({
            targets: hand,
            delay: 1000,
            duration: 700,
            // hold: 300,
            // yoyo: true,
            // repeat: 100,
            ease: 'Linear',
            x: 150,
            y: 800,
        });

        this.tweens.add({
            targets: hand,
            delay: 1700,
            duration: 1700,
            // hold: 300,
            yoyo: true,
            repeat: 100,
            ease: 'Linear',
            x: 450,
        });
    }
}


function onCompleteHandler (tween, targets, myImage) {
    myImage.setScale(0);
}
var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 900,
    backgroundColor: '#fff3d5',
    scene: [SceneIntro, SceneGame, SceneUI],
};



var game = new Phaser.Game(config);

console.log(game)

//////////////////////
//  function restart() {
//             // addIntro();
//             optionsGroup = 0;
//             option = 0;
//             left = 0;
//             right = 0;
//             selectOption = 0;

//             leftIndex = 0;
//             rightIndex = 1;

//             keyObj = '';
//             // a = 'girl1';
//             b = 0;
//             this.scene.start('SceneIntro');
//             // this.scene.wake('SceneUI');
//             eventsCenter.off('update-selectOption', updateSelectOption, this);
//         }

// при наведении РУКИ на опцию
        // this.physics.add.collider(option, hand, hitBomb);

        
        // function hitBomb (option, hand)
        // {
        //     this.physics.pause();

        //     option.setTint(0xff0000);

        //     // player.anims.play('turn');

        //     // gameOver = true;
        // }

//https://lyudmilaromanchenko-phaser.netlify.app/