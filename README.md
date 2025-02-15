

[https://xxzxcvd.github.io/creative-work-Code-Space/](https://xxzxcvd.github.io/creative-work-Code-Space/)

# Code Space 
# Content of the Work
  


"Code Space" is a creative interactive digital art work. The screen shows a programmer working attentively typing code. There is a text input box called "code space" on the left, and binary code rain is falling on the right. When the user enters the code content in the input box on the left, the code rain on the right will be triggered or change accordingly according to the input content, creating a unique experience of interacting with the code for the user, as if they are in a digital space full of technology.

# Artistic Quality of the Works
  


From an artistic perspective, "Code Space" cleverly presents the abstract concept of code in a visual and dynamic form. The design of the code rain not only has a strong visual impact, but also symbolizes the flow of the underlying language of the digital world. Through the interactive mechanism, it breaks the traditional boundaries between the audience and the work, allowing the audience to actively participate in the "creation" of the work, enhancing the audience's immersion and sense of participation. In addition, the overall dark and technological color matching, as well as the delicate painting of the scene, create a mysterious and futuristic atmosphere, making the work visually very attractive.

# Implementation Technology
## Technology frame
  


The work is mainly developed based on p5.js, a JavaScript library for creative programming. It provides a wealth of functions to handle graphics drawing, user interaction and other operations, making it easy to quickly build an interactive visual interface.



## Interaction Implementation


Use the createInput() function in p5.js to create an input box, and use the input() event to listen to the user's input in the input box. When the user enters code, the program will capture these inputs and trigger relevant changes to the code rain on the right according to the preset logic.

## Graphics drawing
  


Use p5.js drawing functions, such as line() and text(), to draw various elements in the background, including the programmer's work scene, the code on the computer screen, etc. For the code rain effect, create a Binary class to manage the behavior of each binary character, including the character's position, falling speed, color and other properties, and continuously update and draw these characters in the draw() function to achieve a dynamic code rain effect.

# Code 
## Input Processing
  


When the user enters content in the input box, the input() event will be triggered, the text entered by the user will be obtained and stored in a variable. 

```javascript
let inputText = "";
function setup() {
    let input = createInput();
    input.input(handleInput);
}
function handleInput() {
    inputText = this.value();
}
```

## Code Rain Trigger and Change
  


According to the user input, set certain logic to trigger the appearance of code rain or change its state. For example, when it is detected that there is content in the input box, start the animation effect of code rain; or adjust the color, speed and other parameters of code rain according to the specific keywords entered. In the Binary class, methods such as rain(), show(), and update() are defined to control the generation, display and update of code rain characters:

```javascript
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
        // rain code
    }
    show() {
        // show char
    }
    update() {
        // update char postion
    }
}
```







  


