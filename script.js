let bgColor;
const space = 9;
var character = [];
let inputText = "";
let startTime;
let duration;
let bgImage;

// 当屏幕大小改变时的处理函数
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    clear();
    character = [];
    setup();
}

// 预加载背景图片
function preload() {
    // 请将 'programmer_bg.jpg' 替换为你实际图片的文件名和路径
    bgImage = loadImage('image.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    console.log(`Width: ${width}, Height ${height}`);

    colorMode(HSB, 360, 100, 100);
    bgColor = color(0);
    background(bgColor);

    // 创建新的二进制字符实例
    console.log(width / 2)
    character = new Array(Math.floor(width / 2));
    for (let i = 0; i <= character.length; i++) {
        if (i % space == 0) {
            character[i] = new Binary(i + width / 2);
        }
    }



    let title = createElement('h1', 'code space');
    title.position(width / 4 - (width / 4 - 20)/4, height / 2 - ((height - 40) / 2) / 1.5);
    title.style('color', 'purple');

    // 创建输入框
    let input =  createElement('textarea');
    let inputX = width / 4 - (width / 4 - 20)/2; 
    let inputY = height / 2 - ((height - 40) / 2) / 2;
    input.position(inputX, inputY);
    // 将输入框的高度缩小一半
    input.size((width / 2 - 40)/2, (height - 40) / 2); 
    // 设置输入框的透明度
    // input.style('opacity', '0.2'); 
    
    input.attribute('placeholder', 'code space'); 
    // 设置输入框内占位文本居中
    input.style('text-align', 'center'); 
    input.style('background-color', 'rgba(255, 255, 255, 0.3)'); 
    input.style('color', 'rgba(0, 0, 0, 1)');
    input.style('color', 'purple');
    input.style('font-weight', 'bold');
    input.style('font-size', '20px');
    // 输入内容不居中，左对齐
    input.style('text-align', 'left'); 

    input.attribute('wrap', 'soft');
    input.input(handleInput);
}

// 处理输入事件的函数
function handleInput() {
    inputText = this.value();
    duration = inputText.length * 100; 
    startTime = millis(); 
}

function draw() {
    // 绘制背景图片
    image(bgImage, 0, 0, width, height);
    // 绘制分隔线
    // stroke(255);
    // line(width / 2, 0, width / 2, height);

    // 检查是否超过存在时间
    if (startTime && millis() - startTime < duration) {
        for (let i = 0; i <= character.length; i++) {
            if (i % space == 0) {
                character[i].rain();
            }
        }
    }
}

class Binary {
    constructor(x) {
        this.x = x;
        this.y = random(-900, -800);
        this.fallSpeed = random(0.003 * height, 0.01 * height);
        this.value;
        this.textSize = 14;
        this.stream = new Array(round(random(5, 35)));
        this.color = "Green"; 
    }

    rain() {
        for (let j = 0; j < this.stream.length; j++) {
            if (frameCount % round(random(2, 20)) == 0) {
                this.value = Math.round(random()) === 0 ? '0' : '1';
                this.stream[j] = this.value;
            }
        }
        this.show();
    }

    show() {
        for (let j = 0; j < this.stream.length; j++) {
            if (j == this.stream.length - 1) {
                if (this.color == "Red") {
                    fill(0, 60, 100);
                } else {
                    fill(127, 30, 100);
                }
            } else {
                if (this.color == "Red") {
                    fill(0, 100, map(j, 0, this.stream.length - 1, 0, 100));
                } else {
                    fill(127, 100, map(j, 0, this.stream.length - 1, 0, 70));
                }
            }
            text(`${this.stream[j]}`, this.x, this.y - j * -this.textSize);
        }
        this.update();
    }

    update() {
        this.y += this.fallSpeed;
        if (this.y > height) {
            this.y = random(-900, -800);
        }
    }
}