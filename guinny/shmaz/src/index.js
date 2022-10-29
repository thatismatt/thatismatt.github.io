import * as PIXI from 'pixi.js';
// import * as Assets from '@pixi/assets';
import { Assets } from '@pixi/assets';
// PIXI.Assets = Assets;

window.PIXI = PIXI;

let app = new PIXI.Application({ width: 640, height: 360, backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

PIXI.Loader.shared.add("assets/purple-gem.json");

PIXI.Loader.shared.load(() => {
  const gem = new PIXI.AnimatedSprite(
    PIXI.Loader.shared.resources["assets/purple-gem.json"].spritesheet.animations["purple-gem"]);
  gem.x = 450;
  gem.y = 10;
  gem.animationSpeed = 0.5;
  gem.play();
  app.stage.addChild(gem);
});

const title = new PIXI.Text('WELCOME TO SHMAZ');
title.x = 50;
title.y = 50;
app.stage.addChild(title);

const purpleGems = new PIXI.Text("");
purpleGems.x = 500;
purpleGems.y = 20;
app.stage.addChild(purpleGems);

let pgc = 10;

const makeButton = (x, onClick) => {
  const button = PIXI.Sprite.from('assets/husky1.jpg');
  button.x = x;
  button.y = 150;
  button.width = 150;
  button.height = 100;
  button.interactive = true;
  button.on("click", onClick);
  return button;
};

const button1 = makeButton(50,  () => { pgc = pgc - 3; });
const button2 = makeButton(250, () => { pgc = pgc - 5; });
const button3 = makeButton(450, () => { pgc = pgc - 10; });

app.stage.addChild(button1);
app.stage.addChild(button2);
app.stage.addChild(button3);

app.ticker.add((delta) => {
  purpleGems.text = "= " + pgc;
});
