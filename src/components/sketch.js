function sketch(p) {


    var canvasDiv = document.getElementById('test');
    var width = canvasDiv.offsetWidth;
    var height = canvasDiv.offsetHeight;
    console.log(width,height);



    p.setup = function () {
        p.createCanvas(width,height );
        p.background(0);
        p.button = p.createButton("gomme");
        p.button.size(50,30);
        p.button.position(200,10);
        p.button.mouseClicked(p.gomme);
      
        p.button1 = p.createButton("save");
        p.button1.size(50,30);
        p.button1.position(260,10);
        p.button1.mouseClicked(p.exporter);
      
      
      
    
    };


    p.exporter = function () {
        p.save("myImage.jpg")
    }
    
    p.gomme = function () {
        p.c = "white";
    }

    p.draw = function() {
        //console.log(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY)
    
    
        if (p.mouseIsPressed) {
            p.stroke(p.c);
              p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        }
      
        p.noStroke();
        //draw the first button
        p.fill("red");
        p.ellipse(20, 20, 40, 40);
      
        //draw the second button
        p.fill("blue");
        p.ellipse(60, 20, 40, 40);
    
    //draw the  second button
    p.fill("yellow");
    p.ellipse(100, 20, 40, 40);
    
        //draw the  second button
        p.fill("green");
        p.ellipse(140, 20, 40, 40);
      }
      
      //this will run whenever the mouse is pressed
      p.mousePressed = function() {
        if (p.mouseX > 0 && p.mouseX < 40 && p.mouseY > 0 && p.mouseY < 40) {
          //set the variables to random values
          p.c = "red";
        }
        if (p.mouseX > 40 && p.mouseX < 80 && p.mouseY > 0 && p.mouseY < 40) {
          //set the variables to random values
          p.c = "blue";
        }
        if (p.mouseX > 80 && p.mouseX < 120 && p.mouseY > 0 && p.mouseY < 40) {
            //set the variables to random values
            p.c = "yellow";
          }
          if (p.mouseX > 120 && p.mouseX < 160 && p.mouseY > 0 && p.mouseY < 40) {
            //set the variables to random values
            p.c = "green";
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






