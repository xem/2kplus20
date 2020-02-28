
// Global vars
var 


// https://www.youtube.com/watch?v=r1S1aMS2jNc

// 0: white
// 1: black
// 2: spike
// 3: door on white
// 4: door upside-down on black

levels = [

// 0: run with arrow keys

{

m:

`00000000000\
00000000000\
00000000000\
00000000000\
00000000000\
00000000030\
11111111111\
11111111111\
11111111111\
11111111111\
11111111111`,

s: [1,5],

t: [`RUN WITH ARROW KEYS`, 200, 200, `#000`],

},


// 1: jump with up, avoid spikes

{

m:

`00000000000\
00000000000\
00000000000\
00000000000\
00000000000\
00000000030\
11101110111\
11101110111\
11101110111\
11101110111\
11121112111`,

s: [1,5],

t: [`PRESS UP TO JUMP`, 250, 150, `#000`],

},


// 2: key

{

m:

`00000000000\
00000000000\
00000000000\
00111000000\
00000010000\
00000000100\
00000000001\
11001001111\
11001031111\
11001001111\
11221221111`,

s: [1,6],

K: [
  {
    k: [3,2],
    f: [[8,9],[9,9]],
    n: [[6,9],[7,9]],
  }
],

t: [`GRAB THE COIN`, 250, 50, `#000`],

},

// 3: shift

{

m:

`00000000000\
00000000000\
00000000000\
00000030000\
00000011011\
11000000011\
11110000011\
11111100011\
11111111111\
11111111111\
11111111111`,

s: [1,4],

t: [`SOMETIMES ALL YOU NEED TO DO IS SHIFT!`, 100, 50, `#fff`],

},


// 4: reversed key and door

{

m:

`00020000000\
00010000000\
40110000001\
10110011001\
00010011001\
00010000001\
00010000001\
00010000001\
00011220001\
10011111111\
11111111111`,

s: [1,7],

K: [
  {
    k: [7,4],
    f: [[3,7],[2,7]],
    n: [[4,7],[5,7]],
  },
],

},


// 5: spiral + 2 keys

{

m:

`10000000000\
10011111110\
10100000010\
10100110010\
10101011010\
10101101010\
10100001010\
10011111010\
10000000010\
01111111110\
30000000000`,

s: [3,6],

K: [
  {
    k: [5,4],
    f: [[7,3],[8,3]],
    n: [[6,3],[7,3]],
  },
  {
    k: [1,5],
    f: [[10,1]],
    n: [],
  },
],

},


// 6

{

m:

`00000000000\
00001111111\
00000000101\
11000000101\
11002210011\
11011110011\
11011110001\
11000110001\
10000110011\
10001110111\
13221111111`,

s: [1,2],

K: [
  {
    k: [9,2],
    f: [[1,9],[2,9]],
    n: [[3,9],[4,9]],
  },
],

t: [`PRESS SPACE TO RESTART`, 200, 40, `#000`],

},


// 7: 4 keys

{

m:

`00000101000\
01000101000\
01000101000\
01011110000\
01011110110\
11011110110\
01011110110\
01011100110\
00000111110\
00011110000\
01111130022`,

s: [0,4],

K: [
  {
    k: [0,1],
    f: [[5,3],[5,4]],
    n: [[5,1],[5,2]]
  },
  {
    k: [6,3],
    f: [[6,4],[7,4]],
    n: [[4,4],[5,4]]
  },
  {
    k: [7,5],
    f: [[1,8],[1,9]],
    n: [[1,6],[1,7]]
  },
  {
    k: [0, 9],
    f: [],
    n: [[10,10],[9,10]]
  }
  

],

},


// 8: 3 keys (todo @3:08)

{

m:

`00022000000\
00111100111\
40111101100\
00000101111\
00000100000\
10110110000\
10010000001\
10011100011\
11000100011\
11000110011\
12222112111`,

s: [0,4],

K: [
  {
    k: [9,7],
    f: [[4,9],[5,9]],
    n: [[2,9],[3,9]]
  },
  { 
    k: [3,8],
    f:[[9,5],[10,5]],
    n: [[7,5],[8,5]]
  },
  {
    k: [10,2],
    f: [[3,1],[3,2]],
    n: [[3,3],[3,4]]
  } 
],

},


// 9: 3 keys

{

m:

`00000000000\
00000000000\
00000000000\
11101101101\
11000000001\
11000000001\
11011111111\
11041100000\
11000000000\
11100011111\
11101111111`,

s: [4,5],

K: [
  {
    k: [1,3],
    f: [[2,6],[1,6]],
    n: [[0,6]]
  },
  {
    k: [10,10],
    f: [[1,9],[2,9]],
    n: [[0,9]]
  },
  {
    k: [0,7],
    f: [[4,6],[5,6]],
    n: [[2,6],[3,6]],
  }
],

},


// 10

{

m:

`02000020000\
01000011000\
01000011000\
01000011000\
01000011000\
01001010000\
01300010020\
01122110010\
01111111110\
01100000000\
01110000000`,

s: [7,7],

},


// 11: 3 keys

{

m:

`30000000000\
11111100000\
00000001000\
00000000001\
11111011111\
00001000011\
00000000011\
00000011011\
00001011011\
00001111111\
00011111111`,

s: [],

K: [],

},


// 12: spikes (todo @5:33)

{

m:

`00100010001\
10110011001\
10110011001\
10110011001\
10110011001\
10110011001\
10110011001\
10110011001\
10110011001\
00110011001\
01110111011`,

s: [],

K: [],

//spikes: 1,

},


// 13: trophy (todo @6:21)

{

m:

`00000000000\
00000000000\
00000000000\
00000000000\
00000000000\
00000000000\
11110000011\
11110000011\
11110000011\
11110000011\
11110000011`,

s: [],

K: [],

//spikes: 1

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
currentlevel = 0,
canjumpagain,
shiftframe,
askshift,
deadframe,
wonframe,
grounded,
shifted,

_, s, u, d, l, r, // Keys pressed

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
      for(j of i[i.t?`n`:`f`]){
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
  M = levels[n].m;
  m = M.split``;
  A.style.transform = ``;
  if(levels[n].K){
    for(i of levels[n].K){
      i.t = 0;
    }
  }
};

load(currentlevel);

// Game loop
setInterval(() => {
  
  //console.log(s);
  

  // Reset
  A.width ^= 0;
  
  c.save();
  if(shiftframe && shiftframe < 9){
    A.style.transform = `rotate(${(10 - shiftframe) / 20}turn)`;
    if(shiftframe == 1){
      
      // Make an array from the map
      m = M.split``;
      
      if(!shifted){
        m = m.reverse().join``.replace(/0/g, 9).replace(/1/g, 0).replace(/9/g,1).replace(/3/g, 9).replace(/4/g, 3).replace(/9/g, 4).split``;
      }
      A.style.transform = ``;
      x = 10 - x + .3;
      y = 10 - y;
      shifted = 1 - shifted;
      heroscale = 1;
    }
  }
  
  // Draw map
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
        
        // Door on white cell
        else if((!shifted && a == 3) || (shifted && a == 4)){
        
          // Door
          c.fillStyle = `#888`;
          c.fillRect(i*cellsize + 10, j*cellsize + (shifted ? 0 : 10), 44, 54);
          
          // Handle
          c.fillStyle = `#000`;
          c.fillRect(i*cellsize + 42, j*cellsize + (shifted ? 27 : 37), 7, 4);
        }
        
        // Door on black cell
        else if((!shifted && a == 4)||(shifted && a == 3)){
          
          // Black cell
          c.fillRect(i*cellsize, j*cellsize, cellsize, cellsize);
          
          // Door
          c.fillStyle = `#888`;
          c.fillRect(i*cellsize + 10, j*cellsize + (shifted ? 10 : 0), 44, 54);
          
          // Handle
          c.fillStyle = `#000`;
          c.fillRect(i*cellsize + 42, j*cellsize + 27, 7, 4);
        }
      }
    }
    
    // Draw keys and platforms
    if(levels[currentlevel].K){
      c.fillStyle = `#aaa`;
      for(i of levels[currentlevel].K){
      
        // Draw key
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
        }
        
          
        // Draw platform and make the cell behind a "9" to avoid shifting into a platform
        for(j of i[i.t?`n`:`f`]){
          if(shifted){
            c.fillRect((10 - j[0]) * cellsize, (10 - j[1]) * cellsize, cellsize, cellsize);
            m[(10 - j[0])+(10 - j[1]) * gridsize] = 9;
          }
          else {
            //console.log(i);
            c.fillRect(j[0] * cellsize, j[1] * cellsize, cellsize, cellsize);
            m[j[0] + j[1] * gridsize] = 9;
          }
        }
      }
    }
    
    // Text
    if(levels[currentlevel].t){
      c.font = `25px calibri`;
      c.fillStyle = levels[currentlevel].t[3];
      c.save();
      if(levels[currentlevel].t[3] == `#fff` ^ shifted){
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
    if(!shiftframe && isShiftable(x, y + h) && isShiftable(x + w - .1, y + h)){
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
      //console.log(`hit screen bottom`);
      y = gridsize - h;
      vy = 0;
    }
    
    // Hit screen ceiling
    if(y < 0){
      //console.log(`hit screen ceiling`);
      y = 0;
      vy = 0;
    }
    
    // Hit screen left
    if(x < 0){
      //console.log(`hit screen left`);
      x = 0;
    }
    
    // Hit screen right
    if(x + w > gridsize){
      //console.log(`hit screen right`);
      x = gridsize - w;
    }
    
    // Hit box up
    if(isSolid(x + padding, y) || isSolid(x + w - padding, y)){
      //console.log(`hit box up`);
      vy = 0;
      y = Math.ceil(y);
    }

    // Hit box down
    if((vy >= 0) && (isSolid(x + padding, y + h) || isSolid(x + w - padding, y + h))){
      //console.log(`hit box down`);
      vy = 0;
      y = ~~(y + h) - h;
    }

    // Hit box left
    if(isSolid(x, y + padding) || isSolid(x, y + h - padding)){
      //console.log(`hit box left`);
      x = Math.ceil(x);
    }

    // Hit box right
    if(isSolid(x + w, y + padding) || isSolid(x + w, y + h - padding)){
      //console.log(`hit box right`);
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
      || isSolid(x + padding, y + h)
      || isSolid(x + w - padding, y + h)
    ){
      grounded = 1;
    }
    
    else{
      grounded = 0;
    }   
    
    // Test door
    if(grounded && get(x, y) == 3 && get(x + w, y) == 3 && !shiftframe){
      wonframe = 30;
    }
    
    // Grab key
    if(levels[currentlevel].K && !shiftframe){
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
            m = M.split``;
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
            m = M.split``;
            m = m.reverse().join``.replace(/0/g, 9).replace(/1/g, 0).replace(/9/g,1).replace(/3/g, 9).replace(/4/g, 3).replace(/9/g, 4).split``;
          }
        }
      }
    }
  }
    
  // Draw hero
  c.fillStyle = wonframe ? `#2B3` : deadframe ? `#b11` : `#468`;
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
    c.fillStyle = `#000`;
    c.fillRect(0, 0, 704, 704);
  }
  
  askshift = 0;
}, 33);

// Keyboard input
onkeydown = onkeyup = z => {
  top[`lurdl*d*l*ur*u*_***s`[(z.which + 3) % 20]] = z.type[3] < `u`;
  if(!u) canjumpagain = 1; // prevent jumping again while up is not released
  if(_) load(currentlevel); // reset with space
}