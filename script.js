let bgColor;
const space = 9;
var character = [];
let inputText = "";
let startTime;
let duration;
let bgImage;

// Function to handle when the screen size changes
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    clear();
    character = [];
    setup();
}

// Preload the background image
function preload() {
    // Please replace 'programmer_bg.jpg' with the actual file name and path of your image
    bgImage = loadImage('image.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    console.log(`Width: ${width}, Height ${height}`);

    colorMode(HSB, 360, 100, 100);
    bgColor = color(0);
    background(bgColor);

    // Create a new instance of binary characters
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

    // Create an input box
    let input =  createElement('textarea');
    let inputX = width / 4 - (width / 4 - 20)/2; 
    let inputY = height / 2 - ((height - 40) / 2) / 2;
    input.position(inputX, inputY);
    // Reduce the height of the input box by half
    input.size((width / 2 - 40)/2, (height - 40) / 2); 
    // Set the transparency of the input box
    // input.style('opacity', '0.2'); 
    
    input.attribute('placeholder', 'code space'); 
    // Center the placeholder text in the input box
    input.style('text-align', 'center'); 
    input.style('background-color', 'rgba(255, 255, 255, 0.3)'); 
    input.style('color', 'rgba(0, 0, 0, 1)');
    input.style('color', 'purple');
    input.style('font-weight', 'bold');
    input.style('font-size', '20px');
    // The input content is not centered, left-aligned
    input.style('text-align', 'left'); 

    input.attribute('wrap', 'soft');
    input.input(handleInput);
}

// Function to handle input events
function handleInput() {
    inputText = this.value();
    duration = inputText.length * 100; 
    startTime = millis(); 
}

function draw() {
    // Draw the background image
    image(bgImage, 0, 0, width, height);
    // Draw the dividing line
    // stroke(255);
    // line(width / 2, 0, width / 2, height);

    // Check if the existence time has been exceeded
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