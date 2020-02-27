
// Global vars
var 


// https://www.youtube.com/watch?v=r1S1aMS2jNc

// 0: white
// 1: black
// 2: spike
// 3: door n white
// 4: door upside-down n black

levels = [

// 0: run with arrow K

{

m:

'00000000000\
00000000000\
00000000000\
00000000000\
00000000000\
00000000030\
11111111111\
11111111111\
11111111111\
11111111111\
11111111111',

s: [1,5],

t: ["RUN WITH ARROW KEYS", 200, 200, "#000"],

},


// 1: jump with up, avoid spikes

{

m:

'00000000000\
00000000000\
00000000000\
00000000000\
00000000000\
00000000030\
11101110111\
11101110111\
11101110111\
11101110111\
11121112111',

s: [1,5],

t: ["PRESS UP TO JUMP", 250, 150, "#000"],

},


// 2: k

{

m:

'00000000000\
00000000000\
00000000000\
00111000000\
00000010000\
00000000100\
00000000001\
11001001111\
11001031111\
11001001111\
11221221111',

s: [1,6],

K: [
  { t: 0,
    k: [3,2],
    f: [[8,9],[9,9]],
    n: [[6,9],[7,9]],
  }
],

t: ["GRAB THE COIN", 250, 50, "#000"],

},

// 3: shift

{

m:

'00000000000\
00000000000\
00000000000\
00000030000\
00000011011\
11000000011\
11110000011\
11111100011\
11111111111\
11111111111\
11111111111',

s: [1,4],

t: ["SOMETIMES ALL YOU NEED TO DO IS SHIFT!", 100, 50, "#fff"],

},


// 4: reversed k and door

{

m:

'00020000000\
00010000000\
40110000001\
10110011001\
00010011001\
00010000001\
00010000001\
00010000001\
00011220001\
10011111111\
11111111111',

s: [1,7],

K: [
  {
    t: 0,
    k: [7,4],
    f: [[3,7],[2,7]],
    n: [[4,7],[5,7]],
  },
],

},


// 5: spiral + 2 K

{

m:

'10000000000\
10011111110\
10100000010\
10100110010\
10101011010\
10101101010\
10100001010\
10011111010\
10000000010\
01111111110\
30000000000',

s: [3,6],

K: [
  {
    t: 0,
    k: [5,4],
    f: [[7,3],[8,3]],
    n: [[6,3],[7,3]],
  },
  {
    t: 0,
    k: [1,6],
    f: [[10,1]],
    n: [[11,1]],
  },
],

},


// 6

{

m:

'00000000000\
00001111111\
00000000101\
11000000101\
11002210011\
11011110011\
11011110001\
11000110001\
10000110011\
10001110111\
13221111111',

s: [1,2],

K: [
  {
    t: 0,
    k: [9,2],
    f: [[1,9],[2,9]],
    n: [[3,9],[4,9]],
  },
],

t: ["PRESS SPACE TO RESTART", 250, 40, "#000"],

},


// 7: 4 K (todo @2:18)

{

m:

'00000101000\
00000101000\
01000101000\
01011110000\
01011110110\
11011110110\
01011110110\
01011100110\
00000111110\
00011100000\
01111100022',

s: [],

K: [],

},


// 8: 3 K (todo @3:08)

{

m:

'00022000000\
10111100111\
10111101100\
00000101111\
00000100000\
10110110000\
10010000001\
10011100011\
10000110011\
11000110011\
12222112111',

s: [],

K: [],

},


// 9: 3 K (todo @4:01)

{

m:

'00000000000\
00000000000\
00000000000\
11101101101\
11101101101\
10000000001\
10000000001\
10111111111\
10111000000\
10000011111\
11000111111',

s: [],

K: [],

},


// 10 (todo @4:40)

{

m:

'02000020000\
01000011000\
01000011000\
01000011000\
01000011000\
01001010000\
01000010020\
01122110010\
01111111110\
01100000000\
01110000000',

s: [],

K: [],

},


// 11: 3 K (todo @4:55)

{

m:

'00000000000\
11111100000\
00000001000\
00000000001\
11111011111\
00001000011\
00000000011\
00000011011\
00001011011\
00001111111\
00011111111',

s: [],

K: [],

},


// 12: spikes (todo @5:33)

{

m:

'00100010001\
10110011001\
10110011001\
10110011001\
10110011001\
10110011001\
10110011001\
10110011001\
10110011001\
00110011001\
01110111011',

s: [],

K: [],

spikes: 1,

},


// 13: trophy (todo @6:21)

{

m:

'00000000000\
00000000000\
00000000000\
00000000000\
00000000000\
00000000000\
11110000011\
11110000011\
11110000011\
11110000011\
11110000011',

s: [],

K: [],

spikes: 1

},

],

