// import { StartScene } from "./StartScene.js";
// console.log(StartScene);

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

var game = new Phaser.Game(config);


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

var textBlockBoy1;
var textBlockGirl1;
var boy1;
var girl1;
var girl2;
var titleBlock;
// var dress1;
// var dress2;
var hand;
// var optionsGroup;
// var person = 'girl1';


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
    // this.input.setDefaultCursor(url('../img/hand.png'), pointer);

    
}

// функция добавления опций
// function showOptions(option, leftIndex, rightIndef) {
//         //  console.log('tweenDreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeess1', window.Phaser)

//     const left = option[leftIndex];
//     left.visible = true;
//     left.setScale = { x: 0.5, y: 0.5 }
//     console.log("left", left)
    
//     const right = option[rightIndef];
//     right.visible = true;
        
//     const tweenLeft = this.tweens.add({
//         targets: left,
//         duration: 300,
//         hold: 700,
//         yoyo: false,
//         ease: 'Linear',
//         scaleX: 0.5,
//         scaleY: 0.5,
//         // onComplete: onCompleteHandler,
//         // onCompleteParams: [ textBlockBoy1 ]
//     });
        
//     const tweenRight = this.tweens.add({
//         targets: right,
//         delay: 200,
//         duration: 300,
//         hold: 700,
//         yoyo: false,
//         ease: 'Linear',
//         scaleX: 0.5,
//         scaleY: 0.5,
//         // onComplete: onCompleteHandler,
//         // onCompleteParams: [ textBlockBoy1 ]
//     });
    
//     // вешаем слушатель событий на каждый элемент группы
//     option.forEach(element => {
//         // console.log(element);
//         element.setInteractive();

//         //наведение курсора
//         element.on('pointerover', function (event) {
//             console.log('pointerover');
//             // this.setTint(0xff00);
//             this.setScale(0.55);
//             //  this.setShadow();
//         });

//         // снятие курсора
//         element.on('pointerout', function (event) {
//             console.log('pointerout');
//             this.clearTint();
//             this.setScale(0.5);
//         });

//         // клик
//         element.on('pointerup', function (event) {
//             console.log('pointerup');
//             // this.setTint(0xff00);
//             // this.setScale(0.55);
//             //  this.setShadow();
//         });
//     });

//     // const t = new Phaser.Tween()
//     //      console.log('tttttttttttttttttttttttttttttt', t)

    
//     // const tweenLeft = this.tweens.add({
//     //     targets: left,
//     //     duration: 300,
//     //     hold: 700,
//     //     yoyo: false,
//     //     ease: 'Linear',
//     //     scaleX: 0.5,
//     //     scaleY: 0.5,
//     //     // onComplete: onCompleteHandler,
//     //     // onCompleteParams: [ textBlockBoy1 ]
//     // });
        
//     // const tweenRight = this.tweens.add({
//     //     targets: right,
//     //     delay: 200,
//     //     duration: 300,
//     //     hold: 700,
//     //     yoyo: false,
//     //     ease: 'Linear',
//     //     scaleX: 0.5,
//     //     scaleY: 0.5,
//     //     // onComplete: onCompleteHandler,
//     //     // onCompleteParams: [ textBlockBoy1 ]
//     // });

//     // left.on('pointerover', () => sss() );

//     // const sss = () => {
//     //     console.log('kkkkkkkkk');
//     //     this.setTint(0xff00);
//     //     this.setScale(0.55);
//     //     //  this.setShadow();
//     // }

//     // console.log("left1", left)

//     // left.on('pointerout', function (event) {

//     //     this.clearTint();
//     //     this.setScale(0.5);

//     // });
        
//     // right.on('pointerover', function (event) {

//     //     this.setTint(0xff00);
//     //     this.setScale(0.55);
//     //         //  this.setShadow();
//     // });

//     // right.on('pointerout', function (event) {
//     //     this.clearTint();
//     //     this.setScale(0.5);
//     // });

//     // var dress1 = optionsGroup.getChildren()[0];
//     //     dress1.addListener('pointerup', () => onOptionClick(girl2, 'girl1-dress', dress1, dress2, 'bag1', 'bag2'));
//     //     dress2.addListener('pointerup', () => onOptionClick(girl2, 'girl1-suit', dress1, dress2, 'bag1', 'bag2'));

//     //     // Обработка клика по опции выбора элемента
//     //     const onOptionClick = (prev, next, prevtOPtion1, prevtOPtion2, nextOPtion1, nextOPtion2) => {
//     //     console.log('jjjjjjjjjjjjjjjjjjjjj');

