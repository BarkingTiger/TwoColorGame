title = "TWO COLOR";

description = ` 
`;

characters = [];

    
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
  let player;
  let c;
  let state;


function update() {
  if (!ticks) {

    state = 1;
    c = "blue";
    player = {
        pos: vec(G.WIDTH / 2, 3 * G.HEIGHT / 4)
    };
    enemy = times(10, () => {
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
  }
  
  enemy.forEach((e) => {
    e.pos.y += e.speed;
    e.pos.wrap(0, G.WIDTH, 0, G.HEIGHT);
    color("red");
    box(e.pos, 1);
  });
    
  if (ticks == 180) {
      remove(enemy, (e) => {
          return true;
      })
      ticks = 0;
  }

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