cellsize = 64,
gridsize = 11,
w = .6,
h = .8,
speed_x = 0.17,
gravity = .045,
jump = -.32,
vymax = 1,
heroscale = 1,
padding = speed_x + 0.01,
c = A.getContext`2d`,
canjumpagain = 0,
currentlevel = 0,
shiftframe = 0,
deadframe = 0,
wonframe = 0,
grounded = 0,
shifted = 0,

// Get cell value at x:y
get = (x, y) => {
  X = ~~x;
  Y = ~~y;
  return +(m[Y * gridsize + X]);
},

// Check if cell at x:y is solid
isSolid = (x,y) => {
  if(get(x,y) == 1 || get(x,y) == 4) return 1;
  if(levels[currentlevel].K){
    for(i of levels[currentlevel].K){
      for(j of i[i.t?"n":"f"]){
        if(!shifted){
          if(~~x == j[0] && ~~y == j[1]){
           return 1;
          }
        }
        else {
          if(~~x == 10 - j[0] && ~~y == 10 - j[1]){
           return 1;
          }
        }
      }
    }
  }
},

// Check if cell at x:y is shiftable
isShiftable = (x,y) => {
  if(get(x,y) == 1 || get(x,y) == 4) return 1;
},

// Load a level
load = n => {
  x = levels[n].s[0] + .3;
  y = levels[n].s[1];
  vx = 0;
  vy = 0;
  grounded = 0;
  shifted = 0;
  heroscale = 1;
  m = levels[n].m;
  A.style.transform = "";
  if(levels[n].K){
    for(i of levels[n].K){
      i.t = 0;
    }
  }
},

// Keys pressed
_ = s = u = d = l = r = 0;

load(currentlevel);