//     //     // скрываем изображение предыдущего персонажа
//     //     prev.setScale(0)
//     //     // prev.disableBody((true, true))

//     //     // скрываем изображение предыдущих опций
//     //     prevtOPtion1.setScale(0);
//     //     prevtOPtion2.setScale(0);

//     //     //создаем обновленного персонажа
//     //     this.add.image(300, 500, `${next}`);

//     //     //создаем новый набор опций
//     //     var optionLeft = this.add.sprite(155, 730, nextOPtion1).setScale(1).setInteractive();
//     //     var optionRight = this.add.sprite(445, 730, nextOPtion2).setScale(1).setInteractive();

//     //     //анимация появления для опций
//     //     // var optionLeftTweens = this.tweens.add({
//     //     //     targets: nextOPtion1,
//     //     //     //  delay: 1000,
//     //     //     duration: 300,
//     //     //     hold: 700,
//     //     //     yoyo: false,
//     //     //     // repeat: 8,
//     //     //     ease: 'Linear',
//     //     //     scaleX: 1,
//     //     //     scaleY: 1,
//     //     //     // onComplete: onCompleteHandler,
//     //     //     // onCompleteParams: [ textBlockBoy1 ]
//     //     //  });
        
       

//     //     // this.add.sprite(300, 500, `${nextOPtion1}`);
//     //     // this.add.sprite(300, 500, `${nextOPtion2}`);

//     //     optionLeft.on('pointerover', function (event) {
//     //         this.setTint(0xff00);
//     //         this.setScale(1.05);
//     //     //  this.setShadow();
//     //     });

//     //     optionLeft.on('pointerout', function (event) {
//     //         this.clearTint();
//     //         this.setScale(1);
//     //     });
        
//     //     optionRight.on('pointerover', function (event) {
//     //         this.setTint(0xff00);
//     //         this.setScale(1.05);
//     //         //  this.setShadow();
//     //     });

//     //     optionRight.on('pointerout', function (event) {
//     //         this.clearTint();
//     //         this.setScale(1);
//     //     });
//     // }
// }

        // showOptions()
var keyObj = '';
var a = 'girl1';
var b;
console.log(b);

