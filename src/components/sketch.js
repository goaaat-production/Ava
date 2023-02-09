function sketch(p) {


    var canvasDiv = document.getElementById('test');
    var width = canvasDiv.offsetWidth;
    var height = canvasDiv.offsetHeight;
    //console.log(width,height);



    p.setup = function () {
        p.createCanvas(width,height );
        p.background('white');
        p.img = p.loadImage('./gomme.png');
      
        p.button1 = p.createButton("save");
        p.button1.size(width/3,width/9);
        p.button1.position(width*0.75,height*0.1);
        p.button1.mouseClicked(p.exporter);
        p.c = "#DC7753";
        p.strokeWeight(10)
      
    
    };
    // p.windowResized = function(){
    //   p.resizeCanvas(width, height,[p.noredraw]);
    // }


    p.exporter = function () {
        p.save("MonPortraitDeTitien-AVA-BACCHANIGHT2023.jpg")
    }
    
    p.draw = function() {
      
        //console.log(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY)
      
        p.image(p.img,width*0.1-20, height-height*0.05-20, 40, 40);
        if (p.mouseIsPressed) {
            p.stroke(p.c);
              p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        }
      
        p.noStroke();
        //draw the first button
        p.fill("#DC7753");
        p.ellipse(width*0.3, height-height*0.05, 40, 40);
      
        //draw the second button
        p.fill("#71A9BB");
        p.ellipse(width*0.5, height-height*0.05, 40, 40);
    
        //draw the  second button
        p.fill("#D9C5AD");
        p.ellipse(width*0.7, height-height*0.05, 40, 40);
    
        //draw the  second button
        p.fill("#AD9669");
        p.ellipse(width*0.9, height-height*0.05, 40, 40);
      }
     
      
      
      //this will run whenever the mouse is pressed
      p.mousePressed = function() {
        if (p.mouseX > width*0.3-20 && p.mouseX < width*0.3+20 && p.mouseY > height-height*0.05 - 20 && p.mouseY < height-height*0.05 + 20) {
          //set the variables to random values
          p.c = "#DC7753";
          p.strokeWeight(10)
        }
        if (p.mouseX > width*0.5-20 && p.mouseX < width*0.5+20 && p.mouseY > height-height*0.05 - 20 && p.mouseY < height-height*0.05 + 20) {
          //set the variables to random values
          p.c = "#71A9BB";
          p.strokeWeight(10)
        }
        if (p.mouseX > width*0.7-20 && p.mouseX < width*0.7+20 && p.mouseY > height-height*0.05 - 20 && p.mouseY < height-height*0.05 + 20) {
            //set the variables to random values
            p.c = "#D9C5AD";
            p.strokeWeight(10)
          }
          if (p.mouseX > width*0.9-20 && p.mouseX < width*0.9+20 && p.mouseY > height-height*0.05 - 20 && p.mouseY < height-height*0.05 + 20) {
            //set the variables to random values
            p.c = "#AD9669";
            p.strokeWeight(10)
          }

          if (p.mouseX > width*0.1-20 && p.mouseX < width*0.1+20 && p.mouseY > height-height*0.05 - 20 && p.mouseY < height-height*0.05 + 20) {
            //set the variables to random values
            p.c = "white";
            p.strokeWeight(40)
          }


      };

};

export default sketch















// setup = function () {
//     createCanvas(window.innerWidth, window.innerHeight);
//     background(255);
//   button = createButton("gomme");
//   button.size(50,30);
// button.position(200,10);
//   button.mouseClicked(gomme);
  
//         button1 = createButton("save");
//   button1.size(50,30);
// button1.position(260,10);
// button1.mouseClicked(exporter);
  
  
  

// };

// exporter = function () {
//   save("myImage.jpg")
// }

// gomme = function () {
//   c = "white";
// }
// draw = function() {
//     //console.log(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY)


//     if (mouseIsPressed) {
//           stroke(c);
//       line(mouseX, mouseY, pmouseX, pmouseY);
//     }
  
//       noStroke();
//     //draw the first button
//     fill("red");
//     ellipse(20, 20, 40, 40);
  
//     //draw the second button
//     fill("blue");
//     ellipse(60, 20, 40, 40);

// //draw the  second button
//     fill("yellow");
//     ellipse(100, 20, 40, 40);

//     //draw the  second button
//     fill("green");
//     ellipse(140, 20, 40, 40);
//   }
  
//   //this will run whenever the mouse is pressed
//   mousePressed = function() {
//     if (mouseX > 0 && mouseX < 40 && mouseY > 0 && mouseY < 40) {
//       //set the variables to random values
//       c = "red";
//     }
//     if (mouseX > 40 && mouseX < 80 && mouseY > 0 && mouseY < 40) {
//       //set the variables to random values
//       c = "blue";
//     }
//     if (mouseX > 80 && mouseX < 120 && mouseY > 0 && mouseY < 40) {
//         //set the variables to random values
//         c = "yellow";
//       }
//       if (mouseX > 120 && mouseX < 160 && mouseY > 0 && mouseY < 40) {
//         //set the variables to random values
//         c = "green";
//       }


//   };