// Game loop
setInterval(() => {

  // Reset
  A.width ^= 0;
  
  c.save();
  if(shiftframe && shiftframe < 9){
    A.style.transform = `rotate(${(10 - shiftframe) / 20}turn)`;
    if(shiftframe == 1){
      m=m.split("").reverse().join("").replace(/0/g, 9).replace(/1/g, 0).replace(/9/g,1).replace(/3/g, 9).replace(/4/g, 3).replace(/9/g, 4);
      A.style.transform = "";
      x = 10 - x + .3;
      y = 10 - y;
      shifted = 1 - shifted;
      heroscale = 1;
    }
  }
  
  // Draw m
  if(wonframe > 10 || !wonframe){
    for(i = 0; i < gridsize; i++){
      for(j = 0; j < gridsize; j++){
        a = (m[j * gridsize + i]);
        
        // Black cell
        if((!shifted && a == 1) || (shifted && a == 0)){
          c.fillRect(i*cellsize,j*cellsize,cellsize,cellsize);
        }
        
        // Spike when not shifted
        else if(a == 2){
          c.moveTo(i*cellsize, j*cellsize + (shifted ? 0 : cellsize));
          c.lineTo(i*cellsize + cellsize/4, j*cellsize + (shifted ? cellsize : 0));
          c.lineTo(i*cellsize + cellsize/2, j*cellsize + (shifted ? 0 : cellsize));
          c.lineTo(i*cellsize + cellsize/4*3, j*cellsize + (shifted ? cellsize : 0));
          c.lineTo(i*cellsize + cellsize, j*cellsize + (shifted ? 0 : cellsize));
          c.fill();
        }
        
        // Door n white cell
        else if((!shifted && a == 3) || (shifted && a == 4)){
        
          // Door
          c.fillStyle="#888";
          c.fillRect(i*cellsize + 10, j*cellsize + (shifted ? 0 : 10), 44, 54);
          
          // Handle
          c.fillStyle = "#000";
          c.fillRect(i*cellsize + 42, j*cellsize + (shifted ? 27 : 37), 7, 4);
        }
        
        // Door n black cell
        else if((!shifted && a == 4)||(shifted && a == 3)){
          
          // Black cell
          c.fillRect(i*cellsize, j*cellsize, cellsize, cellsize);
          
          // Door
          c.fillStyle="#888";
          c.fillRect(i*cellsize + 10, j*cellsize + (shifted ? 10 : 0), 44, 54);
          
          // Handle
          c.fillStyle = "#000";
          c.fillRect(i*cellsize + 42, j*cellsize + 27, 7, 4);
        }
      }
    }
    
    // Draw K and platforms
    if(levels[currentlevel].K){
      c.fillStyle = "#aaa";
      for(i of levels[currentlevel].K){
      
        // Draw k
        if(!i.t){
          c.beginPath();
          if(shifted){
            c.arc((10 - i.k[0]) * cellsize + cellsize/ 2, (10 - i.k[1]) * cellsize + cellsize / 2, cellsize / 4, 0, 7);
          }
          else {
            c.arc(i.k[0] * cellsize + cellsize / 2, i.k[1] * cellsize + cellsize / 2, cellsize / 4, 0, 7);
          }
          c.fill();
          c.closePath();
            
          // Draw platform mode n
          for(j of i.f){
            if(shifted){
              c.fillRect((10 - j[0]) * cellsize, (10 - j[1]) * cellsize, cellsize, cellsize);
            }
            else {
              c.fillRect(j[0] * cellsize, j[1] *cellsize, cellsize, cellsize);
            }
          }
        }
       
        // Draw platform mode f
        else{
          for(j of i.n){
            if(shifted){
              c.fillRect((10 - j[0]) * cellsize, (10 - j[1]) * cellsize, cellsize, cellsize);
            }
            else {
              c.fillRect(j[0] * cellsize, j[1] * cellsize, cellsize, cellsize);
            }
          }
        }
      }
    }
    
    // Text
    if(levels[currentlevel].t){
      c.font = '20px "Comic Sans MS",cursive';
      c.fillStyle = levels[currentlevel].t[3];
      c.save();
      if(levels[currentlevel].t[3] == "#fff" ^ shifted){
        c.translate(350, 350);
        c.rotate(3.14);
        c.translate(-350, -350);
      }
      c.fillText(levels[currentlevel].t[0], levels[currentlevel].t[1],levels[currentlevel].t[2]);
      c.restore();
    }
  }
  
  // Press shift
  if(s){
    if(shiftframe == 0 && isShiftable(x, y + h) && isShiftable(x + w - .1, y + h)){
      shiftframe = 20;
    }
  }
  
  // Won  
  else if(wonframe){
    wonframe--;
    if(wonframe == 1){
      load(++currentlevel);
    }
  }
  
  // Dead
  else if(deadframe){
    deadframe--;
    if(deadframe == 1){
      load(currentlevel);
    }
  }
  
  else {
    
    // Apply speed to position
    if(r && !shiftframe){
      vx = speed_x;
    }
    
    else if(l && !shiftframe){
      vx =- speed_x;
    }
    
    else{
      vx = 0;
    }
    
    // Jump
    if(u && grounded && canjumpagain){
      canjumpagain = 1 - canjumpagain;
      vy = jump;
    }
    
    // Fall
    if(1 - grounded){
      vy += gravity;
      vy = Math.min(vy, vymax);
    }
    y += vy;
    x += vx;
    
    // Check collisions:
    // - Hit screen: left, right, down or up
    // - Hit Box when going left, right, down or up

    // Hit screen bottom
    if(y + h > gridsize){
      //console.log("hit screen bottom");
      y = gridsize - h;
      vy = 0;
    }
    
    // Hit screen ceiling
    if(y < 0){
      //console.log("hit screen ceiling");
      y = 0;
      vy = 0;
    }
    
    // Hit screen left
    if(x < 0){
      //console.log("hit screen left");
      x = 0;
    }
    
    // Hit screen right
    if(x + w > gridsize){
      //console.log("hit screen right");
      x = gridsize - w;
    }
    
    // Hit box up
    if((isSolid(x, y) && isSolid(x + padding, y)) || (isSolid(x + w, y) && isSolid(x + w - padding, y))){
      //console.log("hit box up");
      vy = 0;
      y = Math.ceil(y);
    }

    // Hit box down
    if((vy >= 0) && ((isSolid(x, y + h) && isSolid(x + padding, y + h)) || (isSolid(x + w, y + h) && isSolid(x + w - padding, y + h)))){
      //console.log("hit box down");
      vy = 0;
      y = ~~(y + h) - h;
    }

    // Hit box Left
    if((isSolid(x, y) && isSolid(x, y + padding)) || (isSolid(x, y + h) && isSolid(x, y + h - padding))){
      //console.log("hit box left");
      x = Math.ceil(x);
    }

    // Hit box right
    if((isSolid(x + w, y) && isSolid(x + w, y + padding)) || (isSolid(x + w, y + h) && isSolid(x + w, y + h - padding))){
     //console.log("hit box right");
      x = ~~(x + w) - w;
    }

    // Check spikes
    if(
      get(x + .3, y + .3) == 2 
      || get(x + .3, y + h - .3) == 2 
      || get(x + w- .3, y + .3) == 2 
      || get(x + w - .3, y + h - .3) == 2
    ){
      deadframe = 20;
    }
    
    // Test grounded
    if(
      y == gridsize - h 
      || (isSolid(x, y + h) && isSolid(x + padding, y + h))
      || (isSolid(x + w - padding, y + h) && isSolid(x + w, y + h))
    ){
      grounded = 1;
    }
    
    else{
      grounded = 0;
    }   
    
    // Test door
    if(grounded && get(x, y) == 3 && get(x + w, y) == 3){
      wonframe = 30;
    }
    
    // Grab key
    if(levels[currentlevel].K){
      for(i of levels[currentlevel].K){
        if(!shifted){
          if(
            !i.t
            && ~~x >= i.k[0]
            && ~~x < i.k[0] + 1
            && ~~y >= i.k[1]
            && ~~y < i.k[1] + 1
          ){
            i.t = 1;
          }
        }
        else {
          if(
            !i.t
            && ~~x >= 10 - i.k[0]
            && ~~x < 10 - i.k[0] + 1
            && ~~y >= 10 - i.k[1]
            && ~~y < 10 - i.k[1] + 1
          ){
            i.t = 1;
          }
        }
      }
    }
  }
    
  // Draw hero
  c.fillStyle = wonframe ? "#2B3" : deadframe ? "#b11" : "#468";
  c.save();
  c.translate(x * cellsize + w * cellsize / 2, y * cellsize + h * cellsize);
  c.scale(1, heroscale);
  c.fillRect(-w * cellsize / 2, 0, w * cellsize, -h * cellsize);
  c.restore();

  // Shift animation
  if(shiftframe) {
    shiftframe--;
    if(shiftframe > 9){
      heroscale = -((15 - shiftframe) / 5);
    }
  }
  
  // Won transition
  if((wonframe && wonframe < 9) || (deadframe && deadframe < 9)){
    c.fillStyle = "#000";
    c.fillRect(0, 0, 704, 704);
  }
  
  askshift = 0;
}, 33);

// Keyboard input
onkeydown = onkeyup = z => {
  top['lurdl*d*l*ur*u*_***s'[(z.which + 3) % 20]] = z.type[3] < 'u';
  if(!u) canjumpagain = 1; // prevent jumping again while up is not released
  if(_) load(currentlevel); // reset with space
}