function addSprites ()
{
    var left;
    var right;
    var selectOption;
    var destX = 300;
    var destBoyX = 900;
    // this.input.setDefaultCursor(url('../img/hand.png'), pointer);
    //  hand = this.add.sprite(300, 500, 'hand'); 
               // cursor
    // this.input.setDefaultCursor(url('../img/hand.png'), pointer);

    // var sprite = this.add.sprite(400, 300, 'eye').setInteractive({ cursor: 'url(assets/input/cursors/pen.cur), pointer' });
        // dress1 = this.add.sprite(155, 730, 'dress1').setScale(0.5).setInteractive({ cursor: url('../img/hand.png'), pointer});

       // курсорпоинтер
    const pointer = () => {
        hand = this.add.sprite(150, 300, 'hand');
        this.tweens.add({
            targets: hand,
            delay: 1000,
            duration: 1700,
            // hold: 300,
            yoyo: true,
            repeat: 8,
            ease: 'Linear',
            x: 450,
            // onComplete: onCompleteHandlerGirl,
            // onCompleteParams: [ girl1 ]
        });
    }
    pointer();

    
    setTimeout(() => {
        // переключаем на персонажа girl2 
        girl2 = this.add.sprite(300, 500, 'girl2').setScale(1.2);
        var tweenGirl2 = this.tweens.add({
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
        var tweenTitleBlock = this.tweens.add({
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
        

        // показываем набор опций для выбора
        if (leftIndex === 0) {
            showOptions(option, leftIndex, rightIndef);
            // pointer();
        }
        
        
            // создаем группу для опций выбора
        var optionsGroup = this.add.group();

        // заполняем группу элементами
        optionsObjects.forEach(({leftOption, rightOption}) => {
            optionsGroup.createMultiple([
                { key: leftOption, setXY: { x: 155, y: 730 }, visible: false, setScale: { x: 0, y: 0 } },
                { key: rightOption, setXY: { x: 455, y: 730 }, visible: false, setScale: { x: 0, y: 0 } }
            ]);
        }); 
        const option = optionsGroup.getChildren();
        console.log('option', option);

        var leftIndex = 0;
        var rightIndef = 1;

        // курсорпоинтер
        hand = this.add.sprite(150, 800, 'hand');
        this.tweens.add({
            targets: hand,
            delay: 1000,
            duration: 1700,
            // hold: 300,
            yoyo: true,
            repeat: 100,
            ease: 'Linear',
            x: 450,
            // onComplete: onCompleteHandlerGirl,
            // onCompleteParams: [ girl1 ]
        });

        // вешаем слушатель событий на каждый элемент группы
        option.forEach(element => {
            // console.log(element);
            element.setInteractive();

            //наведение курсора
            element.on('pointerover', function (event) {
                this.setScale(1.05);
                //  this.setShadow();
            });

            // снятие курсора
            element.on('pointerout', function (event) {
                this.clearTint();
                this.setScale(1);
            });

            // клик
            element.on('pointerup', () => onClikOption(element));
        });

        // функция показа опций выбора
        const showOptions = (option, leftIndex, rightIndef) => {
            console.log(this)
            left = option[leftIndex];
            // console.log("left", left)

            left.visible = true;
                
            right = option[rightIndef];
            console.log("right", right)
            console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", b)

            right.visible = true;
            
            const tweenLeft = this.tweens.add({
                targets: left,
                duration: 300,
                hold: 700,
                yoyo: false,
                ease: 'Linear',
                scaleX: 1,
                scaleY: 1,
                // onComplete: onCompleteHandler,
                // onCompleteParams: [ textBlockBoy1 ]
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
                // onComplete: onCompleteHandler,
                // onCompleteParams: [ textBlockBoy1 ]
            });  
            }
        
        // функция смены опций выбора
        const changeOptions = (option, leftIndex, rightIndef) => {
        // console.log(this)
        left = option[leftIndex];
        // console.log("left", left)
        left.visible = true;
            
        right = option[rightIndef];
        console.log("right", right)
        // console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", b)
        right.visible = true;
        
        const tweenLeft = this.tweens.add({
            targets: left,
            duration: 300,
            hold: 700,
            yoyo: false,
            ease: 'Linear',
            scaleX: 1,
            scaleY: 1,
            // onComplete: onCompleteHandler,
            // onCompleteParams: [ textBlockBoy1 ]
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
            // onComplete: onCompleteHandler,
            // onCompleteParams: [ textBlockBoy1 ]
        });  
    }

    
        // showOptions(option, leftIndex, rightIndef);

        
        //callback для события клика
        const onClikOption = (element) => {
            hand.setScale(0)
            setTimeout(() => {
                console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
                hand.setScale(1)
            }, 2000)
            console.log('pointerupffffffffffffffffffffffffffffff', element);

            selectOption = element.texture.key;
            console.log("selectOption", selectOption);
            // вызываем следующего персонажа - меняем одежду, добавляем аксесуары
            changePerson(selectOption);
            // showOptions(option, leftIndex, rightIndef);

            // показываем следующий набор опций для выбора
            
            left.visible = false;
            right.visible = false;

            console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", b)
            if (b && b.includes('suit-bag') || (b && b.includes('dress-bag') && b.includes('glasses') || b.includes('necklace'))) {
                console.log("777777777777777777777777777777777777777")
                leftIndex += 4;
                rightIndef += 4;
            } else {
                leftIndex += 2;
                rightIndef += 2;
            }
            
            // leftIndex += 2;
            // rightIndef += 2;

            // if (rightIndef + 2 >= option.length) {
            if (rightIndef >= option.length) {
                console.log('return');
                return;
            } else {
                // вызываем следующую группу
                left = option[leftIndex];
                // console.log("left", left.texture.key);
                left.visible = true;
                // left.setScale(0);
                
                right = option[rightIndef];
                right.visible = true;
                // right.setScale(0);
                // selectOption = left.texture.key;

                this.tweens.add({
                    targets: left,
                    duration: 300,
                    hold: 700,
                    yoyo: false,
                    ease: 'Linear',
                    scaleX: 1,
                    scaleY: 1,
                    // onComplete: onCompleteHandler,
                    // onCompleteParams: [ textBlockBoy1 ]
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
                    // onComplete: onCompleteHandler,
                    // onCompleteParams: [ textBlockBoy1 ]
                });
            }
            showOptions(option, leftIndex, rightIndef);
        }

        
        
        // смена персонажа в зависимости от выбраной опции
        const changePerson = (selectOption) => { 
             console.log('seleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeectOption', selectOption);
            if (b) {   
                console.log('kkkkkkkkkkkk');
                keyObj = b.concat(`-${selectOption}`);
                b = keyObj;
                console.log('bbbbbbbbbbbbbbbbbbbbbbbb', b);
            } else {
                keyObj = a.concat(`-${selectOption}`);
                b = keyObj;
                console.log('beeeeeeeeeeeeeeeeeeeeeeeeeee', b);
            }

            girl2.setScale(0);
            girl2 = this.add.sprite(300, 500, keyObj).setScale(1);
                // this.tweens.add({
                //     targets: girl2,
                //     //  delay: 1000,
                //     duration: 300,
                //     hold: 700,
                //     yoyo: false,
                //     ease: 'Linear',
                //     scaleX: 1,
                //     scaleY: 1,
                //     // onComplete: onCompleteHandler,
                //     // onCompleteParams: [ girl2 ]
                // });
            
            
            showOptions(option, leftIndex, rightIndef);
        }


        

        showOptions(option, leftIndex, rightIndef);   
        
        // при наведении РУКИ на опцию
        // this.physics.add.collider(option, hand, hitBomb);

        
        // function hitBomb (option, hand)
        // {
        //     this.physics.pause();

        //     option.setTint(0xff0000);

        //     // player.anims.play('turn');

        //     // gameOver = true;
        // }
    }, 2400)
    
    var room = this.add.image(300, 450, 'room');
    room.setTint(0x3B3B3B);
    // room.setTintFill(0xff00)
    // this.add.image(300, 450, 'overlay');
    boy1 =  this.add.sprite(300, 450, 'boy1');
    girl1 = this.add.sprite(-300, 450, 'girl1');
    textBlockGirl1 = this.add.sprite(300, 450, 'textBlockGirl1').setScale(0);
    textBlockBoy1 = this.add.sprite(300, 450, 'textBlockBoy1').setScale(0);

    // var destX = 300;
    // var destBoyX = 900;

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
    
    // console.log(girl1)
    
////////////////////////////////////////////////////////////////////////////////////////////////////
    // // создаем группу для опций выбора
    // var optionsGroup = this.add.group();

    // optionsObjects.forEach(({leftOption, rightOption}) => {
    //     var option = optionsGroup.createMultiple([{ key: leftOption, setXY: { x: 155, y: 730 }, visible: false }, { key: [rightOption], setXY: {x: 455, y: 730}, visible: false }] );
    //     console.log(leftOption, rightOption)
    // });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // optionsGroup.toggleVisible()
    // Phaser.Actions.SetXY(optionsGroup.getChildren()[0], 155, 730);
    // console.log(optionsGroup.getChildren()[0], optionsGroup.getChildren()[1]);
}





// function onTweens ( targets, delay, duration,  hold, onComplete )
// {
//     var a = `${targets}`;
//     var a = this.tweens.add({
//         targets: targets,
//         delay: delay,
//         duration: duration,
//         hold: hold,
//         yoyo: false,
//         // repeat: 8,
//         ease: 'Linear',
//         scaleX: 1,
//          scaleY: 1,
//         onComplete: onComplete,
//         onCompleteParams: [ targets ]
//      });
// }


function onCompleteHandler1 (targets, delay, duration,  hold)
{

    this.tweens.add({
         targets: targets,
         delay: delay,
         duration: duration,
        hold: hold,
        yoyo: false,
        // repeat: 8,
        ease: 'Linear',
        scaleX: 0,
         scaleY: 0,
        onComplete: onCompleteHandler,
        onCompleteParams: [ targets ]
     });

    // myImage.setScale(0);
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

// // функция добавления опций
// function addOptions() {
//     // создаем группу для опций выбора
//         var optionsGroup = this.add.group();

//         optionsObjects.forEach(({leftOption, rightOption}) => {
//             var option = optionsGroup.createMultiple([
//                 { key: leftOption, setXY: { x: 155, y: 730 }, visible: false, setScale: { x: 0, y: 0 } },
//                 { key: [rightOption], setXY: { x: 455, y: 730 }, visible: false, setScale: { x: 0, y: 0 } }
//             ]);
//         console.log(leftOption, rightOption)
//         });

//     const left = optionsGroup.getChildren()[0];
//         left.visible = true;
    
//     const right = optionsGroup.getChildren()[1];
//     right.visible = true;
    
//     const tweenLeft = this.tweens.add({
//         targets: left,
//         duration: 300,
//         hold: 700,
//         yoyo: false,
//         ease: 'Linear',
//         scaleX: 0.5,
//         scaleY: 0.5,
//         // onComplete: onCompleteHandler,
//         // onCompleteParams: [ textBlockBoy1 ]
//     });
        
//     const tweenRight = this.tweens.add({
//         targets: right,
//         delay: 200,
//         duration: 300,
//         hold: 700,
//         yoyo: false,
//         ease: 'Linear',
//         scaleX: 0.5,
//         scaleY: 0.5,
//         // onComplete: onCompleteHandler,
//         // onCompleteParams: [ textBlockBoy1 ]
//     });

// }

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

/////////////////////////////////////////////// ВАЖНО!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var dress1 = option[0];
            // var dress1 = optionsGroup.getChildren()[0];
            

        // // dress11._eventsCount = 0
        // // console.log('dress11', dress11._eventsCount);
        // console.log('dress11', dress1.listeners('pointerover'));

        // dress1.visible = true;


            //                 option.forEach(element => {
            //                     console.log('element', element);
            //                     element.addListener('pointerover', (event) => {
            //                         console.log('thisssssssssssssssssssss', this );
                                    
            //                         // this.setTint(0xff00);
            //                         // this.setScale(0.55);
            //                         //  this.setShadow();
            //                     });
            //                     console.log('listeners', element.listeners('pointerover'))
            // //////////////////////////////////////////////////////////////////////
            //                     // element.on('pointerout', (event) => {

            //                     //     // this.clearTint();
            //                     //     this.setScale(0.5);

            //                     // }, this);

            //                 // console.log('element', element.emit('pointerover'));

                                
            //                 });

                    

            //     option.on('pointerover', function (event) {

            //     this.setTint(0xff00);
            //     this.setScale(0.55);
            //     //  this.setShadow();
            // });
        
        
        
        /////////////////////////////////////////////////////////////////////////////////////////////
        // // dress1 = optionsGroup.getChildren()[0].visible = true;
        // var dress1 = optionsGroup.getChildren()[0];
        // var dress1 = option[0];

        // // // dress11._eventsCount = 0
        // // // console.log('dress11', dress11._eventsCount);
        // console.log('dress11', dress1);

        // dress1.visible = true;
        // // // dress11.setScale = 0;
        // dress1.on('pointerover', function (event) {
        //     console.log('thisssssssssssssssssssss', this );
        //     this.setTint(0xff00);
        //     this.setScale(0.55);
        //         //  this.setShadow();
        // });
        // console.log('listeners', dress1.listeners('pointerover'))


        // var dress22 = optionsGroup.getChildren()[1];
        // dress22.visible = true;

        // // console.log(dress11.texture.key)

        // var tweenDress11 = this.tweens.add({
        //         targets: dress11,
        //         //  delay: 1000,
        //         duration: 300,
        //         hold: 700,
        //         yoyo: false,
        //         // repeat: 8,
        //         ease: 'Linear',
        //         scaleX: 0.5,
        //         scaleY: 0.5,
        //         // onComplete: onCompleteHandler,
        //         // onCompleteParams: [ textBlockBoy1 ]
        // });
        
        // var tweenDress22 = this.tweens.add({
        //         targets: dress22,
        //         delay: 200,
        //         duration: 300,
        //         hold: 700,
        //         yoyo: false,
        //         // repeat: 8,
        //         ease: 'Linear',
        //         scaleX: 0.5,
        //         scaleY: 0.5,
        //         // onComplete: onCompleteHandler,
        //         // onCompleteParams: [ textBlockBoy1 ]
        //     });


        // dress1 = this.add.sprite(155, 730, 'dress1').setScale(0).setInteractive();
        // console.log('dress1', dress1);
        // dress2 = this.add.sprite(445, 730, 'dress2').setScale(0).setInteractive();
        // console.log('dress2', dress2);

        //////////////////////////////////////////////////////////////// test
        // var d = [dress2, dress2, dress2, dress2]
        //  console.log('ddddddddddddddddddddddddddddddd', d);

        //  d.forEach(element => {
        //     // console.log(element)
        //     // element.shutdown();
        //     // console.log('listegggggggggggggners', element.listeners('pointerover'))
        //     element.on('pointerover', (event) => {
        //             console.log('thisssssssssssssssssssss', event );
        //             // this.setTint(0xff00);
        //             // this.setScale(0.55);
        //             //  this.setShadow();
        //     });
        //     console.log('listddddddddddddddddddddddddddddddddddddddddddeners', element.listeners('pointerover'))
        // })

        // // onTweens(dress1, 0, 500)
        //  console.log('tweenDreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeess1', this)
        // var tweenDress1 = this.tweens.add({
        //     targets: dress1,
        //     //  delay: 1000,
        //     duration: 300,
        //     hold: 700,
        //     yoyo: false,
        //     // repeat: 8,
        //     ease: 'Linear',
        //     scaleX: 0.5,
        //     scaleY: 0.5,
        //     // onComplete: onCompleteHandler,
        //     // onCompleteParams: [ textBlockBoy1 ]
        //  });
        
        // var tweenDress2 = this.tweens.add({
        //     targets: dress2,
        //      delay: 200,
        //     duration: 300,
        //     hold: 700,
        //     yoyo: false,
        //     // repeat: 8,
        //     ease: 'Linear',
        //     scaleX: 0.5,
        //     scaleY: 0.5,
        //     // onComplete: onCompleteHandler,
        //     // onCompleteParams: [ textBlockBoy1 ]
        // });
        

        // dress1.on('pointerover', function (event) {

        //     this.setTint(0xff00);
        //     this.setScale(0.55);
        //     //  this.setShadow();
        // });

        // dress1.on('pointerout', function (event) {

        //     this.clearTint();
        //     this.setScale(0.5);

        // });
            
        // dress2.on('pointerover', function (event) {

        //                 console.log('thisssssssssssssssssssss222222222222222222222', this );

        //     this.setTint(0xff00);
        //     this.setScale(0.55);
        //         //  this.setShadow();
        // });

        // dress2.on('pointerout', function (event) {

        //     this.clearTint();
        //     this.setScale(0.5);

        // });
        
        // console.log('listeners dress2', dress2.listeners('pointerover'))
        
        // dress1.addListener('pointerup', () => {
        //     console.log('jjjjjjjjjjjjjjjjjjjjj')
        //     girl2.setScale(0)
        //     this.add.sprite(300, 500, 'girl1-dress');

        // })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //     var dress1 = optionsGroup.getChildren()[0];
    //     dress1.addListener('pointerup', () => onOptionClick(girl2, 'girl1-dress', dress1, dress2, 'bag1', 'bag2'));
    //     dress2.addListener('pointerup', () => onOptionClick(girl2, 'girl1-suit', dress1, dress2, 'bag1', 'bag2'));

    //     // Обработка клика по опции выбора элемента
    //     const onOptionClick = (prev, next, prevtOPtion1, prevtOPtion2, nextOPtion1, nextOPtion2) => {
    //     console.log('jjjjjjjjjjjjjjjjjjjjj');

    //     // скрываем изображение предыдущего персонажа
    //     prev.setScale(0)
    //     // prev.disableBody((true, true))

    //     // скрываем изображение предыдущих опций
    //     prevtOPtion1.setScale(0);
    //     prevtOPtion2.setScale(0);

    //     //создаем обновленного персонажа
    //     this.add.image(300, 500, `${next}`);

    //     //создаем новый набор опций
    //     var optionLeft = this.add.sprite(155, 730, nextOPtion1).setScale(1).setInteractive();
    //     var optionRight = this.add.sprite(445, 730, nextOPtion2).setScale(1).setInteractive();

    //     //анимация появления для опций
    //     // var optionLeftTweens = this.tweens.add({
    //     //     targets: nextOPtion1,
    //     //     //  delay: 1000,
    //     //     duration: 300,
    //     //     hold: 700,
    //     //     yoyo: false,
    //     //     // repeat: 8,
    //     //     ease: 'Linear',
    //     //     scaleX: 1,
    //     //     scaleY: 1,
    //     //     // onComplete: onCompleteHandler,
    //     //     // onCompleteParams: [ textBlockBoy1 ]
    //     //  });
        
       

    //     // this.add.sprite(300, 500, `${nextOPtion1}`);
    //     // this.add.sprite(300, 500, `${nextOPtion2}`);

    //     optionLeft.on('pointerover', function (event) {
    //         this.setTint(0xff00);
    //         this.setScale(1.05);
    //     //  this.setShadow();
    //     });

    //     optionLeft.on('pointerout', function (event) {
    //         this.clearTint();
    //         this.setScale(1);
    //     });
        
    //     optionRight.on('pointerover', function (event) {
    //         this.setTint(0xff00);
    //         this.setScale(1.05);
    //         //  this.setShadow();
    //     });

    //     optionRight.on('pointerout', function (event) {
    //         this.clearTint();
    //         this.setScale(1);
    //     });
    // }
    /////////////////

    // Обработка клика по опции выбора элемента
        // const onOptionClick = (prev, next, prevtOPtion1, prevtOPtion2, nextOPtion1, nextOPtion2) => {
        //     console.log('jjjjjjjjjjjjjjjjjjjjj');

        //     // скрываем изображение предыдущего персонажа
        //     prev.setScale(0)
        //     // prev.disableBody((true, true))

        //     // скрываем изображение предыдущих опций
        //     prevtOPtion1.setScale(0);
        //     prevtOPtion2.setScale(0);

        //     //создаем обновленного персонажа
        //     this.add.image(300, 500, `${next}`);

        //     //создаем новый набор опций
        //     var optionLeft = this.add.sprite(155, 730, nextOPtion1).setScale(1).setInteractive();
        //     var optionRight = this.add.sprite(445, 730, nextOPtion2).setScale(1).setInteractive();
        // }
        /////////////////////////////////////////////
        // if (selectOption === 'dress') {
            //     // // console.log("dress");

            //     // // let keyObj = 'girl1';

                
            //     // // keyObj = 'girl1'.concat(`-${selectOption}`);
            //     // keyObj = person.concat(`-${selectOption}`);
            //     // console.log(keyObj);

            //     // // var fffff = keyObj.concat(`-${selectOption}`);
            //     // // person = `-${selectOption}`
            //     // // console.log(person);

            //     // if (!prev.includes('girl')) {
            //     //     keyObj = 'girl' + prev + `-${selectOption}`;
            //     // console.log(keyObj);

            //     // }
            //     // if (prev.includes('girl')) {
            //     //     keyObj = prev + `-${selectOption}`;
            //     // console.log(keyObj);

            //     f (!prev.includes('girl')) {
                    
            //     console.log(keyObj);

            //     }
            //     if (prev.includes('girl')) {
                   
            //     console.log(keyObj);


            //     }
            //     // var text = person + prev + `-${selectOption}`;
            //     // prev = text;
            //     // console.log(prev);

            //     // var keyObj
            //     // console.log(keyObj);


            //     girl2 = this.add.sprite(300, 500, keyObj).setScale(1);
            //     this.tweens.add({
            //         targets: girl2,
            //         //  delay: 1000,
            //         duration: 300,
            //         hold: 700,
            //         yoyo: false,
            //         ease: 'Linear',
            //         scaleX: 1,
            //         scaleY: 1,
            //         // onComplete: onCompleteHandler,
            //         // onCompleteParams: [ textBlockBoy1 ]
            //     });

            //     // playObjects.find(element => {
            //     //     if (element.key === keyObj) {
            //     //         this.add.sprite(300, 500, keyObj).setScale(1);
            //     //     }
            //     // })

            //     // filter = playObjects.filter(element => element.dress === true)
            //     // console.log(filter);

            //     // // let keyObj = `girl1-${selectOption}`;
                
            //     // find = filter.find(element => {
            //     //     if (element.key === keyObj) {
            //     //         this.add.sprite(300, 500, 'girl2').setScale(1.2);
            //     //     }
            //     // })
            //     // console.log(find)
            //     // girl2 = this.add.sprite(300, 500, 'girl2').setScale(1.2);
            // }

            

            // girl2 = this.add.sprite(300, 500, 'girl2').setScale(1.2);
        // var tweenGirl2 = this.tweens.add({
        //     targets: girl2,
        //     //  delay: 1000,
        //     duration: 300,
        //     hold: 700,
        //     yoyo: false,
        //     ease: 'Linear',
        //     scaleX: 1,
        //     scaleY: 1,
        //     // onComplete: onCompleteHandler,
        //     // onCompleteParams: [ textBlockBoy1 ]
        // });
            
            
            // показываем следующий набор опций для выбора
            // left.visible = false;
            // right.visible = false;

            // console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", b)
            // if (b && b.includes('suit-bag')) {
            //     console.log("777777777777777777777777777777777777777")
            //     leftIndex += 4;
            //     rightIndef += 4;
            // } else {
            //     leftIndex += 2;
            //     rightIndef += 2;
            // }
            
            // // leftIndex += 2;
            // // rightIndef += 2;

            // // if (rightIndef + 2 >= option.length) {
            // if (rightIndef >= option.length) {
            //     console.log('return');
            //     return;
            // } else {
            //     // вызываем следующую группу
            //     left = option[leftIndex];
            //     // console.log("left", left.texture.key);
            //     left.visible = true;
            //     // left.setScale(0);
                
            //     right = option[rightIndef];
            //     right.visible = true;
            //     // right.setScale(0);
            //     // selectOption = left.texture.key;

            //     this.tweens.add({
            //         targets: left,
            //         duration: 300,
            //         hold: 700,
            //         yoyo: false,
            //         ease: 'Linear',
            //         scaleX: 1,
            //         scaleY: 1,
            //         // onComplete: onCompleteHandler,
            //         // onCompleteParams: [ textBlockBoy1 ]
            //     });
                    
            //     this.tweens.add({
            //         targets: right,
            //         delay: 200,
            //         duration: 300,
            //         hold: 700,
            //         yoyo: false,
            //         ease: 'Linear',
            //         scaleX: 1,
            //         scaleY: 1,
            //         // onComplete: onCompleteHandler,
            //         // onCompleteParams: [ textBlockBoy1 ]
            //     });
            // }

            /////////////////////////////////////////////////// ВАЖНО ////////////////////////////////////////////////////
            // массив игровых обьектов
// const playObjects = [
//     {
//         key: 'girl1-dress',
//         dress: true,
//         suit: false,
//         bag1: false,
//         bag2: false,
//         glasses: false,
//         necklace1: false,
//         necklace2: false,
//     },
//     {
//         key: 'girl1-dress-bag1',
//         dress: true,
//         suit: false,
//         bag1: true,
//         bag2: false,
//         glasses: false,
//         necklace1: false,
//         necklace2: false,
//     },
//     {
//         key: 'girl1-dress-bag1-glasses',
//         dress: true,
//         suit: false,
//         bag1: true,
//         bag2: false,
//         glasses: true,
//         necklace1: false,
//         necklace2: false,
//     },
//     {
//         key: 'girl1-dress-bag1-necklace',
//         dress: true,
//         suit: false,
//         bag1: true,
//         bag2: false,
//         glasses: false,
//         necklace1: true,
//         necklace2: false,
//     },
//     {
//         key: 'girl1-dress-bag2',
//         dress: true,
//         suit: false,
//         bag1: false,
//         bag2: true,
//         glasses: false,
//         necklace1: false,
//         necklace2: false,
//     },
//     {
//         key: 'girl1-dress-bag2-glasses',
//         dress: true,
//         suit: false,
//         bag1: false,
//         bag2: true,
//         glasses: true,
//         necklace1: false,
//         necklace2: false,
//     },
//     {
//         key: 'girl1-dress-bag2-necklace',
//         dress: true,
//         suit: false,
//         bag1: false,
//         bag2: true,
//         glasses: false,
//         necklace1: true,
//         necklace2: false,
//     },
//     {
//         key: 'girl1-suit',
//         dress: false,
//         suit: true,
//         bag1: false,
//         bag2: false,
//         glasses: false,
//         necklace1: false,
//         necklace2: false,
//     },
//     {
//         key: 'girl1-suit-bag1',
//         dress: false,
//         suit: true,
//         bag1: true,
//         bag2: false,
//         glasses: false,
//         necklace1: false,
//         necklace2: false,
//     },
//     {
//         key: 'girl1-suit-bag1-necklase',
//         dress: false,
//         suit: true,
//         bag1: true,
//         bag2: false,
//         glasses: false,
//         necklace1: false,
//         necklace2: true,
//     },
//     {
//         key: 'girl1-suit-bag1-glasses',
//         dress: false,
//         suit: true,
//         bag1: true,
//         bag2: false,
//         glasses: true,
//         necklace1: false,
//         necklace2: false,
//     },
//     {
//         key: 'girl1-suit-bag2',
//         dress: false,
//         suit: true,
//         bag1: false,
//         bag2: true,
//         glasses: false,
//         necklace1: false,
//         necklace2: false,
//     },
//     {
//         key: 'girl1-suit-bag2-glasses',
//         dress: false,
//         suit: true,
//         bag1: false,
//         bag2: true,
//         glasses: true,
//         necklace1: false,
//         necklace2: false,
//     },
//     {
//         key: 'girl1-suit-bag2-necklase',
//         dress: false,
//         suit: true,
//         bag1: false,
//         bag2: true,
//         glasses: false,
//         necklace1: false,
//         necklace2: true,
//     },
// ];
