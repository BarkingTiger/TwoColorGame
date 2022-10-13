title = "TWO COLOR";

description = ` 
`;

characters = [
`
  rr
  rr
  rr
rrrrrr
 rrrr
  rr
`
];

    
const G = {
	WIDTH: 150,
	HEIGHT: 100
};
    
options = {
    viewSize: {x: G.WIDTH, y: G.HEIGHT},
};
    
/**
* @typedef {{
  * pos: Vector,
  * speed: number
  * }} Enemy
  */
  
  /**
  * @type  { Enemy [] }
  */
  let enemy;
  let enemy2;

  let player;
  let c;
  let state;

  let timedEvent = false;
  let time = 0;
  let start = 0;

function update() {
  if (!ticks) {

    state = 1;
    c = "blue";
    player = {
        pos: vec(G.WIDTH / 2, 3 * G.HEIGHT / 4)
    };
    enemy = times(10, () => {
      const posX = rnd(G.WIDTH/2, G.WIDTH); 
      const posY = rnd(0, G.HEIGHT);
      return {
          pos: vec(posX, posY),
          speed: rnd(0.8, 1.5)
      };
    });
      
    enemy2 = times(10, () => {
      const posX = 0; 
      const posY = rnd(0, G.HEIGHT);
      return {
          pos: vec(posX, posY),
          speed: rnd(0.8, 1.5)
      };
    });
      
    for (let i = 0; i < 10; i++) {
      enemy.push({
          pos: vec(rnd(G.WIDTH * (2/3), G.WIDTH), rnd(0, G.HEIGHT)),
          speed: rnd(0.8, 1.5)
      });
    }
      
    for (let i = 0; i < 10; i++) {
      enemy2.push({
          pos: vec(rnd(0, G.WIDTH * (1/3)), rnd(0, G.HEIGHT)),
          speed: rnd(0.8, 1.5)
      });
    }
  }
  
  enemy.forEach((e) => {
    e.pos.y += e.speed;
    e.pos.wrap(0, G.WIDTH, 0, G.HEIGHT);
    color("red");
    char("a", e.pos);
  });
    
  enemy2.forEach((e) => {
    e.pos.y += e.speed;
    e.pos.wrap(0, G.WIDTH, 0, G.HEIGHT);
    color("blue");
    char("a", e.pos);
  });
    
// timed event
//  if (timedEvent == false) {
//      start = 60;
//      time = start;
//      timedEvent = true;
//  } 
//  if ((timedEvent == true) && (ticks == 60)) {
//      time-=1;
//      enemy.forEach((e) => {
//        color("green");
//        char("a", e.pos);
//      });
//    
//      
//  }

  //color change
  if (input.isJustPressed) {
      if (state == 0) {
          c = "red";
          state = 1;
      }
      else {
          c = "blue";
          state = 0;
      }
  }

  //player
  color(c);
  box(player.pos, 4);

}
